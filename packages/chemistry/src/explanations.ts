import type { ExplanationParams } from "./types";

// Replaces {{.Current}}, {{.Delta}}, {{.Min}}, {{.Max}} with actual values.
function interpolate(template: string, params: ExplanationParams): string {
	return template
		.replace(/\{\{\.Current\}\}/g, String(params.current))
		.replace(/\{\{\.Delta\}\}/g, String(params.delta))
		.replace(/\{\{\.Min\}\}/g, String(params.min))
		.replace(/\{\{\.Max\}\}/g, String(params.max));
}

// ---------------------------------------------------------------------------
// Free Chlorine  (source: Pooli problem_content_v4.json — lowFC/highFC)
// ---------------------------------------------------------------------------

const LOW_FC = `Concerns: Safety

Free Chlorine (FC) levels are {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Low chlorine will cause algae growth and other bacteria, like e-coli, to live in your pool. It is essential to keep your chlorine balanced for it to be safe to swim in.

If your chlorine always seems to be low, even though you are adding what seems like excessive amounts of chlorine, this can be caused by:

a) Excessive organic contaminates or algae present in the water, causing high chlorine demand.

b) A depleted or malfunctioning sanitizing system. Check your filters, ionizers, ozone generators if your levels stay off after adding recommended chemical solutions.

c) For outdoor pools, cyanuric acid (CYA) levels between 20 and 60 ppm is recommended. CYA stabilizes chlorine and keeps it from evaporating quickly.`;

const HIGH_FC = `Concerns: Safety

Free Chlorine (FC) levels are {{.Current}} ppm. Lower by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

If you need to immediately use the water, you can replace highly sanitized water with fresh water.

Alternatively, take a break from swimming, and stop adding chlorine or sanitizer. Then, test again in a day or two, sanitizers are used up as they work, and will dissipate when in contact with sunlight.`;

const HIGH_FC_WAIT = `Free Chlorine (FC) Is Too High

Your Free Chlorine (FC) level is currently higher than the ideal range. This usually happens if too much sanitizer was added recently or if there's little chlorine demand due to clean water and no swimmers.

But don't worry — there's no need to add any chemicals right now.

Instead, it's best to wait a few days. Sunlight (UV rays) and normal pool usage will naturally bring the chlorine level down to a safe, comfortable range for swimming.

Tips while you wait:

- Leave the pool uncovered during the day — sunlight breaks down chlorine.
- Keep the pump running for good circulation.
- Retest the water after 2–3 days before taking any further action.`;

// ---------------------------------------------------------------------------
// Total Chlorine  (source: lowTC/highTC)
// ---------------------------------------------------------------------------

const LOW_TC = `Concerns: Safety

Total Chlorine (TC) levels are {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Low chlorine will cause algae growth and other bacteria, like e-coli, to live in your pool. It is essential to keep your chlorine balanced for it to be safe to swim in.

If your chlorine always seems to be low, even though you are adding what seems like excessive amounts of chlorine, this can be caused by:

a) Excessive organic contaminates or algae present in the water, causing high chlorine demand.

b) A depleted or malfunctioning sanitizing system. Check your filters, ionizers, ozone generators if your levels stay off after adding recommended chemical solutions.

c) For outdoor pools, cyanuric acid (CYA) levels between 20 and 60 ppm is recommended.`;

const HIGH_TC = `Concerns: Safety

Total Chlorine (TC) is {{.Current}} ppm, higher than Free Chlorine. The difference is Combined Chlorine (chloramines), which causes pool odor and irritation.

If you need to immediately use the water, you can replace highly sanitized water with fresh water.

Alternatively, take a break from swimming, and stop adding chlorine or sanitizer. Then, test again in a day or two — sanitizers are used up as they work and will dissipate when in contact with sunlight.`;

// ---------------------------------------------------------------------------
// pH  (source: lowPH/highPH)
// ---------------------------------------------------------------------------

