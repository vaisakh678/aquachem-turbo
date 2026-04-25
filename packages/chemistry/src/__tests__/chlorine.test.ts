import { describe, it, expect } from "vitest";
import { getAdviceBundle } from "../advisor";
import type { WaterReadings, WaterTargets } from "../types";

function makeReadings(fc: number): WaterReadings {
	return { fc, tc: null, ch: null, ph: null, ta: null, cya: null, testedAt: new Date() };
}

function makeTargets(fcTarget: number): WaterTargets {
	return {
		fc: { min: fcTarget, max: fcTarget },
		tc: { min: 0, max: 100 },
		ch: { min: 0, max: 1000 },
		ph: { min: 0, max: 14 },
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
// Cal-Hypo — index 0
// ---------------------------------------------------------------------------
describe("Free Chlorine — Cal-Hypo", () => {
	const cases = [
		{ reading: 1.00, target: 6, volume: 10000, dose: 77.56, th: 3.53, fc: 5.00, tc: 5.00, salt: 5.07 },
		{ reading: 1.50, target: 6, volume: 10000, dose: 69.80, th: 3.18, fc: 4.50, tc: 4.50, salt: 4.56 },
		{ reading: 2.00, target: 6, volume: 10000, dose: 62.05, th: 2.82, fc: 4.00, tc: 4.00, salt: 4.06 },
		{ reading: 2.50, target: 6, volume: 10000, dose: 54.29, th: 2.47, fc: 3.50, tc: 3.50, salt: 3.55 },
		{ reading: 3.00, target: 6, volume: 10000, dose: 46.54, th: 2.12, fc: 3.00, tc: 3.00, salt: 3.04 },
		{ reading: 3.50, target: 6, volume: 10000, dose: 38.78, th: 1.76, fc: 2.50, tc: 2.50, salt: 2.54 },
		{ reading: 1.00, target: 6, volume: 20000, dose: 155.12, th: 3.53, fc: 5.00, tc: 5.00, salt: 5.07 },
		{ reading: 2.00, target: 6, volume: 20000, dose: 124.10, th: 2.82, fc: 4.00, tc: 4.00, salt: 4.06 },
		{ reading: 3.00, target: 6, volume: 20000, dose: 93.07, th: 2.12, fc: 3.00, tc: 3.00, salt: 3.04 },
		{ reading: 1, target: 3.5, volume: 20000, dose: 77.56, th: 1.76, fc: 2.50, tc: 2.50, salt: 2.54 },
	];

	for (const c of cases) {
		it(`reading=${c.reading} target=${c.target} vol=${c.volume}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.reading),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			expect(problems.length).toBeGreaterThan(0);
			const prob = problems[0];
			expect(prob.action).toBe("INCREASE");

			const sol = prob.recommendedSolutions[0]; // Cal-Hypo
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Calcium Hardness"]).toBeCloseTo(c.th, 0);
			expect(eff["Free Chlorine"]).toBeCloseTo(c.fc, 0);
			expect(eff["Total Chlorine"]).toBeCloseTo(c.tc, 0);
			expect(eff["Salt"]).toBeCloseTo(c.salt, 0);
		});
	}
});

// ---------------------------------------------------------------------------
// Trichlor — index 1
// ---------------------------------------------------------------------------
describe("Free Chlorine — Trichlor", () => {
	const cases = [
		{ reading: 1.00, target: 6, volume: 10000, dose: 54.63, fc: 5.00, tc: 5.00, ph: -0.27, cya: 3.03, salt: 4.08 },
		{ reading: 1.50, target: 6, volume: 10000, dose: 49.16, fc: 4.50, tc: 4.50, ph: -0.24, cya: 2.73, salt: 3.68 },
		{ reading: 2.00, target: 6, volume: 10000, dose: 43.70, fc: 4.00, tc: 4.00, ph: -0.21, cya: 2.43, salt: 3.27 },
		{ reading: 2.50, target: 6, volume: 10000, dose: 38.24, fc: 3.50, tc: 3.50, ph: -0.19, cya: 2.12, salt: 2.86 },
		{ reading: 3.00, target: 6, volume: 10000, dose: 32.78, fc: 3.00, tc: 3.00, ph: -0.16, cya: 1.82, salt: 2.45 },
		{ reading: 3.50, target: 6, volume: 10000, dose: 27.31, fc: 2.50, tc: 2.50, ph: -0.13, cya: 1.52, salt: 2.04 },
		{ reading: 1.00, target: 6, volume: 20000, dose: 109.25, fc: 5.00, tc: 5.00, ph: -0.27, cya: 3.03, salt: 4.08 },
		{ reading: 3.00, target: 6, volume: 20000, dose: 65.55, fc: 3.00, tc: 3.00, ph: -0.16, cya: 1.82, salt: 2.45 },
	];

	for (const c of cases) {
		it(`reading=${c.reading} vol=${c.volume}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.reading),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			const sol = problems[0].recommendedSolutions[1]; // Trichlor
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Free Chlorine"]).toBeCloseTo(c.fc, 0);
			expect(eff["Total Chlorine"]).toBeCloseTo(c.tc, 0);
			expect(eff["pH"]).toBeCloseTo(c.ph, 1);
			expect(eff["Cyanuric Acid"]).toBeCloseTo(c.cya, 0);
			expect(eff["Salt"]).toBeCloseTo(c.salt, 0);
		});
	}
});

