import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How We Work — GrowUp Services" },
      { name: "description", content: "Our four-step process to take brands from idea to measurable digital growth." },
      { property: "og:title", content: "Our Process — GrowUp Services" },
      { property: "og:description", content: "Understand. Strategise. Launch. Grow." },
    ],
  }),
  component: Process,
});

const steps = [
  { n: "01", title: "Understand Your Business", desc: "We learn about your business, goals and target audience — the foundation of everything." },
  { n: "02", title: "Create a Strategy", desc: "We prepare a customised digital marketing plan mapped to your goals and budget." },
  { n: "03", title: "Launch Campaigns", desc: "We execute marketing campaigns across the right platforms — content, ads and SEO." },
  { n: "04", title: "Analyse & Grow", desc: "We track performance and continuously optimise for better growth and ROI." },
];

function Process() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs uppercase tracking-widest text-primary-glow">How We Work</span>
      <h1 className="mt-3 text-5xl md:text-7xl font-bold text-gradient leading-[1.05] max-w-4xl">
        A simple, transparent way to grow.
      </h1>

      <div className="mt-20 grid gap-4">
        {steps.map((s, i) => (
          <div key={s.n} className="bento-card p-8 md:p-10 grid md:grid-cols-[120px_1fr_auto] items-center gap-6">
            <div className="font-display text-6xl font-extrabold text-gradient">{s.n}</div>
            <div>
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="text-muted-foreground mt-2 max-w-2xl">{s.desc}</p>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground">Step {i + 1} of {steps.length}</div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bento-card p-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">Ready to begin?</h2>
        <p className="mt-3 text-muted-foreground">Start your growth journey with a free strategy call.</p>
        <Link to="/contact" className="btn-hero mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
          Start Your Growth Journey
        </Link>
      </div>
    </div>
  );
}
