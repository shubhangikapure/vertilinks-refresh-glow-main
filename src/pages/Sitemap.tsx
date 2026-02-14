import { Link } from "react-router-dom";
import { Map } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">
              <Link to="/" className="hover:text-primary-foreground">Home</Link> / Support / Sitemap
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Sitemap</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              Navigate through all pages and sections of our website.
            </p>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="section-container section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
                <li><Link to="/about" className="text-primary hover:underline">About Us</Link></li>
                <li><Link to="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                <li><Link to="/careers" className="text-primary hover:underline">Careers</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Solutions</h2>
              <ul className="space-y-2">
                <li><Link to="/solutions" className="text-primary hover:underline">All Solutions</Link></li>
                <li><Link to="/solutions/cctv-security-surveillance" className="text-primary hover:underline">CCTV Security & Surveillance</Link></li>
                <li><Link to="/solutions/access-control-system" className="text-primary hover:underline">Access Control System</Link></li>
                <li><Link to="/solutions/time-attendance-system" className="text-primary hover:underline">Time Attendance System</Link></li>
                <li><Link to="/solutions/pabx-solution" className="text-primary hover:underline">PABX Solution</Link></li>
                <li><Link to="/solutions/audio-video-solutions" className="text-primary hover:underline">Audio Video Solutions</Link></li>
                <li><Link to="/solutions/structured-cabling-solution" className="text-primary hover:underline">Structured Cabling Solution</Link></li>
                <li><Link to="/solutions/firewall-gateway-system" className="text-primary hover:underline">Firewall & Gateway System</Link></li>
                <li><Link to="/solutions/cloud-solutions" className="text-primary hover:underline">Cloud Solutions</Link></li>
                <li><Link to="/solutions/it-support-amc" className="text-primary hover:underline">IT Support & AMC</Link></li>
              </ul>
            </div>

            {/* Softwares */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Softwares</h2>
              <ul className="space-y-2">
                <li><Link to="/softwares" className="text-primary hover:underline">All Softwares</Link></li>
                <li><Link to="/softwares/erp" className="text-primary hover:underline">ERP Solutions</Link></li>
                <li><Link to="/softwares/crm" className="text-primary hover:underline">CRM Software</Link></li>
                <li><Link to="/softwares/hr-payroll" className="text-primary hover:underline">HR & Payroll</Link></li>
                <li><Link to="/softwares/vms" className="text-primary hover:underline">VMS Software</Link></li>
                <li><Link to="/softwares/access-management" className="text-primary hover:underline">Access Management</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Products</h2>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-primary hover:underline">All Products</Link></li>
                <li><Link to="/products/cctv-ip-cameras" className="text-primary hover:underline">CCTV & IP Cameras</Link></li>
                <li><Link to="/products/gate-barriers" className="text-primary hover:underline">Gate Barriers</Link></li>
                <li><Link to="/products/time-attendance" className="text-primary hover:underline">Time Attendance Devices</Link></li>
                <li><Link to="/products/face-biometric-terminals" className="text-primary hover:underline">Face & Biometric Terminals</Link></li>
                <li><Link to="/products/ip-audio" className="text-primary hover:underline">IP Audio Systems</Link></li>
                <li><Link to="/products/ip-intercom-system" className="text-primary hover:underline">IP Intercom System</Link></li>
                <li><Link to="/products/conference-system" className="text-primary hover:underline">Conference System</Link></li>
                <li><Link to="/products/interactive-panel" className="text-primary hover:underline">Interactive Panels</Link></li>
                <li><Link to="/products/id-card-printers" className="text-primary hover:underline">ID Card Printers</Link></li>
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Brands</h2>
              <ul className="space-y-2">
                <li><Link to="/brands" className="text-primary hover:underline">All Brands</Link></li>
                <li><Link to="/brands/hikvision" className="text-primary hover:underline">Hikvision</Link></li>
                <li><Link to="/brands/dahua" className="text-primary hover:underline">Dahua</Link></li>
                <li><Link to="/brands/zkteco" className="text-primary hover:underline">ZKTeco</Link></li>
                <li><Link to="/brands/iqboard" className="text-primary hover:underline">IQBoard</Link></li>
                <li><Link to="/brands/cisco" className="text-primary hover:underline">Cisco</Link></li>
                <li><Link to="/brands/fortinet" className="text-primary hover:underline">Fortinet</Link></li>
                <li><Link to="/brands/spon" className="text-primary hover:underline">Spon Communication</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Support</h2>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                <li><Link to="/support/technical" className="text-primary hover:underline">Technical Support</Link></li>
                <li><Link to="/support/faqs" className="text-primary hover:underline">FAQs</Link></li>
                <li><Link to="/support/terms" className="text-primary hover:underline">Terms & Conditions</Link></li>
                <li><Link to="/support/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
                <li><Link to="/support/sitemap" className="text-primary hover:underline">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
