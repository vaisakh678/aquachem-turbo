"use client";

import { useMemo, useState } from "react";
import {
  getAdviceBundle,
  PROPERTIES,
  DEFAULT_TARGETS,
  type WaterReadings,
  type Problem,
  type Action,
  type PropertyCode,
} from "@repo/chemistry";
import {
  Droplets,
  ArrowUp,
  ArrowDown,
  Hourglass,
  Waves,
  CheckCircle2,
  Beaker,
  AlertTriangle,
} from "lucide-react";

type ReadingKey = Lowercase<PropertyCode>;

const PRIMARY: ReadingKey[] = ["fc", "ph", "ta", "ch", "cya"];
const SECONDARY: ReadingKey[] = ["tc", "salt", "kh"];
const NICHE: ReadingKey[] = ["bor", "big", "h2o2", "phos", "mg", "tb"];

const PROP_BY_KEY: Record<ReadingKey, PropertyCode> = Object.values(PROPERTIES).reduce(
  (acc, p) => {
    acc[p.code.toLowerCase() as ReadingKey] = p.code;
    return acc;
  },
  {} as Record<ReadingKey, PropertyCode>,
);

const ACTION_STYLES: Record<Action, { label: string; bg: string; fg: string; ring: string; icon: typeof ArrowUp }> = {
  INCREASE: { label: "Increase",   bg: "bg-emerald-50", fg: "text-emerald-700", ring: "ring-emerald-200", icon: ArrowUp },
  DECREASE: { label: "Decrease",   bg: "bg-amber-50",   fg: "text-amber-700",   ring: "ring-amber-200",   icon: ArrowDown },
  DILUTE:   { label: "Dilute",     bg: "bg-orange-50",  fg: "text-orange-700",  ring: "ring-orange-200",  icon: Waves },
  WAIT:     { label: "Wait",       bg: "bg-sky-50",     fg: "text-sky-700",     ring: "ring-sky-200",     icon: Hourglass },
  NONE:     { label: "OK",         bg: "bg-zinc-50",    fg: "text-zinc-600",    ring: "ring-zinc-200",    icon: CheckCircle2 },
};

function fmt(n: number, digits = 2): string {
  if (!Number.isFinite(n)) return "—";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  const d = abs >= 100 ? 0 : abs >= 10 ? 1 : digits;
  return n.toLocaleString(undefined, { maximumFractionDigits: d });
}

function rangeHint(key: ReadingKey): string {
  const r = DEFAULT_TARGETS[key];
  if (!r) return "";
  return `${r.min}–${r.max}`;
}

