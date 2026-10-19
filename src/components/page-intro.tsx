export function PageIntro({
  title,
  lede,
}: {
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-3xl">
      <h1 className="text-[2rem] leading-[1.12] text-ink sm:text-4xl">{title}</h1>
      <p className="lede mt-4 text-ink/70">{lede}</p>
    </header>
  );
}
