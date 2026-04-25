import type { PropertyCode, ChemicalSpec, ChemicalMeta, Dosage, TreatmentEffect } from "./types";
import { PROPERTIES } from "./constants/properties";

export interface ComputeResult {
	dosage: Dosage;
	effects: TreatmentEffect[];
}

export class Chemical {
	readonly meta: ChemicalMeta;
	readonly spec: ChemicalSpec;

	constructor(meta: ChemicalMeta, spec: ChemicalSpec) {
		this.meta = meta;
		this.spec = spec;
	}

	compute(
		deltaPPM: number,
		volumeL: number,
		baseProperty: PropertyCode,
	): ComputeResult {
		if (volumeL <= 0) {
			throw new Error("volume must be > 0");
		}

		const ep = this.spec.effectPerUnit[baseProperty];
		if (!ep || ep === 0) {
			throw new Error(
				`Chemical ${this.meta.code} does not affect ${baseProperty}`,
			);
		}

		const dose = (deltaPPM * volumeL) / ep;

		const effects: TreatmentEffect[] = Object.entries(
			this.spec.effectPerUnit,
		).map(([prop, perUnit]) => {
			const meta = PROPERTIES[prop as PropertyCode];
			return {
				property: prop as PropertyCode,
				label: meta.label,
				unit: meta.unit,
				value: (dose * perUnit!) / volumeL,
			};
		});

		return {
			dosage: { value: dose, unit: this.spec.unit },
			effects,
		};
	}

	static effectFor(
		effects: TreatmentEffect[],
		code: PropertyCode,
	): TreatmentEffect | undefined {
		return effects.find((e) => e.property === code);
	}
}
