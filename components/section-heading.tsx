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
      <p className="text-xs font-semibold uppercase text-gold-soft">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-starlight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