const LOW_PH = `Concerns: Safety, Equipment

pH levels are {{.Current}}. Raise by {{.Delta}} to get between {{.Min}} and {{.Max}}.

For situations where you're facing high alkalinity but low pH, aeration can be an effective way to increase the pH. You can achieve this by using tools like a shop vac exhaust or spa jets to introduce bubbles into the water. This process releases trapped carbon dioxide and removes carbonates, elevating the pH without affecting total alkalinity. Once your alkalinity is between 90 to 100 ppm, continue with aeration until the pH reaches a range of 7.4 to 7.6.

A combination of low pH and low alkalinity can lead to corrosion, damaging materials such as steel, copper, rubber, vinyl, and plaster in your pool.

One option is washing soda, also known as 'soda ash' or 'sodium carbonate.' It's a naturally occurring mineral with a strong alkaline nature, boasting a pH level of 11. It's essential to handle washing soda with care, avoiding skin contact due to its high alkalinity.

Borax is another alternative for pH adjustment. While still alkaline, it's milder compared to other solutions. Borax has the added advantage of being safer to store and handle. Moreover, it dissolves readily in water.`;

const HIGH_PH = `Concerns: Safety, Equipment

pH levels are {{.Current}}. Lower by {{.Delta}} to get between {{.Min}} and {{.Max}}.

Algae prefer water with a high pH. Once the pH gets too high, the algal blooms are simply waiting for your chlorine to deplete. A high pH level causes your filter to work harder and the chlorine in your pool to be inefficient. It can also cause cloudy water, scale on the pool walls and floor, discoloration of the pool's surface and eye/skin irritation.

Muriatic Acid is the least expensive and most effective way to lower pH. It can be found in hardware stores and pool stores and its correct name is Hydrochloric Acid.

Muriatic Acid comes in different concentrations — pool stores sell the higher concentration (30%) while hardware stores sell the lower concentration (15%).

Muriatic Acid is easy to use, but is very dangerous. You don't want children handling it and it should never be stored near chlorine. Fumes are highly toxic.

Dry acid is sodium bisulfate, and is much safer to use and store. However, after prolonged use, it leaves behind the sulfate ion. Sulfates can damage concrete or plaster and degrade the coatings on SWG plates. Sulfates can only be removed by draining water.`;

// ---------------------------------------------------------------------------
// Total Alkalinity  (source: lowTA/highTA)
// ---------------------------------------------------------------------------

const LOW_TA = `Concerns: Equipment

Total Alkalinity (TA) levels are {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Low alkalinity in your pool, especially when accompanied by low pH, can result in corrosion. This chemical imbalance can lead to etching and damage to various materials in your pool, such as steel, copper, rubber, vinyl, and plaster.

To raise the alkalinity, consider using baking soda. Interestingly, baking soda is identical to many 'alkalinity increasers' sold for a premium in pool stores.`;

const HIGH_TA = `Concerns: Equipment

Total Alkalinity (TA) levels are {{.Current}} ppm. Lower by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

High alkalinity limits effectiveness of chlorine. It also may cause cloudy water, scale on pool walls and floor, and discoloration of the pool's surface.

High alkalinity can cause itchy skin and irritated eyes for your swimmers! High alkalinity usually comes with high pH, and lowering pH is the best step to lower alkalinity.

Add muriatic acid or dry acid until the alkalinity level reaches about 90 to 100 ppm. Then, aerate until the pH rises to 7.4 to 7.6. You can aerate using your jet pump, or get creative with a leaf blower or shop vac (blow air into pool to aerate).`;

// ---------------------------------------------------------------------------
// Calcium Hardness  (source: lowCalcium/highCalcium)
// ---------------------------------------------------------------------------

const LOW_CH = `Concerns: Equipment

Calcium Hardness (CH) levels are {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

In many parts of the country, tap water is "soft" which has less calcium carbonate. Here the water becomes corrosive in its attempt to obtain the calcium. It pits pool surfaces and corrodes pipes and fixtures.

If you have soft water, the calcium-based sanitizer, Calcium Hypochlorite, is the best option that will sanitize and maintain calcium levels.

Alternatively, calcium chloride is a cheap, easy to store solution that is good to have on hand in areas with soft water.`;

