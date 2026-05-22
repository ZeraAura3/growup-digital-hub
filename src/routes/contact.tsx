import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Grab all the details typed by the user
    const name = formData.get("name")?.toString() || "A User";
    const business = formData.get("business")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    // Format the email subject and body
    const subject = encodeURIComponent(`New Inquiry from ${name} ${business ? `(${business})` : ''}`);
    const body = encodeURIComponent(message + `\n\nKind regards,\n${name}`);

    // Opens their default mail app (Gmail, Outlook, Apple Mail) simply
    window.location.href = `mailto:growup3201@gmail.com?subject=${subject}&body=${body}`;
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
          className="bento-card p-8 grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2 text-sm">
              <span className="text-muted-foreground block">Your name</span>
              <input id="name" name="name" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow" placeholder="Jane Doe" />
            </div>
            <div className="grid gap-2 text-sm">
              <span className="text-muted-foreground block">Email</span>
              <input id="email" name="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow" placeholder="you@brand.com" />
            </div>
          </div>
          <div className="grid gap-2 text-sm">
            <span className="text-muted-foreground block">Business / Brand</span>
            <input id="business" name="business" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow" placeholder="GrowUp Co." />
          </div>
          <div className="grid gap-2 text-sm">
            <span className="text-muted-foreground block">How can we help?</span>
            <textarea id="message" name="message" required rows={5} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow resize-none" placeholder="Tell us about your goals…" />
          </div>
          <button type="submit" className="btn-hero inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium mt-2">
            Send Message via Email <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
