import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Lock, Shield, Flame, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const securitySolutions = [
  {
    id: "cctv-surveillance",
    title: "CCTV Surveillance",
    description: "Advanced CCTV and IP surveillance solutions designed to protect businesses and public spaces. From HD cameras to centralized video management, VertiLinks ensures real-time monitoring, recording, and analytics for proactive security.",
    icon: Lock,
    iconColor: "text-yellow-400",
    href: "/solutions/cctv-security-surveillance",
    images: [
      "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4226263/pexels-photo-4226263.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    features: ["HD/4K Cameras", "Remote Monitoring", "Video Analytics", "Night Vision", "ANPR Integration"],
  },
  {
    id: "access-control",
    title: "Access Control",
    description: "Comprehensive access control solutions to regulate entry at doors, turnstiles, and restricted areas. VertiLinks delivers scalable systems integrated with biometrics, smart cards, and mobile credentials for enhanced security.",
    icon: Shield,
    iconColor: "text-red-500",
    href: "/solutions/access-control-system",
    images: [
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181242/pexels-photo-1181242.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    features: ["Biometric Access", "Smart Card Readers", "Turnstiles & Gates", "Multi-level Authentication", "Audit Trails"],
  },
  {
    id: "firewall-systems",
    title: "Firewall Systems",
    description: "Robust firewall and gateway systems that safeguard networks against cyber threats. VertiLinks delivers next-generation firewall solutions with VPN, IPS/IDS, and content filtering to protect enterprise data and ensure secure connectivity.",
    icon: Flame,
    iconColor: "text-orange-500",
    href: "/solutions/firewall-gateway-system",
    images: [
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5380644/pexels-photo-5380644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5380645/pexels-photo-5380645.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    features: ["Next-Gen Firewall", "VPN Security", "Intrusion Detection", "Content Filtering", "Zero Trust"],
  },
  {
    id: "time-attendance",
    title: "Time Attendance",
    description: "Integrated biometric and RFID-based systems for accurate time tracking and secure workplace access. VertiLinks solutions simplify workforce management, reduce fraud, and ensure compliance with HR and security policies.",
    icon: Clock,
    iconColor: "text-gray-400",
    href: "/solutions/time-attendance-system",
    images: [
      "https://images.pexels.com/photos/5900161/pexels-photo-5900161.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5900162/pexels-photo-5900162.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5900163/pexels-photo-5900163.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5900164/pexels-photo-5900164.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    features: ["Biometric Attendance", "Shift Management", "Payroll Integration", "RFID/Smart Cards", "Mobile Access"],
  },
];

export default function SecuritySolutionsSlider() {
  const [currentSolution, setCurrentSolution] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const solution = securitySolutions[currentSolution];
  const currentImage = solution.images[currentImageIndex];

  const nextSolution = useCallback(() => {
    setCurrentSolution((c) => (c + 1) % securitySolutions.length);
    setCurrentImageIndex(0);
  }, []);

  const prevSolution = useCallback(() => {
    setCurrentSolution((c) => (c - 1 + securitySolutions.length) % securitySolutions.length);
    setCurrentImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((i) => (i + 1) % solution.images.length);
  }, [solution.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((i) => (i - 1 + solution.images.length) % solution.images.length);
  }, [solution.images.length]);

  // Auto-rotate solutions (disabled image auto-rotate to keep all images visible)
  // useEffect(() => {
  //   const timer = setInterval(nextSolution, 12000);
  //   return () => clearInterval(timer);
  // }, [nextSolution]);

  const IconComponent = solution.icon;

  return (
    <section className="section-padding bg-gradient-to-b from-secondary to-background" aria-labelledby="security-heading">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Security Solutions
          </span>
          <h2 id="security-heading" className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Our Security Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive security solutions designed to protect your business with cutting-edge technology and expert implementation.
          </p>
        </div>

        <div className="relative">
          {/* Main Slider Container */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Gallery Section - All Images Visible */}
              <div className="relative bg-brand-dark p-4 md:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSolution}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {/* Section Title */}
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg md:text-xl font-display font-bold text-primary-foreground">
                        {solution.title} Images
                      </h4>
                      <span className="text-sm text-primary-foreground/70">
                        {solution.images.length} Images
                      </span>
                    </div>

                    {/* All Images Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {solution.images.map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className={`relative group cursor-pointer rounded-lg overflow-hidden ${
                            i === currentImageIndex ? "ring-2 ring-primary ring-offset-2 ring-offset-brand-dark" : ""
                          }`}
                          onClick={() => setCurrentImageIndex(i)}
                        >
                          <div className="relative aspect-video bg-brand-dark-lighter">
                            <img
                              src={img}
                              alt={`${solution.title} - Image ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            {i === currentImageIndex && (
                              <div className="absolute inset-0 bg-primary/10" />
                            )}
                            {/* Image Number Badge */}
                            <div className="absolute top-2 right-2 px-2 py-1 bg-brand-dark/80 backdrop-blur-sm rounded text-xs font-semibold text-primary-foreground">
                              {i + 1}
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-lg text-primary-foreground text-sm font-medium">
                                Click to View
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Large Featured Image Display */}
                    <div className="mt-4 relative h-[200px] md:h-[250px] rounded-lg overflow-hidden bg-brand-dark-lighter">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${currentSolution}-${currentImageIndex}`}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <img
                            src={currentImage}
                            alt={`${solution.title} - Featured Image ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-primary-foreground">
                                Image {currentImageIndex + 1} of {solution.images.length}
                              </span>
                              <div className="flex gap-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                  }}
                                  className="p-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                  }}
                                  className="p-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
                                  aria-label="Next image"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSolution}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-primary/10 ${solution.iconColor}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                        {solution.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 text-sm font-medium bg-primary/5 text-primary rounded-full border border-primary/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={solution.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-base font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 w-fit"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </AnimatePresence>

                {/* Solution Navigation */}
                <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                  <button
                    onClick={prevSolution}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="Previous solution"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex gap-2">
                    {securitySolutions.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentSolution(i);
                          setCurrentImageIndex(0);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentSolution ? "w-8 bg-primary" : "w-2 bg-primary/30"
                        }`}
                        aria-label={`Go to ${securitySolutions[i].title}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSolution}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="Next solution"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
