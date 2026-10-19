import { ChevronDown } from "lucide-react";

type Item = {
  id: string;
  title: string;
  text: string;
};

export function Disclosure({
  items,
  variant = "list",
}: {
  items: readonly Item[];
  variant?: "list" | "cards";
}) {
  return (
    <div className={variant === "cards" ? "grid gap-3" : "border-y border-ink/10"}>
      {items.map((item) => (
        <details
          key={item.id}
          className={variant === "cards" ? "card px-5" : "border-b border-ink/10 last:border-b-0"}
        >
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-[1.0625rem] font-semibold tracking-tight text-ink [&::-webkit-details-marker]:hidden">
            {item.title}
            <ChevronDown
              className="disclosure-chevron h-5 w-5 shrink-0 text-ink/45 transition-transform duration-200"
              strokeWidth={1.75}
              aria-hidden
            />
          </summary>
          <p className="max-w-3xl pb-4 text-[1.0625rem] leading-relaxed text-ink/75">{item.text}</p>
        </details>
      ))}
    </div>
  );
}
