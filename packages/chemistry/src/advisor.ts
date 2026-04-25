import type {
	WaterReadings,
	WaterTargets,
	Problem,
	Solution,
	TargetRange,
	PropertyCode,
	TreatmentEffect,
} from "./types";
import type { Chemical } from "./chemical";
import { explanation } from "./explanations";
import * as C from "./constants/chemicals";
import { DEFAULT_TARGETS } from "./constants/targets";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const WAIT_WINDOW_MS = 72 * 60 * 60 * 1000; // 72 hours

function midpoint(range: TargetRange): number {
	return (range.min + range.max) / 2;
}

function inRange(value: number, range: TargetRange): boolean {
	return value >= range.min && value <= range.max;
}

function nonZeroEffects(effects: TreatmentEffect[]): TreatmentEffect[] {
	return effects.filter((e) => e.value !== 0);
}

function buildSolution(
	chem: Chemical,
	delta: number,
	volumeL: number,
	baseProperty: PropertyCode,
	isRecommended: boolean,
): Solution | null {
	const ep = chem.spec.effectPerUnit[baseProperty];
	if (!ep) return null;
	const { dosage, effects } = chem.compute(delta, volumeL, baseProperty);
	return {
		chemical: chem.meta,
		dosage,
		treatmentEffects: nonZeroEffects(effects),
		isRecommended,
	};
}

function buildSolutions(
	chems: Chemical[],
	delta: number,
	volumeL: number,
	baseProperty: PropertyCode,
	isRecommended: boolean,
): Solution[] {
	const out: Solution[] = [];
	for (const c of chems) {
		const sol = buildSolution(c, delta, volumeL, baseProperty, isRecommended);
		if (sol) out.push(sol);
	}
	return out;
}

function emptyProblem(propertyCode: PropertyCode): Problem {
	return {
		title: "",
		explanation: "",
		action: "NONE",
		propertyCode,
		target: 0,
		idealRange: { min: 0, max: 0 },
		currentReading: 0,
		recommendedSolutions: [],
	};
}

// ---------------------------------------------------------------------------
// FC wait heuristic
// ---------------------------------------------------------------------------

export function shouldWaitForFC(
	max: number,
	currentFC: number,
	currentTime: Date,
	prevFC: number | null,
	prevTime: Date | null,
): boolean {
	const isRecent = (t: Date) => Date.now() - t.getTime() <= WAIT_WINDOW_MS;

	if (currentFC <= max || !isRecent(currentTime)) return false;
	if (prevFC === null || prevTime === null) return true;
	if (prevFC > max && !isRecent(prevTime)) return false;

	return true;
}

// ---------------------------------------------------------------------------
// Evaluators — one per property
// ---------------------------------------------------------------------------

function evaluateFreeChlorine(
	readings: WaterReadings,
	targets: WaterTargets,
	volumeL: number,
	prevReading: WaterReadings | null,
): Problem {
	const prob = emptyProblem("FC");
	const current = readings.fc;
	const range = targets.fc;
	if (current == null || !range) return prob;

	const target = midpoint(range);
	const cc = readings.tc != null ? Math.max(readings.tc - current, 0) : 0;

	prob.currentReading = current;
	prob.target = target;
	prob.idealRange = range;

	if (inRange(current, range) && cc <= 0.2) return prob;

	if (cc > 0.2) {
		const breakpointFC = cc * 10;
		const delta = Math.max(breakpointFC - current, 0);
		prob.title = "High Combined Chlorine Detected — Shock Required";
		prob.action = "INCREASE";
		prob.explanation = explanation.lowFC({ current, delta, min: range.min, max: range.max });
		prob.recommendedSolutions = buildSolutions(
			[C.CalHypo, C.Bleach, C.OxidizingShock],
			delta, volumeL, "FC", true,
		);
		return prob;
	}

	if (current < target) {
		const delta = target - current;
		prob.title = "Low Free Chlorine (FC)";
		prob.action = "INCREASE";
		prob.explanation = explanation.lowFC({ current, delta, min: range.min, max: range.max });
		prob.recommendedSolutions = buildSolutions(
			[C.CalHypo, C.Trichlor, C.Dichlor, C.Bleach],
			delta, volumeL, "FC", true,
		);
		return prob;
	}

	const prevFC = prevReading?.fc ?? null;
	const prevTime = prevReading?.testedAt ?? null;
	if (shouldWaitForFC(range.max, current, readings.testedAt, prevFC, prevTime)) {
		prob.title = "Free Chlorine Is High";
		prob.action = "WAIT";
		prob.explanation = explanation.highFCWait({ current, delta: current - target, min: range.min, max: range.max });
		return prob;
	}

	prob.title = "High Free Chlorine — Dilution Required";
	prob.action = "DILUTE";
	prob.explanation = explanation.highFC({ current, delta: current - target, min: range.min, max: range.max });
	return prob;
}

