import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/growup3201@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          business: data.business,
          message: data.message,
          _subject: "New Contact Form Submission - GrowUp",
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Facebook</div>
              <a
                href="https://www.facebook.com/GrowUP3201/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg mt-1 inline-block hover:text-primary-glow transition-colors"
              >
                GrowUp FaceBook
              </a>
            </div>
          </div>
          <div className="bento-card p-6 flex items-start gap-4">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow shrink-0">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=growup3201@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="font-display text-lg mt-1 inline-block hover:text-primary-glow transition-colors"
              >
                growup3201@gmail.com
              </a>
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
          onSubmit={handleSubmit}
          className="bento-card p-8 grid gap-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-muted-foreground">Your name</Label>
              <Input id="name" name="name" required className="bg-white/5 border-white/10 rounded-lg px-4 py-6 outline-none focus-visible:ring-primary-glow transition" placeholder="Jane Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-muted-foreground">Email</Label>
              <Input id="email" name="email" required type="email" className="bg-white/5 border-white/10 rounded-lg px-4 py-6 outline-none focus-visible:ring-primary-glow transition" placeholder="you@brand.com" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="business" className="text-muted-foreground">Business / Brand</Label>
            <Input id="business" name="business" className="bg-white/5 border-white/10 rounded-lg px-4 py-6 outline-none focus-visible:ring-primary-glow transition" placeholder="GrowUp Co." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-muted-foreground">How can we help?</Label>
            <Textarea id="message" name="message" required rows={5} className="bg-white/5 border-white/10 rounded-lg px-4 py-3 outline-none focus-visible:ring-primary-glow transition resize-none text-base" placeholder="Tell us about your goals…" />
          </div>
          <button type="submit" disabled={loading || sent} className="btn-hero inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium mt-2 disabled:opacity-75 disabled:cursor-not-allowed">
            {loading ? "Sending..." : sent ? "Thanks — we'll be in touch!" : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
          {error && (
            <div className="text-red-500 text-sm md:col-span-2 text-center">
              Something went wrong. Please try again or email us directly at growup3201@gmail.com
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
