import { Factory, Building, Zap, Heart, Anchor, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    description: "Vertilinks improves the safety and security of manufacturing & engineering industrial enterprises irrespective of markets and geological conditions.",
  },
  {
    icon: Building,
    title: "Government",
    description: "Vertilinks is a recognized and certified partner for managing security and business automation of government facilities and assets.",
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Vertilinks serves many well known energy sector companies in power generation, power distribution, oil & gas and other domains.",
  },
  {
    icon: Heart,
    title: "Health Care & Pharmaceutical",
    description: "Vertilinks provides a multilayered security approach to secure pharmaceutical companies from external threats as well as internal misappropriation.",
  },
  {
    icon: Anchor,
    title: "Port",
    description: "Ports functioning are very dynamic in nature in terms of operations and business practices. Vertilinks multilayered access control solutions help to secure port at every entry/exit point.",
  },
  {
    icon: Fingerprint,
    title: "Biometrics in Law Enforcement",
    description: "Biometric technology, including fingerprint, facial, and iris recognition, enhances law enforcement accuracy and efficiency, raising privacy and data security concerns.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-secondary" aria-labelledby="industries-heading">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Industries We Serve
          </span>
          <h2 id="industries-heading" className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Our Expertise in Securing
          </h2>
          <p className="text-muted-foreground text-lg">
            Vertilinks offers safety and security solutions for every industry. Having vast experience and best practices know-how in security solution implementation makes Vertilinks a high grade safety and security solution provider. Vertilinks implemented their business integrated security solutions in diverse industries, from manufacturing, warehousing, logistics, health care, banking & finance, retail, hotels to government agencies.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 card-hover group text-center"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary inline-block mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ind.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {ind.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
