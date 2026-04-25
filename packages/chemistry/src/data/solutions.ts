// Source: solution_content_v5.json (extracted from Pooli APK)
// Do not edit by hand — regenerate via scripts/gen-solutions.py

export const CalHypo = {
	commonName: "Cal-Hypo",
	formalName: "Calcium hypochlorite",
	otherNames: [
		"Calcium hypochlorite",
	],
	chemicalFormula: "CaO(Cl)₂",
	productType: "sanitizer",
	relatedProblems: [
		"lowTC",
		"lowFC",
		"lowFCHighCYA",
		"highCombinedChlorine",
	],
	alsoHelps: [
		"lowCalcium",
		"lowCSI",
	],
	defaultPurityPct: "65",
	activeIngredientString: "available chlorine",
	effects: {
		ch: 3408,
		fc: 4828,
		tc: 4828,
		salt: 4897,
	},
	description: [
		"Cal-Hypo is a often used as a 'shock' sanitizer that raises free chlorine effectively (between 1 and 3 for most pools) while also slightly increasing  calcium hardness. Use Pooli app for proper dosage instructions.",
		"Cal-Hypo is not stabalized which means it contains no cyanuric acid.  Very commonly pools have stabilizer built up and low in calcium hardness, which makes Cal-Hypo the perfect solution.",
		"So it increases hardness and chlorine while not adding CYA.  Too much CYA causes what's known as chlorine lockout.  This happens when your CYA is above 100 ppm in most pools.",
		"Do not use if you have high-calcium (hard) water.  Use Trichlor Or Chlorinating liquid instead.  Cal-hypo is strongest of sanitizers and is good for in-door pools or using to shock pool at night.",
	],
	exampleProducts: {
		ids: [
			"3wXmmzh9e3VkKK4nNF5k",
		],
	},
	directions: [
		{
			type: "string",
			text: "Use a different sanitizer like liquid chlorine if you have high-calcium (hard) water.",
		},
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "When opening Cal-Hypo container, avoid looking directly at, or breathing in chlorine gas as it vents.",
		},
		{
			type: "string",
			text: "Distribute slowly and carefuly around perimeter of pool.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Wait eight hours before swimming and re-test.",
		},
	],
} as const;

export const MagnesiumChloride = {
	commonName: "Magnesium Chloride",
	formalName: "Magnesium chloride",
	chemicalFormula: "MgCl2",
	productType: "magnesiumUp",
	relatedProblems: [
		"lowMagnesium",
	],
	defaultPurityPct: "100",
	activeIngredientString: "magnesium",
	effects: {
		mg: 890,
	},
	description: [
		"Magnesium Chloride adds magnesium hardness to help balance magnesium-mineral pools.",
		"Use Pooli for dosage guidance based on your pool volume and water test results.",
	],
	directions: [
		{
			type: "string",
			text: "Add magnesium chloride solution according to Pooli's dosage instructions until magnesium hardness is within your target range.",
		},
		{
			type: "string",
			text: "Run circulation for several hours after adding, then retest.",
		},
		{
			type: "retest",
			text: "Retest magnesium hardness after 24 hours.",
		},
	],
} as const;

export const Trichlor = {
	commonName: "Trichlor",
	formalName: "Trichloroisocyanuric acid",
	otherNames: [
		"Slow Dissolving Chlorine Tabs",
		"Stabilized Chlorine",
	],
	chemicalFormula: "C₃Cl₃N₃O₃",
	productType: "sanitizer",
	relatedProblems: [
		"lowTC",
		"lowFC",
		"lowFCLowCYA",
		"highCombinedChlorine",
	],
	defaultPurityPct: "90",
	activeIngredientString: "available chlorine",
	effects: {
		fc: 6855,
		tc: 6855,
		ph: -367,
		cya: 4159,
		salt: 5600,
	},
	description: [
		"Trichlor is the most common stabalized sanitizer as 3-inch tabs or pucks that people leave in their pool.  Similar to Dichlor, trichlor comes with stabilizer and thus contains cyanuric acid (CYA).",
		"The CYA it contains acts as sunscreen for UV radiation.  The key to trichlor is that it dissolves slowly over time.  This means that you can leave several tabs over your required dosage in a chlorine floater, or even better, in a chlorinator, and your pool will stay sanitized for longer periods of time.",
	],
	exampleProducts: {
		ids: [
			"3wXmmzh9e3VkKK4nNF5k",
		],
	},
	directions: [
		{
			filter: {
				isIndoor: true,
			},
			type: "string",
			text: "Trichlor not recommended for indoor pools because it contains cyanuric acid (stabilizer), which is not helpful for indoor pools.",
		},
		{
			type: "string",
			text: "When opening trichlor container, avoid looking directly at, or breathing in chlorine gas as it vents.",
		},
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Add trichlor tab(s) to a floater or auto-chlorinator.  Alternatively measure trichlor according to Pooli's recommended dosage and disperse evenly around the perimeter of the pool.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "string",
			text: "Trichlor tabs dissolve slowly, and levels can be increased or decreased by adjusting your chlorinator valve, or increasing venting of your floater.",
		},
		{
			type: "retest",
			text: "Retest chlorine regularly in Pooli every two to five days.",
		},
	],
} as const;

export const Dichlor = {
	commonName: "Dichlor",
	formalName: "Dichloroisocyanuric acid",
	otherNames: [
		"Pool Shock",
		"Stabilized Granular Chlorine",
		"Chlorinating Concentrate",
		"dichloro-s-triazinetrione",
		"Troclosene",
	],
	chemicalFormula: "C₃HCl₂N₃O₃",
	productType: "sanitizer",
	relatedProblems: [
		"lowTC",
		"lowFC",
		"lowFCLowCYA",
		"highCombinedChlorine",
	],
	defaultPurityPct: "62",
	activeIngredientString: "available chlorine",
	effects: {
		tc: 4149,
		fc: 4149,
		ph: -158,
		cya: 3776,
		salt: 3384,
	},
	description: [
		"Dichlor is typically sold in granular form, providing a simple and convenient way to chlorinate pools and spas. It is available in small 1lb bags or large, sealable tubs. Dichlor is a stabilized sanitizer that is commonly known as shock. The cyanuric acid it contains acts as a sunscreen for UV radiation, protecting chlorine from sunlight degradation. Dichlor dissolves quickly in water and has an immediate effect, increasing chlorine levels to control algae and oxidize contaminants and chloramines.",
		"Note that dichlor is highly volatile and potentially explosive when mixed with calcium hypochlorite, which is often used for shocking a pool. Be careful not to mix dichlor with the wrong chemicals, as even residue can trigger a reaction. It is not the cheapest form of chlorine, costing almost double the price of trichlor tablets per pound of chlorine.",
		"Pros:",
		"Convenient Form: Dichlor is available in easy-to-use granular form, making it simple to measure and apply.",
		"Stabilized Chlorine: Contains cyanuric acid, which protects chlorine from UV degradation, enhancing its longevity in the pool.",
		"Quick Dissolution: Dissolves rapidly in water, providing an immediate increase in chlorine levels for fast and effective sanitization.",
		"Versatile Use: Effective at controlling algae and oxidizing contaminants and chloramines, maintaining clean and clear pool water.",
		"Cons:",
		"Volatility: Highly volatile and potentially explosive when mixed with calcium hypochlorite or other incompatible chemicals. Careful handling and storage are required.",
		"Cost: More expensive than other forms of chlorine, such as trichlor tablets, making it a less cost-effective option.",
		"Recommendations:",
		"Safe Handling: Always handle dichlor with care and avoid mixing it with other chemicals, especially calcium hypochlorite, to prevent dangerous reactions.",
		"Proper Storage: Store dichlor in a cool, dry place in its original, sealable container to maintain its stability and effectiveness.",
		"Regular Use: Incorporate dichlor as part of your regular pool maintenance routine for effective and immediate chlorination, while monitoring and maintaining appropriate cyanuric acid levels.",
	],
	exampleProducts: {
		ids: [],
	},
	directions: [
		{
			filter: {
				isIndoor: true,
			},
			type: "string",
			text: "Dichlor not recommended for indoor pools because it contains cyanuric acid (stabilizer), which is not helpful for indoor pools.",
		},
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "When opening dichlor container, avoid looking directly at, or breathing in chlorine gas as it vents.",
		},
		{
			type: "string",
			text: "Broadcast Dichlor into pool evenly around perimeter of pool at evening. Avoid adding in high wind.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest after eight hours. Do not enter pool with chlorine levels over 20 ppm.",
		},
	],
} as const;

