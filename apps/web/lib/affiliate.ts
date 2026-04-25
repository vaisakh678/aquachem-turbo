const HOST = process.env.NEXT_PUBLIC_AMAZON_HOST || "amazon.com";
const TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || "";

const SEARCH_QUERY: Record<string, string> = {
	CAL_HYPO: "Cal Hypo pool shock calcium hypochlorite",
	BLEACH: "liquid pool chlorine sodium hypochlorite",
	TRICHLOR: "Trichlor chlorine tablets 3 inch",
	DICHLOR: "Dichlor pool granular shock",
	OXIDIZING_SHOCK: "non chlorine pool oxidizer shock potassium monopersulfate",
	SODA_ASH: "pool pH up soda ash sodium carbonate",
	BORAX: "20 mule team borax",
	BAKING_SODA: "pool alkalinity increaser sodium bicarbonate",
	DRY_ACID: "pool pH decreaser dry acid sodium bisulfate",
	MURIATIC_ACID: "muriatic acid pool",
	CALCIUM_CHLORIDE: "pool calcium hardness increaser calcium chloride",
	LIQUID_CALCIUM_BOOSTER: "liquid calcium hardness booster pool",
	DRY_STABILIZER: "pool stabilizer cyanuric acid granular",
	LIQUID_STABILIZER: "liquid pool stabilizer cyanuric acid",
	SALT: "pool salt chlorinator sodium chloride",
	BROMINE: "pool spa bromine tablets",
	BORIC_ACID: "boric acid pool",
	HYDROGEN_PEROXIDE: "food grade hydrogen peroxide 35 percent",
	BIGUANIDE: "biguanide pool sanitizer",
	PHOSPHATE_REDUCER: "phosphate remover pool",
	MAGNESIUM_CHLORIDE: "magnesium chloride pool",
	TETRABORATE_PENTAHYDRATE: "sodium tetraborate pentahydrate pool",
};

// Fill in ASINs as you verify specific products. Takes precedence over search.
const ASIN: Record<string, string> = {};

export function affiliateEnabled(): boolean {
	return TAG.length > 0;
}

export function amazonSearchUrl(query: string): string {
	if (!affiliateEnabled()) return "";
	return `https://www.${HOST}/s?k=${encodeURIComponent(query)}&tag=${TAG}`;
}

export function amazonProductUrl(asin: string): string {
	if (!affiliateEnabled()) return "";
	return `https://www.${HOST}/dp/${asin}?tag=${TAG}`;
}

export function buyLinkForChemical(code: string, label: string): string {
	if (!affiliateEnabled()) return "";
	const asin = ASIN[code];
	if (asin) return amazonProductUrl(asin);
	return amazonSearchUrl(SEARCH_QUERY[code] ?? label);
}

export function buyLinkForTestKit(): string {
	return amazonSearchUrl("Taylor K-2006 pool water test kit");
}
