import { describe, it, expect } from "vitest";
import { getAdviceBundle } from "../advisor";
import type { WaterReadings, WaterTargets } from "../types";

function makeReadings(ta: number): WaterReadings {
	return { fc: null, tc: null, ch: null, ph: null, ta, cya: null, testedAt: new Date() };
}

function makeTargets(taTarget: number): WaterTargets {
	return {
		fc: { min: 0, max: 100 },
		tc: { min: 0, max: 100 },
		ch: { min: 0, max: 1000 },
		ph: { min: 0, max: 14 },
		ta: { min: taTarget, max: taTarget },
		cya: { min: 0, max: 200 },
	};
}

function effectMap(effects: { label: string; value: number }[]) {
	const m: Record<string, number> = {};
	for (const e of effects) m[e.label] = e.value;
	return m;
}

// ---------------------------------------------------------------------------
// TA UP — Baking Soda (index 0 — v2's only TA raiser)
// ---------------------------------------------------------------------------
describe("TA UP — BakingSoda", () => {
	const cases = [
		{ ta: 10, target: 110, volume: 10000, dose: 1678.43, taAfter: 100, ph: 0.20 },
		{ ta: 30, target: 110, volume: 10000, dose: 1342.74, taAfter: 80, ph: 0.16 },
		{ ta: 50, target: 110, volume: 10000, dose: 1007.06, taAfter: 60, ph: 0.12 },
	];

	for (const c of cases) {
		it(`ta=${c.ta}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.ta),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			expect(problems[0].action).toBe("INCREASE");
			const sol = problems[0].recommendedSolutions[0];
			expect(sol.dosage.value).toBeGreaterThan(c.dose - 2);
			expect(sol.dosage.value).toBeLessThan(c.dose + 2);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Total Alkalinity"]).toBeCloseTo(c.taAfter, 0);
			expect(eff["pH"]).toBeCloseTo(c.ph, 1);
		});
	}
});

// ---------------------------------------------------------------------------
// TA DOWN — Dry Acid (index 0)
// ---------------------------------------------------------------------------
describe("TA DOWN — DryAcid", () => {
	const cases = [
		{ ta: 200, target: 110, volume: 10000, dose: 2317.03, taAfter: -90, ph: -5.19 },
		{ ta: 180, target: 110, volume: 10000, dose: 1802.13, taAfter: -70, ph: -4.04 },
		{ ta: 165, target: 110, volume: 10000, dose: 1415.96, taAfter: -55, ph: -3.17 },
	];

	for (const c of cases) {
		it(`ta=${c.ta}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.ta),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			expect(problems[0].action).toBe("DECREASE");
			const sol = problems[0].recommendedSolutions[0];
			expect(sol.dosage.value).toBeGreaterThan(c.dose - 2);
			expect(sol.dosage.value).toBeLessThan(c.dose + 2);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Total Alkalinity"]).toBeCloseTo(c.taAfter, 0);
			expect(eff["pH"]).toBeCloseTo(c.ph, 0);
		});
	}
});

// ---------------------------------------------------------------------------
// TA DOWN — Muriatic Acid (index 1)
// ---------------------------------------------------------------------------
describe("TA DOWN — MuriaticAcid", () => {
	const cases = [
		{ ta: 200, target: 110, volume: 10000, dose: 3594.71, taAfter: -90, ph: -5.53 },
		{ ta: 180, target: 110, volume: 10000, dose: 2795.89, taAfter: -70, ph: -4.30 },
		{ ta: 155, target: 110, volume: 10000, dose: 1797.36, taAfter: -45, ph: -2.76 },
	];

	for (const c of cases) {
		it(`ta=${c.ta}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.ta),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			const sol = problems[0].recommendedSolutions[1];
			expect(sol.dosage.value).toBeGreaterThan(c.dose - 3);
			expect(sol.dosage.value).toBeLessThan(c.dose + 3);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Total Alkalinity"]).toBeCloseTo(c.taAfter, 0);
			expect(eff["pH"]).toBeCloseTo(c.ph, 0);
		});
	}
});
