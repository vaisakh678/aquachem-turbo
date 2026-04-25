import Link from "next/link";
import { ArrowRight, AlertTriangle, Lightbulb } from "lucide-react";

export function CloudyPoolWaterArticle() {
  return (
    <article className="prose-aqua">
      <p className="lede">
        Cloudy water is the most common pool problem — and almost always caused by one
        of six things. The good news: once you identify the cause, the fix is usually
        a single dose, not a week of guesswork.
      </p>

      <h2>The six causes, ranked by frequency</h2>
      <ol>
        <li>
          <strong>Low Free Chlorine.</strong> By far the most common. If FC is below
          your CYA-adjusted minimum, organic matter accumulates faster than chlorine
          can oxidize it.
        </li>
        <li>
          <strong>Imbalanced pH.</strong> Above 7.8, calcium and other minerals start
          to come out of solution as fine particles. Below 7.0, water gets aggressive
          and pulls minerals from your plaster, surfacing them as cloudiness.
        </li>
        <li>
          <strong>High Calcium Hardness.</strong> Above ~400 ppm, especially with high
          pH, you'll see calcium precipitate as a milky haze.
        </li>
        <li>
          <strong>Early algae bloom.</strong> Before algae turns the water green, it
          first turns it cloudy and dull. A chlorine demand test will tell you.
        </li>
        <li>
          <strong>Filter problems.</strong> Clogged cartridges, sand that hasn't been
          backwashed in a month, or a DE filter that's lost its grids.
        </li>
        <li>
          <strong>Phosphates.</strong> Less common, but high phosphate levels feed
          algae and tax your sanitizer.
        </li>
      </ol>

      <Callout type="tip">
        Run a full water test <em>before</em> dosing anything. Adding chlorine when
        the cause is high pH will make the cloudiness worse.
      </Callout>

      <h2>Step 1: Test the water</h2>
      <p>
        Use a drop-test kit (Taylor K-2006 or similar). Strip tests are fine for daily
        checks but unreliable below 1 ppm FC and above 7.6 pH — exactly the ranges
        you care about when troubleshooting cloudiness.
      </p>
      <p>You need: FC, TC, pH, TA, CH, CYA. That's it.</p>

      <h2>Step 2: Identify the cause</h2>
      <ul>
        <li>
          <strong>FC &lt; (CYA × 0.05)?</strong> → Cause is low chlorine. Skip to{" "}
          <em>Fix: Raise FC to shock level</em>.
        </li>
        <li>
          <strong>pH &gt; 7.8?</strong> → Cause is high pH precipitating minerals.
          Lower it first; cloudiness often clears within hours.
        </li>
        <li>
          <strong>CH &gt; 400 ppm with pH &gt; 7.6?</strong> → Calcium scale.
          Partial drain + refill is the only reliable fix; lowering pH buys time.
        </li>
        <li>
          <strong>TC &gt; FC by &gt;0.5 ppm?</strong> → Combined chloramines.
          Shock to breakpoint chlorination.
        </li>
        <li>
          <strong>All readings normal?</strong> → Filter issue. Backwash, clean
          cartridges, or replace media.
        </li>
      </ul>

      <h2>Step 3: Get the exact dose</h2>
      <AdvisorCTA
        title="Open the Advisor"
        body="Plug your readings and pool volume into the calculator. You'll get the precise grams of CalHypo, milliliters of bleach, or whichever chemical is appropriate for your specific situation."
      />

      <h2>How long until it clears?</h2>
      <p>
        Once the underlying chemistry is corrected, expect:
      </p>
      <ul>
        <li><strong>FC fix:</strong> 12–24 hours with circulation running.</li>
        <li><strong>pH fix:</strong> 2–6 hours.</li>
        <li><strong>Calcium scale:</strong> 24–72 hours after partial drain.</li>
        <li><strong>Filter fix:</strong> 4–24 hours after the filter is restored.</li>
      </ul>
      <p>
        Run the pump 24/7 until clear. Vacuum to waste (not through the filter) once
        debris settles to the bottom. Brush the walls daily.
      </p>

      <h2>What not to do</h2>
      <Callout type="warning">
        <strong>Don't add a clarifier first.</strong> Clarifiers bond fine particles
        together so the filter can catch them, but if your filter is the problem
        (cause #5), they make things worse. Fix the chemistry first; clarifier is a
        last resort, not a first step.
      </Callout>

      <h2>Further reading</h2>
      <ul>
        <li>
          <Link href="/learn">Learn — full chemical reference catalog</Link>
        </li>
        <li>
          <Link href="/">Advisor — get the exact dose</Link>
        </li>
      </ul>
    </article>
  );
}

function Callout({
  type,
  children,
}: {
  type: "tip" | "warning";
  children: React.ReactNode;
}) {
  const Icon = type === "warning" ? AlertTriangle : Lightbulb;
  const cls =
    type === "warning"
      ? "bg-amber-50 ring-amber-200 text-amber-900"
      : "bg-sky-50 ring-sky-200 text-sky-900";
  return (
    <div className={`my-6 flex gap-3 rounded-xl p-4 text-sm ring-1 ring-inset ${cls}`}>
      <Icon className="h-4 w-4 flex-none translate-y-0.5" />
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

function AdvisorCTA({ title, body }: { title: string; body: string }) {
  return (
    <div className="my-6 flex flex-col gap-3 rounded-2xl border border-primary/20 bg-primary-soft p-5">
      <h3 className="m-0 text-base font-semibold text-primary">{title}</h3>
      <p className="m-0 text-sm text-sky-900">{body}</p>
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
      >
        Open the Advisor
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
