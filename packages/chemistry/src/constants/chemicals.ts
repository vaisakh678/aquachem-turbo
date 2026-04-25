import type { ChemicalForm, ChemicalMeta, ChemicalSpec, EffectMap, PropertyCode } from "../types";
import { Chemical } from "../chemical";
import * as Src from "../data/solutions";

// Pooli imperial formula: delta_ppm = coef × oz / gal
// V1 metric formula:      dose = delta_ppm × volumeL / effectPerUnit
// So: effectPerUnit = coef × (3.78541 L/gal) / (mass_or_vol_per_oz)
//   Solids  (weight-oz → grams): × 3.78541 / 28.34952 ≈ 0.133526
//   Liquids (fluid-oz → ml):     × 3.78541 / 29.57353 ≈ 0.127997
const SOLID_K  = 3.78541 / 28.34952;
const LIQUID_K = 3.78541 / 29.57353;

const POOLI_TO_CODE: Record<string, PropertyCode> = {
	fc:   "FC",
	tc:   "TC",
	ph:   "PH",
	ta:   "TA",
	ch:   "CH",
	cya:  "CYA",
	salt: "SALT",
	tb:   "TB",
	kh:   "KH",
	bor:  "BOR",
	big:  "BIG",
	h202: "H2O2",
	phos: "PHOS",
	mg:   "MG",
};

// Explicit form lookup by Pooli commonName. Anything omitted falls back to solid.
const FORM_BY_COMMON_NAME: Record<string, ChemicalForm> = {
	"Cal-Hypo":                  "solid",
	"Magnesium Chloride":        "liquid",
	"Trichlor":                  "solid",
	"Dichlor":                   "solid",
	"Biguanide":                 "liquid",
	"Oxidizing Shock":           "solid",
	"Liquid Solar Cover":        "liquid",
	"Calcium Chloride":          "solid",
	"Liquid Calcium Booster":    "liquid",
	"Liquid Flocculant":         "liquid",
	"Solid Flocculant":          "solid",
	"Clarifier":                 "liquid",
	"Bleach":                    "liquid",
	"Hydrogen Peroxide":         "liquid",
	"Bromine":                   "solid",
	"Dry Acid":                  "solid",
	"Muriatic Acid":             "liquid",
	"Salt":                      "solid",
	"Baking Soda":               "solid",
	"Soda Ash":                  "solid",
	"Borax":                     "solid",
	"Boric Acid":                "solid",
	"Tetraborate Pentahydrate":  "solid",
	"Dry Stabilizer":            "solid",
	"Liquid Stabilizer":         "liquid",
	"Phosphate Reducer":         "solid",
	"Water":                     "liquid",
	"Poly-Quat":                 "liquid",
	"Quat":                      "liquid",
	"Metallic":                  "liquid",
	"Ionizer Stuff":             "liquid",
	"Iron Reducer":              "liquid",
	"Scale Control":             "liquid",
};

interface PooliSolution {
	commonName: string;
	effects?: Record<string, number>;
}

function slugifyCode(name: string): string {
	return name.toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function toSpec(effects: Record<string, number> | undefined, form: ChemicalForm): ChemicalSpec {
	const k = form === "solid" ? SOLID_K : LIQUID_K;
	const effectPerUnit: EffectMap = {};
	for (const [key, coef] of Object.entries(effects ?? {})) {
		const code = POOLI_TO_CODE[key];
		if (!code) continue;
		effectPerUnit[code] = coef * k;
	}
	return {
		unit: form === "solid" ? "g" : "ml",
		effectPerUnit,
	};
}

function build(sol: PooliSolution, codeSuffix = ""): Chemical {
	const form = FORM_BY_COMMON_NAME[sol.commonName] ?? "solid";
	const meta: ChemicalMeta = {
		code: slugifyCode(sol.commonName) + codeSuffix,
		label: sol.commonName,
		form,
	};
	return new Chemical(meta, toSpec(sol.effects, form));
}

// ---------------------------------------------------------------------------
// Exported Chemical instances (one per Pooli solution, same names as solutions.ts)
// ---------------------------------------------------------------------------

export const CalHypo                 = build(Src.CalHypo);
export const MagnesiumChloride       = build(Src.MagnesiumChloride);
export const Trichlor                = build(Src.Trichlor);
export const Dichlor                 = build(Src.Dichlor);
export const Biguanide               = build(Src.Biguanide);
export const OxidizingShock          = build(Src.OxidizingShock);
export const LiquidSolarCover        = build(Src.LiquidSolarCover);
export const CalciumChloride         = build(Src.CalciumChloride);
export const LiquidCalciumBooster    = build(Src.LiquidCalciumBooster);
export const LiquidFlocculant        = build(Src.LiquidFlocculant);
export const SolidFlocculant         = build(Src.SolidFlocculant);
export const Clarifier               = build(Src.Clarifier);
export const Bleach                  = build(Src.Bleach);
export const HydrogenPeroxide        = build(Src.HydrogenPeroxide);
export const Bromine                 = build(Src.Bromine);
export const DryAcid                 = build(Src.DryAcid);
export const MuriaticAcid            = build(Src.MuriaticAcid);
export const Salt                    = build(Src.Salt);
export const BakingSoda              = build(Src.BakingSoda);
export const SodaAsh                 = build(Src.SodaAsh);
export const Borax                   = build(Src.Borax);
export const BoricAcid               = build(Src.BoricAcid);
export const TetraboratePentahydrate = build(Src.TetraboratePentahydrate);
export const DryStabilizer           = build(Src.DryStabilizer);
export const LiquidStabilizer        = build(Src.LiquidStabilizer);
export const PhosphateReducer        = build(Src.PhosphateReducer);
export const PolyQuat                = build(Src.PolyQuat);
export const Quat                    = build(Src.Quat);
export const Metallic                = build(Src.Metallic);
export const IonizerStuff            = build(Src.IonizerStuff);
export const IronReducer             = build(Src.IronReducer);
export const ScaleControl            = build(Src.ScaleControl);

export const chemicals = [
	CalHypo, MagnesiumChloride, Trichlor, Dichlor, Biguanide, OxidizingShock,
	LiquidSolarCover, CalciumChloride, LiquidCalciumBooster, LiquidFlocculant,
	SolidFlocculant, Clarifier, Bleach, HydrogenPeroxide, Bromine, DryAcid,
	MuriaticAcid, Salt, BakingSoda, SodaAsh, Borax, BoricAcid, TetraboratePentahydrate,
	DryStabilizer, LiquidStabilizer, PhosphateReducer, PolyQuat, Quat, Metallic,
	IonizerStuff, IronReducer, ScaleControl,
];

export const SUPPORTED_CHEMICALS: ChemicalMeta[] = chemicals.map((c) => c.meta);

const metaByCode = new Map<string, ChemicalMeta>(
	SUPPORTED_CHEMICALS.map((m) => [m.code, m]),
);

export function getChemicalMeta(code: string): ChemicalMeta | undefined {
	return metaByCode.get(code);
}
