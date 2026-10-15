import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return <><SiteHeader /><main id="main-content" className="case-study-page"><section className="section-block container"><div className="page-heading"><p className="sample-label">Page not found</p><h1>Let’s find a better direction.</h1><p>This page may have moved, or the link may be incomplete.</p><Link href="/" className="button primary-button">Back to home <span aria-hidden="true">↗</span></Link></div></section></main><SiteFooter /></>;
}
