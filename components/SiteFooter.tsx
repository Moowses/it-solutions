import Link from "next/link";
import { contactEmail, linkedInUrl, location, ownerName, siteUrl } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{ownerName}</p>
          <p>{location}</p>
          <div className="footer-links footer-contact" aria-label="Contact links">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={siteUrl}>karlmosses.com</a>
            <a href={linkedInUrl}>LinkedIn</a>
          </div>
        </div>
        <nav className="footer-links footer-nav" aria-label="Footer navigation">
          <Link href="/#services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
