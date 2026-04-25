import type { ChemicalCategory } from "../types";
import * as C from "./chemicals";

export const CHEMICAL_CATEGORIES: ChemicalCategory[] = [
	{ category: "Sanitizers",        chemicalCodes: [C.CalHypo.meta.code, C.Trichlor.meta.code, C.Dichlor.meta.code, C.Bleach.meta.code, C.OxidizingShock.meta.code, C.Bromine.meta.code, C.Biguanide.meta.code, C.HydrogenPeroxide.meta.code] },
	{ category: "pH / Alkalinity Up",chemicalCodes: [C.SodaAsh.meta.code, C.Borax.meta.code, C.BakingSoda.meta.code, C.TetraboratePentahydrate.meta.code] },
	{ category: "pH / Alkalinity Down", chemicalCodes: [C.DryAcid.meta.code, C.MuriaticAcid.meta.code, C.BoricAcid.meta.code] },
	{ category: "Calcium",           chemicalCodes: [C.CalciumChloride.meta.code, C.LiquidCalciumBooster.meta.code] },
	{ category: "Stabilizer (CYA)",  chemicalCodes: [C.DryStabilizer.meta.code, C.LiquidStabilizer.meta.code] },
	{ category: "Salt",              chemicalCodes: [C.Salt.meta.code] },
	{ category: "Borates",           chemicalCodes: [C.Borax.meta.code, C.BoricAcid.meta.code, C.TetraboratePentahydrate.meta.code] },
	{ category: "Magnesium",         chemicalCodes: [C.MagnesiumChloride.meta.code] },
	{ category: "Phosphate",         chemicalCodes: [C.PhosphateReducer.meta.code] },
	{ category: "Algaecide / Clarifier", chemicalCodes: [C.PolyQuat.meta.code, C.Quat.meta.code, C.Clarifier.meta.code, C.LiquidFlocculant.meta.code, C.SolidFlocculant.meta.code] },
	{ category: "Metals",            chemicalCodes: [C.Metallic.meta.code, C.IonizerStuff.meta.code, C.IronReducer.meta.code, C.ScaleControl.meta.code] },
];

export function getCategoriesByChemicalCode(code: string): ChemicalCategory[] {
	return CHEMICAL_CATEGORIES.filter((c) => c.chemicalCodes.includes(code));
}
