import type { LearnContent } from "./types";

export const LEARN_CONTENT: LearnContent = {
	categories: [
		{
			slug: "algaecide",
			name: "Algaecide",
			tint: "orange",
			entries: [
				{
					slug: "poly-quat",
					name: "Poly-Quat",
					alternativeNames: ["Algaecide 60", "Polymer Pool Algaecides", "Polymeric Quaternary Ammonium Compound"],
					description: `Poly-Quats are much longer-lasting and effective than regular Quat algaecides, and are more highly recommended by pool pros. These algaecides usually get sold in 60% and 30% concentrations thus the 60 on the label.

Polymer pool algaecides are versatile algaecide options because they are non-staining and non-foaming. Chemically speaking, they have a positively-charged end that's attracted to the negatively charged cell membranes of algae, and a “tail” composed of a chain of carbon atoms. This diffuses through the cell membranes, tearing them open, and causing the algae to die.`,
				},
				{
					slug: "quat",
					name: "Quat",
					alternativeNames: ["Algaecide 50", "Algaecide 10", "Quaternary Ammonium", "Polymeric Quaternary Ammonium Compound"],
					description: `Quats are the most economical pool algaecide to buy, and are typically sold in 10% and 50% concentrations or strengths.

Quaternary Ammonium compounds, are technically detergents which is why overuse can cause some foaming to the pool. Quats function as microbial disinfectants, by attaching themselves to negatively charged algae cells. Once attached, they dissolve the outer protective membranes, which allows your chlorine to penetrate the organism's nucleus.`,
				},
				{
					slug: "metallic",
					name: "Metallic",
					alternativeNames: ["Pool RX", "Silver Algaecide", "Copper Algaecide"],
					description: `If you are tackling a black algae infestation, silver algaecides are a practical option to kill these hardy algae blooms.

Metallic algaecides attack the algae cell walls using positively charged metal ions, poisoning the nucleus of each individual algae cell, to kill off an infestation.

The most common are copper-based, and while very effective, over time the algae can develop a resistance to the treatments. You also need to be wary of over-use, because high mineral content will cause staining on your pool surfaces.`,
				},
			],
		},
		{
			slug: "alkalinity-up",
			name: "Alkalinity Up",
			tint: "teal",
			entries: [
				{
					slug: "baking-soda",
					name: "Baking Soda",
					alternativeNames: ["Alkalinity Up", "Alkalinity Increaser", "Baking Soda", "Sodium Bicarbonate"],
					description: `Baking soda, or Sodium Bicarbonate, is a versatile solution for pool care. Not only does it effectively raise both the alkalinity and pH levels of pool water, but it also serves as a buffer to prevent drastic pH fluctuations. Essentially, it is the same compound found in many commercially branded 'alkalinity increasers.'

Beyond its primary function, baking soda has multiple uses around the pool area. For instance, a paste made from water and baking soda can serve as a gentle yet efficient cleaner for pool tiles, grout, and even stone or concrete pool decks.

For pools with both low pH and low alkalinity, introducing baking soda can be crucial. Such imbalances can lead to corrosion, affecting materials like steel, copper, rubber, vinyl, and plaster. Administering the recommended dosage of baking soda can help rectify these imbalances, safeguarding the longevity of your pool.`,
					chemicalFormula: "NaHCO₃",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Total Alkalinity", ppmPer10kL: 0.05957953 },
							{ property: "Carbonate Hardness", ppmPer10kL: 0.05957953 },
							{ property: "pH", ppmPer10kL: 0.00012151 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
			],
		},
		{
			slug: "biguanide",
			name: "Biguanide",
			tint: "purple",
			entries: [
				{
					slug: "biguanide",
					name: "Biguanide",
					alternativeNames: ["PHMB", "Baquacil", "SoftSwim", "Revacil"],
					description: `Biguanide is an alternative sanitizer used in some swimming pools instead of chlorine. It is a non-irritating, non-chlorine, and non-bromine sanitizer that is gentle on the skin and eyes, making it suitable for people with allergies or sensitivities to traditional sanitizers.

Biguanide is typically sold in liquid form and works by breaking down organic contaminants in the pool water. It is compatible with other biguanide-based pool chemicals but is not compatible with chlorine or bromine products.

When using biguanide, it is important to maintain proper water balance and follow the recommended dosage guidelines to ensure optimal performance and water quality.`,
					chemicalFormula: "(C8H17N5)n",
				},
			],
		},
		{
			slug: "borates",
			name: "Borates",
			tint: "indigo",
			entries: [
				{
					slug: "borax",
					name: "Borax",
					alternativeNames: ["Pure Borax", "sodium tetraborate decahydrate", "sodium borate", "20 Mule Team Borax™"],
					description: `Borax is a chemical compound of the element boron. It’s a chalky, white, powdery substance primarily known for its uses as a household cleaning agent and as a pool water treatment chemical.

Borax has a high pH and will significantly increase the pH of your pool water when used. Always counterbalance the pH changes from Borax with an addition of muriatic acid or another pH reducer to maintain optimal pH levels.

Borates, derived from borax, are highly recommended for pools. Adding borate is typically a one-time process. Borates help stabilize the pH of the water, acting as a buffer against rises in pH. They also assist in preventing algae growth and reducing chlorine demand.

Maintaining a balanced pH between 7.4 and 7.6, with 7.5 being ideal, is crucial for effective chlorine sanitation. An unbalanced pH can significantly reduce the efficacy of chlorine, rendering it less effective at keeping the pool water clean and safe.

If adding large amounts of borax, there's a risk of increasing your pH too much. To counteract this, introduce muriatic acid or another pH reducer when adding borax to ensure the pH remains within the recommended range.

Regularly monitor your pool’s borate levels to keep them between 30-50 ppm. This helps maintain the benefits of borates without risking potential side effects such as skin or eye irritation, or harm to pets and plants from high borate levels.

Borates not only help in maintaining water clarity and comfort but also reduce the frequency of pH adjustments, making overall pool maintenance more manageable.`,
					chemicalFormula: "Na₂[B₄O₅(OH)₄]·8H₂O",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Total Alkalinity", ppmPer10kL: 0.02603767 },
							{ property: "Carbonate Hardness", ppmPer10kL: 0.02603767 },
							{ property: "pH", ppmPer10kL: 0.00145677 },
							{ property: "Borates", ppmPer10kL: 0.01133640 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
				{
					slug: "boric-acid",
					name: "Boric Acid",
					alternativeNames: ["hydrogen borate", "boracic acid", "orthoboric acid"],
					description: `Boric acid can be used as a naturally occurring all-purpose cleaner. It is a versatile and effective compound commonly used in various cleaning applications, including pool maintenance.

Boric acid is a weak acid with a pH of 3.8-4.8. It will not significantly lower the pH of pool water, making it a gentle and safe option for maintaining balanced water chemistry.

Because of its mild acidity, you can add boric acid to your pool without the need to counterbalance it with muriatic acid, unlike when adding Borax or sodium tetraborate pentahydrate, which have higher pH levels and require pH adjustment.

Additionally, if you have metals in the water or have experienced metal staining, boric acid will not cause additional staining, deposits, or precipitation. This makes it a suitable choice for pools with metal content concerns.

Pros:

pH Stability: Boric acid's weak acidity means it will not significantly alter the pool's pH, reducing the need for frequent pH adjustments.

No Additional Staining: Boric acid does not cause metal staining or precipitation, making it safe for pools with metal content.

Versatility: It serves as an effective all-purpose cleaner, contributing to overall pool hygiene and maintenance.

Gentle on Equipment: Being a mild acid, boric acid is gentle on pool equipment and surfaces, minimizing wear and tear.

Cons:

Limited pH Impact: While its mild nature is beneficial for stability, it may not be suitable for situations where significant pH adjustment is needed.

Specific Use Case: It is mainly used for maintenance rather than solving specific chemical imbalances or contamination issues.

Recommendations:

Monitor Water Chemistry: Regularly test your pool water to ensure all parameters remain within recommended ranges, even when using boric acid.

Use as Part of Routine Maintenance: Incorporate boric acid as part of your regular pool maintenance routine to enhance water quality and cleanliness.`,
					chemicalFormula: "H₃BO₃",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "pH", ppmPer10kL: -0.00010148 },
							{ property: "Borates", ppmPer10kL: 0.01749197 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
				{
					slug: "tetraborate-pentahydrate",
					name: "Tetraborate Pentahydrate",
					alternativeNames: ["borax pentahydrate", "sodium borate pentahydrate", "sodium tetraborate pentahydrate"],
					description: `Just like Borax, sodium tetraborate pentahydrate has a high pH of about 9.2. It’s a white, crystalline substance commonly used in pools for water treatment and pH stabilization.

Sodium tetraborate pentahydrate is very similar in form and function to Borax but is about 30% stronger in every effect. This means it can be more effective at stabilizing pH, preventing algae, and reducing chlorine demand, but it also requires careful handling and precise dosing.

Pros:

pH Stabilization: Sodium tetraborate pentahydrate helps maintain stable pH levels, reducing the frequency of pH adjustments.

Algae Prevention: Its algaecidal properties help in preventing algae growth, keeping the pool water clear and reducing maintenance efforts.

Reduced Chlorine Demand: By stabilizing pH and preventing algae, it helps lower the amount of chlorine needed to maintain proper sanitation levels.

Water Softening: Enhances the feel of the water, making it softer and more comfortable for swimmers.

Cons:

High pH Impact: Due to its high pH, adding sodium tetraborate pentahydrate can significantly increase the pool’s pH level. It’s crucial to counterbalance this with a pH reducer like muriatic acid.

Toxicity Risks: At high levels, it can be toxic to pets and wildlife if ingested. Ensure that pets are kept away from pool water.

Skin and Eye Irritation: Excessively high concentrations can cause skin and eye irritation for swimmers.

Plant Damage: If pool water containing sodium tetraborate pentahydrate is used for irrigation or leaks into landscaping, it can harm plants.

Recommendations:

Maintain Appropriate Levels: Keep sodium tetraborate pentahydrate levels within the recommended range to avoid potential side effects. Typically, borate levels should be maintained between 30-50 ppm.

Regular Testing: Regularly test the pool water for borate levels and other chemical parameters to ensure a balanced and safe swimming environment.`,
					chemicalFormula: "Na₂B₄O₇",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "pH", ppmPer10kL: 0.00222722 },
							{ property: "Total Alkalinity", ppmPer10kL: 0.03403591 },
							{ property: "Carbonate Hardness", ppmPer10kL: 0.03403591 },
							{ property: "Borates", ppmPer10kL: 0.01484815 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
			],
		},
		{
			slug: "bromine",
			name: "Bromine",
			tint: "brown",
			entries: [
				{
					slug: "bromine",
					name: "Bromine",
					alternativeNames: [],
					description: `Bromine is a common hot tub sanitizer available in 1” tablets and can be used in a feeder, floating dispenser or placed in your skimmer basket. Bromine tabs dissolve slowly to keep available bromine up in your water over time.

Bromine is far more stable and effective in high temperatures than chlorine, which is why it is almost always used in spas and hot tubs. The money you will save by purchasing chlorine over bromine for use in a spa is usually negated rather quickly due to the fact that you will need to use much more chlorine to keep the spa sanitized.`,
					chemicalFormula: "C₅H₆BrClN₂O₂",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Total Bromine", ppmPer10kL: 0.00643598 },
							{ property: "Salt", ppmPer10kL: 0.01058865 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
			],
		},
		{
			slug: "calcium-up",
			name: "Calcium Up",
			tint: "mint",
			entries: [
				{
					slug: "calcium-chloride",
					name: "Calcium Chloride",
					alternativeNames: ["Calcium up", "Hardness Increaser", "Calcium Hardness"],
					description: `Calcium chloride increases calcium hardness levels in your pool and nothing else.

Always retest in between adding additional Calcium Hardness, you do not want to add too much.

It's the same chemical they sprinkle on roadways during the winter to heat them up, and place into hand warmers. It heats up when wet, so store in a dry place.

In many parts of the country, tap water is "soft" which means low calcium harness. Here the water becomes corrosive in its attempt to obtain the calcium. It pits pool surfaces and corrodes pipes and fixtures.

Once calcium is added to water, it is difficult to remove without partially draining your pool and replacing with soft water, so be very careful when your calcium hardness is above 300 to not add solutions that increase your calcium.

Alternatively, use of calcium based sanitizers, such as Calcium Hypochlorite or Dichlor are good options that will sanitize and gradually raise calcium levels.`,
					chemicalFormula: "CaCl₂",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Total Hardness", ppmPer10kL: 0.09018381 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
				{
					slug: "liquid-calcium-booster",
					name: "Liquid Calcium Booster",
					alternativeNames: ["Calcium up", "Hardness Increaser", "Calcium Hardness"],
					description: `Liquid Calcium Booster is pre-dissolved calcium chloride. Calcium chloride increases calcium hardness levels in your pool and nothing else.

Always retest in between adding additional Calcium Hardness, you do not want to add too much.

In many parts of the country, tap water is "soft" which means low calcium harness. Here the water becomes corrosive in its attempt to obtain the calcium. It pits pool surfaces and corrodes pipes and fixtures.

Once calcium is added to water, it is difficult to remove without partially draining your pool and replacing with soft water, so be very careful when your calcium hardness is above 300 to not add solutions that increase your calcium.

Alternatively, use of calcium based sanitizers, such as Calcium Hypochlorite or Dichlor are good options that will sanitize and gradually raise calcium levels.`,
					chemicalFormula: "CaCl₂ + H₂O",
				},
			],
		},
		{
			slug: "chelating",
			name: "Chelating",
			tint: "cyan",
			entries: [
				{
					slug: "ionizer-stuff",
					name: "Ionizer Stuff",
					alternativeNames: ["Stain Prevention", "Ionizer Maintainer"],
					description: `The ionizer stuff is formulated to prevent staining due to high copper and calcium content.

It's safe for all pool finishes and may be used with any copper sanitizing system.`,
				},
				{
					slug: "iron-reducer",
					name: "Iron Reducer",
					alternativeNames: ["Iron Chelator", "Metal Chelator"],
					description: `Iron reducers or metal sequestrants are used to remove dissolved iron and other metals from pool water. These products work by binding to the metal ions, forming a stable complex that is less likely to cause staining and water discoloration.

Using an iron reducer can help prevent metal staining on pool surfaces, as well as reduce water discoloration caused by high iron levels. Follow the manufacturer's instructions for proper dosage and application.`,
				},
				{
					slug: "scale-control",
					name: "Scale Control",
					alternativeNames: ["Stain Prevention", "Scale Control", "Metal Chelant"],
					description: `It is effective at preventing salt water generator (SWG) electrode scaling.

It also reduces stains due to high calcium and metal content. Scale control contains no phosphates which contributes to algae growth.`,
				},
			],
		},
		{
			slug: "clarifier",
			name: "Clarifier",
			tint: "blue",
			entries: [
				{
					slug: "liquid-flocculant",
					name: "Liquid Flocculant",
					alternativeNames: ["Pool Flocc"],
					description: `Flocculant comes in liquid and solid form but both do the same thing.

Flocculant clears cloudy pool water by clumping small particles together and dropping them to the bottom of the pool to be vacuumed out. The Flocculant is ideal for pool opening and really hazy water.

Flocculant is very similar to Clarifier. Flocculant drops particles to the bottom of the pool, while clarifier floats to the top. Also flocculant is a bit faster acting. However, cleanup is more work as the pool needs to be vaccumed to remove the residue.`,
				},
				{
					slug: "solid-flocculant",
					name: "Solid Flocculant",
					alternativeNames: ["Pool Flocc"],
					description: `Flocculant comes in liquid and solid form but both do the same thing.

Flocculant clears cloudy pool water by clumping small particles together and dropping them to the bottom of the pool to be vacuumed out. The Flocculant is ideal for pool opening and really hazy water.

Flocculant comes in liquid and solid form but both do the same thing. Flocculant is very similar to Clarifier. Flocculant drops particles to the bottom of the pool, while clarifier floats to the top. Also flocculant is a bit faster acting. However, cleanup is more work as the pool needs to be vaccumed to remove the residue.`,
				},
				{
					slug: "clarifier",
					name: "Clarifier",
					alternativeNames: ["coagulator"],
					description: `Pool clarifier contains polymers that act as coagulants on tiny particles. When you add a clarifier to cloudy water, all those tiny particles clump together into bigger particles your filter can capture and keep from reentering the pool.

Clarifier is very similar to Flocculant. Flocculant drops particles to the bottom of the pool, while clarifier floats to the top.

Clarifier is ideal for mild cloudiness in the water, and can be used at any time to add some extra sparkle. It may be two or three days before your pool is completely clear, depending on the cloudiness. Over time, after lots of clarifying, you will need to clean your filter. It's a good idea to clean or backwash your filter at least once a season as captured particles in the filter reduce its effectiveness`,
				},
			],
		},
		{
			slug: "cyanuric-acid",
			name: "Cyanuric Acid",
			tint: "yellow",
			entries: [
				{
					slug: "dry-stabilizer",
					name: "Dry Stabilizer",
					alternativeNames: ["Cyanuric Acid", "Stabilizer", "Stabilized Chlorine"],
					description: `Cyanuric acid provides UV protection for chlorine. In other words, it's sunscreen for your pool. It helps prevent chlorine from breaking down quickly when exposed to sunlight, thereby extending the effectiveness of the chlorine in the pool.

Monitor your pool's cyanuric acid (CYA) levels closely, especially when they are above 50 ppm. High levels of CYA can reduce the effectiveness of chlorine. In such cases, switch to an unstabilized sanitizer like bleach or calcium hypochlorite (Cal-Hypo) instead of stabilized chlorine products like trichloroisocyanuric acid (Trichlor) and sodium dichloroisocyanurate (Dichlor).

Normally, you won't need to add stabilizer in its pure form frequently. However, if you recently replaced a significant amount of water or have CYA levels below 20 ppm, consider adding stabilizer to ensure adequate UV protection for your chlorine.`,
					chemicalFormula: "Na₂[B₄O₅(OH)₄]·8H₂O",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Cyanuric Acid", ppmPer10kL: 0.10001136 },
							{ property: "pH", ppmPer10kL: -0.00185335 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
				{
					slug: "liquid-stabilizer",
					name: "Liquid Stabilizer",
					alternativeNames: ["Cyanuric Acid", "Stabilizer", "Stabilized Chlorine"],
					description: `Cyanuric acid provides UV protection for chlorine. In other words, it's sunscreen for your pool.

Monitor your pool for when stabilizer levels start to get above 50 and swich from using stabilized chlorine found in Trichlor and Dichlor.

Normally you won't need stabilizer in it's pure form, but only if you recently replaced a lot of water or have very low levels.

Liquid stabilizer acts more quickly than dry stabilizer.`,
					chemicalFormula: "Na₂[B₄O₅(OH)₄]·8H₂O",
					dosingSpec: {
						form: "liquid",
						effects: [
							{ property: "Cyanuric Acid", ppmPer10kL: 0.03858916 },
							{ property: "pH", ppmPer10kL: -0.00082519 },
						],
					},
				},
			],
		},
		{
			slug: "liquid-solar",
			name: "Liquid Solar",
			tint: "orange",
			entries: [
				{
					slug: "liquid-solar-cover",
					name: "Liquid Solar Cover",
					alternativeNames: ["Solar Blanket"],
					description: `Liquid solar keeps your water warm and slows water evaporation by over 15%. The liquid is actually a combination of a type of alcohol and calcium hydroxide that's lighter than water so that it creates a microscopically thin film on the pool's surface.

Most of a pool's heat is lost through the surface due to water evaporation. The same thing that happens to your body temperature when you sweat.

There's very little chemical in a liquid solar cover, making it extremely safe for anyone in the pool. It's non-toxic, odor-free, and 100% safe for your filtration system.

Windy weather will make the solution less effective as movement disturbs the cover. However, cleanup is more work as the pool needs to be vaccumed to remove the residue. However, the convenience and ease of use makes liquid solar a great option to extend the pool season and conserve water.`,
					chemicalFormula: "Alcohol and Calcium hydroxide",
				},
			],
		},
		{
			slug: "oxidant",
			name: "Oxidant",
			tint: "red",
			entries: [
				{
					slug: "oxidizing-shock",
					name: "Oxidizing Shock",
					alternativeNames: ["KMPS", "MPS", "Non-chlorinating shock"],
					description: `KMPS is used to shock pools for a variety of reasons. Some use it to avoid using chlorine.

The most important point to remember is that while it is certainly a strong oxidant, it is NOT a sanitizer, and therefore provides no protection against bacteria and viruses.

KMPS is 1/4 as sensitive to sunlight as chlorine.

Using KMPS may be preferrable for indoor pools, where there is no sunlight or wind to help break down and carry away combined chlorine.

KMPS has several important disadvantages. As it breaks down urea and chloramines, it produces nitrate ions. This is an important because like phosphates, nitrates are great algae food. Furthermore, it lowers the pH and the total alkalinity. KMPS shows up as combined chlorine in the DPD test and as free chlorine in the FAS-DPD test. Lastly, it is expensive. Depending on the quantity purchased, it ranges from $3 to $5 per pound.`,
					chemicalFormula: "KHSO₅",
				},
			],
		},
		{
			slug: "peroxide",
			name: "Peroxide",
			tint: "pink",
			entries: [
				{
					slug: "hydrogen-peroxide",
					name: "Hydrogen Peroxide",
					alternativeNames: [],
					description: `Hydrogen Peroxide (H2O2) is a liquid chemical compound that exhibits very powerful oxidizing, bleaching and disinfection properties. You may be familiar with it as a sterilizing agent for cuts and other types of wounds.

Because hydrogen peroxide oxidizes quickly, it is best not to stock up on more than a 30 day supply. It should be stored in a cool, dark, well-ventilated place, away from the reach of children. When you are handling the 35% bottles of hydrogen peroxide, you should wear protective eyewear & gloves.

Incompatible with bromine and chlorine. Given the deficiencies that exist with hydrogen peroxide, it would be ideal if it could be used in conjunction with bromine or chlorine to provide an effective oxidation / sanitation system. Hydrogen peroxide, however, cannot co-exist with bromine or chlorine in water. In fact, hydrogen peroxide is used as a chlorine neutralizer to remove chlorine from water.`,
					chemicalFormula: "H₂O₂",
					dosingSpec: {
						form: "liquid",
						effects: [
							{ property: "Hydrogen Peroxide", ppmPer10kL: 0.03697848 },
						],
					},
				},
			],
		},
		{
			slug: "ph-down",
			name: "pH Down",
			tint: "red",
			entries: [
				{
					slug: "dry-acid",
					name: "Dry Acid",
					alternativeNames: ["pH Reducer", "pH minus", "pH decreaser"],
					description: `When pH gets too high, water is prone to scale and cloud. Dry acid has very low pH and is the simplest fix.Sodium Bisulfate will likely decrease your pH and alkalinity as well, make sure to to add alkalinity up as necessary after balancing pH.

Dry acid often comes in powder form so you will want to avoid working with it on a windy day. Overall, it is less corrosive and safer to store than muriatic acid, a common pH decreaser alternative.

It's important that the dry acid is evenly spread around the pool so that it reaches all the corners.`,
					chemicalFormula: "NaHSO₃",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Total Alkalinity", ppmPer10kL: -0.03884286 },
							{ property: "Carbonate Hardness", ppmPer10kL: -0.03884286 },
							{ property: "pH", ppmPer10kL: -0.00224191 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
				{
					slug: "muriatic-acid",
					name: "Muriatic Acid",
					alternativeNames: ["pH decreaser", "Hydrochloric acid", "Acid"],
					description: `When pH gets too high, your water is prone to scale and cloud. Muriatic acid has very low pH and reduces pH quickly.Muriatic Acid will decrease alkalinity as well, make sure to to add alkalinity up as necessary after balancing pH. If you are using Muriatic acid to lower alkalinity, make sure to add in very small doses (<1/5 required dose), and keep pH balanced by aerating water or adding pH up (soda ash).

Muriatic acid can be found at all hardware stores in one or two-gallon containers near the pool supplies area.`,
					chemicalFormula: "HCl",
					dosingSpec: {
						form: "liquid",
						effects: [
							{ property: "Total Alkalinity", ppmPer10kL: -0.05222222 },
							{ property: "Carbonate Hardness", ppmPer10kL: -0.05222222 },
							{ property: "pH", ppmPer10kL: -0.00320731 },
						],
					},
				},
			],
		},
		{
			slug: "ph-up",
			name: "pH Up",
			tint: "green",
			entries: [
				{
					slug: "soda-ash",
					name: "Soda Ash",
					alternativeNames: ["Sodium Carbonate", "pH Up", "pH increaser", "Washing Soda"],
					description: `Washing soda, or "soda ash or sodium carbonate," will quickly increase pH. Washing soda is a naturally occurring mineral that is extremely alkaline with a pH level of 11. It should never come into contact with skin.

Like washing soda, borax is also quite alkaline, though less than other solutions. This makes borax a safer chemical to store and handle. Also, borax will dissolve in water more easily.

Water with low pH may cause your plumbing may start to erode, your walls to stain and etch, and your swimmers will start to complain with itchy skin and burning eyes.

You want to keep your pH balanced between 7.3 and 7.7 with 7.5 being ideal. Unbalanced pH kills chlorine's power. In this scenario, you can add all the chlorine you want and your pH levels will render it useless.

Low pH is often caused by things like rainwater or debris getting into your pool. Total alkalinity will stabilize your pH from dropping too low, so it's important to test this level every time you test your pH levels.`,
					chemicalFormula: "Na₂CO₃",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Total Alkalinity", ppmPer10kL: 0.09442995 },
							{ property: "Carbonate Hardness", ppmPer10kL: 0.09442995 },
							{ property: "pH", ppmPer10kL: 0.00289886 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
			],
		},
		{
			slug: "phosphate",
			name: "Phosphate",
			tint: "gray",
			entries: [
				{
					slug: "phosphate-reducer",
					name: "Phosphate Reducer",
					alternativeNames: ["Phos Plus", "Phos Free"],
					description: `Phosphate reducers are specialty chemicals used to remove phosphates from pool water. They help in maintaining clear and algae-free pool water by reducing the food source for algae.

Phosphate reducers are typically salts of aluminum or lanthanum. When added to water, they produce insoluble phosphate compounds that are removed through filtration, vacuuming, or both, thereby lowering the phosphate levels in the pool.

It should be noted that not all phosphates found in pools are bad. Some phosphates, like polyphosphates, and other phosphorus-containing compounds, are excellent sequestering agents that protect the pool from metal staining and scale formation.

Other phosphates, namely orthophosphates, are known to be a source of food for algae. Phosphate reducers were introduced as a means of limiting this food source, thus curtailing the ability of algae to grow in the pool. However, since these products are not EPA registered as algaecides, their labels cannot claim algae control. Nevertheless, the removal of algae food is an effective way to prevent algae growth.

Pros:

Algae Prevention: By removing orthophosphates, phosphate reducers help limit the food source for algae, thereby reducing the likelihood of algae growth.

Clearer Water: Reducing phosphate levels can help maintain clearer water by preventing algae blooms.

Maintenance Aid: Phosphate reducers can make overall pool maintenance easier by helping to keep the water balanced and clean.

Cons:

Not a Direct Algaecide: Phosphate reducers are not registered as algaecides, so they cannot claim to directly kill or control algae.

Potential Misuse: Misunderstanding the types of phosphates and their roles can lead to unnecessary or improper use of phosphate reducers.

Recommendations:

Monitor Phosphate Levels: Regularly test your pool's phosphate levels and use phosphate reducers as needed to keep them low, particularly when high orthophosphate levels are detected.

Understand Phosphate Types: Differentiate between beneficial polyphosphates and problematic orthophosphates to use phosphate reducers effectively.

Combine with Algae Prevention Measures: Use phosphate reducers as part of a comprehensive algae prevention strategy, including proper sanitation, filtration, and regular maintenance.`,
					chemicalFormula: "(OCH₂CH₂N+(CH₃)₂CH₂CH₂N+(CH₃)₂CH₂CH₂)n₂nCl-",
				},
			],
		},
		{
			slug: "salt",
			name: "Salt",
			tint: "blue",
			entries: [
				{
					slug: "salt",
					name: "Salt",
					alternativeNames: [],
					description: `Salt, sodium chloride, is used to raise salinity in salt-water pools.

Salt water pools use salt water generators (SWG) units to manufacture chlorine from salt via electricity. The SWG breaks dissolved salt into hypochlorous acid and sodium hypochlorite, two sanitizing agents used in chlorine-based swimming pools.

SWG units use three different forms of salt.

Solar salt is derived from seawater evaporated by the sun, and contains impurities such as dead brine shrimp and bactertis. Impurities make the salt generator (and the salt water filter) work harder.

Mechanically evaporated salt is also made from sea water, but generated heat is used to evaporate the water instead of sunlight, which burns of organic matter. Mechanically evaporated salt may, however, include pool-damaging minerals.

Mined salt is dug from the ground, and is considered the purest form of salt, perfect for pools!

The amount of salt your pool requires depends on the level of salt needed for your salt chlorine generator to function properly. Check the owner's manual to find this amount. Residual salt usually ranges from 3,000 to 4,000 ppm (parts per million).`,
					chemicalFormula: "NaCl",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Salt", ppmPer10kL: 0.09973096 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
			],
		},
		{
			slug: "sanitizer",
			name: "Sanitizer",
			tint: "teal",
			entries: [
				{
					slug: "cal-hypo",
					name: "Cal-Hypo",
					alternativeNames: ["Calcium hypochlorite"],
					description: `Cal-Hypo is a often used as a 'shock' sanitizer that raises free chlorine effectively (between 1 and 3 for most pools) while also slightly increasing calcium hardness.Cal-Hypo is not stabalized which means it contains no cyanuric acid. Very commonly pools have stabilizer built up and low in calcium hardness, which makes Cal-Hypo the perfect solution.

So it increases hardness and chlorine while not adding CYA. Too much CYA causes what's known as chlorine lockout. This happens when your CYA is above 100 ppm in most pools.

Do not use if you have high-calcium (hard) water. Use Trichlor Or Chlorinating liquid instead. Cal-hypo is strongest of sanitizers and is good for in-door pools or using to shock pool at night.`,
					chemicalFormula: "CaO(Cl)₂",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Total Hardness", ppmPer10kL: 0.04550584 },
							{ property: "Free Chlorine", ppmPer10kL: 0.06446660 },
							{ property: "Total Chlorine", ppmPer10kL: 0.06446660 },
							{ property: "Salt", ppmPer10kL: 0.06538794 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
				{
					slug: "trichlor",
					name: "Trichlor",
					alternativeNames: ["Slow Dissolving Chlorine Tabs", "Stabilized Chlorine"],
					description: `Trichlor is the most common stabalized sanitizer as 3-inch tabs or pucks that people leave in their pool. Similar to Dichlor, trichlor comes with stabilizer and thus contains cyanuric acid (CYA).

The CYA it contains acts as sunscreen for UV radiation. The key to trichlor is that it dissolves slowly over time. This means that you can leave several tabs over your required dosage in a chlorine floater, or even better, in a chlorinator, and your pool will stay sanitized for longer periods of time.`,
					chemicalFormula: "C₃Cl₃N₃O₃",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Free Chlorine", ppmPer10kL: 0.09153243 },
							{ property: "Total Chlorine", ppmPer10kL: 0.09153243 },
							{ property: "pH", ppmPer10kL: -0.00490042 },
							{ property: "Cyanuric Acid", ppmPer10kL: 0.05553368 },
							{ property: "Salt", ppmPer10kL: 0.07477485 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
				{
					slug: "dichlor",
					name: "Dichlor",
					alternativeNames: ["Pool Shock", "Stabilized Granular Chlorine", "Chlorinating Concentrate", "dichloro-s-triazinetrione", "Troclosene"],
					description: `Dichlor is typically sold in granular form, providing a simple and convenient way to chlorinate pools and spas. It is available in small 1lb bags or large, sealable tubs. Dichlor is a stabilized sanitizer that is commonly known as shock. The cyanuric acid it contains acts as a sunscreen for UV radiation, protecting chlorine from sunlight degradation. Dichlor dissolves quickly in water and has an immediate effect, increasing chlorine levels to control algae and oxidize contaminants and chloramines.

Note that dichlor is highly volatile and potentially explosive when mixed with calcium hypochlorite, which is often used for shocking a pool. Be careful not to mix dichlor with the wrong chemicals, as even residue can trigger a reaction. It is not the cheapest form of chlorine, costing almost double the price of trichlor tablets per pound of chlorine.

Pros:

Convenient Form: Dichlor is available in easy-to-use granular form, making it simple to measure and apply.

Stabilized Chlorine: Contains cyanuric acid, which protects chlorine from UV degradation, enhancing its longevity in the pool.

Quick Dissolution: Dissolves rapidly in water, providing an immediate increase in chlorine levels for fast and effective sanitization.

Versatile Use: Effective at controlling algae and oxidizing contaminants and chloramines, maintaining clean and clear pool water.

Cons:

Volatility: Highly volatile and potentially explosive when mixed with calcium hypochlorite or other incompatible chemicals. Careful handling and storage are required.

Cost: More expensive than other forms of chlorine, such as trichlor tablets, making it a less cost-effective option.

Recommendations:

Safe Handling: Always handle dichlor with care and avoid mixing it with other chemicals, especially calcium hypochlorite, to prevent dangerous reactions.

Proper Storage: Store dichlor in a cool, dry place in its original, sealable container to maintain its stability and effectiveness.

Regular Use: Incorporate dichlor as part of your regular pool maintenance routine for effective and immediate chlorination, while monitoring and maintaining appropriate cyanuric acid levels.`,
					chemicalFormula: "C₃HCl₂N₃O₃",
					dosingSpec: {
						form: "solid",
						effects: [
							{ property: "Total Chlorine", ppmPer10kL: 0.05540015 },
							{ property: "Free Chlorine", ppmPer10kL: 0.05540015 },
							{ property: "pH", ppmPer10kL: -0.00210972 },
							{ property: "Cyanuric Acid", ppmPer10kL: 0.05041961 },
							{ property: "Salt", ppmPer10kL: 0.04518537 },
						],
						gramsPerTeaspoon: 4.7,
						gramsPerCup: 220,
					},
				},
				{
					slug: "bleach",
					name: "Bleach",
					alternativeNames: ["Liquid Chlorine", "Sodium Hypochlorite"],
					description: `Liquid chlorine is the most simple, effective, and low-cost sanitizer.

It is un-stabalized in that it does not include cyanuric acid or CYA, the sunscreen for pools. It's best to use when your water already contains at least 20 ppm CYA, or is not exposed to sunlight.

For outdoor pools, we recommend using liquid chlorine for two seasons, and then switching to trichlor tabs for two seasons (ideally the sunnier seasons) for the most effective sanitization schedule.

Liquid chlorine will degrade over time and will lose half it's potency in 6-12 months. Store in cool dark area for best shelf life.`,
					chemicalFormula: "NaClO",
					dosingSpec: {
						form: "liquid",
						effects: [
							{ property: "Free Chlorine", ppmPer10kL: 0.01027301 },
							{ property: "Total Chlorine", ppmPer10kL: 0.01027301 },
							{ property: "Salt", ppmPer10kL: 0.01717168 },
						],
					},
				},
			],
		},
		{
			slug: "water-testing",
			name: "Water Testing",
			tint: "purple",
			entries: [
				{
					slug: "test-strips",
					name: "Test Strips",
					alternativeNames: ["Pool Test Strips", "Water Test Strips"],
					description: `Test strips provide a quick and easy way to check the chemical levels in your pool or spa. Simply dip and compare against a color chart.

They typically measure factors like pH, chlorine/bromine levels, alkalinity, and hardness.`,
				},
				{
					slug: "test-kit",
					name: "Test Kit",
					alternativeNames: ["Liquid Test Kit", "Drop Test Kit", "Pool Master Test Kit"],
					description: `Test kits typically use liquid reagents to provide a more accurate reading of pool or spa water parameters.

They can measure a wide range of factors including pH, chlorine, bromine, alkalinity, calcium hardness, and more. It's an essential tool for pool and spa owners who want a comprehensive understanding of their water chemistry.`,
				},
				{
					slug: "digital-tester",
					name: "Digital Tester",
					alternativeNames: ["Electronic Water Tester", "Digital Pool Tester"],
					description: `Digital testers offer a modern, precise, and often more user-friendly approach to water testing. They provide digital readouts of various water parameters without the need for color matching.

They can quickly assess factors such as pH, chlorine/bromine levels, and salinity, offering accurate and consistent results.`,
				},
			],
		},
	],
};
