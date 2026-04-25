export type LearnChemicalForm = "solid" | "liquid";

export interface LearnDosingEffect {
	property: string;
	ppmPer10kL: number;
}

export interface LearnDosingSpec {
	form: LearnChemicalForm;
	effects: LearnDosingEffect[];
	gramsPerTeaspoon?: number;
	gramsPerCup?: number;
	gramsPerOneInchTab?: number;
}

export interface LearnEntry {
	slug: string;
	name: string;
	alternativeNames: string[];
	description: string;
	chemicalFormula?: string;
	chemicalName?: string;
	dosingSpec?: LearnDosingSpec;
}

export interface LearnCategory {
	slug: string;
	name: string;
	tint: string;
	entries: LearnEntry[];
}

export interface LearnContent {
	categories: LearnCategory[];
}