export const Biguanide = {
	commonName: "Biguanide",
	formalName: "Polyhexamethylene biguanide",
	otherNames: [
		"PHMB",
		"Baquacil",
		"SoftSwim",
		"Revacil",
	],
	chemicalFormula: "(C8H17N5)n",
	effects: {
		big: 7751,
	},
	defaultPurityPct: "20",
	productType: "biguanide",
	relatedProblems: [
		"lowBig",
	],
	activeIngredientString: "biguanide",
	description: [
		"Biguanide is an alternative sanitizer used in some swimming pools instead of chlorine. It is a non-irritating, non-chlorine, and non-bromine sanitizer that is gentle on the skin and eyes, making it suitable for people with allergies or sensitivities to traditional sanitizers.",
		"Biguanide is typically sold in liquid form and works by breaking down organic contaminants in the pool water. It is compatible with other biguanide-based pool chemicals but is not compatible with chlorine or bromine products.",
		"When using biguanide, it is important to maintain proper water balance and follow the recommended dosage guidelines to ensure optimal performance and water quality.",
	],
	directions: [
		{
			type: "string",
			text: "Test your pool water regularly to ensure proper biguanide levels (typically 30-50 ppm).",
		},
		{
			type: "string",
			text: "Ensure filter is running before adding biguanide to your pool.",
		},
		{
			type: "string",
			text: "Follow the manufacturer's dosage recommendations for your specific biguanide product to increase low biguanide levels.",
		},
		{
			type: "string",
			text: "Pour the recommended amount of biguanide evenly around the perimeter of the pool.",
		},
		{
			type: "log",
			text: "Log the addition in your pool maintenance app or records.",
		},
		{
			type: "retest",
			text: "Retest the pool water after 24 hours to ensure the biguanide levels have increased to the desired range. Make additional adjustments if needed.",
		},
	],
} as const;

export const OxidizingShock = {
	commonName: "Oxidizing Shock",
	formalName: "Potassium Monopersulfate",
	otherNames: [
		"KMPS",
		"MPS",
		"Non-chlorinating shock",
	],
	chemicalFormula: "KHSO₅",
	productType: "oxidant",
	activeIngredientString: "Potassium (peroxy)monopersulfate",
	effects: {},
	ouncesPerCup: "12.8",
	weeklyOunces: "16",
	description: [
		"KMPS is used to shock pools for a variety of reasons. Some use it to avoid using chlorine.",
		"The most important point to remember is that while it is certainly a strong oxidant, it is NOT a sanitizer, and therefore provides no protection against bacteria and viruses.",
		"KMPS is 1/4 as sensitive to sunlight as chlorine.",
		"Using KMPS may be preferrable for indoor pools, where there is no sunlight or wind to help break down and carry away combined chlorine.",
		"KMPS has several important disadvantages. As it breaks down urea and chloramines, it produces nitrate ions. This is an important because like phosphates, nitrates are great algae food.  Furthermore, it lowers the pH and the total alkalinity. KMPS shows up as combined chlorine in the DPD test and as free chlorine in the FAS-DPD test.  Lastly, it is expensive. Depending on the quantity purchased, it ranges from $3 to $5 per pound.",
	],
	exampleProducts: {
		ids: [
			"B07P1CRDZJ",
		],
	},
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "The recommended shock dose is 1 lb per 10,000 gallons of water. Poor around perimiter of water",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "string",
			text: "Wait 30 minutes to swim.",
		},
	],
} as const;

export const LiquidSolarCover = {
	commonName: "Liquid Solar Cover",
	otherNames: [
		"Solar Blanket",
	],
	chemicalFormula: "Alcohol and Calcium hydroxide",
	productType: "liquidSolar",
	relatedProblems: [
		"lowTemp",
	],
	effects: {},
	weeklyOunces: "2",
	description: [
		"Liquid solar keeps your water warm and slows water evaporation by over 15%.  The liquid is actually a combination of a type of alcohol and calcium hydroxide that's lighter than water so that it creates a microscopically thin film on the pool's surface.",
		"Most of a pool's heat is lost through the surface due to water evaporation.  The same thing that happens to your body temperature when you sweat.",
		"There's very little chemical in a liquid solar cover, making it extremely safe for anyone in the pool. It's non-toxic, odor-free, and 100% safe for your filtration system.",
		"Windy weather will make the solution less effective as movement disturbs the cover.  However, cleanup is more work as the pool needs to be vaccumed to remove the residue. However, the convenience and ease of use makes liquid solar a great option to extend the pool season and conserve water.",
	],
} as const;

export const CalciumChloride = {
	commonName: "Calcium Chloride",
	formalName: "Calcium Chloride",
	otherNames: [
		"Calcium up",
		"Hardness Increaser",
		"Calcium Hardness",
	],
	chemicalFormula: "CaCl₂",
	relatedProblems: [
		"lowCalcium",
	],
	alsoHelps: [
		"lowCSI",
	],
	productType: "calciumUp",
	effects: {
		ch: 6754,
	},
	description: [
		"Calcium chloride increases calcium hardness levels in your pool and nothing else.",
		"Always retest in between adding additional Calcium Hardness, you do not want to add too much.",
		"It's the same chemical they sprinkle on roadways during the winter to heat them up, and place into hand warmers.  It heats up when wet, so store in a dry place.",
		"In many parts of the country, tap water is \"soft\" which means low calcium harness. Here the water becomes corrosive in its attempt to obtain the calcium. It pits pool surfaces and corrodes pipes and fixtures.",
		"Once calcium is added to water, it is difficult to remove without partially draining your pool and replacing with soft water, so be very careful when your calcium hardness is above 300 to not add solutions that increase your calcium.",
		"Alternatively, use of calcium based sanitizers, such as Calcium Hypochlorite or Dichlor are good options that will sanitize and gradually raise calcium levels.",
	],
	exampleProducts: {
		ids: [
			"B07P1CRDZJ",
		],
	},
	dosageIncrement: 3,
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Add partial dosage, wait at least eight hours, then retest before adding more.",
		},
		{
			type: "string",
			text: "Note: Calcium chloride will heat up rapidly when it gets wet.",
		},
		{
			type: "string",
			text: "Broadcast slowly around perimeter of your pool. Do not concentrate into a single area.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest after eight hours.",
		},
	],
} as const;

