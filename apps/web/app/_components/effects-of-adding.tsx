"use client";

import { useEffect, useMemo, useState } from "react";
import type { LearnDosingSpec } from "@repo/learn";
import { useUnitSystem } from "@/lib/unit-system";
import {
  ArrowUp,
  ArrowDown,
  ArrowLeftRight,
  Leaf,
  Beaker,
  ChevronDown,
} from "lucide-react";

type AmountUnit =
  | "g" | "kg" | "oz" | "lb"
  | "ml" | "l" | "floz" | "gal"
  | "tsp" | "cup" | "tab";

type VolumeUnit = "l" | "gal";

const AMOUNT_LABEL: Record<AmountUnit, string> = {
  g: "g", kg: "kg", oz: "oz", lb: "lb",
  ml: "ml", l: "L", floz: "fl oz", gal: "gal",
  tsp: "tsp", cup: "cup", tab: "tab",
};

const AMOUNT_LONG: Record<AmountUnit, string> = {
  g: "grams", kg: "kilograms", oz: "ounces", lb: "pounds",
  ml: "milliliters", l: "liters", floz: "fluid ounces", gal: "gallons",
  tsp: "teaspoons", cup: "cups", tab: '1" tabs',
};

// Kitchen-standard liquid conversions (ml)
const TSP_ML = 4.9289;
const CUP_ML = 236.588;

function amountToBase(
  amount: number,
  unit: AmountUnit,
  spec: LearnDosingSpec,
): number | null {
  const isSolid = spec.form === "solid";
  switch (unit) {
    case "g":   return isSolid ? amount : null;
    case "kg":  return isSolid ? amount * 1000 : null;
    case "oz":  return isSolid ? amount * 28.349523125 : null;
    case "lb":  return isSolid ? amount * 453.59237 : null;
    case "ml":  return !isSolid ? amount : null;
    case "l":   return !isSolid ? amount * 1000 : null;
    case "floz":return !isSolid ? amount * 29.5735295625 : null;
    case "gal": return !isSolid ? amount * 3785.411784 : null;
    case "tsp":
      return isSolid
        ? (spec.gramsPerTeaspoon != null ? amount * spec.gramsPerTeaspoon : null)
        : amount * TSP_ML;
    case "cup":
      return isSolid
        ? (spec.gramsPerCup != null ? amount * spec.gramsPerCup : null)
        : amount * CUP_ML;
    case "tab":
      return isSolid && spec.gramsPerOneInchTab != null
        ? amount * spec.gramsPerOneInchTab
        : null;
  }
}

function availableUnits(spec: LearnDosingSpec): AmountUnit[] {
  if (spec.form === "solid") {
    const out: AmountUnit[] = ["g", "kg", "oz", "lb"];
    if (spec.gramsPerTeaspoon != null) out.push("tsp");
    if (spec.gramsPerCup != null) out.push("cup");
    if (spec.gramsPerOneInchTab != null) out.push("tab");
    return out;
  }
  return ["ml", "l", "floz", "gal", "tsp", "cup"];
}

function defaultAmountUnit(
  spec: LearnDosingSpec,
  system: "metric" | "imperial",
): AmountUnit {
  if (spec.form === "solid") return system === "imperial" ? "oz" : "g";
  return system === "imperial" ? "floz" : "ml";
}

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "—";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  if (abs >= 100) return Math.round(n).toLocaleString();
  if (abs >= 10) return n.toFixed(1);
  if (abs >= 1) return n.toFixed(2);
  return n.toFixed(3);
}

