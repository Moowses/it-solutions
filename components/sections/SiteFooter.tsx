export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p>&copy; {new Date().getFullYear()} Karl Mosses</p>
        <p>Built for performance</p>
      </div>
    </footer>
  );
}