export const LiquidCalciumBooster = {
	commonName: "Liquid Calcium Booster",
	formalName: "Dissolved Calcium Chloride",
	otherNames: [
		"Calcium up",
		"Hardness Increaser",
		"Calcium Hardness",
	],
	chemicalFormula: "CaCl₂ + H₂O",
	relatedProblems: [
		"lowCalcium",
	],
	alsoHelps: [
		"lowCSI",
	],
	productType: "calciumUp",
	effects: {
		ch: 3500,
	},
	description: [
		"Liquid Calcium Booster is pre-dissolved calcium chloride.  Calcium chloride increases calcium hardness levels in your pool and nothing else.",
		"Always retest in between adding additional Calcium Hardness, you do not want to add too much.",
		"In many parts of the country, tap water is \"soft\" which means low calcium harness. Here the water becomes corrosive in its attempt to obtain the calcium. It pits pool surfaces and corrodes pipes and fixtures.",
		"Once calcium is added to water, it is difficult to remove without partially draining your pool and replacing with soft water, so be very careful when your calcium hardness is above 300 to not add solutions that increase your calcium.",
		"Alternatively, use of calcium based sanitizers, such as Calcium Hypochlorite or Dichlor are good options that will sanitize and gradually raise calcium levels.",
	],
	exampleProducts: {
		ids: [
			"B07P1CRDZJ",
		],
	},
	dosageIncrement: 2,
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Add partial dosage, wait at least eight hours, then retest before adding more.",
		},
		{
			type: "string",
			text: "Pour slowly around perimeter. Do not concentrate into a single area.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest after eight hours.",
		},
	],
} as const;

export const LiquidFlocculant = {
	commonName: "Liquid Flocculant",
	otherNames: [
		"Pool Flocc",
	],
	relatedProblems: [
		"highPhosphate",
		"cloudy",
	],
	productType: "clarifier",
	effects: {},
	weeklyOunces: "2",
	description: [
		"Flocculant comes in liquid and solid form but both do the same thing.",
		"Flocculant clears cloudy pool water by clumping small particles together and dropping them to the bottom of the pool to be vacuumed out. The Flocculant is ideal for pool opening and really hazy water.",
		"Flocculant is very similar to Clarifier.  Flocculant drops particles to the bottom of the pool, while clarifier floats to the top.  Also flocculant is a bit faster acting.  However, cleanup is more work as the pool needs to be vaccumed to remove the residue.",
	],
} as const;

export const SolidFlocculant = {
	commonName: "Solid Flocculant",
	otherNames: [
		"Pool Flocc",
	],
	productType: "clarifier",
	relatedProblems: [
		"highPhosphate",
		"cloudy",
	],
	effects: {},
	weeklyOunces: "24",
	description: [
		"Flocculant comes in liquid and solid form but both do the same thing.",
		"Flocculant clears cloudy pool water by clumping small particles together and dropping them to the bottom of the pool to be vacuumed out. The Flocculant is ideal for pool opening and really hazy water.",
		"Flocculant comes in liquid and solid form but both do the same thing.  Flocculant is very similar to Clarifier.  Flocculant drops particles to the bottom of the pool, while clarifier floats to the top.  Also flocculant is a bit faster acting.  However, cleanup is more work as the pool needs to be vaccumed to remove the residue.",
	],
} as const;

export const Clarifier = {
	commonName: "Clarifier",
	otherNames: [
		"coagulator",
	],
	productType: "clarifier",
	relatedProblems: [
		"cloudy",
	],
	effects: {},
	weeklyOunces: "2",
	description: [
		"Pool clarifier contains polymers that act as coagulants on tiny particles. When you add a clarifier to cloudy water, all those tiny particles clump together into bigger particles your filter can capture and keep from reentering the pool.",
		"Clarifier is very similar to Flocculant.  Flocculant drops particles to the bottom of the pool, while clarifier floats to the top.",
		"Clarifier is ideal for mild cloudiness in the water, and can be used at any time to add some extra sparkle.  It may be two or three days before your pool is completely clear, depending on the cloudiness.  Over time, after lots of clarifying, you will need to clean your filter.  It's a good idea to clean or backwash your filter at least once a season as captured particles in the filter reduce its effectiveness",
	],
} as const;

export const Bleach = {
	commonName: "Bleach",
	formalName: "Sodium Hypochlorite",
	otherNames: [
		"Liquid Chlorine",
		"Sodium Hypochlorite",
	],
	chemicalFormula: "NaClO",
	productType: "sanitizer",
	relatedProblems: [
		"lowTC",
		"lowFC",
		"lowFCHighCYA",
		"highCombinedChlorine",
	],
	defaultPurityPct: "10",
	activeIngredientString: "available chlorine",
	effects: {
		fc: 781,
		tc: 781,
		salt: 1286,
	},
	description: [
		"Liquid chlorine is the most simple, effective, and low-cost sanitizer.",
		"It is un-stabalized in that it does not include cyanuric acid or CYA, the sunscreen for pools.  It's best to use when your water already contains at least 20 ppm CYA, or is not exposed to sunlight.",
		"For outdoor pools, we recommend using liquid chlorine for two seasons, and then switching to trichlor tabs for two seasons (ideally the sunnier seasons) for the most effective sanitization schedule.",
		"Liquid chlorine will degrade over time and will lose half it's potency in 6-12 months.  Store in cool dark area for best shelf life.",
	],
	exampleProducts: {
		ids: [
			"B087XBLXVN",
		],
	},
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Pour recommended dosage around perimeter of pool",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest after an hour",
		},
	],
} as const;

export const HydrogenPeroxide = {
	commonName: "Hydrogen Peroxide",
	chemicalFormula: "H₂O₂",
	formalName: "Hydrogen Peroxide",
	relatedProblems: [
		"lowPeroxide",
	],
	productType: "peroxide",
	defaultPurityPct: "35",
	effects: {
		h202: 2769.2,
	},
	description: [
		"Hydrogen Peroxide (H2O2) is a liquid chemical compound that exhibits very powerful oxidizing, bleaching and disinfection properties. You may be familiar with it as a sterilizing agent for cuts and other types of wounds.",
		"Because hydrogen peroxide oxidizes quickly, it is best not to stock up on more than a 30 day supply. It should be stored in a cool, dark, well-ventilated place, away from the reach of children. When you are handling the 35% bottles of hydrogen peroxide, you should wear protective eyewear & gloves.",
		"Incompatible with bromine and chlorine. Given the deficiencies that exist with hydrogen peroxide, it would be ideal if it could be used in conjunction with bromine or chlorine to provide an effective oxidation / sanitation system. Hydrogen peroxide, however, cannot co-exist with bromine or chlorine in water. In fact, hydrogen peroxide is used as a chlorine neutralizer to remove chlorine from water.",
	],
	directions: [
		{
			type: "string",
			text: "Note: Peroxide should not be added to chlorine and bromine pools.",
		},
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "As with any oxidizer, handle hydrogen peroxide with proper physical protection, including neoprene gloves and safety goggles.  Avoid skin contact and inhalation of concentrated hydrogen peroxide.",
		},
		{
			type: "string",
			text: "Pour recommended dosage around perimeter of pool",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest after an hour, and don't re-enter water until h2o2 is below 6 ppm.",
		},
		{
			type: "string",
			text: "Hydrogen and oxygen molecules recombine to form water and lower the potency of food-grade hydrogen peroxide, so it's best not to buy more than a 30-day supply.",
		},
	],
} as const;

