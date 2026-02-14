import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of delivery", value: "10+" },
  { label: "OEM alliances", value: "35+" },
  { label: "Active AMC sites", value: "120+" },
  { label: "Certified disciplines", value: "8" },
];

const reasons = [
  "Advisory to AMC — Discovery workshops, OEM sourcing, deployment, and managed support under one contract.",
  "Certified Engineers — Multi-vendor certifications covering CCTV, access control, networking, cloud, and software.",
  "Regional Presence — Projects delivered across the UAE, KSA, Qatar, and Oman with rapid on-site coverage.",
];

const steps = [
  { num: 1, title: "Discover & benchmark", desc: "Site walks, stakeholder interviews, and maturity assessments establish baselines and KPIs." },
  { num: 2, title: "Design & source", desc: "We co-create architectures, bills of materials, and deployment runbooks leveraging OEM best practices." },
  { num: 3, title: "Deliver & integrate", desc: "Certified engineers implement, migrate, and integrate with minimal disruption to live operations." },
  { num: 4, title: "Operate & optimize", desc: "Managed services, AMC, and analytics reviews ensure uptime while feeding continuous improvements." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">About VertiLinks</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Built for mission-critical technology programs</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              We pair consulting, engineering, and managed services to modernize infrastructure, fortify security, and unlock digital experiences for public sector, enterprise, and mid-market teams across the GCC.
            </p>
          </div>
        </section>

        {/* Why choose */}
        <section className="section-container section-padding">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Why teams choose VertiLinks</h2>
          <p className="max-w-3xl text-muted-foreground mb-10 leading-relaxed">
            We design each engagement around outcomes: faster rollouts, resilient uptime, measurable compliance, and user adoption. Our squads bring together solution architects, network and ELV experts, application specialists, and project managers who stay accountable through handover and AMC.
          </p>
          <div className="space-y-4 mb-12">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground">{r}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 bg-secondary rounded-xl">
                <div className="text-3xl font-display font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement model */}
        <section className="bg-secondary">
          <div className="section-container section-padding">
            <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">Engagement model</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border"
                >
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-4">{s.num}</div>
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container section-padding text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Ready to start your project?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
            Chat with us on WhatsApp <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
