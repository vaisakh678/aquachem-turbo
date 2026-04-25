import type { PropertyCode } from "./property";
import type { ChemicalMeta } from "./chemical";
import type { TreatmentEffect, Unit } from "./dosage";
import type { TargetRange } from "./water";

export type Action = "NONE" | "WAIT" | "DILUTE" | "INCREASE" | "DECREASE";

export interface AdvisorDosage {
	value: number;
	unit: Unit;
}

export interface Solution {
	chemical: ChemicalMeta;
	dosage: AdvisorDosage;
	treatmentEffects: TreatmentEffect[];
	isRecommended: boolean;
}

export interface Problem {
	title: string;
	explanation: string;
	action: Action;
	propertyCode: PropertyCode;
	target: number;
	idealRange: TargetRange;
	currentReading: number;
	recommendedSolutions: Solution[];
}
