const BENEFITS = [
  {
    title: "Protein-dense Nourishment",
    description: "Fuel your day with a complete amino acid profile that supports muscle recovery and satiety.",
    icon: "💪"
  },
  {
    title: "Calming Ritual Snack",
    description: "Low glycemic, magnesium-rich pearls that soothe the nervous system and promote mindful snacking.",
    icon: "🧘"
  },
  {
    title: "Heart & Skin Friendly",
    description: "Naturally low in fat yet rich in antioxidants that support radiant skin and cardiovascular health.",
    icon: "💚"
  },
  {
    title: "Sustainable Wetland Crop",
    description: "Cultivated without soil degradation and nurtured by Mithila’s thriving lotus ecosystems.",
    icon: "🌿"
  }
];

export function BenefitsSection() {
  return (
    <section className="benefits" id="benefits">
      <div className="wrapper">
        <span className="eyebrow">Wellness in every handful</span>
        <h2 className="heading-decor benefits__title">Science-backed nutrition rooted in Mithila wisdom.</h2>
        <div className="benefits__grid">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="benefits__card card">
              <span className="benefits__icon" role="img" aria-hidden="true">
                {benefit.icon}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
