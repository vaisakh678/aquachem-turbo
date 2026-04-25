export type { PropertyCode, PropertyMeta } from "./property";
export type { Unit, Dosage, TreatmentEffect } from "./dosage";
export type { ChemicalForm, ChemicalMeta, EffectMap, ChemicalSpec } from "./chemical";
export type { TargetRange, WaterReadings, WaterTargets } from "./water";
export type { Action, AdvisorDosage, Solution, Problem } from "./advisor";

export interface ExplanationParams {
	current: number;
	delta: number;
	min: number;
	max: number;
}

export interface ChemicalCategory {
	category: string;
	chemicalCodes: string[];
}
