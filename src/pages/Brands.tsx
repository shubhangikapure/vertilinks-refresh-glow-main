import { Link } from "react-router-dom";
import { ArrowRight, Camera, Radio, Fingerprint, Tv, Cpu, ShieldCheck, Volume2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Hikvision",
    tagline: "Surveillance & security technology",
    desc: "Video surveillance platforms ranging from entry cameras to command-center video walls.",
    href: "/brands/hikvision",
    icon: Camera,
    category: "Technology Partners",
  },
  {
    name: "Dahua",
    tagline: "Video technology solutions",
    desc: "Broad portfolio of cameras, recorders, and AI-powered analytics for scalable video infrastructures.",
    href: "/brands/dahua",
    icon: Radio,
    category: "Technology Partners",
  },
  {
    name: "ZKTeco",
    tagline: "Biometric & access control",
    desc: "Biometric terminals, controllers, and software for access control and time attendance.",
    href: "/brands/zkteco",
    icon: Fingerprint,
    category: "Technology Partners",
  },
  {
    name: "IQBoard",
    tagline: "Interactive displays",
    desc: "Interactive whiteboards and collaboration panels for classrooms, boardrooms, and training centers.",
    href: "/brands/iqboard",
    icon: Tv,
    category: "Technology Partners",
  },
  {
    name: "Cisco",
    tagline: "Networking & communications",
    desc: "Secure connectivity infrastructure for campuses, branches, and data centers.",
    href: "/brands/cisco",
    icon: Cpu,
    category: "Infrastructure Partners",
  },
  {
    name: "Fortinet",
    tagline: "Cybersecurity solutions",
    desc: "Security platforms that protect networks, users, and applications with next-generation firewalls.",
    href: "/brands/fortinet",
    icon: ShieldCheck,
    category: "Infrastructure Partners",
  },
  {
    name: "Spon Communication",
    tagline: "IP audio systems",
    desc: "IP-based public address, intercom, and audio solutions for education, transportation, and industrial campuses.",
    href: "/brands/spon",
    icon: Volume2,
    category: "Infrastructure Partners",
  },
];

export default function Brands() {
  const technologyPartners = brands.filter((b) => b.category === "Technology Partners");
  const infrastructurePartners = brands.filter((b) => b.category === "Infrastructure Partners");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">Home / Brands</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Our Technology Partners</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              VertiLinks partners with leading technology brands to deliver integrated IT, security, and digital transformation solutions across the GCC.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="section-container section-padding">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Technology Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyPartners.map((brand, index) => (
              <motion.div
                key={brand.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <brand.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">{brand.name}</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{brand.tagline}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{brand.desc}</p>
                <Link
                  to={brand.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Infrastructure Partners */}
        <section className="bg-secondary">
          <div className="section-container section-padding">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Infrastructure Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructurePartners.map((brand, index) => (
                <motion.div
                  key={brand.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <brand.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">{brand.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{brand.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{brand.desc}</p>
                  <Link
                    to={brand.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
