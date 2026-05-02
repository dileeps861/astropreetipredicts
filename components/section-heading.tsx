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
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase text-gold sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-starlight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
}
