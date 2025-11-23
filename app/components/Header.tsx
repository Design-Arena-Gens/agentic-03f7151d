import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Story", href: "#origin" },
  { label: "Benefits", href: "#benefits" },
  { label: "Collections", href: "#collections" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" }
];

export function Header() {
  return (
    <header className="wrapper header">
      <div className="header__inner">
        <Link href="#" className="header__brand" aria-label="Mithila Makhana home">
          <Image src="/logo.svg" alt="Mithila Makhana logo" width={180} height={54} priority />
        </Link>
        <nav className="header__nav">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="header__link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header__cta">
          <a className="cta-button" href="#collections">
            Shop Premium Packs
          </a>
        </div>
      </div>
    </header>
  );
}
