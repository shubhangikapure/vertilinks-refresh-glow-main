import { Link } from "react-router-dom";
import { ArrowRight, Server, Users, Building, Eye, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const softwares = [
  {
    title: "ERP Solutions",
    desc: "Enterprise resource planning platforms that connect finance, operations, inventory, and HR so leaders can make decisions from a single, trusted source of data.",
    href: "/softwares/erp",
    icon: Server,
    category: "Enterprise Software",
  },
  {
    title: "CRM Software",
    desc: "Customer relationship management that aligns marketing, sales, and service teams around a complete 360° view of every account and opportunity.",
    href: "/softwares/crm",
    icon: Users,
    category: "Enterprise Software",
  },
  {
    title: "HR & Payroll",
    desc: "Workforce management platforms that connect time attendance, leave management, and compliant payroll for teams across the GCC.",
    href: "/softwares/hr-payroll",
    icon: Building,
    category: "Enterprise Software",
  },
  {
    title: "VMS Software",
    desc: "Video management systems that centralize camera feeds, recordings, and analytics for comprehensive surveillance control.",
    href: "/softwares/vms",
    icon: Eye,
    category: "Security Software",
  },
  {
    title: "Access Management",
    desc: "Identity & access control software that manages credentials, permissions, and security policies across your organization.",
    href: "/softwares/access-management",
    icon: ShieldCheck,
    category: "Security Software",
  },
];

export default function Softwares() {
  const enterpriseSoftwares = softwares.filter((s) => s.category === "Enterprise Software");
  const securitySoftwares = softwares.filter((s) => s.category === "Security Software");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">Home / Softwares</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Our Software Solutions</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              Enterprise and security software platforms that streamline operations, enhance security, and drive business growth across the GCC.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Enterprise Software */}
        <section className="section-container section-padding">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Enterprise Software</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseSoftwares.map((software, index) => (
              <motion.div
                key={software.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <software.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{software.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{software.desc}</p>
                <Link
                  to={software.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Security Software */}
        <section className="bg-secondary">
          <div className="section-container section-padding">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Security Software</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securitySoftwares.map((software, index) => (
                <motion.div
                  key={software.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <software.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{software.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{software.desc}</p>
                  <Link
                    to={software.href}
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
