import { Link } from "react-router-dom";
import { Camera, Shield, Flame, Clock, Monitor, Cable, Phone, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    icon: Camera,
    title: "CCTV Security and Surveillance",
    description:
      "Advanced CCTV and IP surveillance solutions designed to protect businesses and public spaces. From HD cameras to centralized video management, VertiLinks ensures real-time monitoring, recording, and analytics for proactive security.",
    tags: ["HD/4K Cameras", "Remote Monitoring", "Video Analytics", "Night Vision", "ANPR Integration"],
    href: "/solutions/cctv-security-surveillance",
    sectors: ["Corporate Offices", "Retail Stores", "Warehouses", "Banks", "Public Infrastructure"],
  },
  {
    icon: Shield,
    title: "Access Control System",
    description:
      "Comprehensive access control solutions to regulate entry at doors, turnstiles, and restricted areas. VertiLinks delivers scalable systems integrated with biometrics, smart cards, and mobile credentials for enhanced security.",
    tags: ["Biometric Access", "Smart Card Readers", "Turnstiles & Gates", "Multi-level Authentication", "Audit Trails"],
    href: "/solutions/access-control-system",
    sectors: ["Airports", "IT Parks", "Government Buildings", "Residential Complexes", "Data Centers"],
  },
  {
    icon: Flame,
    title: "Firewall and Gateway System",
    description:
      "Robust firewall and gateway systems that safeguard networks against cyber threats. VertiLinks delivers next-generation firewall solutions with VPN, IPS/IDS, and content filtering to protect enterprise data and ensure secure connectivity.",
    tags: ["Next-Gen Firewall", "VPN Security", "Intrusion Detection", "Content Filtering", "Zero Trust"],
    href: "/solutions/firewall-gateway-system",
    sectors: ["Financial Institutions", "Enterprises", "Healthcare", "Government", "Education"],
  },
  {
    icon: Clock,
    title: "Time Attendance and Access Control System",
    description:
      "Integrated biometric and RFID-based systems for accurate time tracking and secure workplace access. VertiLinks solutions simplify workforce management, reduce fraud, and ensure compliance with HR and security policies.",
    tags: ["Biometric Attendance", "Shift Management", "Payroll Integration", "RFID/Smart Cards", "Mobile Access"],
    href: "/solutions/time-attendance-system",
    sectors: ["Corporate Offices", "Factories", "Educational Institutions", "Hospitals", "Construction Sites"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TechnologySection() {
  return (
    <section className="section-padding bg-secondary" aria-labelledby="tech-heading">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            What We Do
          </span>
          <h2 id="tech-heading" className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Technology in Which We Are Working
          </h2>
          <p className="text-muted-foreground text-lg">
            Our tailor-made solutions are designed to enhance your system and integrate cutting-edge advanced innovative technology.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {technologies.map((tech) => (
            <motion.div key={tech.title} variants={cardVariants}>
              <Link
                to={tech.href}
                className="block bg-card rounded-2xl p-6 lg:p-8 card-hover group border border-border/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <tech.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {tech.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="inline-block px-2.5 py-0.5 text-xs bg-primary/5 text-primary rounded-md"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