export function EffectsOfAdding({
  chemicalName,
  spec,
}: {
  chemicalName: string;
  spec: LearnDosingSpec;
}) {
  const { system } = useUnitSystem();
  const available = useMemo(() => availableUnits(spec), [spec]);

  const [amount, setAmount] = useState("1");
  const [amountUnit, setAmountUnit] = useState<AmountUnit>(() =>
    defaultAmountUnit(spec, system),
  );
  const [volume, setVolume] = useState("");
  const [volumeUnit, setVolumeUnit] = useState<VolumeUnit>(
    system === "imperial" ? "gal" : "l",
  );

  useEffect(() => {
    setAmountUnit(defaultAmountUnit(spec, system));
    setVolumeUnit(system === "imperial" ? "gal" : "l");
  }, [system, spec]);

  const amountBase = useMemo(() => {
    const n = parseFloat(amount);
    if (!Number.isFinite(n) || n <= 0) return null;
    return amountToBase(n, amountUnit, spec);
  }, [amount, amountUnit, spec]);

  const volumeL = useMemo(() => {
    const n = parseFloat(volume);
    if (!Number.isFinite(n) || n <= 0) return null;
    return volumeUnit === "gal" ? n * 3.785411784 : n;
  }, [volume, volumeUnit]);

  const conversions = useMemo(() => {
    if (amountBase == null) return [];
    const out: Array<{ unit: AmountUnit; value: number }> = [];
    for (const u of available) {
      if (u === amountUnit) continue;
      const oneInBase = amountToBase(1, u, spec);
      if (oneInBase == null || oneInBase === 0) continue;
      out.push({ unit: u, value: amountBase / oneInBase });
    }
    return out;
  }, [amountBase, amountUnit, available, spec]);

  const effects = useMemo(() => {
    if (amountBase == null || volumeL == null) return [];
    const scale = volumeL / 10000;
    return spec.effects.map((e) => ({
      property: e.property,
      delta: (e.ppmPer10kL * amountBase) / scale,
    }));
  }, [amountBase, volumeL, spec]);

  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
        <Beaker className="h-3.5 w-3.5" />
        Effects of adding {chemicalName}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <LabeledRow label="Amount">
          <UnitInput
            value={amount}
            unit={amountUnit}
            options={available}
            labels={AMOUNT_LABEL}
            placeholder="0"
            onValueChange={setAmount}
            onUnitChange={(u) => setAmountUnit(u as AmountUnit)}
          />
        </LabeledRow>
        <LabeledRow label="Pool volume">
          <UnitInput
            value={volume}
            unit={volumeUnit}
            options={["l", "gal"]}
            labels={{ l: "L", gal: "gal" }}
            placeholder="0"
            onValueChange={setVolume}
            onUnitChange={(u) => setVolumeUnit(u as VolumeUnit)}
          />
        </LabeledRow>
      </div>

      {conversions.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
            <ArrowLeftRight className="h-3 w-3" />
            Unit conversions
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
            {conversions.map((c) => (
              <li key={c.unit} className="flex items-baseline justify-between gap-2 tabular-nums">
                <span className="truncate text-zinc-500">{AMOUNT_LONG[c.unit]}</span>
                <span className="font-medium">
                  {fmt(c.value)} <span className="text-muted">{AMOUNT_LABEL[c.unit]}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
          <Leaf className="h-3 w-3" />
          Effect on pool chemistry
        </div>
        {volumeL == null || amountBase == null ? (
          <div className="mt-2 rounded-md bg-zinc-50 p-3 text-xs text-muted">
            Enter amount and pool volume to see the effect.
          </div>
        ) : (
          <ul className="mt-2 flex flex-col gap-1.5">
            {effects.map((e) => {
              const positive = e.delta >= 0;
              return (
                <li
                  key={e.property}
                  className={`flex items-center justify-between gap-2 rounded-md px-3 py-1.5 text-xs ${
                    positive ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"
                  }`}
                >
                  <span>{e.property}</span>
                  <span className="inline-flex items-center gap-1 font-semibold tabular-nums">
                    {positive ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    )}
                    {fmt(Math.abs(e.delta))} ppm
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

function LabeledRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-wider text-muted">
        {label}
      </div>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function UnitInput({
  value,
  unit,
  options,
  labels,
  placeholder,
  onValueChange,
  onUnitChange,
}: {
  value: string;
  unit: string;
  options: string[];
  labels: Record<string, string>;
  placeholder?: string;
  onValueChange: (v: string) => void;
  onUnitChange: (u: string) => void;
}) {
  return (
    <div className="flex items-stretch gap-2">
      <input
        type="number"
        inputMode="decimal"
        step="any"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      <div className="relative">
        <select
          value={unit}
          onChange={(e) => onUnitChange(e.target.value)}
          className="h-full min-w-[4.5rem] appearance-none rounded-lg border border-border bg-white px-3 pr-7 text-sm font-medium outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          {options.map((u) => (
            <option key={u} value={u}>
              {labels[u]}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
      </div>
    </div>
  );
}
