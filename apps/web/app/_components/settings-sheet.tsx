"use client";

import { useEffect } from "react";
import { PROPERTIES, DEFAULT_TARGETS, type PropertyCode } from "@repo/chemistry";
import { usePoolSettings, type ReadingKey } from "@/lib/pool-settings";
import { X, RotateCcw, Settings2 } from "lucide-react";

const GROUPS: Array<{ title: string; keys: ReadingKey[] }> = [
  { title: "Primary",   keys: ["fc", "ph", "ta", "ch", "cya"] },
  { title: "Secondary", keys: ["tc", "salt", "kh"] },
  { title: "Niche",     keys: ["bor", "big", "h2o2", "phos", "mg", "tb"] },
];

export function SettingsSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close settings"
        onClick={onClose}
        className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        className="relative flex w-full max-w-xl max-h-[90vh] flex-col overflow-hidden rounded-t-2xl bg-card shadow-2xl sm:max-h-[85vh] sm:rounded-2xl"
      >
        <SettingsHeader onClose={onClose} />
        <SettingsBody />
        <SettingsFooter onClose={onClose} />
      </div>
    </div>
  );
}

function SettingsHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between border-b border-border px-5 py-4">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
          <Settings2 className="h-4 w-4" />
        </div>
        <div>
          <h2 id="settings-title" className="text-sm font-semibold tracking-tight">
            Customize readings
          </h2>
          <p className="text-xs text-muted">Toggle properties and adjust target ranges</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="rounded-lg p-1.5 text-muted transition hover:bg-zinc-100 hover:text-foreground"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

function SettingsBody() {
  return (
    <div className="flex-1 overflow-y-auto px-5 py-4">
      <div className="flex flex-col gap-6">
        {GROUPS.map((g) => (
          <section key={g.title}>
            <div className="text-xs font-medium uppercase tracking-wider text-muted">
              {g.title}
            </div>
            <div className="mt-2 flex flex-col divide-y divide-border rounded-xl border border-border bg-white">
              {g.keys.map((k) => (
                <PropertyRow key={k} readingKey={k} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function PropertyRow({ readingKey }: { readingKey: ReadingKey }) {
  const { settings, setEnabled, setTarget, resetTarget } = usePoolSettings();
  const code = readingKey.toUpperCase() as PropertyCode;
  const meta = PROPERTIES[code];
  const enabled = settings.enabled[readingKey];
  const override = settings.targetOverrides[readingKey];
  const def = DEFAULT_TARGETS[readingKey];
  const min = override?.min ?? def?.min ?? 0;
  const max = override?.max ?? def?.max ?? 0;
  const isCustomized = override != null;

  return (
    <div className="flex flex-col gap-3 px-4 py-3">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-3 cursor-pointer">
          <Switch
            checked={enabled}
            onChange={(v) => setEnabled(readingKey, v)}
            label={`Enable ${meta.label}`}
          />
          <div>
            <div className="text-sm font-medium">{meta.label}</div>
            <div className="text-[11px] text-muted">{meta.unit || "index"}</div>
          </div>
        </label>
        {isCustomized && (
          <button
            type="button"
            onClick={() => resetTarget(readingKey)}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-muted transition hover:bg-zinc-100 hover:text-foreground"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        )}
      </div>

      {enabled && (
        <div className="flex items-center gap-2 pl-11">
          <RangeField
            label="Min"
            value={min}
            onChange={(v) => setTarget(readingKey, v, max)}
          />
          <span className="text-xs text-muted">–</span>
          <RangeField
            label="Max"
            value={max}
            onChange={(v) => setTarget(readingKey, min, v)}
          />
          {meta.unit && (
            <span className="ml-1 text-xs text-muted">{meta.unit}</span>
          )}
        </div>
      )}
    </div>
  );
}

function RangeField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="flex items-center gap-1.5">
      <span className="text-[10px] uppercase tracking-wider text-muted">{label}</span>
      <input
        type="number"
        inputMode="decimal"
        step="any"
        value={value}
        onChange={(e) => {
          const n = parseFloat(e.target.value);
          if (Number.isFinite(n)) onChange(n);
        }}
        className="w-20 rounded-md border border-border bg-white px-2 py-1 text-sm tabular-nums outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={(e) => {
        e.preventDefault();
        onChange(!checked);
      }}
      className={`relative h-5 w-9 flex-none rounded-full transition ${
        checked ? "bg-primary" : "bg-zinc-300"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
          checked ? "left-[18px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

function SettingsFooter({ onClose }: { onClose: () => void }) {
  const { resetAll } = usePoolSettings();
  return (
    <div className="flex items-center justify-between border-t border-border bg-zinc-50 px-5 py-3">
      <button
        type="button"
        onClick={() => {
          if (confirm("Reset all properties and ranges to defaults?")) {
            resetAll();
          }
        }}
        className="text-xs font-medium text-muted transition hover:text-rose-600"
      >
        Reset all to defaults
      </button>
      <button
        type="button"
        onClick={onClose}
        className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-white transition hover:bg-sky-700"
      >
        Done
      </button>
    </div>
  );
}
