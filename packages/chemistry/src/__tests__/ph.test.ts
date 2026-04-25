import { describe, it, expect } from "vitest";
import { getAdviceBundle } from "../advisor";
import type { WaterReadings, WaterTargets } from "../types";

function makeReadings(ph: number): WaterReadings {
	return { fc: null, tc: null, ch: null, ph, ta: null, cya: null, testedAt: new Date() };
}

function makeTargets(phTarget: number): WaterTargets {
	return {
		fc: { min: 0, max: 100 },
		tc: { min: 0, max: 100 },
		ch: { min: 0, max: 1000 },
		ph: { min: phTarget, max: phTarget },
		ta: { min: 0, max: 500 },
		cya: { min: 0, max: 200 },
	};
}

function effectMap(effects: { label: string; value: number }[]) {
	const m: Record<string, number> = {};
	for (const e of effects) m[e.label] = e.value;
	return m;
}

// ---------------------------------------------------------------------------
// pH UP — Soda Ash (index 0)
// ---------------------------------------------------------------------------
describe("pH UP — SodaAsh", () => {
	const cases = [
		{ ph: 6.0, target: 7.5, volume: 10000, dose: 517.44, phInc: 1.5, ta: 48.86 },
		{ ph: 6.5, target: 7.5, volume: 10000, dose: 344.96, phInc: 1.0, ta: 32.57 },
		{ ph: 7.0, target: 7.5, volume: 10000, dose: 172.48, phInc: 0.5, ta: 16.29 },
	];

	for (const c of cases) {
		it(`pH=${c.ph}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.ph),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			expect(problems[0].action).toBe("INCREASE");
			const sol = problems[0].recommendedSolutions[0]; // SodaAsh
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["pH"]).toBeCloseTo(c.phInc, 1);
			expect(eff["Total Alkalinity"]).toBeCloseTo(c.ta, 0);
		});
	}
});

// ---------------------------------------------------------------------------
// pH UP — Borax (index 1 in v2; was index 2 in v1)
// ---------------------------------------------------------------------------
describe("pH UP — Borax", () => {
	const cases = [
		{ ph: 6.0, target: 7.5, volume: 10000, dose: 1029.67, phInc: 1.5, ta: 26.81 },
		{ ph: 6.5, target: 7.5, volume: 10000, dose: 686.45, phInc: 1.0, ta: 17.87 },
		{ ph: 7.0, target: 7.5, volume: 10000, dose: 343.22, phInc: 0.5, ta: 8.94 },
	];

	for (const c of cases) {
		it(`pH=${c.ph}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.ph),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			const sol = problems[0].recommendedSolutions[1]; // Borax
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["pH"]).toBeCloseTo(c.phInc, 1);
			expect(eff["Total Alkalinity"]).toBeCloseTo(c.ta, 0);
		});
	}
});

// ---------------------------------------------------------------------------
// pH UP — Baking Soda / Sodium Bicarbonate (index 2 in v2; was index 3 in v1)
// ---------------------------------------------------------------------------
describe("pH UP — BakingSoda", () => {
	const cases = [
		{ ph: 6.0, target: 7.5, volume: 10000, dose: 12344.74, phInc: 1.5, ta: 735.49 },
		{ ph: 6.5, target: 7.5, volume: 10000, dose: 8229.83, phInc: 1.0, ta: 490.33 },
		{ ph: 7.0, target: 7.5, volume: 10000, dose: 4114.91, phInc: 0.5, ta: 245.16 },
	];

	for (const c of cases) {
		it(`pH=${c.ph}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.ph),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			const sol = problems[0].recommendedSolutions[2]; // BakingSoda
			// Big doses — allow ±2 g on thousand-gram quantities.
			expect(sol.dosage.value).toBeGreaterThan(c.dose - 2);
			expect(sol.dosage.value).toBeLessThan(c.dose + 2);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["pH"]).toBeCloseTo(c.phInc, 1);
			expect(eff["Total Alkalinity"]).toBeCloseTo(c.ta, 0);
		});
	}
});

// ---------------------------------------------------------------------------
// pH DOWN — Dry Acid (index 0)
// ---------------------------------------------------------------------------
describe("pH DOWN — DryAcid", () => {
	const cases = [
		{ ph: 9.0, target: 7.5, volume: 10000, dose: 669.07, phDec: -1.5, ta: -25.99 },
		{ ph: 8.5, target: 7.5, volume: 10000, dose: 446.05, phDec: -1.0, ta: -17.33 },
		{ ph: 8.0, target: 7.5, volume: 10000, dose: 223.02, phDec: -0.5, ta: -8.66 },
	];

	for (const c of cases) {
		it(`pH=${c.ph}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.ph),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			expect(problems[0].action).toBe("DECREASE");
			const sol = problems[0].recommendedSolutions[0]; // DryAcid
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["pH"]).toBeCloseTo(c.phDec, 1);
			expect(eff["Total Alkalinity"]).toBeCloseTo(c.ta, 0);
		});
	}
});

// ---------------------------------------------------------------------------
// pH DOWN — Muriatic Acid (index 1)
// ---------------------------------------------------------------------------
describe("pH DOWN — MuriaticAcid", () => {
	const cases = [
		{ ph: 9.0, target: 7.5, volume: 10000, dose: 975.75, phDec: -1.5, ta: -24.43 },
		{ ph: 8.5, target: 7.5, volume: 10000, dose: 650.50, phDec: -1.0, ta: -16.29 },
		{ ph: 8.0, target: 7.5, volume: 10000, dose: 325.25, phDec: -0.5, ta: -8.14 },
	];

	for (const c of cases) {
		it(`pH=${c.ph}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.ph),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			const sol = problems[0].recommendedSolutions[1]; // MuriaticAcid
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["pH"]).toBeCloseTo(c.phDec, 1);
			expect(eff["Total Alkalinity"]).toBeCloseTo(c.ta, 0);
		});
	}
});
