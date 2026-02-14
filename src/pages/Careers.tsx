import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">Home / Careers</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Join Our Team</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              Be part of an innovative team driving IT and security solutions across the GCC. We're always looking for talented individuals passionate about technology.
            </p>
          </div>
        </section>

        {/* Why Join */}
        <section className="section-container section-padding">
          <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">Why Join VertiLinks?</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Growth Opportunities", desc: "Work on enterprise projects spanning CCTV, access control, networking, and cloud across multiple industries." },
              { icon: Users, title: "Collaborative Culture", desc: "Join a team of certified engineers, architects, and project managers who value knowledge sharing." },
              { icon: Zap, title: "Cutting-Edge Tech", desc: "Get hands-on experience with latest technologies from Hikvision, Cisco, Fortinet, ZKTeco, and more." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-card rounded-xl border border-border">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary">
          <div className="section-container section-padding text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Interested in joining us?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Send your CV to our HR team and we'll be in touch if there's a match.</p>
            <a href="mailto:services@vertilinks.com" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Send Your CV <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