export const Bromine = {
	commonName: "Bromine",
	formalName: "Bromochloro Dimethylhydantoin",
	chemicalFormula: "C₅H₆BrClN₂O₂",
	ouncesPerTab: 0.7,
	productType: "bromine",
	otherNames: [],
	relatedProblems: [
		"lowTB",
	],
	defaultPurityPct: "98",
	activeIngredientString: "available bromine",
	effects: {
		tb: 482,
		salt: 793,
	},
	description: [
		"Bromine is a common hot tub sanitizer available in 1” tablets and can be used in a feeder, floating dispenser or placed in your skimmer basket.  Bromine tabs dissolve slowly to keep available bromine up in your water over time.",
		"Bromine is far more stable and effective in high temperatures than chlorine, which is why it is almost always used in spas and hot tubs. The money you will save by purchasing chlorine over bromine for use in a spa is usually negated rather quickly due to the fact that you will need to use much more chlorine to keep the spa sanitized.",
	],
	directions: [
		{
			type: "string",
			text: "Add a bromine tablet to a floater, which will keep the tablet on the surface of the water while it dissolves.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest the water after 24 hours.",
		},
	],
} as const;

export const DryAcid = {
	commonName: "Dry Acid",
	relatedProblems: [
		"highTA",
		"highPH",
		"highKH",
	],
	formalName: "Sodium Bisulfate",
	chemicalFormula: "NaHSO₃",
	otherNames: [
		"pH Reducer",
		"pH minus",
		"pH decreaser",
	],
	productType: "phDown",
	effects: {
		ta: -2909,
		ph: -167.9,
		kh: -2909,
	},
	dosageIncrement: 3,
	description: [
		"When pH gets too high, water is prone to scale and cloud.  Dry acid has very low pH and is the simplest fix.  Use Pooli to test pH and do not add more than 3/4 the recommended dosage at any time.  Sodium Bisulfate will likely decrease your pH and alkalinity as well, make sure to to add alkalinity up as necessary after balancing pH.",
		"Dry acid often comes in powder form so you will want to avoid working with it on a windy day. Overall, it is less corrosive and safer to store than muriatic acid, a common pH decreaser alternative.",
		"It's important that the dry acid is evenly spread around the pool so that it reaches all the corners.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Do not add in high wind.  Dry acid is highly corrosive, will easily damage clothing and equipment, and should not be handled by children.",
		},
		{
			type: "string",
			text: "Add dosage in a bucket of water to dissolve. Then, add solution evenly near the water return jet sights, or where water flows into the pool. Do not add the powder to the water at the inlet sights like the skimmer area.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "string",
			text: "You can spread the powder around with a brush as necessary to have it dissolve faster.",
		},
		{
			type: "string",
			text: "Add partial dosage waiting at least three hours between doses up to max recommended dosage.",
		},
		{
			type: "retest",
			text: "Retest the water after three hours.",
		},
	],
} as const;

export const MuriaticAcid = {
	commonName: "Muriatic Acid",
	formalName: "Hydrochloric acid",
	relatedProblems: [
		"highPH",
		"highTA",
		"highKH",
	],
	chemicalFormula: "HCl",
	otherNames: [
		"pH decreaser",
		"Hydrochloric acid",
		"Acid",
	],
	productType: "phDown",
	defaultPurityPct: "14.5",
	effects: {
		ta: -1956.0,
		ph: -120.1,
		kh: -1956.0,
	},
	description: [
		"When pH gets too high, your water is prone to scale and cloud.  Muriatic acid has very low pH and reduces pH quickly.  Use Pooli to test pH and do not add more than 1/2 the recommended dosage at any time.",
		"Muriatic Acid will decrease alkalinity as well, make sure to to add alkalinity up as necessary after balancing pH.  If you are using Muriatic acid to lower alkalinity, make sure to add in very small doses (<1/5 required dose), and keep pH balanced by aerating water or adding pH up (soda ash).",
		"Muriatic acid can be found at all hardware stores in one or two-gallon containers near the pool supplies area.",
	],
	dosageIncrement: 4,
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Note: careful, Muriatic Acid is highly corrosive.  Never allow children to handle, and do not breath in fumes which are toxic.",
		},
		{
			type: "string",
			text: "Add dosage near active jets, active water features, or where water flows into the pool. Do not add in or near skimmer baskets.",
		},
		{
			type: "string",
			text: "Alternatively, Dilute first in a bucket of water and pour slowly and evenly around perimiter of pool.",
		},
		{
			type: "string",
			text: "Add partial dosage waiting at least three hours between doses up to max recommended dosage.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest the water after three hours.",
		},
	],
} as const;

export const Salt = {
	commonName: "Salt",
	formalName: "Sodium Chloride",
	relatedProblems: [
		"lowSalt",
	],
	chemicalFormula: "NaCl",
	productType: "salt",
	defaultPurityPct: "100",
	effects: {
		salt: 7469,
	},
	description: [
		"Salt, sodium chloride, is used to raise salinity in salt-water pools.",
		"Salt water pools use salt water generators (SWG) units to manufacture chlorine from salt via electricity.  The SWG breaks dissolved salt into hypochlorous acid and sodium hypochlorite, two sanitizing agents used in chlorine-based swimming pools.",
		"SWG units use three different forms of salt.",
		"Solar salt is derived from seawater evaporated by the sun, and contains impurities such as dead brine shrimp and bactertis. Impurities make the salt generator (and the salt water filter) work harder.",
		"Mechanically evaporated salt is also made from sea water, but generated heat is used to evaporate the water instead of sunlight, which burns of organic matter. Mechanically evaporated salt may, however, include pool-damaging minerals.",
		"Mined salt is dug from the ground, and is considered the purest form of salt, perfect for pools!",
		"The amount of salt your pool requires depends on the level of salt needed for your salt chlorine generator to function properly. Check the owner's manual to find this amount.  Residual salt usually ranges from 3,000 to 4,000 ppm (parts per million).  You can use Pooli to calculate dosage according to your pool size.",
	],
	directions: [
		{
			type: "string",
			text: "Note: For salt water pools only!",
		},
		{
			type: "string",
			text: "Distribute over the widest water surface area possible for fastest dissolve rate",
		},
		{
			type: "string",
			text: "Avoid piling salt on the pool surface and brush as necessary until fully dissolved",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest the water after a day.",
		},
	],
} as const;

export const BakingSoda = {
	commonName: "Baking Soda",
	formalName: "Sodium Bicarbonate",
	chemicalFormula: "NaHCO₃",
	relatedProblems: [
		"lowTA",
		"lowKH",
	],
	otherNames: [
		"Alkalinity Up",
		"Alkalinity Increaser",
		"Baking Soda",
		"Sodium Bicarbonate",
	],
	productType: "alkalinityUp",
	effects: {
		ta: 4462,
		ph: 9.1,
		kh: 4462,
	},
	description: [
		"Baking soda, or Sodium Bicarbonate, is a versatile solution for pool care. Not only does it effectively raise both the alkalinity and pH levels of pool water, but it also serves as a buffer to prevent drastic pH fluctuations. Essentially, it is the same compound found in many commercially branded 'alkalinity increasers.'",
		"Beyond its primary function, baking soda has multiple uses around the pool area. For instance, a paste made from water and baking soda can serve as a gentle yet efficient cleaner for pool tiles, grout, and even stone or concrete pool decks.",
		"For pools with both low pH and low alkalinity, introducing baking soda can be crucial. Such imbalances can lead to corrosion, affecting materials like steel, copper, rubber, vinyl, and plaster. Administering the recommended dosage of baking soda can help rectify these imbalances, safeguarding the longevity of your pool.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure the pool filter is operational before starting the treatment.",
		},
		{
			type: "string",
			text: "Evenly distribute baking soda around the pool's perimeter, adhering to the recommended dosage.",
		},
		{
			type: "log",
			text: "Record the addition in your Pooli log.",
		},
		{
			type: "retest",
			text: "After a waiting period of four hours, retest the pool water to ensure the desired chemical balance.",
		},
	],
} as const;

