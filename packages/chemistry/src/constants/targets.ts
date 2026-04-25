import type { WaterTargets } from "../types";

export const DEFAULT_TARGETS: WaterTargets = {
	fc:   { min: 1,    max: 3    },
	tc:   { min: 1,    max: 5    },
	ph:   { min: 7.2,  max: 7.6  },
	ta:   { min: 80,   max: 120  },
	ch:   { min: 200,  max: 400  },
	cya:  { min: 30,   max: 50   },
	salt: { min: 2700, max: 3400 },
	tb:   { min: 2,    max: 6    },
	kh:   { min: 80,   max: 120  },
	bor:  { min: 30,   max: 50   },
	big:  { min: 30,   max: 50   },
	h2o2: { min: 30,   max: 100  },
	phos: { min: 0,    max: 100  },
	mg:   { min: 30,   max: 50   },
};
