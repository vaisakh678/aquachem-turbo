import type { PropertyCode } from "./property";

export type Unit = "g" | "ml";

export interface Dosage {
	value: number;
	unit: Unit;
}

export interface TreatmentEffect {
	property: PropertyCode;
	label: string;
	unit: string;
	value: number;
}
