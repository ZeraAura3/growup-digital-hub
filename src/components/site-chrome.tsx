import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/process", label: "Process" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_20px_-4px_var(--color-primary)]">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-display font-bold tracking-tight text-lg">
            GrowUp<span className="text-primary-glow">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="btn-hero px-4 py-2 rounded-full text-sm font-medium hidden sm:inline-flex"
        >
          Free Consultation
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display font-bold text-lg">GrowUp<span className="text-primary-glow">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Digital Marketing • Branding • Website Development • Startup Growth Solutions
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-display font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-display font-semibold mb-3">Reach us</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>info@growupservices.com</li>
            <li>+91 XXXXX XXXXX</li>
            <li>Greater Noida, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © 2026 GrowUp Services. All Rights Reserved.
      </div>
    </footer>
  );
}