export const SodaAsh = {
	commonName: "Soda Ash",
	formalName: "Sodium Carbonate",
	chemicalFormula: "Na₂CO₃",
	otherNames: [
		"Sodium Carbonate",
		"pH Up",
		"pH increaser",
		"Washing Soda",
	],
	relatedProblems: [
		"lowPH",
	],
	alsoHelps: [
		"lowTA",
		"lowCSI",
		"lowKH",
	],
	productType: "phUp",
	defaultPurityPct: "100",
	effects: {
		ta: 7072,
		ph: 217.1,
		kh: 7072,
	},
	description: [
		"Washing soda, or \"soda ash or sodium carbonate,\" will quickly increase pH.  Washing soda is a naturally occurring mineral that is extremely alkaline with a pH level of 11. It should never come into contact with skin.",
		"Like washing soda, borax is also quite alkaline, though less than other solutions.  This makes borax a safer chemical to store and handle.  Also, borax will dissolve in water more easily.",
		"Water with low pH may cause your plumbing may start to erode, your walls to stain and etch, and your swimmers will start to complain with itchy skin and burning eyes.",
		"You want to keep your pH balanced between 7.3 and 7.7 with 7.5 being ideal. Unbalanced pH kills chlorine's power.  In this scenario, you can add all the chlorine you want and your pH levels will render it useless.",
		"Low pH is often caused by things like rainwater or debris getting into your pool.  Total alkalinity will stabilize your pH from dropping too low, so it's important to test this level every time you test your pH levels.",
	],
	directions: [
		{
			type: "string",
			text: "Tip - If your alkalinity level is high, you can raise pH by aeration with jets, or by using a leaf blower.  As you aerate, the pH will rise without increasing alkalinity.",
		},
		{
			type: "string",
			text: "Add dosage until pH raises to target range",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "string",
			text: "Allow water to recirculate two to three hours, recheck pH, and repeat treatments if necessary.",
		},
		{
			type: "retest",
			text: "Retest the water after three hours.",
		},
	],
} as const;

export const Borax = {
	commonName: "Borax",
	chemicalFormula: "Na₂[B₄O₅(OH)₄]·8H₂O",
	otherNames: [
		"Pure Borax",
		"sodium tetraborate decahydrate",
		"sodium borate",
		"20 Mule Team Borax™",
	],
	relatedProblems: [
		"lowBorates",
		"lowPHLowAlkalinity",
		"lowPH",
	],
	alsoHelps: [
		"lowTA",
		"lowCSI",
		"lowKH",
	],
	exampleProducts: {
		ids: [
			"B07KTFFCFH",
			"B07BRZDDTZ",
		],
	},
	productType: "borates",
	effects: {
		ta: 1950,
		ph: 109.1,
		bor: 849,
		kh: 1950,
	},
	description: [
		"Borax is a chemical compound of the element boron. It’s a chalky, white, powdery substance primarily known for its uses as a household cleaning agent and as a pool water treatment chemical.",
		"Borax has a high pH and will significantly increase the pH of your pool water when used. Always counterbalance the pH changes from Borax with an addition of muriatic acid or another pH reducer to maintain optimal pH levels.",
		"Borates, derived from borax, are highly recommended for pools. Adding borate is typically a one-time process. Borates help stabilize the pH of the water, acting as a buffer against rises in pH. They also assist in preventing algae growth and reducing chlorine demand.",
		"Maintaining a balanced pH between 7.4 and 7.6, with 7.5 being ideal, is crucial for effective chlorine sanitation. An unbalanced pH can significantly reduce the efficacy of chlorine, rendering it less effective at keeping the pool water clean and safe.",
		"If adding large amounts of borax, there's a risk of increasing your pH too much. To counteract this, introduce muriatic acid or another pH reducer when adding borax to ensure the pH remains within the recommended range.",
		"Regularly monitor your pool’s borate levels to keep them between 30-50 ppm. This helps maintain the benefits of borates without risking potential side effects such as skin or eye irritation, or harm to pets and plants from high borate levels.",
		"Borates not only help in maintaining water clarity and comfort but also reduce the frequency of pH adjustments, making overall pool maintenance more manageable.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Total Alkalinity must be less than 140 ppm, Hardness less than 350 ppm and pH less than 7.4.",
		},
		{
			type: "string",
			text: "Empty about 1/2 of the Borax dose into a large bucket and break up any lumps with a scoop or other tool.",
		},
		{
			type: "retest",
			text: "Retest the water after 30 minutes to an hour.",
		},
		{
			type: "string",
			text: "Use muriatic acid to lower your pH back under 7.4, and repeat this process til your borate dosage is complete.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "string",
			text: "Allow water to recirculate two to three hours, recheck pH, and repeat treatments if necessary.",
		},
		{
			type: "retest",
			text: "Retest the water after three hours.",
		},
	],
} as const;

export const BoricAcid = {
	commonName: "Boric Acid",
	chemicalFormula: "H₃BO₃",
	otherNames: [
		"hydrogen borate",
		"boracic acid",
		"orthoboric acid",
	],
	exampleProducts: {
		ids: [
			"B072MJ2GLN",
		],
	},
	relatedProblems: [
		"lowBorates",
	],
	alsoHelps: [
		"highPH",
	],
	productType: "borates",
	effects: {
		ph: -7.6,
		bor: 1310,
	},
	description: [
		"Boric acid can be used as a naturally occurring all-purpose cleaner. It is a versatile and effective compound commonly used in various cleaning applications, including pool maintenance.",
		"Boric acid is a weak acid with a pH of 3.8-4.8. It will not significantly lower the pH of pool water, making it a gentle and safe option for maintaining balanced water chemistry.",
		"Because of its mild acidity, you can add boric acid to your pool without the need to counterbalance it with muriatic acid, unlike when adding Borax or sodium tetraborate pentahydrate, which have higher pH levels and require pH adjustment.",
		"Additionally, if you have metals in the water or have experienced metal staining, boric acid will not cause additional staining, deposits, or precipitation. This makes it a suitable choice for pools with metal content concerns.",
		"Pros:",
		"pH Stability: Boric acid's weak acidity means it will not significantly alter the pool's pH, reducing the need for frequent pH adjustments.",
		"No Additional Staining: Boric acid does not cause metal staining or precipitation, making it safe for pools with metal content.",
		"Versatility: It serves as an effective all-purpose cleaner, contributing to overall pool hygiene and maintenance.",
		"Gentle on Equipment: Being a mild acid, boric acid is gentle on pool equipment and surfaces, minimizing wear and tear.",
		"Cons:",
		"Limited pH Impact: While its mild nature is beneficial for stability, it may not be suitable for situations where significant pH adjustment is needed.",
		"Specific Use Case: It is mainly used for maintenance rather than solving specific chemical imbalances or contamination issues.",
		"Recommendations:",
		"Monitor Water Chemistry: Regularly test your pool water to ensure all parameters remain within recommended ranges, even when using boric acid.",
		"Use as Part of Routine Maintenance: Incorporate boric acid as part of your regular pool maintenance routine to enhance water quality and cleanliness.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Using a scoop or plastic bowl broadcast the powder around the perimeter of your pool.",
		},
		{
			type: "string",
			text: "Brush around any accumulated powder on the pool bottom.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest the water after 12 hours.",
		},
	],
} as const;

