export type PropertyCode =
	| "FC"
	| "TC"
	| "PH"
	| "TA"
	| "CH"
	| "CYA"
	| "SALT"
	| "TB"
	| "KH"
	| "BOR"
	| "BIG"
	| "H2O2"
	| "PHOS"
	| "MG";

export interface PropertyMeta {
	code: PropertyCode;
	label: string;
	unit: string;
}
