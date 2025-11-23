export function CTASection() {
  return (
    <section className="cta" id="connect">
      <div className="wrapper">
        <div className="cta__inner card">
          <div className="cta__copy">
            <span className="eyebrow">Begin your ritual</span>
            <h2 className="heading-decor">Bring Mithila&apos;s sacred snack to your table.</h2>
            <p>
              Book a tasting with our culinary concierge or invite Mithila Makhana to elevate your next retreat,
              wedding, or mindful gifting experience.
            </p>
          </div>
          <div className="cta__actions">
            <a className="cta-button" href="mailto:concierge@mithilamakhana.com">
              Schedule a tasting
            </a>
            <a className="cta-button secondary" href="https://cal.com" target="_blank" rel="noreferrer">
              Chat with our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