export const TetraboratePentahydrate = {
	commonName: "Tetraborate Pentahydrate",
	chemicalFormula: "Na₂B₄O₇",
	otherNames: [
		"borax pentahydrate",
		"sodium borate pentahydrate",
		"sodium tetraborate pentahydrate",
	],
	exampleProducts: {
		ids: [
			"B072MJ2GLN",
		],
	},
	productType: "borates",
	relatedProblems: [
		"lowBorates",
	],
	alsoHelps: [
		"lowPH",
		"lowTA",
		"lowCSI",
		"lowKH",
	],
	effects: {
		ph: 166.8,
		ta: 2549,
		kh: 2549,
		bor: 1112,
	},
	description: [
		"Just like Borax, sodium tetraborate pentahydrate has a high pH of about 9.2. It’s a white, crystalline substance commonly used in pools for water treatment and pH stabilization.",
		"Sodium tetraborate pentahydrate is very similar in form and function to Borax but is about 30% stronger in every effect. This means it can be more effective at stabilizing pH, preventing algae, and reducing chlorine demand, but it also requires careful handling and precise dosing.",
		"Pros:",
		"pH Stabilization: Sodium tetraborate pentahydrate helps maintain stable pH levels, reducing the frequency of pH adjustments.",
		"Algae Prevention: Its algaecidal properties help in preventing algae growth, keeping the pool water clear and reducing maintenance efforts.",
		"Reduced Chlorine Demand: By stabilizing pH and preventing algae, it helps lower the amount of chlorine needed to maintain proper sanitation levels.",
		"Water Softening: Enhances the feel of the water, making it softer and more comfortable for swimmers.",
		"Cons:",
		"High pH Impact: Due to its high pH, adding sodium tetraborate pentahydrate can significantly increase the pool’s pH level. It’s crucial to counterbalance this with a pH reducer like muriatic acid.",
		"Toxicity Risks: At high levels, it can be toxic to pets and wildlife if ingested. Ensure that pets are kept away from pool water.",
		"Skin and Eye Irritation: Excessively high concentrations can cause skin and eye irritation for swimmers.",
		"Plant Damage: If pool water containing sodium tetraborate pentahydrate is used for irrigation or leaks into landscaping, it can harm plants.",
		"Recommendations:",
		"Maintain Appropriate Levels: Keep sodium tetraborate pentahydrate levels within the recommended range to avoid potential side effects. Typically, borate levels should be maintained between 30-50 ppm.",
		"Regular Testing: Regularly test the pool water for borate levels and other chemical parameters to ensure a balanced and safe swimming environment.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running",
		},
		{
			type: "string",
			text: "Using a scoop or plastic bowl broadcast the powder around the perimeter of your pool.",
		},
		{
			type: "string",
			text: "Brush around any accumulated powder on the pool bottom.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Retest the water after 12 hours.",
		},
	],
} as const;

export const DryStabilizer = {
	commonName: "Dry Stabilizer",
	chemicalFormula: "Na₂[B₄O₅(OH)₄]·8H₂O",
	otherNames: [
		"Cyanuric Acid",
		"Stabilizer",
		"Stabilized Chlorine",
	],
	productType: "cyanuricAcid",
	effects: {
		cya: 7490,
		ph: -138.8,
	},
	relatedProblems: [
		"lowCYA",
	],
	description: [
		"Cyanuric acid provides UV protection for chlorine. In other words, it's sunscreen for your pool. It helps prevent chlorine from breaking down quickly when exposed to sunlight, thereby extending the effectiveness of the chlorine in the pool.",
		"Monitor your pool's cyanuric acid (CYA) levels closely, especially when they are above 50 ppm. High levels of CYA can reduce the effectiveness of chlorine. In such cases, switch to an unstabilized sanitizer like bleach or calcium hypochlorite (Cal-Hypo) instead of stabilized chlorine products like trichloroisocyanuric acid (Trichlor) and sodium dichloroisocyanurate (Dichlor).",
		"Normally, you won't need to add stabilizer in its pure form frequently. However, if you recently replaced a significant amount of water or have CYA levels below 20 ppm, consider adding stabilizer to ensure adequate UV protection for your chlorine.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running.",
		},
		{
			type: "string",
			text: "Add only small amounts every eight hours up to max recommended dosage, retesting between additions.",
		},
		{
			type: "string",
			text: "Add evenly around perimeter of pool",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Wait eight hours before re-testing the water.",
		},
	],
} as const;

export const LiquidStabilizer = {
	commonName: "Liquid Stabilizer",
	chemicalFormula: "Na₂[B₄O₅(OH)₄]·8H₂O",
	otherNames: [
		"Cyanuric Acid",
		"Stabilizer",
		"Stabilized Chlorine",
	],
	productType: "cyanuricAcid",
	effects: {
		cya: 2890,
	},
	relatedProblems: [
		"lowCYA",
	],
	description: [
		"Cyanuric acid provides UV protection for chlorine.  In other words, it's sunscreen for your pool.",
		"Monitor your pool for when stabilizer levels start to get above 50 and swich from using stabilized chlorine found in Trichlor and Dichlor.",
		"Normally you won't need stabilizer in it's pure form, but only if you recently replaced a lot of water or have very low levels.",
		"Liquid stabilizer acts more quickly than dry stabilizer.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running.",
		},
		{
			type: "string",
			text: "Add evenly around perimeter of pool",
		},
		{
			type: "string",
			text: "Add only small amounts every eight hours up to max recommended dosage, retesting between additions.",
		},
		{
			type: "string",
			text: "The liquid can be thick, and you may need to rinse bottle several times with pool water.",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Wait eight hours before re-testing the water.",
		},
	],
} as const;

export const PhosphateReducer = {
	commonName: "Phosphate Reducer",
	chemicalFormula: "(OCH₂CH₂N+(CH₃)₂CH₂CH₂N+(CH₃)₂CH₂CH₂)n₂nCl-",
	otherNames: [
		"Phos Plus",
		"Phos Free",
	],
	relatedProblems: [
		"highPhosphate",
	],
	productType: "phosphate",
	effects: {
		phos: -1666667,
	},
	description: [
		"Phosphate reducers are specialty chemicals used to remove phosphates from pool water. They help in maintaining clear and algae-free pool water by reducing the food source for algae.",
		"Phosphate reducers are typically salts of aluminum or lanthanum. When added to water, they produce insoluble phosphate compounds that are removed through filtration, vacuuming, or both, thereby lowering the phosphate levels in the pool.",
		"It should be noted that not all phosphates found in pools are bad. Some phosphates, like polyphosphates, and other phosphorus-containing compounds, are excellent sequestering agents that protect the pool from metal staining and scale formation.",
		"Other phosphates, namely orthophosphates, are known to be a source of food for algae. Phosphate reducers were introduced as a means of limiting this food source, thus curtailing the ability of algae to grow in the pool. However, since these products are not EPA registered as algaecides, their labels cannot claim algae control. Nevertheless, the removal of algae food is an effective way to prevent algae growth.",
		"Pros:",
		"Algae Prevention: By removing orthophosphates, phosphate reducers help limit the food source for algae, thereby reducing the likelihood of algae growth.",
		"Clearer Water: Reducing phosphate levels can help maintain clearer water by preventing algae blooms.",
		"Maintenance Aid: Phosphate reducers can make overall pool maintenance easier by helping to keep the water balanced and clean.",
		"Cons:",
		"Not a Direct Algaecide: Phosphate reducers are not registered as algaecides, so they cannot claim to directly kill or control algae.",
		"Potential Misuse: Misunderstanding the types of phosphates and their roles can lead to unnecessary or improper use of phosphate reducers.",
		"Recommendations:",
		"Monitor Phosphate Levels: Regularly test your pool's phosphate levels and use phosphate reducers as needed to keep them low, particularly when high orthophosphate levels are detected.",
		"Understand Phosphate Types: Differentiate between beneficial polyphosphates and problematic orthophosphates to use phosphate reducers effectively.",
		"Combine with Algae Prevention Measures: Use phosphate reducers as part of a comprehensive algae prevention strategy, including proper sanitation, filtration, and regular maintenance.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running.",
		},
		{
			type: "string",
			text: "Slowly poor dosage evenly around perimeter of pool",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "string",
			text: "Your water will temporarily cloud following addition. The more phosphates your pool contains, the more clouding you will notice.",
		},
		{
			type: "string",
			text: "Run filter for a minimum of 24 hours after adding. Your water will turn from cloudy to clear.",
		},
		{
			type: "string",
			text: "Optionally add Clarifier to help with cloudyness after treatment.",
		},
		{
			type: "string",
			text: "Clean or backwash your filter until pressure is within manufacturer specification (ie. under 20 lbs).",
		},
		{
			type: "retest",
			text: "After 48 hours, re-test for phosphates, and following directions above, retreat until phosphates are below 125 ppb.",
		},
	],
} as const;

