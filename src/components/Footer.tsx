import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-primary-foreground" role="contentinfo">
      <div className="section-container section-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-extrabold">
                <span className="text-primary">V</span>
                <span className="text-brand-blue">ertilinks</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Leading IT solution provider in UAE. At Vertilinks, we are dedicated to providing cutting-edge technology services to businesses of all sizes. With a focus on innovation and customer satisfaction, we strive to exceed expectations in every project we undertake.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Server & Storage Solutions", href: "/products/server-and-storages" },
                { label: "ID Card Printers", href: "/products/id-card-printers" },
                { label: "Time Attendance Devices", href: "/products/time-attendance" },
                { label: "Gate Barriers", href: "/products/gate-barriers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Brands", href: "/brands" },
                { label: "Blog", href: "/blog" },
                { label: "Support", href: "/support/technical" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:services@vertilinks.com" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  services@vertilinks.com
                </a>
              </li>
              <li>
                <Link to="/support/privacy" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/support/faqs" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/support/terms" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/support/sitemap" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Location */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <h4 className="text-sm font-display font-bold uppercase tracking-wider mb-4">Location</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Sharjah Media City, UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+971505810499" className="hover:text-primary transition-colors">0505810499</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} VertiLinks. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Trusted IT, security, and identification solutions across the GCC.
          </p>
          <a
            href="https://wa.me/971505810499"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-primary-foreground rounded-full shadow-lg hover:bg-green-600 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