// ---------------------------------------------------------------------------
// Dichlor — index 2
// ---------------------------------------------------------------------------
describe("Free Chlorine — Dichlor", () => {
	const cases = [
		{ reading: 1.00, target: 6, volume: 10000, dose: 90.25, fc: 5.00, tc: 5.00, ph: -0.19, cya: 4.55, salt: 4.08 },
		{ reading: 1.50, target: 6, volume: 10000, dose: 81.23, fc: 4.50, tc: 4.50, ph: -0.17, cya: 4.10, salt: 3.67 },
		{ reading: 2.00, target: 6, volume: 10000, dose: 72.20, fc: 4.00, tc: 4.00, ph: -0.15, cya: 3.64, salt: 3.26 },
		{ reading: 2.50, target: 6, volume: 10000, dose: 63.18, fc: 3.50, tc: 3.50, ph: -0.13, cya: 3.19, salt: 2.85 },
		{ reading: 3.00, target: 6, volume: 10000, dose: 54.15, fc: 3.00, tc: 3.00, ph: -0.11, cya: 2.73, salt: 2.45 },
		{ reading: 3.50, target: 6, volume: 10000, dose: 45.13, fc: 2.50, tc: 2.50, ph: -0.10, cya: 2.28, salt: 2.04 },
		{ reading: 1.00, target: 6, volume: 20000, dose: 180.50, fc: 5.00, tc: 5.00, ph: -0.19, cya: 4.55, salt: 4.08 },
		{ reading: 3.00, target: 6, volume: 20000, dose: 108.30, fc: 3.00, tc: 3.00, ph: -0.11, cya: 2.73, salt: 2.45 },
	];

	for (const c of cases) {
		it(`reading=${c.reading} vol=${c.volume}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.reading),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			const sol = problems[0].recommendedSolutions[2]; // Dichlor
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Free Chlorine"]).toBeCloseTo(c.fc, 0);
			expect(eff["Total Chlorine"]).toBeCloseTo(c.tc, 0);
			expect(eff["pH"]).toBeCloseTo(c.ph, 1);
			expect(eff["Cyanuric Acid"]).toBeCloseTo(c.cya, 0);
			expect(eff["Salt"]).toBeCloseTo(c.salt, 0);
		});
	}
});

// ---------------------------------------------------------------------------
// Bleach (Sodium Hypo 10%) — index 3
// ---------------------------------------------------------------------------
describe("Free Chlorine — Bleach", () => {
	const cases = [
		{ reading: 1.00, target: 6, volume: 10000, dose: 500.16, fc: 5.00, tc: 5.00, salt: 8.23 },
		{ reading: 2.00, target: 6, volume: 10000, dose: 400.13, fc: 4.00, tc: 4.00, salt: 6.59 },
		{ reading: 3.00, target: 6, volume: 10000, dose: 300.10, fc: 3.00, tc: 3.00, salt: 4.94 },
		{ reading: 3.50, target: 6, volume: 10000, dose: 250.08, fc: 2.50, tc: 2.50, salt: 4.12 },
		{ reading: 1.00, target: 6, volume: 20000, dose: 1000.32, fc: 5.00, tc: 5.00, salt: 8.23 },
		{ reading: 3.00, target: 6, volume: 20000, dose: 600.19, fc: 3.00, tc: 3.00, salt: 4.94 },
	];

	for (const c of cases) {
		it(`reading=${c.reading} vol=${c.volume}`, () => {
			const problems = getAdviceBundle({
				readings: makeReadings(c.reading),
				targets: makeTargets(c.target),
				volumeL: c.volume,
			});

			const sol = problems[0].recommendedSolutions[3]; // Bleach
			expect(sol.dosage.value).toBeCloseTo(c.dose, 0);

			const eff = effectMap(sol.treatmentEffects);
			expect(eff["Free Chlorine"]).toBeCloseTo(c.fc, 0);
			expect(eff["Total Chlorine"]).toBeCloseTo(c.tc, 0);
			expect(eff["Salt"]).toBeCloseTo(c.salt, 0);
		});
	}
});
