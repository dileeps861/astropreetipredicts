import type { Review } from "@/lib/homepage-data";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";

type TestimonialsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  reviews: Review[];
};

export function TestimonialsSection({
  eyebrow,
  title,
  description,
  reviews,
}: TestimonialsSectionProps) {
  return (
    <section className="space-y-12">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
}
