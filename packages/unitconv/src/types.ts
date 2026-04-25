export type SolidUnit = "mg" | "g" | "kg" | "oz" | "lb";
export type LiquidUnit = "ml" | "l" | "floz" | "pt" | "qt" | "gal";
export type TabletUnit = "tabs";

export type Unit = SolidUnit | LiquidUnit | TabletUnit;
export type BaseUnit = "kg" | "l" | "tabs";
export type UnitCategory = "solid" | "liquid" | "tabs";
