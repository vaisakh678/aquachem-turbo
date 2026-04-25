import type { Unit } from "./types";
import { getFactorToBase, getCategory } from "./conversions";

type System = "metric" | "imperial";

// Metric units ordered large → small
const METRIC_SOLID: Unit[]  = ["kg", "g", "mg"];
const METRIC_LIQUID: Unit[] = ["l", "ml"];

// Imperial units ordered large → small
const IMPERIAL_SOLID: Unit[]  = ["lb", "oz"];
const IMPERIAL_LIQUID: Unit[] = ["gal", "qt", "floz"];

function getScaleUnits(category: "solid" | "liquid" | "tabs", system: System): Unit[] {
	if (category === "tabs") return ["tabs"];
	if (system === "metric") return category === "solid" ? METRIC_SOLID : METRIC_LIQUID;
	return category === "solid" ? IMPERIAL_SOLID : IMPERIAL_LIQUID;
}

function smartFormat(value: number): string {
	if (value === 0) return "0";
	if (value >= 100) return Math.round(value).toString();
	if (value >= 10) return parseFloat(value.toFixed(1)).toString();
	if (value >= 1) return parseFloat(value.toFixed(2)).toString();
	return parseFloat(value.toFixed(3)).toString();
}

/**
 * Display a quantity in the most readable unit for the given system.
 * Auto-scales: 1005g → "1.01 kg", 0.2kg → "200 g", 3800ml → "3.8 L"
 */
export function displayQuantity(value: number, unit: Unit, system: System): string {
	if (value === 0) return `0 ${unit}`;

	const category = getCategory(unit);
	const baseValue = value * getFactorToBase(unit);
	const scaleUnits = getScaleUnits(category, system);

	for (const target of scaleUnits) {
		const converted = baseValue / getFactorToBase(target);
		if (converted >= 1) {
			const label = target === "l" ? "L" : target === "floz" ? "fl oz" : target;
			return `${smartFormat(converted)} ${label}`;
		}
	}

	// Fallback to smallest unit
	const smallest = scaleUnits[scaleUnits.length - 1];
	const converted = baseValue / getFactorToBase(smallest);
	const label = smallest === "l" ? "L" : smallest === "floz" ? "fl oz" : smallest;
	return `${smartFormat(converted)} ${label}`;
}
