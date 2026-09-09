const capabilities = [
  "AI-powered websites",
  "WhatsApp assistants",
  "Facebook & Instagram replies",
  "AI point of sale",
  "Stock alerts & reorder suggestions",
  "M-Pesa payments",
  "Online ordering & delivery tracking",
  "Google search setup",
  "Social content & scheduling",
  "Domain, hosting & security",
];

export function CapabilityMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink/8 bg-paper-2 py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-paper-2 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-paper-2 to-transparent"
      />

      <div className="flex w-max animate-marquee items-center gap-3">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center gap-3" aria-hidden={copy === 1}>
            {capabilities.map((capability) => (
              <li
                key={`${copy}-${capability}`}
                className="flex items-center gap-3 whitespace-nowrap text-[0.9375rem] font-medium text-ink/60"
              >
                {capability}
                <span className="inline-block h-1 w-1 rounded-full bg-azure/50" aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
