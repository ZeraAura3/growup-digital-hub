import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Megaphone, Globe, Search, Target, Sparkles, Palette, ArrowRight, CheckCircle2, X } from "lucide-react";

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
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    headline: "Build Your Brand Online",
    desc: "Connect with customers, build trust and grow across Instagram, Facebook, LinkedIn and YouTube.",
    overview: [
      "Social media marketing is one of the most effective ways for startups and businesses to connect with customers, build trust and grow online. A strong social media presence helps businesses increase visibility, attract potential customers and build long-term relationships.",
      "At GrowUp Services, we help businesses create professional and engaging social media profiles that represent their brand identity and communicate clearly with their audience.",
    ],
    strategyTitle: "We develop customised strategies based on",
    strategy: ["Business goals", "Industry type", "Target audience", "Competitor analysis", "Current social media trends"],
    sections: [
      {
        title: "Social Media Management",
        body: "Managing accounts consistently is important for maintaining brand visibility and customer engagement.",
        bullets: ["Posting regular content", "Updating profile information", "Responding to messages and comments", "Monitoring audience engagement", "Maintaining brand consistency"],
      },
      {
        title: "Creative Post Designing",
        body: "Visual content plays a major role in attracting customers on social media.",
        bullets: ["Promotional posts", "Informative graphics", "Festival creatives", "Product advertisements", "Brand awareness posts", "Story designs"],
      },
      {
        title: "Reels & Video Content",
        body: "Short-form videos and reels are one of the fastest-growing forms of online content.",
        bullets: ["Instagram reels", "Promotional videos", "Product showcase videos", "Brand introduction videos", "Trend-based content"],
      },
      {
        title: "Paid Promotions",
        body: "Paid advertising helps businesses reach a larger and more targeted audience quickly.",
        bullets: ["Facebook, Instagram and LinkedIn campaigns", "Audience targeting", "Budget optimisation", "Ad creative design", "Campaign performance monitoring", "Retargeting campaigns"],
      },
      {
        title: "Content Planning",
        body: "Consistency is important for social media growth, so we create monthly plans that keep your brand active and organised.",
        bullets: ["Posting schedules", "Content ideas", "Promotional campaigns", "Festival marketing", "Trending content opportunities"],
      },
    ],
    benefits: [
      { title: "Increase Followers", desc: "Consistent and engaging content helps businesses grow their audience organically." },
      { title: "Build Brand Awareness", desc: "Social media helps businesses become more visible and recognisable." },
      { title: "Improve Engagement", desc: "Interactive content increases customer interaction and communication." },
      { title: "Generate Leads", desc: "Targeted campaigns help businesses attract potential customers." },
      { title: "Build Customer Trust", desc: "Professional and active profiles improve brand credibility." },
    ],
    span: "md:col-span-2",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    headline: "Professional Websites For Modern Startups",
    desc: "Get a professional website that builds trust, explains your business and helps generate enquiries.",
    overview: [
      "A website is one of the most important assets for any business. It acts as the digital identity of the company and creates the first impression for customers.",
      "At GrowUp Services, we design and develop modern websites that are professional, user-friendly, mobile responsive, SEO-friendly, fast and secure.",
      "Our websites are designed not only to look attractive but also to help businesses generate leads and improve customer trust.",
    ],
    sections: [
      {
        title: "Mobile Responsive Design",
        body: "Most users visit websites through mobile devices, so we create websites that work smoothly on phones, tablets, laptops and desktops.",
        bullets: ["Smartphones", "Tablets", "Laptops", "Desktop computers"],
      },
      {
        title: "Startup-Friendly UI/UX",
        body: "We design websites that help visitors understand the business quickly and move through the page with ease.",
        bullets: ["Clean layouts", "Easy navigation", "Modern designs", "User-friendly interfaces"],
      },
      {
        title: "Fast Loading Speed",
        body: "Customers usually leave slow websites quickly, so we optimise for speed, performance and a smooth browsing experience.",
      },
      {
        title: "SEO-Friendly Structure",
        body: "Our websites are developed with SEO best practices to help businesses rank better on Google search results.",
        bullets: ["Proper website structure", "Meta tags", "Optimised images", "Mobile optimisation", "Fast performance"],
      },
      {
        title: "Contact Forms & Integrations",
        body: "We integrate useful features that help businesses connect with customers easily.",
        bullets: ["Contact forms", "WhatsApp chat", "Social media links", "Google Maps", "Lead enquiry forms"],
      },
      {
        title: "Modern Professional Design",
        body: "Professional design reflects your brand identity, builds trust, improves credibility and helps you stand out from competitors.",
      },
    ],
    benefits: [
      { title: "Builds Trust", desc: "Customers trust businesses with professional websites more than businesses without an online presence." },
      { title: "Improves Online Visibility", desc: "A website helps businesses appear on Google and reach more customers." },
      { title: "Generates Leads", desc: "Websites help collect customer enquiries and leads 24/7." },
      { title: "Creates Strong Brand Identity", desc: "A professional website strengthens business branding." },
      { title: "Helps Business Growth", desc: "A website acts as a powerful marketing and sales platform." },
    ],
    span: "",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    headline: "Help Customers Find You On Google",
    desc: "Improve search visibility so customers can discover your products or services when they need them.",
    overview: [
      "SEO helps businesses improve their visibility on search engines like Google. When customers search for products or services online, SEO helps businesses appear in search results.",
      "At GrowUp Services, we use modern SEO techniques to improve search rankings, website traffic, online visibility and lead generation.",
    ],
    sections: [
      {
        title: "Keyword Research",
        body: "We identify keywords customers search for related to the business. Using the right keywords helps websites attract targeted traffic.",
      },
      {
        title: "Website Optimisation",
        body: "We improve website structure, content quality, loading speed and mobile responsiveness to improve SEO performance.",
        bullets: ["Website structure", "Content quality", "Loading speed", "Mobile responsiveness"],
      },
      {
        title: "Local SEO",
        body: "Local SEO helps businesses appear in local search results and Google Maps.",
        bullets: ["Local businesses", "Shops", "Service providers", "Startups"],
      },
      {
        title: "Technical SEO",
        body: "Technical SEO improves backend performance and helps search engines index the website properly.",
        bullets: ["Sitemap setup", "URL optimisation", "Website speed", "Mobile compatibility"],
      },
      {
        title: "Content Optimisation",
        body: "We optimise website content using targeted keywords and SEO-friendly structure.",
      },
    ],
    benefits: [
      { title: "More Website Traffic", desc: "Higher search rankings bring more visitors." },
      { title: "Better Online Visibility", desc: "Businesses become easier to discover online." },
      { title: "Organic Leads", desc: "SEO attracts customers naturally without continuous advertising." },
      { title: "Long-Term Growth", desc: "SEO provides sustainable online growth over time." },
    ],
    span: "",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    headline: "Reach Customers Faster",
    desc: "Generate leads and visibility faster through Google, Facebook and Instagram advertising.",
    overview: [
      "Paid advertising is one of the fastest ways to generate leads and increase business visibility. We create advertising campaigns on Google Ads, Facebook Ads and Instagram Ads.",
      "These platforms help businesses target customers based on location, interests, behaviour and demographics.",
    ],
    sections: [
      {
        title: "Google Ads",
        body: "Google Ads help businesses appear on top of search results instantly when customers are actively searching.",
      },
      {
        title: "Facebook & Instagram Ads",
        body: "Social media advertising helps businesses reach targeted audiences, promote products or services, increase engagement and generate leads.",
      },
      {
        title: "Audience Targeting",
        body: "We target audiences based on the details that matter most for each business.",
        bullets: ["Interests", "Location", "Age", "Behaviour", "Business niche"],
      },
      {
        title: "Campaign Monitoring",
        body: "We continuously monitor and optimise campaigns for better performance and ROI.",
      },
    ],
    benefits: [
      { title: "Generate Leads Quickly", desc: "Ads help businesses attract customers faster." },
      { title: "Increase Sales", desc: "Targeted campaigns improve conversion rates." },
      { title: "Reach Specific Customers", desc: "Businesses can target the exact audience they want." },
      { title: "Improve Brand Visibility", desc: "Advertising increases online exposure rapidly." },
    ],
    span: "md:col-span-2",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    headline: "Creative Content For Better Engagement",
    desc: "Create visuals, videos and branded content that attract attention and support your marketing goals.",
    overview: [
      "Content is one of the most important parts of digital marketing. High-quality content helps businesses attract attention, build engagement, increase brand awareness and improve customer trust.",
      "At GrowUp Services, we create creative and engaging content designed according to the brand's identity and audience preferences.",
    ],
    sections: [
      {
        title: "Social Media Creatives",
        body: "Professionally designed graphics for promotions, announcements, product marketing and festival posts.",
        bullets: ["Promotions", "Announcements", "Product marketing", "Festival posts"],
      },
      {
        title: "Promotional Videos",
        body: "Short marketing videos designed to increase engagement and product awareness.",
      },
      {
        title: "Reels Editing",
        body: "Creative short-form video editing for Instagram and YouTube Shorts.",
      },
      {
        title: "Advertisement Graphics",
        body: "High-converting ad creatives designed for paid marketing campaigns.",
      },
      {
        title: "Brand Content",
        body: "Custom content designed to maintain brand consistency across platforms.",
      },
    ],
    benefits: [
      { title: "Better Audience Engagement", desc: "Creative content increases likes, shares, comments and interaction." },
      { title: "Increased Social Media Reach", desc: "Engaging content performs better on social media algorithms." },
      { title: "Strong Visual Branding", desc: "Professional visuals strengthen brand identity and recognition." },
    ],
    span: "",
  },
  {
    icon: Palette,
    title: "Branding Solutions",
    headline: "Create A Brand People Remember",
    desc: "Build a memorable brand identity that looks professional and feels consistent across every platform.",
    overview: [
      "Branding is much more than just a logo. It represents the identity, personality and values of a business.",
      "Strong branding helps businesses build trust, stand out from competitors, create customer recognition and establish professionalism.",
      "At GrowUp Services, we help startups build unique and memorable brand identities.",
    ],
    sections: [
      {
        title: "Professional Logo Design",
        body: "A logo is the face of the business. We create logos that are unique, professional, modern and memorable.",
      },
      {
        title: "Brand Colour Identity",
        body: "Colours play an important role in branding psychology, so we select brand colours that match business personality, create emotional connection and improve recognition.",
      },
      {
        title: "Social Media Branding",
        body: "We create consistent branding across social media platforms.",
        bullets: ["Profile designs", "Highlight covers", "Post themes", "Banner designs"],
      },
      {
        title: "Marketing Creatives",
        body: "We design marketing materials that help businesses promote themselves effectively.",
        bullets: ["Business banners", "Promotional graphics", "Advertisement creatives", "Digital brochures"],
      },
      {
        title: "Business Visual Identity",
        body: "We help businesses maintain a consistent visual style across websites, social media, advertisements and marketing materials.",
      },
    ],
    benefits: [
      { title: "Better Recognition", desc: "Strong branding makes businesses easier to remember." },
      { title: "Professional Appearance", desc: "Professional branding builds trust and credibility." },
      { title: "Customer Trust", desc: "Customers are more likely to trust well-branded businesses." },
      { title: "Strong Business Identity", desc: "Branding creates a unique business personality." },
    ],
    span: "",
  },
];

