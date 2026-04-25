import type { PropertyCode } from "./property";

export interface TargetRange {
	min: number;
	max: number;
}

export type WaterReadings = Partial<Record<Lowercase<PropertyCode>, number | null>> & {
	testedAt: Date;
};

export type WaterTargets = Partial<Record<Lowercase<PropertyCode>, TargetRange>>;