function makeEvaluator(
	property: PropertyCode,
	key: Lowercase<PropertyCode>,
	opts: {
		lowTitle: string;
		highTitle: string;
		lowChems?: Chemical[];
		highChems?: Chemical[];
		lowExplain: (p: { current: number; delta: number; min: number; max: number }) => string;
		highExplain: (p: { current: number; delta: number; min: number; max: number }) => string;
		highAction?: "DECREASE" | "DILUTE" | "WAIT";
	},
) {
	return (readings: WaterReadings, targets: WaterTargets, volumeL: number): Problem => {
		const prob = emptyProblem(property);
		const current = (readings as unknown as Record<string, number | null | undefined>)[key];
		const range = (targets as Record<string, TargetRange | undefined>)[key];
		if (current == null || !range) return prob;

		const target = midpoint(range);
		prob.currentReading = current;
		prob.target = target;
		prob.idealRange = range;

		if (inRange(current, range)) return prob;

		if (current < target) {
			const delta = target - current;
			prob.title = opts.lowTitle;
			prob.action = "INCREASE";
			prob.explanation = opts.lowExplain({ current, delta, min: range.min, max: range.max });
			prob.recommendedSolutions = buildSolutions(opts.lowChems ?? [], delta, volumeL, property, true);
			return prob;
		}

		const delta = current - target;
		prob.title = opts.highTitle;
		prob.action = opts.highAction ?? (opts.highChems?.length ? "DECREASE" : "DILUTE");
		prob.explanation = opts.highExplain({ current, delta, min: range.min, max: range.max });
		prob.recommendedSolutions = buildSolutions(opts.highChems ?? [], -delta, volumeL, property, true);
		return prob;
	};
}

const evaluatePH = makeEvaluator("PH", "ph", {
	lowTitle: "Low pH",
	highTitle: "High pH",
	lowChems:  [C.SodaAsh, C.Borax, C.BakingSoda],
	highChems: [C.DryAcid, C.MuriaticAcid],
	lowExplain:  (p) => explanation.lowPH(p),
	highExplain: (p) => explanation.highPH(p),
});

const evaluateTotalAlkalinity = makeEvaluator("TA", "ta", {
	lowTitle: "Low Total Alkalinity (TA)",
	highTitle: "High Total Alkalinity (TA)",
	lowChems:  [C.BakingSoda],
	highChems: [C.DryAcid, C.MuriaticAcid],
	lowExplain:  (p) => explanation.lowTA(p),
	highExplain: (p) => explanation.highTA(p),
});

const evaluateCalciumHardness = makeEvaluator("CH", "ch", {
	lowTitle: "Low Calcium Hardness (CH)",
	highTitle: "High Calcium Hardness — Dilution Required",
	lowChems: [C.CalciumChloride, C.LiquidCalciumBooster, C.CalHypo],
	lowExplain:  (p) => explanation.lowCH(p),
	highExplain: (p) => explanation.highCH(p),
	highAction: "DILUTE",
});

const evaluateCYA = makeEvaluator("CYA", "cya", {
	lowTitle: "Low Cyanuric Acid (CYA)",
	highTitle: "High CYA — Dilution Required",
	lowChems: [C.DryStabilizer, C.LiquidStabilizer],
	lowExplain:  (p) => explanation.lowCYA(p),
	highExplain: (p) => explanation.highCYA(p),
	highAction: "DILUTE",
});

const evaluateTotalChlorine = makeEvaluator("TC", "tc", {
	lowTitle: "Low Total Chlorine (TC)",
	highTitle: "High Total Chlorine / Combined Chlorine",
	lowChems: [C.CalHypo, C.Trichlor, C.Dichlor, C.Bleach],
	highChems: [C.OxidizingShock],
	lowExplain:  (p) => explanation.lowTC(p),
	highExplain: (p) => explanation.highTC(p),
});

const evaluateSalt = makeEvaluator("SALT", "salt", {
	lowTitle: "Low Salt",
	highTitle: "High Salt — Dilution Required",
	lowChems: [C.Salt],
	lowExplain:  (p) => explanation.lowSALT(p),
	highExplain: (p) => explanation.highSALT(p),
	highAction: "DILUTE",
});

