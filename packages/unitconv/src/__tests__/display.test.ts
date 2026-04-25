import { describe, it, expect } from "vitest";
import { displayQuantity } from "../index";

describe("displayQuantity", () => {
	// Metric solid
	it("1005g metric → kg", () => {
		expect(displayQuantity(1005, "g", "metric")).toBe("1.01 kg");
	});

	it("0.2kg metric → g", () => {
		expect(displayQuantity(0.2, "kg", "metric")).toBe("200 g");
	});

	it("500g metric → 500 g", () => {
		expect(displayQuantity(500, "g", "metric")).toBe("500 g");
	});

	it("5mg metric → 5 mg", () => {
		expect(displayQuantity(5, "mg", "metric")).toBe("5 mg");
	});

	it("25kg metric → 25 kg", () => {
		expect(displayQuantity(25, "kg", "metric")).toBe("25 kg");
	});

	// Metric liquid
	it("3800ml metric → L", () => {
		expect(displayQuantity(3800, "ml", "metric")).toBe("3.8 L");
	});

	it("0.5l metric → 500 ml", () => {
		expect(displayQuantity(0.5, "l", "metric")).toBe("500 ml");
	});

	it("50l metric → 50 L", () => {
		expect(displayQuantity(50, "l", "metric")).toBe("50 L");
	});

	// Imperial solid
	it("500g imperial → lb", () => {
		expect(displayQuantity(500, "g", "imperial")).toBe("1.1 lb");
	});

	it("10g imperial → oz", () => {
		expect(displayQuantity(10, "g", "imperial")).toBe("0.353 oz");
	});

	it("25kg imperial → lb", () => {
		expect(displayQuantity(25, "kg", "imperial")).toBe("55.1 lb");
	});

	// Imperial liquid
	it("500ml imperial → fl oz", () => {
		expect(displayQuantity(500, "ml", "imperial")).toBe("16.9 fl oz");
	});

	it("5l imperial → gal", () => {
		expect(displayQuantity(5, "l", "imperial")).toBe("1.32 gal");
	});

	it("50l imperial → gal", () => {
		expect(displayQuantity(50, "l", "imperial")).toBe("13.2 gal");
	});

	// Tabs
	it("10 tabs metric → tabs", () => {
		expect(displayQuantity(10, "tabs", "metric")).toBe("10 tabs");
	});

	it("10 tabs imperial → tabs", () => {
		expect(displayQuantity(10, "tabs", "imperial")).toBe("10 tabs");
	});

	// Zero
	it("0 g metric → 0 g", () => {
		expect(displayQuantity(0, "g", "metric")).toBe("0 g");
	});
});