export default function Home() {
  const [volume, setVolume] = useState<string>("50000");
  const [readings, setReadings] = useState<Record<ReadingKey, string>>(() => {
    const blank = {} as Record<ReadingKey, string>;
    for (const k of [...PRIMARY, ...SECONDARY, ...NICHE]) blank[k] = "";
    return blank;
  });
  const [showNiche, setShowNiche] = useState(false);

  const volumeL = useMemo(() => {
    const n = parseFloat(volume);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [volume]);

  const parsedReadings: WaterReadings | null = useMemo(() => {
    const out: Partial<Record<ReadingKey, number>> = {};
    let any = false;
    for (const k of [...PRIMARY, ...SECONDARY, ...NICHE]) {
      const v = readings[k].trim();
      if (v === "") continue;
      const n = parseFloat(v);
      if (Number.isFinite(n)) {
        out[k] = n;
        any = true;
      }
    }
    if (!any) return null;
    return { ...out, testedAt: new Date() } as WaterReadings;
  }, [readings]);

  const problems: Problem[] = useMemo(() => {
    if (!parsedReadings || volumeL <= 0) return [];
    return getAdviceBundle({ readings: parsedReadings, volumeL });
  }, [parsedReadings, volumeL]);

  const hasInput = parsedReadings !== null;
  const hasIssues = problems.length > 0;

  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <Droplets className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-semibold tracking-tight">AquaChem</div>
              <div className="text-xs text-muted">Pool chemistry advisor</div>
            </div>
          </div>
          <div className="hidden text-xs text-muted sm:block">
            Enter readings → get precise dosing
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Inputs */}
          <section className="lg:col-span-2">
            <Card>
              <CardHeader title="Water Test" subtitle="Enter the values from your test kit" />
              <div className="px-6 py-5">
                <Field
                  label="Pool volume"
                  unit="L"
                  value={volume}
                  onChange={setVolume}
                  hint="Total water volume in liters"
                  emphasis
                />
              </div>
              <div className="border-t border-border px-6 py-5">
                <SectionLabel>Primary</SectionLabel>
                <div className="mt-3 grid grid-cols-1 gap-3">
                  {PRIMARY.map((k) => (
                    <ReadingField
                      key={k}
                      readingKey={k}
                      value={readings[k]}
                      onChange={(v) => setReadings((r) => ({ ...r, [k]: v }))}
                    />
                  ))}
                </div>
              </div>
              <div className="border-t border-border px-6 py-5">
                <SectionLabel>Secondary</SectionLabel>
                <div className="mt-3 grid grid-cols-1 gap-3">
                  {SECONDARY.map((k) => (
                    <ReadingField
                      key={k}
                      readingKey={k}
                      value={readings[k]}
                      onChange={(v) => setReadings((r) => ({ ...r, [k]: v }))}
                    />
                  ))}
                </div>
              </div>
              <div className="border-t border-border px-6 py-5">
                <button
                  type="button"
                  onClick={() => setShowNiche((s) => !s)}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {showNiche ? "− Hide additional parameters" : "+ More parameters"}
                </button>
                {showNiche && (
                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {NICHE.map((k) => (
                      <ReadingField
                        key={k}
                        readingKey={k}
                        value={readings[k]}
                        onChange={(v) => setReadings((r) => ({ ...r, [k]: v }))}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </section>

          {/* Results */}
          <section className="lg:col-span-3">
            <Card>
              <CardHeader
                title="Recommendations"
                subtitle={
                  !hasInput
                    ? "Results appear as you enter readings"
                    : hasIssues
                      ? `${problems.length} ${problems.length === 1 ? "issue" : "issues"} detected`
                      : "All parameters in range"
                }
              />
              <div className="p-6">
                {!hasInput ? (
                  <EmptyState />
                ) : !hasIssues ? (
                  <AllClearState />
                ) : (
                  <div className="flex flex-col gap-4">
                    {problems.map((p, i) => (
                      <ProblemCard key={`${p.propertyCode}-${i}`} problem={p} />
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </section>
        </div>

        <footer className="mt-10 text-center text-xs text-muted">
          Calculations powered by <span className="font-medium text-foreground">@repo/chemistry</span>.
          Always verify with your test kit before dosing.
        </footer>
      </main>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]">
      {children}
    </div>
  );
}

function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-border px-6 py-4">
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-0.5 text-sm text-muted">{subtitle}</p>}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-medium uppercase tracking-wider text-muted">{children}</div>
  );
}

function Field({
  label,
  unit,
  value,
  onChange,
  hint,
  emphasis,
}: {
  label: string;
  unit?: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
  emphasis?: boolean;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className={`text-sm ${emphasis ? "font-semibold" : "font-medium"}`}>{label}</span>
        {hint && <span className="text-xs text-muted">{hint}</span>}
      </div>
      <div className="mt-1.5 flex items-center rounded-lg border border-border bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition">
        <input
          type="number"
          inputMode="decimal"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-zinc-400"
          placeholder="—"
        />
        {unit && (
          <span className="px-3 text-xs font-medium text-muted">{unit}</span>
        )}
      </div>
    </label>
  );
}

function ReadingField({
  readingKey,
  value,
  onChange,
}: {
  readingKey: ReadingKey;
  value: string;
  onChange: (v: string) => void;
}) {
  const meta = PROPERTIES[PROP_BY_KEY[readingKey]];
  const range = rangeHint(readingKey);
  return (
    <Field
      label={meta.label}
      unit={meta.unit || undefined}
      value={value}
      onChange={onChange}
      hint={range ? `Target ${range}` : undefined}
    />
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-14 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
        <Beaker className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-medium">Awaiting your readings</p>
      <p className="mt-1 max-w-xs text-xs text-muted">
        Enter at least one water test value on the left to receive treatment guidance.
      </p>
    </div>
  );
}

function AllClearState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-50 py-14 text-center ring-1 ring-emerald-200">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <p className="mt-4 text-sm font-semibold text-emerald-900">All clear</p>
      <p className="mt-1 max-w-xs text-xs text-emerald-700">
        Every entered parameter sits within its ideal range. No dosing needed.
      </p>
    </div>
  );
}

function ProblemCard({ problem }: { problem: Problem }) {
  const meta = PROPERTIES[problem.propertyCode];
  const style = ACTION_STYLES[problem.action];
  const Icon = style.icon;

  const { idealRange, currentReading } = problem;
  const span = idealRange.max - idealRange.min;
  const padded = span === 0 ? 1 : span;
  const lo = idealRange.min - padded * 0.5;
  const hi = idealRange.max + padded * 0.5;
  const pct = Math.max(0, Math.min(100, ((currentReading - lo) / (hi - lo)) * 100));
  const minPct = Math.max(0, Math.min(100, ((idealRange.min - lo) / (hi - lo)) * 100));
  const maxPct = Math.max(0, Math.min(100, ((idealRange.max - lo) / (hi - lo)) * 100));

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
            <span>{meta.label}</span>
          </div>
          <h3 className="mt-1 text-base font-semibold tracking-tight">{problem.title}</h3>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${style.bg} ${style.fg} ${style.ring}`}
        >
          <Icon className="h-3.5 w-3.5" />
          {style.label}
        </span>
      </header>

      {/* range bar */}
      <div className="mt-4">
        <div className="relative h-2 rounded-full bg-zinc-100">
          <div
            className="absolute inset-y-0 rounded-full bg-emerald-200"
            style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
          />
          <div
            className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-zinc-900 shadow"
            style={{ left: `${pct}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-muted">
          <span>
            Current{" "}
            <span className="font-semibold text-foreground">
              {fmt(currentReading)}
              {meta.unit ? ` ${meta.unit}` : ""}
            </span>
          </span>
          <span>
            Ideal{" "}
            <span className="font-medium text-foreground">
              {fmt(idealRange.min)}–{fmt(idealRange.max)}
              {meta.unit ? ` ${meta.unit}` : ""}
            </span>
          </span>
        </div>
      </div>

      {problem.explanation && (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600">{problem.explanation}</p>
      )}

      {problem.recommendedSolutions.length > 0 ? (
        <div className="mt-5">
          <SectionLabel>Recommended dosing</SectionLabel>
          <ul className="mt-2 divide-y divide-border overflow-hidden rounded-lg border border-border bg-white">
            {problem.recommendedSolutions.map((s) => (
              <li key={s.chemical.code} className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="min-w-0">
                  <div className="text-sm font-medium">{s.chemical.label}</div>
                  <div className="text-xs text-muted">
                    {s.chemical.form === "liquid" ? "Liquid" : "Solid"} · {s.chemical.code}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold tabular-nums">
                    {fmt(s.dosage.value)} <span className="text-muted">{s.dosage.unit}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : problem.action === "DILUTE" ? (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-orange-50 p-3 text-xs text-orange-800 ring-1 ring-inset ring-orange-200">
          <AlertTriangle className="mt-0.5 h-4 w-4 flex-none" />
          <span>Dilute by partial water replacement — no chemical can lower this safely.</span>
        </div>
      ) : null}
    </article>
  );
}
