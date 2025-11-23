const TESTIMONIALS = [
  {
    quote:
      "There is a freshness to these makhana pearls that takes me straight to my nani's kitchen. Perfectly roasted, subtle sweetness, and zero guilt.",
    name: "Ananya Jha",
    role: "Founder, Sacred Lotus Yoga"
  },
  {
    quote:
      "We serve Mithila Makhana with single origin tea at our salon. Guests love the story, and the packaging is a work of art.",
    name: "Rhea Kapoor",
    role: "Curator, The Tea Atelier Mumbai"
  },
  {
    quote:
      "As a nutritionist, I recommend them for post-partum nourishment. High protein, anti-inflammatory, and sourced with integrity.",
    name: "Dr. Meera Singh",
    role: "Ayurvedic Nutrition Counsellor"
  }
];

export function TestimonialsSection() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrapper">
        <span className="eyebrow">Trusted by tastemakers</span>
        <h2 className="heading-decor">Stories from our community</h2>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="testimonials__card card">
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