const evaluateBromine = makeEvaluator("TB", "tb", {
	lowTitle: "Low Total Bromine (TB)",
	highTitle: "High Total Bromine",
	lowChems: [C.Bromine],
	lowExplain:  (p) => explanation.lowTB(p),
	highExplain: (p) => explanation.highTB(p),
	highAction: "WAIT",
});

const evaluateKH = makeEvaluator("KH", "kh", {
	lowTitle: "Low Carbonate Hardness (KH)",
	highTitle: "High Carbonate Hardness (KH)",
	lowChems:  [C.BakingSoda],
	highChems: [C.DryAcid, C.MuriaticAcid],
	lowExplain:  (p) => explanation.lowKH(p),
	highExplain: (p) => explanation.highKH(p),
});

const evaluateBorates = makeEvaluator("BOR", "bor", {
	lowTitle: "Low Borates",
	highTitle: "High Borates — Dilution Required",
	lowChems: [C.Borax, C.BoricAcid, C.TetraboratePentahydrate],
	lowExplain:  (p) => explanation.lowBOR(p),
	highExplain: (p) => explanation.highBOR(p),
	highAction: "DILUTE",
});

const evaluateBiguanide = makeEvaluator("BIG", "big", {
	lowTitle: "Low Biguanide",
	highTitle: "High Biguanide",
	lowChems: [C.Biguanide],
	lowExplain:  (p) => explanation.lowBIG(p),
	highExplain: (p) => explanation.highBIG(p),
	highAction: "WAIT",
});

const evaluateH2O2 = makeEvaluator("H2O2", "h2o2", {
	lowTitle: "Low Hydrogen Peroxide",
	highTitle: "High Hydrogen Peroxide",
	lowChems: [C.HydrogenPeroxide],
	lowExplain:  (p) => explanation.lowH2O2(p),
	highExplain: (p) => explanation.highH2O2(p),
	highAction: "WAIT",
});

const evaluatePhosphate = makeEvaluator("PHOS", "phos", {
	lowTitle: "Phosphate Low",
	highTitle: "High Phosphate",
	highChems: [C.PhosphateReducer],
	lowExplain:  (p) => explanation.lowPHOS(p),
	highExplain: (p) => explanation.highPHOS(p),
});

const evaluateMagnesium = makeEvaluator("MG", "mg", {
	lowTitle: "Low Magnesium",
	highTitle: "High Magnesium — Dilution Required",
	lowChems: [C.MagnesiumChloride],
	lowExplain:  (p) => explanation.lowMG(p),
	highExplain: (p) => explanation.highMG(p),
	highAction: "DILUTE",
});

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export interface AdvisorInput {
	readings: WaterReadings;
	targets?: WaterTargets;
	volumeL: number;
	prevReading?: WaterReadings | null;
}

export function getAdviceBundle(input: AdvisorInput): Problem[] {
	const { readings, targets = DEFAULT_TARGETS, volumeL, prevReading = null } = input;

	// Treatment order: TA first (buffers pH), then pH, CH, FC, CYA, then niche params.
	const evaluations: Problem[] = [
		evaluateTotalAlkalinity(readings, targets, volumeL),
		evaluatePH(readings, targets, volumeL),
		evaluateCalciumHardness(readings, targets, volumeL),
		evaluateFreeChlorine(readings, targets, volumeL, prevReading),
		evaluateTotalChlorine(readings, targets, volumeL),
		evaluateCYA(readings, targets, volumeL),
		evaluateSalt(readings, targets, volumeL),
		evaluateBromine(readings, targets, volumeL),
		evaluateKH(readings, targets, volumeL),
		evaluateBorates(readings, targets, volumeL),
		evaluateBiguanide(readings, targets, volumeL),
		evaluateH2O2(readings, targets, volumeL),
		evaluatePhosphate(readings, targets, volumeL),
		evaluateMagnesium(readings, targets, volumeL),
	];

	return evaluations.filter((p) => p.action !== "NONE");
}

export function isTreatmentRequired(
	readings: WaterReadings,
	targets: WaterTargets,
): boolean {
	for (const [key, range] of Object.entries(targets)) {
		if (!range) continue;
		const value = (readings as unknown as Record<string, number | null | undefined>)[key];
		if (value == null) continue;
		if (!inRange(value, range as TargetRange)) return true;
	}
	return false;
}
