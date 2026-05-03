type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="material-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase text-gold">
        {eyebrow}
      </p>
      <h2 className="mt-5 max-w-2xl bg-[linear-gradient(135deg,#2b241b_0%,#7a481c_46%,#b18428_100%)] bg-clip-text text-3xl font-semibold text-transparent sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
