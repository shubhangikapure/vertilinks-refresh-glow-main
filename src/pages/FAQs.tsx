import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What services does VertiLinks provide?",
        a: "VertiLinks provides integrated IT, security, and digital transformation services across the GCC. Our solutions include CCTV surveillance, access control, time attendance systems, PABX solutions, structured cabling, cloud solutions, firewall systems, and more.",
      },
      {
        q: "Where is VertiLinks located?",
        a: "VertiLinks is located in Sharjah Media City, UAE. We serve clients across the GCC region.",
      },
      {
        q: "How can I contact VertiLinks?",
        a: "You can reach us via phone at +971 50 581 0499, email at services@vertilinks.com, or WhatsApp. You can also fill out our contact form on the Contact Us page.",
      },
    ],
  },
  {
    category: "Solutions",
    questions: [
      {
        q: "What CCTV solutions do you offer?",
        a: "We offer comprehensive CCTV and IP surveillance solutions including HD/4K cameras, video management software, AI-powered analytics, remote monitoring, night vision, ANPR integration, and control room design.",
      },
      {
        q: "Do you provide access control systems?",
        a: "Yes, we provide comprehensive access control solutions including biometric access, smart card readers, turnstiles, multi-level authentication, visitor management, and audit trails.",
      },
      {
        q: "What is included in your time attendance system?",
        a: "Our time attendance systems include face, fingerprint, RFID and mobile check-ins, shift templates, automated overtime calculations, integration with payroll systems, geo-fencing, and real-time dashboards.",
      },
    ],
  },
  {
    category: "Products",
    questions: [
      {
        q: "What brands do you work with?",
        a: "We partner with leading technology brands including Hikvision, Dahua, ZKTeco, IQBoard, Cisco, Fortinet, and Spon Communication, among others.",
      },
      {
        q: "Do you provide installation services?",
        a: "Yes, we provide complete installation, configuration, and support services for all our products and solutions.",
      },
      {
        q: "What warranty do you offer on products?",
        a: "Warranty terms vary by product and manufacturer. Please contact us for specific warranty information on the products you're interested in.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        q: "Do you provide technical support?",
        a: "Yes, we offer comprehensive technical support services. You can reach our technical support team through our support portal or contact us directly.",
      },
      {
        q: "What are your business hours?",
        a: "Our business hours are typically Sunday through Thursday, 9:00 AM to 6:00 PM GST. For urgent support, please contact us via phone or WhatsApp.",
      },
      {
        q: "Do you offer maintenance contracts?",
        a: "Yes, we offer IT Support and AMC (Annual Maintenance Contracts) services to keep your systems running smoothly with 24/7 monitoring and support.",
      },
    ],
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">
              <Link to="/" className="hover:text-primary-foreground">Home</Link> / Support / FAQs
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Frequently Asked Questions</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              Find answers to common questions about our services, products, and solutions.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-container section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => {
                    const currentIndex = questionIndex++;
                    return (
                      <div key={currentIndex} className="bg-card rounded-xl border border-border overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(currentIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-accent transition-colors"
                        >
                          <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                              openIndex === currentIndex ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openIndex === currentIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary">
          <div className="section-container section-padding text-center">
            <div className="max-w-2xl mx-auto">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help. Get in touch with us.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
