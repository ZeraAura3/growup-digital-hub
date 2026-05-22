import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("contact-safety");
    return () => {
      document.documentElement.classList.remove("contact-safety");
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const business = (formData.get("business") ?? "").toString().trim();
    const message = (formData.get("message") ?? "").toString().trim();

    if (!name || !message) {
      alert("Please provide your name and a message so we can help you best!");
      return;
    }

    setLoading(true);
    setError(false);

    try {
      formData.set("name", name);
      formData.set("email", email);
      formData.set("business", business);
      formData.set("message", message);

      await fetch("https://script.google.com/macros/s/AKfycbyxee6wVxTMc9CW_6ZyniP7WUbhde226oh-UjpjB3cpoY-iSPOUxc83UuMcM9Ep877ngg/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

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
          className="bento-card form-card p-8 grid gap-4"
          autoComplete="off"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2 text-sm">
              <span className="text-muted-foreground block">Your name</span>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="off"
                data-1p-ignore
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow"
                placeholder="Jane Doe"
              />
            </div>
            <div className="grid gap-2 text-sm">
              <span className="text-muted-foreground block">Email</span>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="off"
                data-1p-ignore
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow"
                placeholder="you@brand.com"
              />
            </div>
          </div>
          <div className="grid gap-2 text-sm">
            <span className="text-muted-foreground block">Business / Brand</span>
            <input
              id="contact-business"
              name="business"
              type="text"
              autoComplete="off"
              data-1p-ignore
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow"
              placeholder="GrowUp Co."
            />
          </div>
          <div className="grid gap-2 text-sm">
            <span className="text-muted-foreground block">How can we help?</span>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              autoComplete="off"
              data-1p-ignore
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-glow resize-none"
              placeholder="Tell us about your goals…"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-hero inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium mt-2 disabled:opacity-75 disabled:cursor-not-allowed">
            {loading ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
          {sent && (
            <div className="text-emerald-400 text-sm md:col-span-2 text-center">
              Thanks — we will be in touch!
            </div>
          )}
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