export const Water = {
	commonName: "Water",
	productType: "water",
	chemicalFormula: "H₂O",
	relatedProblems: [
		"highCalcium",
	],
	directions: [
		{
			type: "string",
			text: "There is no simple chemical that you can add to your pool that will reduce hardness.",
		},
		{
			type: "string",
			text: "Your tap water may have lower calcium than your pool water.",
		},
		{
			type: "string",
			text: "If this is the case, replace your pool water with fresh water.",
		},
		{
			type: "tool",
			text: "Calculate water replacement",
			toolType: "waterReplacement",
		},
		{
			type: "string",
			text: "If you want to conserve water, or maybe your tap water is high in calcium, check if your CSI status is good",
		},
		{
			type: "string",
			text: "With proper pH and alkalinity balance, high hardness alone will rarely be a problem.",
		},
		{
			type: "tool",
			toolType: "csiCalculator",
			text: "View CSI Tool and try lowering Calcium",
		},
		{
			type: "string",
			text: "If CSI is balanced, increase your max total hardness target to silence hardness problems",
		},
		{
			type: "tool",
			toolType: "changeTargets",
			text: "Increase hardness targets",
		},
	],
} as const;

export const Water2 = {
	relatedProblems: [
		"highTA",
		"highKH",
		"highFC",
		"highTC",
		"highBig",
		"highSalt",
		"highBorates",
		"highTB",
		"highTDS",
		"highPeroxide",
		"highCopper",
	],
	commonName: "Water",
	productType: "water",
	chemicalFormula: "H₂O",
	directions: [
		{
			type: "string",
			text: "If your pool has high levels of dissolved solids (such as alkalinity, chlorine, salt, borates, copper, biguanide, etc.), you can treat this by draining a portion of the water and replacing it with fresh water.",
		},
		{
			type: "string",
			text: "This method is recommended only in areas where water supply is not an issue and drought conditions are not a concern.",
		},
		{
			type: "tool",
			text: "Calculate the effects of water replacement",
			toolType: "waterReplacement",
		},
		{
			type: "string",
			text: "Consider using reverse osmosis (RO) filtration services, which can filter dissolved solids from your pool water. Search for swimming pool water recycling services in your area.",
		},
		{
			type: "string",
			text: "As a last resort, you can opt for water delivery services that provide fresh, balanced water. These services typically cost around $250 per 5000 gallons and can deliver calcium-free water directly to your pool.",
		},
	],
} as const;

export const Water3 = {
	relatedProblems: [
		"highCYA",
	],
	commonName: "Water",
	productType: "water",
	directions: [
		{
			type: "string",
			text: "Switch to sanitizers like bleach chlorinating liquid (Sodium Hypochlorite). Stop adding \"stabalized\" solutions containing CYA like Trichlor or Dichlor.",
		},
		{
			type: "string",
			text: "Practically speaking, CYA can only be removed by replacing water with fresh water.  Evaporating water only leaves the CYA behind.",
		},
		{
			type: "string",
			text: "CYA tends to cling to pool walls, so brush walls, then drain and refill the pool in partial amounts to gradually lower CYA. ",
		},
		{
			type: "string",
			text: "Water splashing, leaks, and filter cleaning will naturally lower CYA.",
		},
		{
			type: "tool",
			text: "Calculate effects of water replacement",
			toolType: "waterReplacement",
		},
		{
			type: "string",
			text: "If water conservation is a concern, you can recycle your water with specialized reverse osmosis filtration services.  Search for swimming pool water recycling in your area.",
		},
		{
			type: "string",
			text: "Lastly, you may find water services who deliver fresh balanced water for about $250 per 5000 gallons and can bring to your door.",
		},
	],
} as const;

export const PolyQuat = {
	commonName: "Poly-Quat",
	otherNames: [
		"Algaecide 60",
		"Polymer Pool Algaecides",
		"Polymeric Quaternary Ammonium Compound",
	],
	relatedProblems: [
		"visibleAlgae",
	],
	weeklyOunces: "4",
	productType: "algaecide",
	description: [
		"Poly-Quats are much longer-lasting and effective than regular Quat algaecides, and are more highly recommended by pool pros. These algaecides usually get sold in 60% and 30% concentrations thus the 60 on the label.",
		"Polymer pool algaecides are versatile algaecide options because they are non-staining and non-foaming. Chemically speaking, they have a positively-charged end that's attracted to the negatively charged cell membranes of algae, and a “tail” composed of a chain of carbon atoms. This diffuses through the cell membranes, tearing them open, and causing the algae to die.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running.",
		},
		{
			type: "string",
			text: "Slowly poor dosage evenly around perimeter of pool",
		},
	],
} as const;

export const Quat = {
	commonName: "Quat",
	relatedProblems: [
		"visibleAlgae",
	],
	otherNames: [
		"Algaecide 50",
		"Algaecide 10",
		"Quaternary Ammonium",
		"Polymeric Quaternary Ammonium Compound",
	],
	weeklyOunces: "5",
	productType: "algaecide",
	description: [
		"Quats are the most economical pool algaecide to buy, and are typically sold in 10% and 50% concentrations or strengths.",
		"Quaternary Ammonium compounds, are technically detergents which is why overuse can cause some foaming to the pool. Quats function as microbial disinfectants, by attaching themselves to negatively charged algae cells. Once attached, they dissolve the outer protective membranes, which allows your chlorine to penetrate the organism's nucleus.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running.",
		},
		{
			type: "string",
			text: "Slowly poor dosage evenly around perimeter of pool",
		},
	],
} as const;

export const Metallic = {
	commonName: "Metallic",
	otherNames: [
		"Pool RX",
		"Silver Algaecide",
		"Copper Algaecide",
	],
	productType: "algaecide",
	relatedProblems: [
		"visibleAlgae",
	],
	description: [
		"If you are tackling a black algae infestation, silver algaecides are a practical option to kill these hardy algae blooms.",
		"Metallic algaecides attack the algae cell walls using positively charged metal ions, poisoning the nucleus of each individual algae cell, to kill off an infestation.",
		"The most common are copper-based, and while very effective, over time the algae can develop a resistance to the treatments. You also need to be wary of over-use, because high mineral content will cause staining on your pool surfaces.",
	],
	directions: [
		{
			type: "string",
			text: "Ensure filter is running.",
		},
		{
			type: "string",
			text: "Slowly poor dosage evenly around perimeter of pool",
		},
	],
} as const;

