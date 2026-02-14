import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Innovation Driven, Security Focused.",
    title: "VertiLinks — Integrated IT, security, and digital transformation services across the GCC",
    description:
      "VertiLinks stands at the forefront of IT and security innovation, delivering integrated solutions that safeguard businesses and empower digital transformation. From infrastructure and networking to surveillance and cloud, we combine expertise with trust to help enterprises grow with confidence.",
    cta: { label: "Get In Touch", href: "/contact" },
  },
  {
    image: hero2,
    subtitle: "Infrastructure That Scales With You",
    title: "Infrastructure That Scales With You",
    description:
      "Design resilient networks, cloud foundations, and data centers engineered to meet tomorrow's demand while keeping today's operations seamless.",
    cta: { label: "Explore Solutions", href: "/solutions" },
  },
  {
    image: hero3,
    subtitle: "Security Without Compromise",
    title: "Security Without Compromise",
    description:
      "From surveillance to biometric access, VertiLinks orchestrates end-to-end protection so teams stay focused on growth and innovation.",
    cta: { label: "Browse Products", href: "/products" },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[85vh] overflow-hidden bg-brand-dark" aria-label="Hero carousel">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full section-container flex items-center">
        <div className={`flex w-full items-center gap-12 ${slide.hasSidebar ? "" : ""}`}>
          {/* Main Content */}
          <div className={`${slide.hasSidebar ? "flex-1 max-w-xl" : "max-w-2xl"}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-foreground bg-primary/90 rounded-full mb-6">
                  {slide.subtitle}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary-foreground leading-tight mb-6 text-balance">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
                <Link
                  to={slide.cta.href}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-base font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  {slide.cta.label}
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar Panel (Slide 2 only) */}
          {slide.hasSidebar && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden lg:block w-80"
              >
                <div className="bg-background/10 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-display font-bold text-primary-foreground mb-4">
                    Our Security Solutions
                  </h3>
                  {slide.sidebarItems?.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors cursor-pointer group"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-medium text-primary-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
