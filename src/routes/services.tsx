import { createFileRoute, Link } from "@tanstack/react-router";
import { Megaphone, Globe, Search, Target, Sparkles, Palette, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GrowUp Services" },
      { name: "description", content: "Social media, websites, SEO, Google & Meta Ads, content and branding for startups." },
      { property: "og:title", content: "Our Digital Services — GrowUp Services" },
      { property: "og:description", content: "Everything you need to grow online, under one roof." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Megaphone, title: "Social Media Marketing", desc: "Grow on Instagram, Facebook, LinkedIn and YouTube with engaging content and audience-focused campaigns.", span: "md:col-span-2" },
  { icon: Globe, title: "Website Design & Development", desc: "Professional, responsive, modern websites designed to build trust and generate leads.", span: "" },
  { icon: Search, title: "Search Engine Optimization (SEO)", desc: "Improve your online visibility and rank higher on Google search results.", span: "" },
  { icon: Target, title: "Google & Meta Ads", desc: "Run effective advertising campaigns to reach targeted customers and increase sales.", span: "md:col-span-2" },
  { icon: Sparkles, title: "Content Creation", desc: "Creative graphics, videos, reels, and promotional content for your brand.", span: "" },
  { icon: Palette, title: "Branding Solutions", desc: "Logo design, brand identity and creative materials to make your business memorable.", span: "" },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs uppercase tracking-widest text-primary-glow">Our Digital Services</span>
      <h1 className="mt-3 text-5xl md:text-7xl font-bold text-gradient leading-[1.05] max-w-4xl">
        Everything your brand needs to grow online.
      </h1>

      <div className="mt-16 grid md:grid-cols-3 gap-4 auto-rows-[260px]">
        {services.map((s) => (
          <article key={s.title} className={`bento-card p-8 flex flex-col justify-between ${s.span}`}>
            <s.icon className="h-9 w-9 text-primary-glow" />
            <div>
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 bento-card p-10 flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-bold">Not sure where to start?</h2>
          <p className="text-muted-foreground mt-2">Get a free consultation tailored to your business goals.</p>
        </div>
        <Link to="/contact" className="btn-hero inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
          Book Free Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
