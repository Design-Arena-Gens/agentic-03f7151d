const COLLECTIONS = [
  {
    name: "Maharani Reserve",
    price: "₹699",
    description:
      "Stone-roasted pearls folded with Mithila ghee, saffron, and toasted makhana dust for heritage palates.",
    includes: ["250g premium makhana", "Brass serving spoon", "Artisanal gift wrap"]
  },
  {
    name: "Sacred Lotus Ritual",
    price: "₹899",
    description:
      "Ayurvedic blend infused with lotus pollen, cardamom, and roasted cashews for sacred gatherings.",
    includes: ["300g infused makhana", "Hand-poured mithila diya", "Ritual guide scroll"]
  },
  {
    name: "Maithil Wellness Flight",
    price: "₹1,299",
    description:
      "Three chef-curated flavors celebrating sweet, savory, and spiced traditions of Mithila households.",
    includes: ["3 × 180g flavor tins", "Pairing booklet", "Early access to seasonal drops"]
  }
];

export function CollectionsSection() {
  return (
    <section className="collections" id="collections">
      <div className="wrapper">
        <span className="eyebrow">Curated offerings</span>
        <h2 className="heading-decor">Choose the collection that resonates with your ritual.</h2>
        <div className="collections__grid">
          {COLLECTIONS.map((collection) => (
            <article key={collection.name} className="collections__card card">
              <div className="collections__price">{collection.price}</div>
              <h3>{collection.name}</h3>
              <p>{collection.description}</p>
              <ul>
                {collection.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="cta-button" href="https://wa.me/919955221188?text=I%20would%20like%20to%20order%20Mithila%20Makhana">
                Reserve Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
