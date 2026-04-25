import { describe, it, expect } from "vitest";
import { convert, toBaseUnit, fromBaseUnit, getCategory, getBaseUnit, areCompatible, formatQuantity } from "../index";

describe("getCategory", () => {
	it("solid units", () => {
		expect(getCategory("mg")).toBe("solid");
		expect(getCategory("g")).toBe("solid");
		expect(getCategory("kg")).toBe("solid");
		expect(getCategory("oz")).toBe("solid");
		expect(getCategory("lb")).toBe("solid");
	});

	it("liquid units", () => {
		expect(getCategory("ml")).toBe("liquid");
		expect(getCategory("l")).toBe("liquid");
		expect(getCategory("floz")).toBe("liquid");
		expect(getCategory("pt")).toBe("liquid");
		expect(getCategory("qt")).toBe("liquid");
		expect(getCategory("gal")).toBe("liquid");
	});

	it("tablet units", () => {
		expect(getCategory("tabs")).toBe("tabs");
	});
});

describe("getBaseUnit", () => {
	it("returns kg for solids", () => {
		expect(getBaseUnit("g")).toBe("kg");
		expect(getBaseUnit("oz")).toBe("kg");
		expect(getBaseUnit("lb")).toBe("kg");
	});

	it("returns l for liquids", () => {
		expect(getBaseUnit("ml")).toBe("l");
		expect(getBaseUnit("gal")).toBe("l");
		expect(getBaseUnit("floz")).toBe("l");
	});

	it("returns tabs for tabs", () => {
		expect(getBaseUnit("tabs")).toBe("tabs");
	});
});

describe("areCompatible", () => {
	it("same category", () => {
		expect(areCompatible("g", "kg")).toBe(true);
		expect(areCompatible("ml", "gal")).toBe(true);
	});

	it("different category", () => {
		expect(areCompatible("g", "ml")).toBe(false);
		expect(areCompatible("kg", "l")).toBe(false);
		expect(areCompatible("tabs", "g")).toBe(false);
	});
});

describe("toBaseUnit", () => {
	it("g to kg", () => {
		const r = toBaseUnit(1000, "g");
		expect(r.value).toBeCloseTo(1, 5);
		expect(r.unit).toBe("kg");
	});

	it("lb to kg", () => {
		const r = toBaseUnit(1, "lb");
		expect(r.value).toBeCloseTo(0.45359, 4);
		expect(r.unit).toBe("kg");
	});

	it("oz to kg", () => {
		const r = toBaseUnit(16, "oz");
		expect(r.value).toBeCloseTo(0.45359, 3);
		expect(r.unit).toBe("kg");
	});

	it("ml to l", () => {
		const r = toBaseUnit(500, "ml");
		expect(r.value).toBeCloseTo(0.5, 5);
		expect(r.unit).toBe("l");
	});

	it("gal to l", () => {
		const r = toBaseUnit(1, "gal");
		expect(r.value).toBeCloseTo(3.78541, 4);
		expect(r.unit).toBe("l");
	});

	it("floz to l", () => {
		const r = toBaseUnit(33.814, "floz");
		expect(r.value).toBeCloseTo(1, 2);
		expect(r.unit).toBe("l");
	});

	it("tabs stays tabs", () => {
		const r = toBaseUnit(5, "tabs");
		expect(r.value).toBe(5);
		expect(r.unit).toBe("tabs");
	});
});

describe("convert", () => {
	it("same unit returns same value", () => {
		expect(convert(100, "g", "g")).toBe(100);
	});

	it("g to kg", () => {
		expect(convert(1000, "g", "kg")).toBeCloseTo(1, 5);
	});

	it("kg to g", () => {
		expect(convert(1, "kg", "g")).toBeCloseTo(1000, 5);
	});

	it("kg to lb", () => {
		expect(convert(1, "kg", "lb")).toBeCloseTo(2.20462, 3);
	});

	it("lb to oz", () => {
		expect(convert(1, "lb", "oz")).toBeCloseTo(16, 2);
	});

	it("l to ml", () => {
		expect(convert(1, "l", "ml")).toBeCloseTo(1000, 5);
	});

	it("gal to l", () => {
		expect(convert(1, "gal", "l")).toBeCloseTo(3.78541, 4);
	});

	it("l to gal", () => {
		expect(convert(3.78541, "l", "gal")).toBeCloseTo(1, 3);
	});

	it("qt to pt", () => {
		expect(convert(1, "qt", "pt")).toBeCloseTo(2, 3);
	});

	it("throws on incompatible units", () => {
		expect(() => convert(1, "g", "ml")).toThrow("incompatible");
		expect(() => convert(1, "kg", "gal")).toThrow("incompatible");
	});
});

describe("fromBaseUnit", () => {
	it("kg to g", () => {
		expect(fromBaseUnit(1, "kg", "g")).toBeCloseTo(1000, 5);
	});

	it("l to ml", () => {
		expect(fromBaseUnit(1, "l", "ml")).toBeCloseTo(1000, 5);
	});

	it("kg to lb", () => {
		expect(fromBaseUnit(1, "kg", "lb")).toBeCloseTo(2.20462, 3);
	});

	it("l to gal", () => {
		expect(fromBaseUnit(1, "l", "gal")).toBeCloseTo(0.26417, 3);
	});
});

describe("formatQuantity", () => {
	it("large values — no decimals", () => {
		expect(formatQuantity(150, "g")).toBe("150 g");
	});

	it("medium values — 1 decimal", () => {
		expect(formatQuantity(12.5, "kg")).toBe("12.5 kg");
	});

	it("small values — 2 decimals", () => {
		expect(formatQuantity(1.23, "l")).toBe("1.23 l");
	});

	it("tiny values — 3 decimals", () => {
		expect(formatQuantity(0.045, "kg")).toBe("0.045 kg");
	});

	it("zero", () => {
		expect(formatQuantity(0, "g")).toBe("0 g");
	});
});

