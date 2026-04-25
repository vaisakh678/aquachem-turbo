import type { PropertyCode, PropertyMeta } from "../types";

export const PROPERTIES: Record<PropertyCode, PropertyMeta> = {
	FC:   { code: "FC",   label: "Free Chlorine",      unit: "ppm" },
	TC:   { code: "TC",   label: "Total Chlorine",     unit: "ppm" },
	PH:   { code: "PH",   label: "pH",                 unit: ""    },
	TA:   { code: "TA",   label: "Total Alkalinity",   unit: "ppm" },
	CH:   { code: "CH",   label: "Calcium Hardness",   unit: "ppm" },
	CYA:  { code: "CYA",  label: "Cyanuric Acid",      unit: "ppm" },
	SALT: { code: "SALT", label: "Salt",               unit: "ppm" },
	TB:   { code: "TB",   label: "Total Bromine",      unit: "ppm" },
	KH:   { code: "KH",   label: "Carbonate Hardness", unit: "ppm" },
	BOR:  { code: "BOR",  label: "Borates",            unit: "ppm" },
	BIG:  { code: "BIG",  label: "Biguanide",          unit: "ppm" },
	H2O2: { code: "H2O2", label: "Hydrogen Peroxide",  unit: "ppm" },
	PHOS: { code: "PHOS", label: "Phosphate",          unit: "ppb" },
	MG:   { code: "MG",   label: "Magnesium",          unit: "ppm" },
};
