import Link from "next/link";

const navLinks = [
  {
    href: "/guides",
    label: "Guides",
    description: "Guides (coming soon)",
  },
];

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav-inner">
        <Link className="site-brand" href="/">
          Dropzone Atlas
        </Link>
        <div className="site-nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} className="site-nav-link" href={link.href} aria-label={link.description}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
