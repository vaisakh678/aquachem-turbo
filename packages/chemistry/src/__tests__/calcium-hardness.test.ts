import { describe, it, expect } from "vitest";
import { getAdviceBundle } from "../advisor";
import type { WaterReadings, WaterTargets } from "../types";

function makeReadings(ch: number): WaterReadings {
	return { fc: null, tc: null, ch, ph: null, ta: null, cya: null, testedAt: new Date() };
}

function makeTargets(chTarget: number): WaterTargets {
	return {
		fc: { min: 0, max: 100 },
		tc: { min: 0, max: 100 },
		ch: { min: chTarget, max: chTarget },
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

describe("Calcium Hardness — CalciumChloride (index 0)", () => {
	it("current=10, target=250, vol=10000", () => {
		const problems = getAdviceBundle({
			readings: makeReadings(10),
			targets: makeTargets(250),
			volumeL: 10000,
		});

		expect(problems[0].action).toBe("INCREASE");
		const sol = problems[0].recommendedSolutions[0];
		expect(sol.dosage.value).toBeGreaterThan(2661.23 - 3);
		expect(sol.dosage.value).toBeLessThan(2661.23 + 3);

		const eff = effectMap(sol.treatmentEffects);
		expect(eff["Calcium Hardness"]).toBeCloseTo(240, 0);
	});
});

describe("Calcium Hardness — LiquidBooster (index 1)", () => {
	it("current=10, target=250, vol=10000", () => {
		const problems = getAdviceBundle({
			readings: makeReadings(10),
			targets: makeTargets(250),
			volumeL: 10000,
		});

		const sol = problems[0].recommendedSolutions[1];
		expect(sol.dosage.value).toBeGreaterThan(5357.15 - 3);
		expect(sol.dosage.value).toBeLessThan(5357.15 + 3);

		const eff = effectMap(sol.treatmentEffects);
		expect(eff["Calcium Hardness"]).toBeCloseTo(240, 0);
	});
});

describe("Calcium Hardness — Cal-Hypo (index 2)", () => {
	it("current=10, target=250, vol=10000", () => {
		const problems = getAdviceBundle({
			readings: makeReadings(10),
			targets: makeTargets(250),
			volumeL: 10000,
		});

		const sol = problems[0].recommendedSolutions[2];
		expect(sol.dosage.value).toBeGreaterThan(5274.04 - 3);
		expect(sol.dosage.value).toBeLessThan(5274.04 + 3);

		const eff = effectMap(sol.treatmentEffects);
		expect(eff["Calcium Hardness"]).toBeCloseTo(240, 0);
		expect(eff["Free Chlorine"]).toBeCloseTo(340, 0);
		expect(eff["Total Chlorine"]).toBeCloseTo(340, 0);
		expect(eff["Salt"]).toBeCloseTo(344.86, 0);
	});
});
