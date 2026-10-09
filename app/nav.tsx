"use client";

import { usePathname } from "next/navigation";

const links = [
  { href: "/solana-book", label: "Book" },
  { href: "/speaking", label: "Speaking" },
  { href: "/investments", label: "Investments" },
  { href: "/work", label: "Work" },
  { href: "/open-source", label: "Open source" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <a href="/" aria-current={isCurrent(pathname, "/") ? "page" : undefined}>
        Mike MacCana
      </a>
      <nav>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="site">
      <span>&copy; {new Date().getFullYear()} Mike MacCana</span>
      {isCurrent(pathname, "/contact") ? null : <a href="/contact">Contact</a>}
    </footer>
  );
}
