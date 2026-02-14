import { Link } from "react-router-dom";
import { Clock, KeyRound, Camera, Monitor, Cable, PhoneCall, Cloud, Shield, Search, Code, Megaphone, Settings, Wrench, ArrowRight, type LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface SolutionItem {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

const solutions: SolutionItem[] = [
  { title: "Time Attendance System", desc: "Deploy centrally managed biometric devices, mobile check-ins, and geo-fenced attendance with automated policy enforcement.", href: "/solutions/time-attendance-system", icon: Clock },
  { title: "Access Control System", desc: "Integrate controllers, readers, and identity management with SOC visibility and compliance-ready reporting.", href: "/solutions/access-control-system", icon: KeyRound },
  { title: "CCTV Security & Surveillance", desc: "From edge recording to control room displays, we design surveillance architectures that scale and keep you compliant.", href: "/solutions/cctv-security-surveillance", icon: Camera },
  { title: "Audio Video Solutions", desc: "Design and integrate conferencing, digital signage, and immersive audio tuned to each space.", href: "/solutions/audio-video-solutions", icon: Monitor },
  { title: "Structured Cabling Solution", desc: "From backbone fiber to floor cabling, our designs follow TIA/EIA standards and deliver predictable performance.", href: "/solutions/structured-cabling-solution", icon: Cable },
  { title: "PABX Solution", desc: "From SMB to enterprise clusters, our PABX solutions deliver advanced call routing, mobility, and integrations.", href: "/solutions/pabx-solution", icon: PhoneCall },
  { title: "Cloud Solutions", desc: "We assess, migrate, secure, and operate your infrastructure on AWS, Azure, GCP, or private cloud.", href: "/solutions/cloud-solutions", icon: Cloud },
  { title: "Firewall & Gateway System", desc: "We architect, deploy, and manage firewalls, intrusion prevention, SD-WAN, and zero trust network access.", href: "/solutions/firewall-gateway-system", icon: Shield },
  { title: "SEO Services", desc: "We align SEO roadmaps with your funnel—from audits and geo-targeted optimization to content, analytics, and marketplace visibility.", href: "/solutions/seo-services", icon: Search },
  { title: "Website Development Services", desc: "From discovery to ongoing care, we handle front-end experience, platform engineering, CMS governance, hosting, and continuous optimization.", href: "/solutions/website-development-services", icon: Code },
  { title: "Digital Marketing Services", desc: "Every engagement combines strategic planning, channel execution, and analytics to connect discovery, engagement, and conversion.", href: "/solutions/digital-marketing-solution", icon: Megaphone },
  { title: "Microsoft Services", desc: "We help organizations embrace secure collaboration, app modernization, and data insights on Microsoft cloud.", href: "/solutions/microsoft-services", icon: Settings },
  { title: "IT Support and AMC", desc: "With a dedicated IT support team plus crisis-management expertise, Vertilinks handles everything from minor updates to major incidents.", href: "/solutions/it-support-amc", icon: Wrench },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">Home / Solutions</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Our Solutions</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              At VertiLinks, we develop powerful software platforms that help organizations streamline their processes and improve decision-making. Whether it's managing employees, engaging customers, or driving growth with ERP and custom applications, our solutions are tailored to meet your business goals.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-container section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={s.href}
                  className="block p-6 bg-card rounded-xl border border-border card-hover group h-full"
                >
                  <s.icon className="h-10 w-10 text-brand-blue mb-4" />
                  <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary">
          <div className="section-container section-padding text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Talk to VertiLinks Professional for help.</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Feel free to call us with your questions; we're here to help you. For bulk requirements, just ask for a quote.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Schedule Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
