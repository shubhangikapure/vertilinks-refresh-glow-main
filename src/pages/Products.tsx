import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Products organized by dropdown menu categories
const productCategories = [
  {
    title: "Security & Access",
    products: [
      { title: "CCTV & IP Cameras", desc: "HD/4K surveillance cameras", href: "/products/cctv-ip-cameras" },
      { title: "Face & Biometric Terminals", desc: "Biometric access devices", href: "/products/face-biometric-terminals" },
      { title: "Turnstile & Speed Gates", desc: "Entry management systems", href: "/products/turnstile-and-speed-gates" },
      { title: "Gate Barriers", desc: "Parking & industrial barriers", href: "/products/gate-barriers" },
      { title: "Time Attendance Devices", desc: "Workforce tracking devices", href: "/products/time-attendance" },
    ],
  },
  {
    title: "Audio & Communication",
    products: [
      { title: "IP Audio Systems", desc: "PA & intercom solutions", href: "/products/ip-audio" },
      { title: "IP-PA System", desc: "Paging networks", href: "/products/ip-pa-system" },
      { title: "IP Intercom System", desc: "SIP-ready intercoms", href: "/products/ip-intercom-system" },
      { title: "Conference System", desc: "Boardroom AV systems", href: "/products/conference-system" },
      { title: "Professional Audio System", desc: "Premium audio gear", href: "/products/professional-audio-system" },
    ],
  },
  {
    title: "Display & Collaboration",
    products: [
      { title: "Interactive Panels", desc: "IQTouch smart displays", href: "/products/interactive-panel" },
      { title: "Pen Tablets", desc: "Drawing & input tablets", href: "/products/pen-tablet" },
      { title: "Pen Displays", desc: "Pressure-sensitive displays", href: "/products/pen-display" },
      { title: "Pen Computers", desc: "All-in-one pen PCs", href: "/products/pen-computer" },
    ],
  },
  {
    title: "IT Infrastructure",
    products: [
      { title: "ID Card Printers", desc: "DTC & retransfer printers", href: "/products/id-card-printers" },
      { title: "Servers & Storages", desc: "Enterprise servers", href: "/products/server-and-storages" },
      { title: "Laptops & Desktops", desc: "Business computers", href: "/products/laptops-and-desktop-computers" },
      { title: "Printers & Scanners", desc: "Office printing solutions", href: "/products/printers-and-scanners" },
    ],
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">Home / Products</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Our Products</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              Vertilinks offers a cutting edge range of industrial and commercial security products that will help to safeguard your business and facilities.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Products Grid by Category */}
        <section className="section-container section-padding">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.title} className={categoryIndex < productCategories.length - 1 ? "mb-12" : ""}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{category.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      to={p.href}
                      className="block p-6 bg-card rounded-xl border border-border card-hover group h-full"
                    >
                      <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Explore <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-secondary">
          <div className="section-container section-padding text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Empowering your business with secure solutions.</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">From ID Card Printers to Biometric Terminals and Gate Barriers, VertiLinks offers end-to-end security and IT infrastructure.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
