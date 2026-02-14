import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Cutting-edge technology services",
  "Highly skilled professionals",
  "Cost-effective solutions",
  "Innovation-driven approach",
  "Customer satisfaction focused",
  "Tailored to unique needs",
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-background" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://vertilinks.com/images/home/home-about.jpg"
                alt="VertiLinks fingerprint scanning biometric security technology"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 border border-border shadow-lg hidden md:block">
              <div className="text-3xl font-display font-extrabold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About VertiLinks
            </span>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-6 text-balance">
              Our Innovation That Counts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Vertilinks, we are dedicated to providing cutting-edge technology services to businesses of all sizes. With a focus on innovation and customer satisfaction, we strive to exceed expectations in every project we undertake. Our team at Vertilinks is comprised of highly skilled professionals who are passionate about technology and committed to delivering top-notch solutions tailored to meet the unique needs of each client.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our focus is to provide innovative products and solutions with a set of innovation. We emphasizes to promote intellectual qualities in an individual and amongst the team to provide the best solutions before various clients in a cost effective manner.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-brand-red-dark transition-all group"
            >
              Read More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
