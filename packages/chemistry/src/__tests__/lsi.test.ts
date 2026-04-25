import { describe, it, expect } from "vitest";
import { calculateLSI } from "../lsi";

describe("calculateLSI", () => {
	it("returns balanced LSI for typical pool readings", () => {
		const lsi = calculateLSI({ ph: 7.5, ta: 100, ch: 300, cya: 40, tempF: 80 });
		expect(lsi).not.toBeNull();
		expect(lsi!).toBeGreaterThanOrEqual(-0.3);
		expect(lsi!).toBeLessThanOrEqual(0.3);
	});

	it("returns corrosive LSI when readings are low", () => {
		const lsi = calculateLSI({ ph: 6.8, ta: 60, ch: 100, cya: null, tempF: 60 });
		expect(lsi).not.toBeNull();
		expect(lsi!).toBeLessThan(-0.3);
	});

	it("returns scale-forming LSI when readings are high", () => {
		const lsi = calculateLSI({ ph: 8.0, ta: 200, ch: 600, cya: null, tempF: 90 });
		expect(lsi).not.toBeNull();
		expect(lsi!).toBeGreaterThan(0.3);
	});

	it("returns null if pH is missing", () => {
		expect(calculateLSI({ ph: null, ta: 100, ch: 300 })).toBeNull();
	});

	it("returns null if TA is missing", () => {
		expect(calculateLSI({ ph: 7.4, ta: null, ch: 300 })).toBeNull();
	});

	it("returns null if CH is missing", () => {
		expect(calculateLSI({ ph: 7.4, ta: 100, ch: null })).toBeNull();
	});

	it("returns null for non-positive values", () => {
		expect(calculateLSI({ ph: 0, ta: 100, ch: 300 })).toBeNull();
		expect(calculateLSI({ ph: 7.4, ta: 0, ch: 300 })).toBeNull();
		expect(calculateLSI({ ph: 7.4, ta: 100, ch: 0 })).toBeNull();
	});

	it("applies CYA correction when CYA is provided", () => {
		const withoutCya = calculateLSI({ ph: 7.5, ta: 100, ch: 300, cya: null, tempF: 80 });
		const withCya = calculateLSI({ ph: 7.5, ta: 100, ch: 300, cya: 60, tempF: 80 });
		// With CYA correction, corrected TA is lower → AF lower → LSI lower
		expect(withCya!).toBeLessThan(withoutCya!);
	});

	it("uses default temperature of 80°F when not provided", () => {
		const noTemp = calculateLSI({ ph: 7.5, ta: 100, ch: 300, cya: 40 });
		const explicitTemp = calculateLSI({ ph: 7.5, ta: 100, ch: 300, cya: 40, tempF: 80 });
		expect(noTemp).toBe(explicitTemp);
	});
});
