import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GrowUp Services" },
      { name: "description", content: "GrowUp Services empowers startups with affordable, creative, result-oriented digital marketing." },
      { property: "og:title", content: "About GrowUp Services" },
      { property: "og:description", content: "Our mission, vision and approach to startup growth." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs uppercase tracking-widest text-primary-glow">About Us</span>
      <h1 className="mt-3 text-5xl md:text-7xl font-bold text-gradient leading-[1.05] max-w-4xl">
        A growing studio for growing brands.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        GrowUp Services is a digital marketing startup founded with a clear vision —
        help businesses succeed in the digital world with affordable, creative and
        result-oriented solutions tailored to every business need.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-4">
        <div className="bento-card p-8">
          <Heart className="h-7 w-7 text-primary-glow" />
          <h3 className="mt-4 font-display text-xl font-semibold">Who we are</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A team that understands the challenges faced by startups and local businesses — because we are one.
          </p>
        </div>
        <div className="bento-card p-8">
          <Target className="h-7 w-7 text-primary-glow" />
          <h3 className="mt-4 font-display text-xl font-semibold">Our Mission</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            To empower startups and businesses with innovative digital marketing solutions that drive growth and visibility.
          </p>
        </div>
        <div className="bento-card p-8">
          <Eye className="h-7 w-7 text-primary-glow" />
          <h3 className="mt-4 font-display text-xl font-semibold">Our Vision</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            To become a trusted digital growth partner for startups and emerging businesses worldwide.
          </p>
        </div>
      </div>

      <div className="mt-20 bento-card p-10 md:p-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient max-w-3xl">
          Built for Startups & Growing Businesses
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Whether you're starting a new business or growing an existing brand,
          GrowUp Services helps you build a professional digital presence without
          expensive marketing costs. Every startup deserves a strong online identity.
        </p>
        <Link to="/contact" className="btn-hero mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
          Work with us
        </Link>
      </div>
    </div>
  );
}
