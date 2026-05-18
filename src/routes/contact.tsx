import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GrowUp Services" },
      { name: "description", content: "Let's build your brand together. Reach GrowUp Services for a free consultation." },
      { property: "og:title", content: "Contact GrowUp Services" },
      { property: "og:description", content: "Email, call or book a free consultation." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs uppercase tracking-widest text-primary-glow">Contact</span>
      <h1 className="mt-3 text-5xl md:text-7xl font-bold text-gradient leading-[1.05] max-w-4xl">
        Let's Build Your Brand Together.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Ready to grow your business online? Tell us about your project and we'll
        get back within 24 hours.
      </p>

      <div className="mt-16 grid lg:grid-cols-[1fr_1.2fr] gap-4">
        <div className="grid gap-4">
          <div className="bento-card p-6 flex items-start gap-4">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow shrink-0">
              <Phone className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Call us</div>
              <div className="font-display text-lg mt-1">+91 XXXXX XXXXX</div>
            </div>
          </div>
          <div className="bento-card p-6 flex items-start gap-4">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow shrink-0">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
              <div className="font-display text-lg mt-1">info@growupservices.com</div>
            </div>
          </div>
          <div className="bento-card p-6 flex items-start gap-4">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow shrink-0">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Visit</div>
              <div className="font-display text-lg mt-1">Greater Noida, India</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bento-card p-8 grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Your name</span>
              <input required className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow transition" placeholder="Jane Doe" />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Email</span>
              <input required type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow transition" placeholder="you@brand.com" />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            <span className="text-muted-foreground">Business / Brand</span>
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow transition" placeholder="GrowUp Co." />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-muted-foreground">How can we help?</span>
            <textarea required rows={5} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow transition resize-none" placeholder="Tell us about your goals…" />
          </label>
          <button type="submit" className="btn-hero inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium mt-2">
            {sent ? "Thanks — we'll be in touch!" : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </div>
    </div>
  );
}
