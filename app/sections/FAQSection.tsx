const FAQS = [
  {
    question: "How soon do you roast and ship after harvest?",
    answer:
      "We schedule micro-roasts every 48 hours during harvest season. Your makhana pearls are sealed within six hours of roasting to lock in aroma and crispness."
  },
  {
    question: "Do you use any preservatives or refined sugar?",
    answer:
      "Never. We rely on brass pans, ghee from indigenous cows, and raw jaggery sourced from Champaran. Every batch is lab-tested for purity."
  },
  {
    question: "Is international shipping available?",
    answer:
      "Yes, we currently deliver to North America, UK, EU, and the Middle East via cold-chain partners. Duties and taxes are calculated at checkout."
  },
  {
    question: "Can I customise gifting for weddings or retreats?",
    answer:
      "Absolutely. Our atelier in Darbhanga collaborates with Maithil artists to hand paint madhubani motifs and personalise notes for your celebration."
  }
];

export function FAQSection() {
  return (
    <section className="faq" id="faq">
      <div className="wrapper">
        <span className="eyebrow">Questions answered</span>
        <h2 className="heading-decor">Everything you wish to know about Mithila Makhana.</h2>
        <div className="faq__grid">
          {FAQS.map((faq) => (
            <article key={faq.question} className="faq__card card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
