import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import groupLogo from "@/assets/group_logo.png";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/process", label: "Process" },
    { to: "/contact", label: "Contact" },
  ] as const;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    if (!isMenuOpen) {
      return () => {
        document.body.style.overflow = "";
      };
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-[0_0_20px_-6px_var(--color-primary)]">
            <img
              src={groupLogo}
              alt="GrowUp Services"
              className="h-16 w-16 object-cover object-[50%_35%]"
            />
          </span>
          <span className="font-display font-bold tracking-tight text-lg">GrowUp</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{
                className: "bg-white/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="btn-hero px-4 py-2 rounded-full text-sm font-medium hidden md:inline-flex"
          >
            Free Consultation
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-foreground transition hover:border-primary-glow/50 hover:bg-white/10 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] transition md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`relative flex h-dvh w-[min(82vw,320px)] flex-col border-r border-white/10 bg-background p-6 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-[0_0_20px_-6px_var(--color-primary)]">
                <img
                  src={groupLogo}
                  alt="GrowUp Services"
                  className="h-16 w-16 object-cover object-[50%_35%]"
                />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">GrowUp</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-primary-glow/50 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-10 grid gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsMenuOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
                activeProps={{
                  className: "bg-white/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-hero mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium"
          >
            Free Consultation
          </Link>
        </aside>
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
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white">
              <img
                src={groupLogo}
                alt="GrowUp Services"
                className="h-16 w-16 object-cover object-[50%_35%]"
              />
            </span>
            <span className="font-display font-bold text-lg">GrowUp</span>
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
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=growup3201@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                growup3201@gmail.com
              </a>
            </li>
            <li>+91 87509 88926</li>
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
