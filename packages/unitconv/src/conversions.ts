import type { Unit, BaseUnit, UnitCategory } from "./types";

// ---------------------------------------------------------------------------
// Conversion factors — multiply by factor to get base unit (kg or l)
// ---------------------------------------------------------------------------

const TO_KG: Record<string, number> = {
	mg: 0.000001,
	g:  0.001,
	kg: 1,
	oz: 0.028349523125,
	lb: 0.45359237,
};

const TO_L: Record<string, number> = {
	ml:  0.001,
	l:   1,
	floz: 0.0295735295625,
	pt:  0.473176473,
	qt:  0.946352946,
	gal: 3.785411784,
};

const TO_TABS: Record<string, number> = {
	tabs: 1,
};

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

const SOLID_UNITS = new Set(Object.keys(TO_KG));
const LIQUID_UNITS = new Set(Object.keys(TO_L));

export function getCategory(unit: Unit): UnitCategory {
	if (SOLID_UNITS.has(unit)) return "solid";
	if (LIQUID_UNITS.has(unit)) return "liquid";
	return "tabs";
}

export function getBaseUnit(unit: Unit): BaseUnit {
	if (SOLID_UNITS.has(unit)) return "kg";
	if (LIQUID_UNITS.has(unit)) return "l";
	return "tabs";
}

export function getFactorToBase(unit: Unit): number {
	return TO_KG[unit] ?? TO_L[unit] ?? TO_TABS[unit] ?? 1;
}

export function areCompatible(a: Unit, b: Unit): boolean {
	return getCategory(a) === getCategory(b);
}
