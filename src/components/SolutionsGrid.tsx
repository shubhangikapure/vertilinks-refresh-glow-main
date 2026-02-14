import { Link } from "react-router-dom";
import { Clock, Shield, Camera, Monitor, Cable, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Clock,
    title: "Time Attendance System",
    description: "Automate workforce tracking with biometric, RFID, and mobile-first check-ins.",
    href: "/solutions/time-attendance-system",
  },
  {
    icon: Shield,
    title: "Access Control System",
    description: "Layered door, elevator, and visitor controls secured by modern credentials.",
    href: "/solutions/access-control-system",
  },
  {
    icon: Camera,
    title: "CCTV Security & Surveillance",
    description: "IP cameras and analytics delivering 24/7 visibility for every premises.",
    href: "/solutions/cctv-security-surveillance",
  },
  {
    icon: Monitor,
    title: "Audio Video Solutions",
    description: "Meeting rooms and command centers engineered for crystal-clear collaboration.",
    href: "/solutions/audio-video-solutions",
  },
  {
    icon: Cable,
    title: "Structured Cabling Solution",
    description: "High-speed copper and fiber backbones designed for resilient networks.",
    href: "/solutions/structured-cabling-solution",
  },
  {
    icon: Phone,
    title: "PABX Solution",
    description: "Unified voice platforms integrating desk phones, soft clients, and IVR flows.",
    href: "/solutions/pabx-solution",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="section-padding bg-brand-dark" aria-labelledby="solutions-heading">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Solutions
          </span>
          <h2 id="solutions-heading" className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground mb-4">
            Tailored platforms for secured workplaces
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Discover how Vertilinks architects time, access, surveillance, voice, and cabling solutions to fit your deployment scale and compliance needs.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((sol) => (
            <motion.div
              key={sol.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <Link
                to={sol.href}
                className="block p-6 lg:p-8 rounded-2xl border border-primary-foreground/10 bg-brand-dark-lighter hover:bg-brand-dark-lighter/80 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-primary/15 text-primary inline-block mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <sol.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-primary-foreground mb-2 group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
                  {sol.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Explore solution
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
