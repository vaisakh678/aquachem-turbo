import { describe, it, expect } from "vitest";
import { getAdviceBundle } from "../advisor";
import type { WaterReadings, WaterTargets } from "../types";

function makeReadings(cya: number): WaterReadings {
	return { fc: null, tc: null, ch: null, ph: null, ta: null, cya, testedAt: new Date() };
}

function makeTargets(cyaTarget: number): WaterTargets {
	return {
		fc: { min: 0, max: 100 },
		tc: { min: 0, max: 100 },
		ch: { min: 0, max: 1000 },
		ph: { min: 0, max: 14 },
		ta: { min: 0, max: 500 },
		cya: { min: cyaTarget, max: cyaTarget },
	};
}

function effectMap(effects: { label: string; value: number }[]) {
	const m: Record<string, number> = {};
	for (const e of effects) m[e.label] = e.value;
	return m;
}

// ---------------------------------------------------------------------------
// DryStabilizer — index 0
// ---------------------------------------------------------------------------
describe("CYA UP — DryStabilizer", () => {
	const cases = [
		{ cya: 1, target: 40, volume: 10000, dose: 389.96, cyaAfter: 39, ph: -0.72 },
		{ cya: 5, target: 40, volume: 10000, dose: 349.96, cyaAfter: 35, ph: -0.65 },
		{ cya: 10, target: 40, volume: 10000, dose: 299.97, cyaAfter: 30, ph: -0.56 },
		{ cya: 1, target: 40, volume: 20000, dose: 779.91, cyaAfter: 39, ph: -0.72 },
		{ cya: 10, target: 40, volume: 20000, dose: 599.93, cyaAfter: 30, ph: -0.56 },
	];

	for (const c of cases) {
		it(`cya=${c.cya} vol=${c.volume}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.cya),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			expect(problems[0].action).toBe("INCREASE");
			const sol = problems[0].recommendedSolutions[0];
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Cyanuric Acid"]).toBeCloseTo(c.cyaAfter, 0);
			expect(eff["pH"]).toBeCloseTo(c.ph, 1);
		});
	}
});

// ---------------------------------------------------------------------------
// LiquidStabilizer — index 1
// ---------------------------------------------------------------------------
describe("CYA UP — LiquidStabilizer", () => {
	const cases = [
		{ cya: 1, target: 40, volume: 10000, dose: 1054.28, cyaAfter: 39 },
		{ cya: 5, target: 40, volume: 10000, dose: 946.15, cyaAfter: 35 },
		{ cya: 10, target: 40, volume: 10000, dose: 810.99, cyaAfter: 30 },
		{ cya: 1, target: 40, volume: 20000, dose: 2108.57, cyaAfter: 39 },
		{ cya: 10, target: 40, volume: 20000, dose: 1621.97, cyaAfter: 30 },
	];

	for (const c of cases) {
		it(`cya=${c.cya} vol=${c.volume}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.cya),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			const sol = problems[0].recommendedSolutions[1];
			expect(sol.dosage.value).toBeGreaterThan(c.dose - 2);
			expect(sol.dosage.value).toBeLessThan(c.dose + 2);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Cyanuric Acid"]).toBeCloseTo(c.cyaAfter, 0);
		});
	}
});
