import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle, Cpu, Network, Shield, Code, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const productData: Record<string, { title: string; desc: string; features: string[]; isSpecial?: boolean }> = {
  "id-card-printers": { title: "ID Card Printers", desc: "Choose between direct-to-card (DTC) or high-definition retransfer (HDP) printers, add encoders, laminators, and remote monitoring. Our certified team configures everything from visitor passes to secure financial cards.", features: ["DTC Printing", "HDP Retransfer", "Smart Card Encoding", "Lamination Module", "Remote Monitoring", "Dual-sided Printing"] },
  "server-and-storages": { title: "Servers & Storages", desc: "Design for today, scale for tomorrow. Choose virtualization-ready servers and storage with snapshots, replication and secure management.", features: ["Rack Servers", "Tower Servers", "NAS Storage", "SAN Solutions", "Virtualization Ready", "RAID Configuration"] },
  "laptops-and-desktop-computers": { title: "Laptops & Desktop Computers", desc: "Standardize on secure, manageable devices with long battery life and warranty coverage suited for your teams.", features: ["Business Laptops", "Desktop Workstations", "All-in-One PCs", "Extended Warranty", "Bulk Deployment", "Asset Tagging"] },
  "printers-and-scanners": { title: "Printers & Scanners", desc: "Control costs with secure print, quotas and automated supplies replenishment. Capture paper to searchable archives.", features: ["Laser Printers", "Multifunction Printers", "Document Scanners", "Secure Print", "Cost Management", "OCR Scanning"] },
  "cctv-ip-cameras": { title: "CCTV & IP Cameras", desc: "Standardize on modern imaging with AI analytics and robust storage. Mix IP, Turbo HD, PT/PTZ and thermal to meet site needs.", features: ["IP Cameras", "Turbo HD Cameras", "PTZ Cameras", "Thermal Cameras", "AI Analytics", "NVR/DVR Systems"] },
  "face-biometric-terminals": { title: "Face & Biometric Terminals", desc: "Deploy fast recognition with liveness detection and anti-spoofing for secure entry and accurate time capture.", features: ["Face Recognition", "Fingerprint Readers", "Palm Verification", "Liveness Detection", "Anti-spoofing", "Multi-modal Biometrics"] },
  "turnstile-and-speed-gates": { title: "Turnstile & Speed Gates", desc: "Balance throughput with security for offices, campuses, and factories. Integrates with readers and visitor systems.", features: ["Tripod Turnstiles", "Speed Gates", "Full-height Turnstiles", "Swing Barriers", "Visitor Integration", "Access Control Integration"] },
  "gate-barriers": { title: "Gate Barriers", desc: "Deploy CAME brushless platforms and BFT high-frequency barriers for parking, tolling and industrial yards. Pair with ANPR, UHF tags and access control.", features: ["Boom Barriers", "Bollards", "ANPR Integration", "UHF Tag Readers", "Automated Entry", "Traffic Management"] },
  "time-attendance": { title: "Time Attendance Devices", desc: "From rugged construction terminals to AI-driven lobby readers, choose the devices that match your compliance goals and environment.", features: ["Biometric Terminals", "Card Readers", "Mobile Check-in", "Rugged Devices", "Cloud Integration", "Multi-shift Support"] },
  "ip-audio": { title: "IP Audio Systems", desc: "Design resilient broadcast networks with IP endpoints that handle live paging, scheduled announcements, and integration with security workflows.", features: ["IP Speakers", "PoE Endpoints", "Scheduled Broadcasting", "Emergency Paging", "Zone Management", "Security Integration"] },
  "ip-pa-system": { title: "IP-PA System", desc: "Design scalable paging networks that bridge IP and analog zones, orchestrate schedules, and deliver crisp audio across campuses, retail, transportation, and worship spaces.", features: ["IP Paging", "Analog Zone Bridge", "Schedule Management", "Background Music", "Emergency Override", "Multi-site Control"] },
  "ip-intercom-system": { title: "IP Intercom System", desc: "SIP-ready intercoms, video panels, and call boxes that integrate with PBX, VMS, and PSIM platforms. Blend PoE stations, visual indoor monitors, and emergency poles.", features: ["SIP Intercoms", "Video Door Stations", "Indoor Monitors", "Emergency Call Points", "PBX Integration", "PoE Powered"] },
  "conference-system": { title: "Conference System", desc: "Turnkey conference systems that blend audio clarity with cinematic video. Wireless delegate microphones, gooseneck podium mics, PTZ cameras, and HDMI matrices.", features: ["Delegate Microphones", "PTZ Cameras", "HDMI Matrix", "Wireless Mic", "Video Recording", "Hybrid Meeting Support"] },
  "professional-audio-system": { title: "Professional Audio System", desc: "Premium amplifiers, column speakers, digital processors, and wireless microphones sourced from leading OEM partners.", features: ["Power Amplifiers", "Column Speakers", "DSP Processors", "Wireless Microphones", "Mixing Consoles", "Stage Monitors"] },
  "cloud-pa-system": { title: "Cloud PA System", desc: "Cloud PA stacks combine SIP, Bluetooth, Wi-Fi, and PoE hardware with browser-based control.", features: ["Cloud Management", "SIP Support", "Bluetooth Streaming", "Wi-Fi Speakers", "Browser Control", "Multi-site Management"] },
  "audio-systems-software": { title: "Audio Systems Software", desc: "Deploy industrial servers, cloud dashboards, and field-ready apps that bring complete visibility and control to amplifiers, speakers, microphones, and conference units.", features: ["Server Platform", "Cloud Dashboard", "Mobile App", "Device Monitoring", "Firmware Updates", "Analytics"] },
  "audio-system-equipments": { title: "Audio System Equipments", desc: "From digital wireless mics and power sequencers to paging interfaces and volume controls, VertiLinks supplies the backbone gear.", features: ["Wireless Mics", "Power Sequencers", "Paging Adapters", "Volume Controllers", "Cable Assemblies", "Rack Accessories"] },
  "surveillance-microphone": { title: "Surveillance Microphone", desc: "VertiLinks designs, deploys, and manages surveillance microphones spanning vandal-proof analog models, DSP-ready digital units, and PoE network microphones.", features: ["Vandal-proof Models", "DSP Processing", "PoE Network Mics", "Noise Cancellation", "Wide Coverage", "VMS Integration"] },
  "interactive-panel": { title: "Interactive Panels & Collaboration Devices", desc: "Whether you are outfitting lecture halls, briefing centers, or agile huddle rooms, VertiLinks maps IQ solutions for collaboration.", features: ["4K Touch Displays", "Wireless Sharing", "Annotation Tools", "Video Conferencing", "Cloud Whiteboard", "Multi-OS Support"] },
  "pen-tablet": { title: "Pen Tablets", desc: "Beginner-friendly 4x3 tablets, versatile 6x4 midrange models, 10x6 workhorses with phone mode, and accessories.", features: ["Pressure Sensitivity", "Express Keys", "Pen Tilt", "Phone Compatibility", "USB-C Connection", "Driver Support"] },
  "pen-display": { title: "Pen Displays", desc: "Choose compact 10.1\" and 11.6\" screens for mobility, 13.3\" and 15.6\" for balance, 18.5\" for extra room, or 21.5\" for studio desks.", features: ["Full HD Display", "Laminated Screen", "8192 Pressure Levels", "Stand Included", "Color Accuracy", "Anti-glare Coating"] },
  "pen-computer": { title: "Pen Computers", desc: "Choose 15.6\" X5/X5 Pro for mobility, 18.5\" X6 for wider canvases, or 21.5\" X3/X7 for studio desks.", features: ["Built-in Computer", "High Performance", "Large Display", "Pen Input", "Modular PC-BOX", "Studio Ready"] },
  "digital-signage": { title: "Digital Signage", desc: "Enterprise display solutions for retail, hospitality, corporate, and public spaces.", features: ["Cloud CMS", "4K Displays", "Outdoor Displays", "Touch Kiosks", "Video Walls", "Content Scheduling"] },
  "designer-tablets-and-displays": { 
    title: "Designer Tablets & Displays", 
    desc: "Pen tablets, pen displays, and pen computers in one place. Explore our full stack for designers and educators—from lightweight pen tablets to pen displays and all-in-one pen computers.",
    features: ["Pen Tablets", "Pen Displays", "Pen Computers", "Pressure Sensitivity", "Color Accuracy", "Studio Ready"],
    isSpecial: true
  },
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = productData[slug || ""];
  const [form, setForm] = useState({ company: "", name: "", email: "", mobile: "", city: "", country: "", description: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container section-padding text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">Back to Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Special layout for Designer Tablets & Displays
  if (slug === "designer-tablets-and-displays") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative bg-brand-dark py-20 md:py-28">
            <div className="section-container">
              <p className="text-sm text-primary-foreground/60 mb-2">
                <Link to="/" className="hover:text-primary-foreground">Home</Link> / <Link to="/products" className="hover:text-primary-foreground">Products</Link> / {data.title}
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">{data.title}</h1>
              <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">{data.desc}</p>
              <Link to="#contact-form" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
                Get In Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Why this lineup */}
          <section className="section-container section-padding">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Why this lineup</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare the three ways to work with pen input, then drill into specs, bundles, and deployment guidance tailored to your teams.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pen Tablets */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-brand-blue/10">
                  <img
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop"
                    alt="Pen Tablets"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">Pen Tablets</h3>
                  <p className="text-muted-foreground mb-6">Portable, battery-free pen tablets across 4x3, 6x4, and 10x6 inch sizes—great for sketching, teaching, and signing.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">8192 pressure & tilt</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">Shortcut keys + dial options</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">Accessories for classrooms & studios</span>
                    </li>
                  </ul>
                  <Link to="/products/pen-tablet" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    View products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Pen Displays */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-brand-blue/10">
                  <img
                    src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&h=400&fit=crop"
                    alt="Pen Displays"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">Pen Displays</h3>
                  <p className="text-muted-foreground mb-6">Full HD and beyond pen displays with laminated glass, anti-glare finish, and accurate color for drawing and design.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">Sizes from 10.1" to 21.5"</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">Laminated screens to cut parallax</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">Adjustable stands & driver guidance</span>
                    </li>
                  </ul>
                  <Link to="/products/pen-display" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    View products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Pen Computers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-brand-blue/10">
                  <img
                    src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop"
                    alt="Pen Computers"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">Pen Computers</h3>
                  <p className="text-muted-foreground mb-6">All-in-one pen computers with built-in processors and touch, ready for studios, classrooms, and mobile creators.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">Integrated compute + pen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">Touch + tilt support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">Accessory stands & mobile power</span>
                    </li>
                  </ul>
                  <Link to="/products/pen-computer" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    View products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Choose VertiLinks */}
          <section className="relative py-20 md:py-28 overflow-hidden bg-brand-dark">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
                alt="Why Choose VertiLinks"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-brand-dark/90" />
            </div>
            <div className="relative z-10 section-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">Why Choose VertiLinks?</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { icon: Cpu, title: "In-house Hardware", desc: "In-house hardware design and production." },
                  { icon: Network, title: "RFID Expertise", desc: "RFID solution expertise across 20+ industries." },
                  { icon: Shield, title: "Nationwide Service", desc: "Nationwide service network and global deployments." },
                  { icon: Code, title: "Custom Development", desc: "Custom software development and integration services." },
                  { icon: Wifi, title: "Long-term Support", desc: "Long-term support and scalable upgrade plans." },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50"
                  >
                    <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4 mx-auto">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-primary-foreground mb-2 text-center">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/70 text-center">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Platform Features */}
          <section className="bg-secondary">
            <div className="section-container section-padding">
              <h2 className="text-2xl font-display font-bold text-foreground mb-12 text-center">Platform Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Customizable Tags & Readers", desc: "Anti-metal, waterproof, long-range, tamper-evident options" },
                  { title: "Software Dashboard", desc: "Cloud or on-premise interface with access control" },
                  { title: "Alerts & Automation", desc: "Missing item alerts, route deviations, unauthorized access" },
                  { title: "Third-Party Integration", desc: "APIs for ERP, SAP, Oracle, Tally, and custom CRMs" },
                  { title: "Audit & Compliance Logs", desc: "Tamper-proof reports for governance and audits" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact-form" className="relative bg-brand-dark py-20 md:py-28">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary/20 to-brand-blue/20">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
                alt="Background"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="relative z-10 section-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-foreground/60 bg-primary/20 rounded-full mb-4">
                  NEED ASSISTANCE?
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">Looking for {data.title}?</h2>
                <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-2">
                  Share a few details and our specialists will help you scope deployment, pricing, and support tailored for your next rollout.
                </p>
                <p className="text-sm text-primary-foreground/60">
                  Prefer a quick chat? Call us at <a href="tel:+971505810499" className="text-primary hover:underline font-semibold">+971 50 581 0499</a> or drop an email at <a href="mailto:services@vertilinks.com" className="text-primary hover:underline font-semibold">services@vertilinks.com</a>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto"
              >
                {/* Form */}
                <div className="lg:col-span-3">
                  <form className="space-y-5 bg-card/95 backdrop-blur-sm p-8 rounded-2xl border border-border/50" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company*</label>
                        <input name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Name*</label>
                        <input name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" required />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email*</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Mobile*</label>
                        <input name="mobile" value={form.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" required />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
                        <input name="city" value={form.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                        <input name="country" value={form.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Tell us more*</label>
                      <textarea name="description" value={form.description} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none resize-none" required />
                    </div>
                    <div className="flex gap-3">
                      <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">Submit enquiry</button>
                      <button type="reset" onClick={() => setForm({ company: "", name: "", email: "", mobile: "", city: "", country: "", description: "" })} className="px-8 py-3 border border-border rounded-lg text-foreground hover:bg-accent transition-colors">Reset</button>
                    </div>
                  </form>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-xl font-display font-bold text-primary-foreground">Prefer another channel? Reach our team directly.</h3>
                  <div className="space-y-4">
                    <a href="tel:+971505810499" className="flex items-center gap-3 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card transition-colors">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-primary-foreground/60">Call us</div>
                        <div className="text-sm font-medium text-primary-foreground">+971 50 581 0499</div>
                      </div>
                    </a>
                    <a href="mailto:services@vertilinks.com" className="flex items-center gap-3 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card transition-colors">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-primary-foreground/60">Email us</div>
                        <div className="text-sm font-medium text-primary-foreground">services@vertilinks.com</div>
                      </div>
                    </a>
                    <a href="https://wa.me/971505810499" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card transition-colors">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-primary-foreground/60">Chat on WhatsApp</div>
                        <div className="text-sm font-medium text-primary-foreground">+971505810499</div>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Standard product layout
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">
              <Link to="/" className="hover:text-primary-foreground">Home</Link> / <Link to="/products" className="hover:text-primary-foreground">Products</Link> / {data.title}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">{data.title}</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">{data.desc}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="section-container section-padding">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">Product Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.features.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary">
          <div className="section-container section-padding text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Need a custom configuration?</h2>
            <p className="text-muted-foreground mb-8">Our team can help design the perfect setup for your requirements.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