function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs uppercase tracking-widest text-primary-glow">Our Digital Services</span>
      <h1 className="mt-3 text-5xl md:text-7xl font-bold text-gradient leading-[1.05] max-w-4xl">
        Everything your brand needs to grow online.
      </h1>

      <div className="mt-16 grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setSelectedService(s)}
            className={`bento-card group p-8 flex min-h-[260px] flex-col justify-between gap-8 text-left transition hover:-translate-y-1 hover:border-primary-glow/40 ${s.span}`}
          >
            <s.icon className="h-9 w-9 shrink-0 text-primary-glow" />
            <div>
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-glow">
                View service details
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedService ? (
        <ServiceDetailCard service={selectedService} onClose={() => setSelectedService(null)} />
      ) : null}

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

function ServiceDetailCard({
  service,
  onClose,
}: {
  service: (typeof services)[number];
  onClose: () => void;
}) {
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-background/85 p-4 backdrop-blur-xl sm:p-6">
      <div className="mx-auto flex min-h-full max-w-6xl items-center">
        <section className="bento-card my-8 w-full overflow-hidden">
          <div className="border-b border-white/10 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close service details"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-primary-glow/50 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 max-w-4xl">
              <span className="text-xs uppercase tracking-widest text-primary-glow">Service Details</span>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">{service.title}</h2>
              <p className="mt-3 text-xl text-foreground/90">{service.headline}</p>
              <div className="mt-6 grid gap-4 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                {service.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
            <div className="space-y-8">
              {service.strategy ? (
                <section>
                  <h3 className="font-display text-2xl font-semibold">{service.strategyTitle}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.strategy.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              ) : null}

              <section>
                <h3 className="font-display text-2xl font-semibold">What We Provide</h3>
                <div className="mt-5 grid gap-5">
                  {service.sections.map((section) => (
                    <div key={section.title} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                      <h4 className="font-display text-lg font-semibold">{section.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{section.body}</p>
                      {section.bullets ? (
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-display text-2xl font-semibold">Benefits</h3>
              <div className="mt-5 grid gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h4 className="font-display text-base font-semibold">{benefit.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-hero mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
