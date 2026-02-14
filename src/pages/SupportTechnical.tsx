import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";

export default function SupportTechnical() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">Home / Support</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">
              Technical Support
            </h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              Reach VertiLinks for incident response, configuration assistance, and post-deployment support across CCTV,
              access control, networking, audio, and software platforms.
            </p>
          </div>
        </section>

        {/* Contact options */}
        <section className="section-container section-padding grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {[
              "24x7 incident intake for contracted AMC and support customers.",
              "Remote troubleshooting and guidance for configuration changes.",
              "On-site dispatch for priority cases across the UAE and GCC.",
              "Planned maintenance windows coordinated with your operations teams.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-secondary rounded-xl">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <aside className="space-y-4 p-6 bg-secondary rounded-xl border border-border">
            <h2 className="text-lg font-display font-bold text-foreground mb-2">Reach our team</h2>
            <a
              href="tel:+971505810499"
              className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>+971 50 581 0499</span>
            </a>
            <a
              href="mailto:services@vertilinks.com"
              className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-sm"
            >
              <Mail className="h-4 w-4" />
              <span>services@vertilinks.com</span>
            </a>
            <a
              href="https://wa.me/971505810499"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              For project quotes or new deployments, please use the contact form on the Contact page.
            </p>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

