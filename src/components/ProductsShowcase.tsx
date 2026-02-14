import { Link } from "react-router-dom";
import { Monitor, Volume2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    icon: Monitor,
    title: "Enrich Your Presentation with IQTouch",
    description:
      "IQ smart meeting room solution helps companies effortlessly set up a meeting environment on a local or remote basis with maximized efficiency, interaction, and team collaboration.",
    tags: ["Integrated Video Conferencing", "All-in-one Videobar", "Remote Meeting", "Wireless Screen Sharing"],
    image: "https://iqboard.net/wp-content/uploads/2025/10/TE1410D-300x188.webp",
    href: "/products/interactive-panel",
    sectors: ["Smart Classroom", "Lecture Capture", "Lecture Hall", "Divisible Classroom"],
  },
  {
    icon: Volume2,
    title: "Global Leader in IP Audio & Public Address",
    description:
      "Our product portfolio comprises IP-based public address systems, intercom and video intercom systems, cloud PA, surveillance microphones, and conferencing audio/video systems.",
    tags: ["Security & Surveillance", "Healthcare", "Banking", "Education"],
    image: "https://sponcomm.com/u_file/2508/photo/862ad5240e.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    href: "/products/ip-audio",
    sectors: ["School PA", "Hotel Sound", "Transportation", "Hospital PA"],
  },
];

export default function ProductsShowcase() {
  return (
    <section className="section-padding bg-background" aria-labelledby="products-heading">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Featured Products
          </span>
          <h2 id="products-heading" className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Enterprise-Grade Products
          </h2>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={product.href}
                className={`block bg-card rounded-2xl overflow-hidden border border-border/50 card-hover group ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-6 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <product.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.sectors.map((sector) => (
                        <span key={sector} className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full">
                          {sector}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