const HIGH_CH = `Concerns: Equipment

Calcium Hardness (CH) levels are {{.Current}} ppm. Lower by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

In many parts of the country tap water with hardness levels of 400-800 ppm is common. High calcium levels can lead to scaling, especially if pH levels are allowed to rise.

Hard water is over-saturated with calcium and magnesium. This excess calcium settles on the pool surfaces creating rough spots. It looks like crystallized, whitish scale and feels like a rough spot.

Instead of removing calcium, many pool owners opt to control the mineral build-up in pools. The primary method of control is to keep well-balanced pH and alkalinity. With a proper pH of 7.3-7.6 and Total Alkalinity of 80-100 ppm, high levels of calcium rarely become problematic.

Avoid the use of calcium based sanitizers, such as Calcium Hypochlorite, or any product containing calcium.

There exist reverse osmosis (RO) filtration services that will come and recycle the calcium from your water. Search for swimming pool water recycling in your area.`;

// ---------------------------------------------------------------------------
// Cyanuric Acid  (source: lowCYA/highCYA)
// ---------------------------------------------------------------------------

const LOW_CYA = `Cyanuric Acid (CYA) levels are {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

UV radiation from the sun shortens the life of chlorine. Cyanuric acid (CYA) acts as a stabilizer that shields chlorine from the sun. Some call it "sun screen" for your pool.

With no CYA, roughly 1/3 of free chlorine exposed to UV radiation in an outdoor swimming pool is destroyed every hour.

CYA must be at least 25 ppm to effectively shield the chlorine from UV rays. Once CYA is above 65 it has negative effects and causes chlorine to be "locked out" from sanitizing water. The only way to remove CYA is by adding fresh water, so it is important to monitor and aim to keep levels between 30 and 60 ppm.

Liquid stabilizer costs more, is more pH neutral, and does not need time to dissolve, as compared to dry stabilizer. It's just a tradeoff between cost and convenience.`;

const HIGH_CYA = `Cyanuric Acid (CYA) is {{.Current}} ppm. Reduce to get between {{.Min}} and {{.Max}} ppm.

How did my CYA get so high?

Trichlor, dichlor, in powder or chlorine tab form all contain CYA. As water evaporates, CYA stays behind, similar to calcium and salt.

The most cost-effective way to fix high CYA is to replace your water with fresh water.

There are some newer solutions that may work by removing CYA with biological solutions.

If water conservation is a concern, you can recycle your water with specialized reverse osmosis (RO) filtration services. Search for swimming pool water recycling in your area.`;

// ---------------------------------------------------------------------------
// Salt  (source: lowSalt/highSalt)
// ---------------------------------------------------------------------------

const LOW_SALT = `Salt is {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Add more salt to your water.

Continued low readings when salt levels and chlorinator runtime are adequate could mean that the pump isn't circulating water properly or that the generator cells are coated with scale or simply worn out.

Low chlorine readings can indicate that you need to increase the chlorinator output or run it more frequently.`;

const HIGH_SALT = `Salt is {{.Current}} ppm, above target ({{.Min}}–{{.Max}} ppm).

You can replace your salty water with fresh water.`;

// ---------------------------------------------------------------------------
// Bromine  (source: lowTB/highTB)
// ---------------------------------------------------------------------------

const LOW_TB = `Concerns: Safety

Total Bromine is {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Low bromine will cause algae growth and other bacteria, like e-coli, to live in your pool. It is essential to keep your bromine balanced for it to be safe to swim in.

If your bromine always seems to be low, even though you are adding what seems like excessive amounts of bromine, this can be caused by:

a) Excessive organic contaminates or algae present in the water, causing high bromine demand.

b) A depleted or malfunctioning sanitizing system. Check your filters, ionizers, ozone generators if your levels stay off after adding recommended chemical solutions.`;

const HIGH_TB = `Concerns: Safety

Total Bromine is {{.Current}} ppm, above target ({{.Min}}–{{.Max}} ppm).

If you need to immediately use the water, you can replace highly sanitized water with fresh water.

Alternatively, take a break from swimming, and stop adding bromine. Then, test again in a day or two — bromine is gradually lowered as it sanitizes the water.`;

// ---------------------------------------------------------------------------
// Carbonate Hardness  (source: lowKH/highKH)
// ---------------------------------------------------------------------------

