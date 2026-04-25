export interface GuideCategory {
	slug: string;
	name: string;
	description: string;
	tint: "rose" | "sky" | "emerald";
}

export interface GuideMeta {
	category: string; // category slug
	slug: string;
	title: string;
	excerpt: string;
	publishedAt: string; // ISO date
	readingMinutes: number;
}

export const GUIDE_CATEGORIES: GuideCategory[] = [
	{
		slug: "troubleshooting",
		name: "Troubleshooting",
		description:
			"Fix specific pool problems — cloudy water, algae, stains, low chlorine, and more.",
		tint: "rose",
	},
	{
		slug: "chemistry",
		name: "Pool Chemistry",
		description:
			"Plain-language explainers on Free Chlorine, pH, Total Alkalinity, CYA, and how they interact.",
		tint: "sky",
	},
	{
		slug: "maintenance",
		name: "Maintenance",
		description:
			"Routine care: testing schedules, vacuuming, brushing, and seasonal upkeep.",
		tint: "emerald",
	},
];

export const GUIDES: GuideMeta[] = [
	{
		category: "troubleshooting",
		slug: "cloudy-pool-water",
		title: "Why Is My Pool Water Cloudy? (And How to Clear It Fast)",
		excerpt:
			"Cloudy water has six common causes. Here's how to identify which one you have — and the exact dose to fix it.",
		publishedAt: "2026-04-25",
		readingMinutes: 6,
	},
];

export function getCategory(slug: string): GuideCategory | undefined {
	return GUIDE_CATEGORIES.find((c) => c.slug === slug);
}

export function getGuide(category: string, slug: string): GuideMeta | undefined {
	return GUIDES.find((g) => g.category === category && g.slug === slug);
}

export function getGuidesInCategory(category: string): GuideMeta[] {
	return GUIDES.filter((g) => g.category === category);
}
