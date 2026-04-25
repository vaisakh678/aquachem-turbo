import type { Unit } from "./dosage";
import type { PropertyCode } from "./property";

export type ChemicalForm = "liquid" | "solid";

export interface ChemicalMeta {
	code: string;
	label: string;
	form: ChemicalForm;
}

export type EffectMap = Partial<Record<PropertyCode, number>>;

export interface ChemicalSpec {
	unit: Unit;
	effectPerUnit: EffectMap;
}