const LOW_KH = `Concerns: Equipment

Carbonate Hardness (KH) is {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Low Carbonate Hardness in your pool, especially when accompanied by low pH, can result in corrosion. This chemical imbalance can lead to etching and damage to various materials in your pool, such as steel, copper, rubber, vinyl, and plaster.

To raise the Carbonate Hardness, consider using baking soda. Interestingly, baking soda is identical to many 'alkalinity increasers' sold for a premium in pool stores.

(1 °dKH = 17.86 ppm)`;

const HIGH_KH = `Concerns: Equipment

Carbonate Hardness (KH) is {{.Current}} ppm. Lower by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

High Carbonate Hardness, especially when accompanied by low pH, can result in corrosion. This chemical imbalance can lead to etching and damage to various materials in your pool, such as steel, copper, rubber, vinyl, and plaster.

To lower the Carbonate Hardness, consider using muriatic acid. Interestingly, muriatic acid is identical to many 'alkalinity decreasers' sold for a premium in pool stores.`;

// ---------------------------------------------------------------------------
// Borates  (source: lowBorates/highBorates)
// ---------------------------------------------------------------------------

const LOW_BOR = `Borates are {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Borates are highly recommended for pools. Borate is only lowered by water loss: splash out, drag out, leaks, and filter backwashing, or draining. So, you add it once, and unless you are losing a lot of water, you don't need to add it again until you drain the pool and refill it.

There are many benefits to using borates:

- They keep the pH of the water from going up (pH buffer against rises in pH).
- Helps prevent algae and lower chlorine demand (it is an algaestat, not an algaecide).
- Provides sunscreen protection similar to cyanuric acid.`;

const HIGH_BOR = `Borates are {{.Current}} ppm, above the recommended target.

The US EPA and NSF do not recommend levels more than 50 ppm.

Borate is only lowered by water loss: splash out, drag out, leaks, and filter backwashing, or draining. So, you add it once, and unless you are losing a lot of water, you don't need to add it again until you drain the pool and refill it.`;

// ---------------------------------------------------------------------------
// Biguanide  (source: lowBig/highBig)
// ---------------------------------------------------------------------------

const LOW_BIG = `Concerns: Safety

Biguanide is {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

It is recommended to keep biguanide levels between 30-50 ppm to maintain proper sanitation and water clarity.

Low biguanide levels can lead to insufficient sanitation, algae growth, and water quality issues.

To raise low biguanide levels, add a biguanide sanitizer product according to the manufacturer's instructions.`;

const HIGH_BIG = `Concerns: Safety

Biguanide is {{.Current}} ppm, above target ({{.Min}}–{{.Max}} ppm).

It is recommended to keep biguanide levels between 30-50 ppm to maintain proper sanitation and water clarity.

High biguanide levels can cause water cloudiness, foaming, and reduced sanitizer effectiveness.

To lower high biguanide levels, partially drain the pool and refill it with fresh water, or use a biguanide reducer product according to the manufacturer's instructions.`;

// ---------------------------------------------------------------------------
// Hydrogen Peroxide  (source: lowPeroxide/highPeroxide)
// ---------------------------------------------------------------------------

const LOW_H2O2 = `Concerns: Safety

Hydrogen Peroxide is {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Low peroxide will cause algae growth and other bacteria, like e-coli, to live in your pool. It is essential to keep your peroxide balanced for it to be safe to swim in.

When exposed to ultraviolet light, such as sunlight, hydrogen peroxide reacts to create compounds that oxidize and eliminate organic nutrients that would feed bacteria and fungi.

This reaction takes place quickly, meaning that frequent use of the pool will require regular testing of the water with test strips to ensure an adequate concentration. Plan to test your water at least weekly to maintain the desired ratio.`;

const HIGH_H2O2 = `Concerns: Safety

Hydrogen Peroxide is {{.Current}} ppm, above target ({{.Min}}–{{.Max}} ppm).

If you need to immediately use the water, you can replace highly sanitized water with fresh water.

Alternatively, take a break from swimming, and stop adding peroxide sanitizer. Then, test again in a day or two — sanitizers are used up as they work and will dissipate when in contact with sunlight.`;