export const IonizerStuff = {
	commonName: "Ionizer Stuff",
	otherNames: [
		"Stain Prevention",
		"Ionizer Maintainer",
	],
	relatedProblems: [
		"staining",
		"highCopper",
	],
	alsoHelps: [
		"highCalcium",
	],
	weeklyOunces: "4",
	productType: "chelating",
	exampleProducts: {
		ids: [
			"B00E9EN9MO",
		],
	},
	description: [
		"The ionizer stuff is formulated to prevent staining due to high copper and calcium content.",
		"It's safe for all pool finishes and may be used with any copper sanitizing system.",
	],
	directions: [
		{
			type: "string",
			text: "If you are using a copper Ionizer, set the Ion/Action to 0",
		},
		{
			type: "retest",
			text: "Wait two weeks and re-test copper levels.",
		},
		{
			type: "string",
			text: "If your copper level has not decreased, or keeps increasing when Ion/Action is set to 0, use chelating chemical",
		},
		{
			type: "string",
			text: "Ensure filter is running.",
		},
		{
			type: "string",
			text: "Slowly poor dosage evenly around perimeter of pool",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Wait a week and re-test copper levels.",
		},
		{
			type: "string",
			text: "If your copper level keeps increasing when Ion/Action is set to 0, there is something else in your pool or hot tub setup that is causing the copper to increase. This is usually caused by the heater which typically has a copper core. If your heater is old, or the pH on your pool or hot tub has been very high or very low for a period of time, we recommend that you contact your pool or hot tub technician to inspect the heater.",
		},
	],
} as const;

export const IronReducer = {
	commonName: "Iron Reducer",
	formalName: "Metal Sequestrant",
	otherNames: [
		"Iron Chelator",
		"Metal Chelator",
	],
	productType: "chelating",
	relatedProblems: [
		"highIron",
	],
	description: [
		"Iron reducers or metal sequestrants are used to remove dissolved iron and other metals from pool water. These products work by binding to the metal ions, forming a stable complex that is less likely to cause staining and water discoloration.",
		"Using an iron reducer can help prevent metal staining on pool surfaces, as well as reduce water discoloration caused by high iron levels. Follow the manufacturer's instructions for proper dosage and application.",
	],
	directions: [
		{
			type: "string",
			text: "Test the pool water for iron levels to determine the need for an iron reducer.",
		},
		{
			type: "string",
			text: "Ensure the pool filter is running during the treatment process.",
		},
		{
			type: "string",
			text: "Follow the manufacturer's instructions for the specific iron reducer product to determine the correct dosage and application method.",
		},
		{
			type: "string",
			text: "Apply the iron reducer to the pool water evenly, distributing it around the perimeter of the pool.",
		},
		{
			type: "log",
			text: "Log the addition in your pool maintenance log or app.",
		},
		{
			type: "retest",
			text: "Retest the pool water for iron levels after waiting the recommended time according to the product instructions, and repeat treatment if necessary.",
		},
	],
} as const;

export const ScaleControl = {
	commonName: "Scale Control",
	otherNames: [
		"Stain Prevention",
		"Scale Control",
		"Metal Chelant",
	],
	relatedProblems: [
		"staining",
	],
	weeklyOunces: "3",
	productType: "chelating",
	exampleProducts: {
		ids: [
			"B00C7UI2O2",
		],
	},
	description: [
		"It is effective at preventing salt water generator (SWG) electrode scaling.",
		"It also reduces stains due to high calcium and metal content.  Scale control contains no phosphates which contributes to algae growth.",
	],
	directions: [
		{
			type: "string",
			text: "If you are using a copper Ionizer, set the Ion/Action to 0",
		},
		{
			type: "retest",
			text: "Wait two weeks and re-test copper levels.",
		},
		{
			type: "string",
			text: "If your copper level has not decreased, or keeps increasing when Ion/Action is set to 0, use chelating chemical",
		},
		{
			type: "string",
			text: "Ensure filter is running.",
		},
		{
			type: "string",
			text: "Slowly poor dosage evenly around perimeter of pool",
		},
		{
			type: "log",
			text: "Log addition In Pooli",
		},
		{
			type: "retest",
			text: "Wait a week and re-test copper levels.",
		},
		{
			type: "string",
			text: "If your copper level keeps increasing when Ion/Action is set to 0, there is something else in your pool or hot tub setup that is causing the copper to increase. This is usually caused by the heater which typically has a copper core. If your heater is old, or the pH on your pool or hot tub has been very high or very low for a period of time, we recommend that you contact your pool or hot tub technician to inspect the heater.",
		},
	],
} as const;

export const Other = [
	{
		commonName: "Test Strips",
		otherNames: [
			"Pool Test Strips",
			"Water Test Strips",
		],
		relatedProblems: [
			"quick water assessment",
			"basic water balance monitoring",
		],
		productType: "waterTesting",
		description: [
			"Test strips provide a quick and easy way to check the chemical levels in your pool or spa. Simply dip and compare against a color chart.",
			"They typically measure factors like pH, chlorine/bromine levels, alkalinity, and hardness.",
		],
	},
	{
		commonName: "Test Kit",
		otherNames: [
			"Liquid Test Kit",
			"Drop Test Kit",
			"Pool Master Test Kit",
		],
		relatedProblems: [
			"detailed water analysis",
			"accurate water balance monitoring",
		],
		productType: "waterTesting",
		description: [
			"Test kits typically use liquid reagents to provide a more accurate reading of pool or spa water parameters.",
			"They can measure a wide range of factors including pH, chlorine, bromine, alkalinity, calcium hardness, and more. It's an essential tool for pool and spa owners who want a comprehensive understanding of their water chemistry.",
		],
	},
	{
		commonName: "Digital Tester",
		otherNames: [
			"Electronic Water Tester",
			"Digital Pool Tester",
		],
		relatedProblems: [
			"precision water readings",
			"automated water balance monitoring",
		],
		productType: "waterTesting",
		description: [
			"Digital testers offer a modern, precise, and often more user-friendly approach to water testing. They provide digital readouts of various water parameters without the need for color matching.",
			"They can quickly assess factors such as pH, chlorine/bromine levels, and salinity, offering accurate and consistent results.",
		],
	},
] as const;

export const VERSION = 5 as const;

export const ALL_SOLUTIONS = [
	CalHypo,
	MagnesiumChloride,
	Trichlor,
	Dichlor,
	Biguanide,
	OxidizingShock,
	LiquidSolarCover,
	CalciumChloride,
	LiquidCalciumBooster,
	LiquidFlocculant,
	SolidFlocculant,
	Clarifier,
	Bleach,
	HydrogenPeroxide,
	Bromine,
	DryAcid,
	MuriaticAcid,
	Salt,
	BakingSoda,
	SodaAsh,
	Borax,
	BoricAcid,
	TetraboratePentahydrate,
	DryStabilizer,
	LiquidStabilizer,
	PhosphateReducer,
	Water,
	Water2,
	Water3,
	PolyQuat,
	Quat,
	Metallic,
	IonizerStuff,
	IronReducer,
	ScaleControl,
] as const;
