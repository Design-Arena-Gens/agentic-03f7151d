import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper footer__inner">
        <div className="footer__brand">
          <Image src="/logo.svg" alt="Mithila Makhana wordmark" width={180} height={54} />
          <p>
            Bringing the purity of Mithila&apos;s sacred ponds to conscious homes across the globe. Sustainably grown,
            respectfully harvested, and carefully roasted.
          </p>
        </div>
        <div className="footer__grid">
          <div>
            <h4>Visit</h4>
            <p>
              Kamtaul Estate, Darbhanga<br />
              Bihar 846003, India
            </p>
          </div>
          <div>
            <h4>Connect</h4>
            <p>
              <a href="tel:+919955221188">+91 99552 21188</a>
              <br />
              <a href="mailto:hello@mithilamakhana.com">hello@mithilamakhana.com</a>
            </p>
          </div>
          <div>
            <h4>Follow</h4>
            <p className="footer__socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Mithila Makhana Collective</span>
          <span>Crafted with respect for Maithil heritage</span>
        </div>
      </div>
    </footer>
  );
}
