import { ChartNoAxesCombined, ChevronDown, Globe2, LayoutDashboard, Sparkles, Workflow, type LucideIcon } from "lucide-react";

import { cx } from "@/components/ui/primitives";

const icons: Record<string, LucideIcon> = {
  web: Globe2,
  systems: LayoutDashboard,
  automation: Workflow,
  ai: Sparkles,
  operations: ChartNoAxesCombined,
};

type Area = {
  id: string;
  title: string;
  outcome: string;
  detail: string;
};

export function CapabilityCard({
  area,
  expandable = false,
  className,
}: {
  area: Area;
  expandable?: boolean;
  className?: string;
}) {
  const Icon = icons[area.id] ?? LayoutDashboard;

  if (!expandable) {
    return (
      <article className={cx("group rounded-2xl border border-ink/10 bg-white p-5 transition-colors hover:border-azure/35", className)}>
        <Icon className="h-5 w-5 text-azure-deep" strokeWidth={1.75} aria-hidden />
        <h3 className="mt-5 text-xl">{area.title}</h3>
        <p className="mt-2 text-[1rem] leading-relaxed text-ink/70">{area.outcome}</p>
      </article>
    );
  }

  return (
    <details id={area.id} className={cx("group rounded-2xl border border-ink/10 bg-white px-5", className)}>
      <summary className="flex min-h-18 cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-azure/8 text-azure-deep">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-lg font-semibold tracking-tight text-ink">{area.title}</span>
          <span className="mt-1 block text-[0.9375rem] leading-relaxed text-ink/65">{area.outcome}</span>
        </span>
        <ChevronDown
          className="disclosure-chevron h-5 w-5 shrink-0 text-ink/45 transition-transform duration-200"
          strokeWidth={1.75}
          aria-hidden
        />
      </summary>
      <p className="max-w-3xl border-t border-ink/8 py-4 text-[1rem] leading-relaxed text-ink/75">{area.detail}</p>
    </details>
  );
}
