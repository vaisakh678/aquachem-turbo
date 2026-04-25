"use client";

import { useUnitSystem, type UnitSystem } from "@/lib/unit-system";

export function UnitSystemToggle() {
  const { system, setSystem } = useUnitSystem();
  return (
    <div
      role="radiogroup"
      aria-label="Unit system"
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-white p-0.5 text-xs font-medium"
    >
      <Segment label="Metric" value="metric" active={system === "metric"} onClick={setSystem} />
      <Segment label="Imperial" value="imperial" active={system === "imperial"} onClick={setSystem} />
    </div>
  );
}

function Segment({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: UnitSystem;
  active: boolean;
  onClick: (v: UnitSystem) => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={() => onClick(value)}
      className={`rounded-full px-2.5 py-1 transition ${
        active ? "bg-primary-soft text-primary" : "text-muted hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
