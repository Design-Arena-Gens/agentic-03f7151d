export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="wrapper hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">From The Lotus Capital of India</span>
          <h1 className="heading-decor">
            Taste Mithila&apos;s heritage
            <br />
            in every pearl of makhana.
          </h1>
          <p>
            Our fox nuts are hand-harvested from Darbhanga&apos;s sacred ponds, slow roasted on river stones, and
            infused with Maithil artistry. A mindful snack rich in protein, calcium, and timeless stories.
          </p>
          <div className="hero__actions">
            <a href="#collections" className="cta-button">
              Explore Heritage Packs
            </a>
            <a href="#origin" className="cta-button secondary">
              Why Mithila Makhana?
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>17g</dt>
              <dd>Plant Protein per serving</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>Natural &amp; chemical-free</dd>
            </div>
            <div>
              <dt>48 hrs</dt>
              <dd>Farm-to-pack freshness</dd>
            </div>
          </dl>
        </div>
        <div className="hero__visual">
          <div className="hero__card card">
            <div className="hero__badge">GI Tagged</div>
            <div className="hero__image">
              <div className="hero__grain" />
              <div className="hero__lotus" />
            </div>
            <div className="hero__details">
              <h3>Maharani Reserve Collection</h3>
              <p>Stone-roasted makhana pearls kissed with Mithila ghee &amp; heirloom spices.</p>
              <div className="hero__meta">
                <span>Net wt: 250g</span>
                <span>₹ 699</span>
              </div>
            </div>
          </div>
          <div className="hero__floating hero__floating--left card">
            <strong>Ayurvedic Superfood</strong>
            <p>Balances Vata &amp; Pitta doshas while boosting satiety and calm focus.</p>
          </div>
          <div className="hero__floating hero__floating--right card">
            <strong>Farmer-first Supply</strong>
            <p>Direct partnerships with 120+ Maithil families protecting wetland ecology.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
