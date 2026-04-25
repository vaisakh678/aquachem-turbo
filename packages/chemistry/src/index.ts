// Types
export type {
	PropertyCode, PropertyMeta,
	Unit, Dosage, TreatmentEffect,
	ChemicalForm, ChemicalMeta, EffectMap, ChemicalSpec,
	TargetRange, WaterReadings, WaterTargets,
	Action, AdvisorDosage, Solution, Problem,
	ExplanationParams, ChemicalCategory,
} from "./types";

// Constants
export {
	PROPERTIES,
	SUPPORTED_CHEMICALS, getChemicalMeta,
	chemicals,
	CHEMICAL_CATEGORIES, getCategoriesByChemicalCode,
	DEFAULT_TARGETS,
} from "./constants";

// Chemical computation
export { Chemical } from "./chemical";
export type { ComputeResult } from "./chemical";

// Advisor
export { getAdviceBundle, isTreatmentRequired, shouldWaitForFC } from "./advisor";
export type { AdvisorInput } from "./advisor";

// Explanations
export { explanation } from "./explanations";

// LSI (Langelier Saturation Index)
export { calculateLSI } from "./lsi";
