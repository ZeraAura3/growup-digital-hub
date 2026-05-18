import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, TrendingUp, Megaphone, Globe, Search, Target, Palette, BarChart3, Quote } from "lucide-react";
import heroImg from "@/assets/hero-growth.jpg";
import growthVideo from "@/assets/AQOYCGTe8g2-ndEoRjfk6p-9S4AsJXYo0hB6x3---4FbUJp4mf3ZJw_jpgAY1jxbYGWo3qJDXM0IUlmw4RPupYCUi-AY5XNYIAnaL_kSxA.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowUp Services — Small Ideas. Big Growth." },
      { name: "description", content: "Helping startups, small businesses and local brands grow online with smart, affordable digital marketing." },
      { property: "og:title", content: "GrowUp Services — Helping Startups Grow Digitally" },
      { property: "og:description", content: "Social media, SEO, websites, ads & branding tailored for startups." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Megaphone, title: "Social Media Marketing", desc: "Instagram, Facebook, LinkedIn & YouTube campaigns that turn followers into customers." },
  { icon: Globe, title: "Website Design & Development", desc: "Modern, responsive websites that build trust and generate leads." },
  { icon: Search, title: "Search Engine Optimization", desc: "Rank higher on Google and become discoverable to the right audience." },
  { icon: Target, title: "Google & Meta Ads", desc: "Performance campaigns engineered for ROI and measurable growth." },
  { icon: Sparkles, title: "Content Creation", desc: "Reels, graphics, videos and promotional content that stops the scroll." },
  { icon: Palette, title: "Branding Solutions", desc: "Logos, identity systems and brand materials that make you memorable." },
];

const whyUs = [
  { title: "Startup-Friendly", desc: "Affordable plans designed for early-stage budgets." },
  { title: "Creative Ideas", desc: "Fresh, original concepts — never templated." },
  { title: "Personalised Support", desc: "We work closely with every client like partners." },
  { title: "Result-Focused", desc: "Growth, engagement and conversions over vanity." },
  { title: "Modern Strategies", desc: "Latest trends, tools and AI-driven workflows." },
];

const homeVideos = [
  {
    src: growthVideo,
    title: "Campaign stories in motion",
    desc: "Short-form video content built to introduce your brand, explain your offer and keep attention where it matters.",
  },
];

function Home() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-40">
          <img src={heroImg} alt="" width={1600} height={1200} className="h-full w-full object-cover mix-blend-screen" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-24 pb-22 md:pt-26 md:pb-26">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:grid-cols-[minmax(0,1fr)_500px] md:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
                Digital Marketing for Modern Businesses
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] text-gradient">
                Helping Startups<br />Grow Digitally.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                GrowUp Services is a modern digital marketing studio helping small businesses, startups
                and local brands build a strong online identity through social media, SEO, websites,
                ads and branding.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-hero inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
                  Start Your Growth Journey <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <div className="w-full max-w-xl md:justify-self-end">
              {homeVideos.map((video) => (
                <figure key={video.title} className="bento-card glow-ring overflow-hidden">
                  <div className="relative aspect-[10/10] bg-surface-2">
                    <video
                      src={video.src}
                      className="h-full w-full object-cover brightness-90 saturate-125"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={video.title}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/25 via-primary-glow/10 to-background/20 mix-blend-color" />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENTO HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 -mt-12 md:mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[180px]">
          <div className="bento-card md:col-span-4 md:row-span-2 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary-glow">What we do</span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
                Creative strategies. Engaging content. <span className="text-gradient">Powerful campaigns.</span>
              </h3>
            </div>
            <div className="flex items-end justify-between gap-6">
              <p className="text-muted-foreground max-w-md">
                We help brands build a digital presence that attracts customers and drives real growth — without enterprise price tags.
              </p>
              <Link to="/services" className="btn-ghost px-4 py-2 rounded-full text-sm inline-flex items-center gap-2 shrink-0">
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bento-card md:col-span-2 p-6 flex flex-col justify-between">
            <TrendingUp className="h-8 w-8 text-primary-glow" />
            <div>
              <div className="font-display text-4xl font-bold">10x</div>
              <div className="text-sm text-muted-foreground mt-1">Average reach uplift in 90 days</div>
            </div>
          </div>

          <div className="bento-card md:col-span-2 p-6 flex flex-col justify-between">
            <BarChart3 className="h-8 w-8 text-primary-glow" />
            <div>
              <div className="font-display text-4xl font-bold">ROI-first</div>
              <div className="text-sm text-muted-foreground mt-1">Every campaign measured & optimised</div>
            </div>
          </div>

          <div className="bento-card md:col-span-3 p-6 flex flex-col justify-between">
            <Sparkles className="h-7 w-7 text-primary-glow" />
            <div>
              <h4 className="font-display text-xl font-semibold">Built for Startups</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Every startup deserves a strong online identity — without expensive marketing costs.
              </p>
            </div>
          </div>

          <div className="bento-card md:col-span-3 p-6 flex items-center gap-4">
            <div className="grid place-items-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow shrink-0">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold">Result-Focused Approach</h4>
              <p className="text-sm text-muted-foreground">Growth, engagement and conversions — not vanity metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary-glow">Our Digital Services</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Everything you need to grow</h2>
          </div>
          <Link to="/services" className="btn-ghost px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="bento-card p-6">
              <s.icon className="h-7 w-7 text-primary-glow" />
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary-glow">Why Choose Us</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              A partner that <span className="text-gradient">actually cares</span> about your growth.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We combine creative thinking with data-driven execution to help you stand out in crowded markets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyUs.map((w, i) => (
              <div key={w.title} className="bento-card p-6">
                <div className="font-display text-sm text-primary-glow">0{i + 1}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <span className="text-xs uppercase tracking-widest text-primary-glow">What Clients Say</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient max-w-3xl">Stories from brands we've helped grow.</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {[
            { q: "GrowUp Services helped us improve our social media presence and attract more customers.", a: "Local Boutique Owner" },
            { q: "Affordable services, creative ideas, and excellent support for startups.", a: "Early-stage Founder" },
          ].map((t) => (
            <figure key={t.a} className="bento-card p-8">
              <Quote className="h-8 w-8 text-primary-glow" />
              <blockquote className="mt-4 text-xl font-display leading-snug">"{t.q}"</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <div className="bento-card p-10 md:p-16 text-center overflow-hidden relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary blur-3xl opacity-30" />
          <h2 className="text-4xl md:text-6xl font-bold text-gradient relative">Let's Build Your Brand Together</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto relative">
            Ready to grow your business online? Connect with GrowUp Services today.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap relative">
            <Link to="/contact" className="btn-hero inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
