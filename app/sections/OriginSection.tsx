const HIGHLIGHTS = [
  {
    title: "Darbhanga Wetlands",
    description:
      "Our harvest begins in Maithil ponds fed by the Kosi river. Farmers wade at dawn to handpick the ripest gorgons."
  },
  {
    title: "Heritage Roasting",
    description:
      "Fresh seeds are sun-dried and roasted in earthen pans over river stones, unlocking the signature pop and sweetness."
  },
  {
    title: "Artisan Sorting",
    description:
      "Every pearl is inspected for size and texture, then infused with ghee, jaggery, and regionally foraged spices."
  }
];

export function OriginSection() {
  return (
    <section className="origin" id="origin">
      <div className="wrapper origin__inner card">
        <div className="origin__copy">
          <span className="eyebrow">Traceable terroir</span>
          <h2 className="heading-decor">Our makhana is an ode to Maithil craftsmanship.</h2>
          <p>
            Every pearl journeys from Kamtaul&apos;s sacred ponds to your table in just 48 hours. We honour GI-tagged
            growers with price premiums, invest in wetland conservation, and capture the aroma of freshly roasted fox
            nuts that Maithil weddings are renowned for.
          </p>
          <div className="origin__badges">
            <span>GI Certified Supply</span>
            <span>Stone-roasted in small batches</span>
            <span>Zero additives or preservatives</span>
          </div>
        </div>
        <div className="origin__timeline">
          {HIGHLIGHTS.map((highlight) => (
            <article key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
