import type { Unit, BaseUnit } from "./types";
import { getFactorToBase, areCompatible, getBaseUnit } from "./conversions";

/**
 * Convert a value from one unit to another.
 * Units must be compatible (both solid or both liquid).
 */
export function convert(value: number, from: Unit, to: Unit): number {
	if (from === to) return value;
	if (!areCompatible(from, to)) {
		throw new Error(`Cannot convert between "${from}" and "${to}" — incompatible unit categories`);
	}
	const baseValue = value * getFactorToBase(from);
	return baseValue / getFactorToBase(to);
}

/**
 * Convert a value to its base unit (kg, l, or tabs).
 */
export function toBaseUnit(value: number, unit: Unit): { value: number; unit: BaseUnit } {
	return {
		value: value * getFactorToBase(unit),
		unit: getBaseUnit(unit),
	};
}

/**
 * Convert a value from base unit to a target unit.
 */
export function fromBaseUnit(value: number, baseUnit: BaseUnit, to: Unit): number {
	if (!areCompatible(baseUnit as Unit, to)) {
		throw new Error(`Cannot convert "${baseUnit}" to "${to}" — incompatible unit categories`);
	}
	return value / getFactorToBase(to);
}

/**
 * Format a quantity with appropriate precision.
 * Small values get more decimal places.
 */
export function formatQuantity(value: number, unit: Unit): string {
	if (value === 0) return `0 ${unit}`;
	if (value >= 100) return `${Math.round(value)} ${unit}`;
	if (value >= 10) return `${value.toFixed(1)} ${unit}`;
	if (value >= 1) return `${value.toFixed(2)} ${unit}`;
	return `${value.toFixed(3)} ${unit}`;
}
