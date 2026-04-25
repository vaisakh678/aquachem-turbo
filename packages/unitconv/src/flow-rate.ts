export type FlowRateUnit = "lph" | "lpm" | "gph" | "gpm";

const TO_LPH: Record<FlowRateUnit, number> = {
	lph: 1,
	lpm: 60,         // 1 LPM = 60 LPH
	gph: 3.78541,    // 1 GPH = 3.78541 LPH
	gpm: 227.1247,   // 1 GPM = 227.1247 LPH
};

export function toFlowRateLph(value: number, unit: FlowRateUnit): number {
	return value * TO_LPH[unit];
}

export function fromFlowRateLph(lph: number, unit: FlowRateUnit): number {
	return lph / TO_LPH[unit];
}