// ---------------------------------------------------------------------------
// Phosphate  (source: lowPhosphate/highPhosphate)
// ---------------------------------------------------------------------------

const LOW_PHOS = `Phosphate is {{.Current}} ppb.

Your phosphates are below your target range.`;

const HIGH_PHOS = `Phosphate is {{.Current}} ppb, above target.

Water should be acceptable in balance and be free of algae before treating high phosphates.

Test your water with a phosphate test kit or test strip for pools to determine level of phosphate in parts per billion.`;

// ---------------------------------------------------------------------------
// Magnesium  (source: lowMagnesium/highMagnesium)
// ---------------------------------------------------------------------------

const LOW_MG = `Magnesium is {{.Current}} ppm. Raise by {{.Delta}} ppm to get between {{.Min}} and {{.Max}} ppm.

Magnesium helps provide balanced water hardness for mineral pools. Low magnesium hardness can make mineral balance drift and reduce the pool's expected feel.

Test your magnesium hardness and compare it to your target range.

Add magnesium chloride solution slowly and in small increments, then run circulation and retest.`;

const HIGH_MG = `Magnesium is {{.Current}} ppm, above target ({{.Min}}–{{.Max}} ppm).

Magnesium hardness that is too high can shift mineral balance and may contribute to unwanted scaling or cloudy water depending on your pool chemistry.

Partially drain and refill to dilute magnesium hardness when it is persistently above target.

After replacement, allow circulation, then retest magnesium hardness.`;

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export const explanation = {
	lowFC:      (p: ExplanationParams) => interpolate(LOW_FC, p),
	highFC:     (p: ExplanationParams) => interpolate(HIGH_FC, p),
	highFCWait: (_p: ExplanationParams) => HIGH_FC_WAIT,
	lowTC:      (p: ExplanationParams) => interpolate(LOW_TC, p),
	highTC:     (p: ExplanationParams) => interpolate(HIGH_TC, p),
	lowPH:      (p: ExplanationParams) => interpolate(LOW_PH, p),
	highPH:     (p: ExplanationParams) => interpolate(HIGH_PH, p),
	lowTA:      (p: ExplanationParams) => interpolate(LOW_TA, p),
	highTA:     (p: ExplanationParams) => interpolate(HIGH_TA, p),
	lowCH:      (p: ExplanationParams) => interpolate(LOW_CH, p),
	highCH:     (p: ExplanationParams) => interpolate(HIGH_CH, p),
	lowCYA:     (p: ExplanationParams) => interpolate(LOW_CYA, p),
	highCYA:    (p: ExplanationParams) => interpolate(HIGH_CYA, p),
	lowSALT:    (p: ExplanationParams) => interpolate(LOW_SALT, p),
	highSALT:   (p: ExplanationParams) => interpolate(HIGH_SALT, p),
	lowTB:      (p: ExplanationParams) => interpolate(LOW_TB, p),
	highTB:     (p: ExplanationParams) => interpolate(HIGH_TB, p),
	lowKH:      (p: ExplanationParams) => interpolate(LOW_KH, p),
	highKH:     (p: ExplanationParams) => interpolate(HIGH_KH, p),
	lowBOR:     (p: ExplanationParams) => interpolate(LOW_BOR, p),
	highBOR:    (p: ExplanationParams) => interpolate(HIGH_BOR, p),
	lowBIG:     (p: ExplanationParams) => interpolate(LOW_BIG, p),
	highBIG:    (p: ExplanationParams) => interpolate(HIGH_BIG, p),
	lowH2O2:    (p: ExplanationParams) => interpolate(LOW_H2O2, p),
	highH2O2:   (p: ExplanationParams) => interpolate(HIGH_H2O2, p),
	lowPHOS:    (p: ExplanationParams) => interpolate(LOW_PHOS, p),
	highPHOS:   (p: ExplanationParams) => interpolate(HIGH_PHOS, p),
	lowMG:      (p: ExplanationParams) => interpolate(LOW_MG, p),
	highMG:     (p: ExplanationParams) => interpolate(HIGH_MG, p),
} as const;
