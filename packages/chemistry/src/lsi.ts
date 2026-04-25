// ---------------------------------------------------------------------------
// Langelier Saturation Index (LSI)
//
// Tells you whether pool water is corrosive, balanced, or scale-forming.
//
// LSI = pH + TF + CF + AF - 12.1
//   TF = temperature factor (lookup based on water temp °F)
//   CF = calcium factor      = log10(CH) - 0.4
//   AF = alkalinity factor   = log10(corrected_alkalinity)
//   corrected_alkalinity = TA - (CYA * cyaCorrection / 3)
//
// Interpretation:
//   LSI < -0.3  → corrosive
//   -0.3 to +0.3 → balanced
//   LSI > +0.3  → scale-forming
// ---------------------------------------------------------------------------

interface LSIInputs {
	ph: number | null;
	ta: number | null;        // Total Alkalinity (ppm)
	ch: number | null;        // Calcium Hardness (ppm)
	cya?: number | null;      // CYA (ppm) — optional, used to correct TA
	tempF?: number;           // Water temperature in °F (default 80°F)
}

// Temperature Factor lookup table (°F → TF)
// Source: standard pool industry tables
function temperatureFactor(tempF: number): number {
	if (tempF <= 32) return 0.0;
	if (tempF <= 37) return 0.1;
	if (tempF <= 46) return 0.2;
	if (tempF <= 53) return 0.3;
	if (tempF <= 60) return 0.4;
	if (tempF <= 66) return 0.5;
	if (tempF <= 76) return 0.6;
	if (tempF <= 84) return 0.7;
	if (tempF <= 94) return 0.8;
	if (tempF <= 105) return 0.9;
	return 1.0;
}

// CYA correction factor based on pH
// Higher pH means less of the CYA contributes to alkalinity
function cyaCorrectionFactor(ph: number): number {
	if (ph < 7.0) return 0.27;
	if (ph < 7.4) return 0.30;
	if (ph < 7.8) return 0.32;
	if (ph < 8.2) return 0.34;
	return 0.36;
}

export function calculateLSI(inputs: LSIInputs): number | null {
	const { ph, ta, ch, cya, tempF = 80 } = inputs;

	if (ph == null || ta == null || ch == null) return null;
	if (ph <= 0 || ta <= 0 || ch <= 0) return null;

	const correctedTA = cya != null
		? Math.max(ta - (cya * cyaCorrectionFactor(ph)) / 3, 1)
		: ta;

	const tf = temperatureFactor(tempF);
	const cf = Math.log10(ch) - 0.4;
	const af = Math.log10(correctedTA);

	const lsi = ph + tf + cf + af - 12.1;
	// Round to 2 decimal places
	return Math.round(lsi * 100) / 100;
}
