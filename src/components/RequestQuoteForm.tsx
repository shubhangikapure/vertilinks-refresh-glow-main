import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

interface RequestQuoteFormProps {
  subjectLabel: string;
}

export function RequestQuoteForm({ subjectLabel }: RequestQuoteFormProps) {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    mobile: "",
    city: "",
    country: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({
      company: "",
      name: "",
      email: "",
      mobile: "",
      city: "",
      country: "",
      description: "",
    });
  };

  return (
    <section id="request-quote" className="relative bg-brand-dark py-16 md:py-20">
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary/20 to-brand-blue/20" />
      <div className="relative section-container">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-semibold text-primary-foreground/70 bg-primary/20 rounded-full mb-3">
            REQUEST A QUOTE
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3">
            Looking for {subjectLabel}?
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/75 max-w-2xl mx-auto">
            Share a few details about your requirements and our team will respond with sizing guidance, pricing options, and deployment timelines.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <form
              className="space-y-5 bg-card/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border/50"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company*</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name*</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email*</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mobile*</label>
                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Tell us more*</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                  required
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground text-sm md:text-base font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
                >
                  Submit enquiry
                </button>
                <button
                  type="reset"
                  onClick={handleReset}
                  className="px-8 py-3 border border-border rounded-lg text-sm md:text-base text-foreground hover:bg-accent transition-colors"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg md:text-xl font-display font-bold text-primary-foreground">
              Prefer another channel? Reach our team directly.
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+971505810499"
                className="flex items-center gap-3 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card transition-colors text-sm"
              >
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/60">Call us</div>
                  <div className="text-sm font-medium text-primary-foreground">+971 50 581 0499</div>
                </div>
              </a>
              <a
                href="mailto:services@vertilinks.com"
                className="flex items-center gap-3 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card transition-colors text-sm"
              >
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/60">Email us</div>
                  <div className="text-sm font-medium text-primary-foreground">services@vertilinks.com</div>
                </div>
              </a>
              <a
                href="https://wa.me/971505810499"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card transition-colors text-sm"
              >
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/60">Chat on WhatsApp</div>
                  <div className="text-sm font-medium text-primary-foreground">+971 50 581 0499</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

