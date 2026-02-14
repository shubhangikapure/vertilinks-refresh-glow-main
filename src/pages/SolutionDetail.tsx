import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle, Tag, LayoutDashboard, Bell, Plug, FileCheck, Shield, Cpu, Network, Code, KeyRound, Camera, Monitor, Cable, PhoneCall, Lock, Eye, Video, Radio, FileText, Database, Cloud, Wifi, Search, Settings, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const solutionData: Record<string, { title: string; desc: string; features: string[]; industries: string[]; platformFeatures?: string[]; capabilities?: string[] }> = {
  "time-attendance-system": {
    title: "Automated Time & Attendance",
    desc: "Capture accurate working hours, automate payroll inputs, and stay compliant with local labor laws using biometric and mobile attendance solutions.",
    features: [
      "Face, fingerprint, RFID and mobile check-ins",
      "Shift templates with rotational planning",
      "Automated overtime & leave calculations",
      "Integration with Oracle, SAP, Tally, ERPNext",
      "Geo-fencing for field teams",
      "Real-time dashboards & alerts",
      "Arabic & English self-service portal",
      "Payroll-ready exports & APIs"
    ],
    industries: ["Corporate Offices", "Factories", "Educational Institutions", "Hospitals", "Construction Sites"],
    platformFeatures: [
      "Customizable Tags & Readers",
      "Software Dashboard",
      "Alerts & Automation",
      "Third-Party Integration",
      "Audit & Compliance Logs"
    ],
    capabilities: [
      "Anti-metal, waterproof, long-range, tamper-evident options",
      "Cloud or on-premise interface with access control",
      "Missing item alerts, route deviations, unauthorized access",
      "APIs for ERP, SAP, Oracle, Tally, and custom CRMs",
      "Tamper-proof reports for governance and audits"
    ],
  },
  "access-control-system": {
    title: "Access Control System",
    desc: "Layered door, elevator, and visitor controls secured by modern credentials. Comprehensive access control solutions to regulate entry at doors, turnstiles, and restricted areas. VertiLinks delivers scalable systems integrated with biometrics, smart cards, and mobile credentials for enhanced security.",
    features: ["Biometric Access", "Smart Card Readers", "Turnstiles & Gates", "Multi-level Authentication", "Audit Trails", "Visitor Management", "Mobile Credentials", "SOC Integration"],
    industries: ["Airports", "IT Parks", "Government Buildings", "Residential Complexes", "Data Centers"],
    platformFeatures: [
      "Biometric Integration",
      "Smart Card Technology",
      "Visitor Management",
      "Multi-level Security",
      "Audit & Compliance"
    ],
    capabilities: [
      "Fingerprint, face, and iris recognition systems",
      "RFID and NFC card readers with encryption",
      "Automated visitor registration and badge printing",
      "Role-based access control with time restrictions",
      "Comprehensive audit logs and compliance reporting"
    ],
  },
  "cctv-security-surveillance": {
    title: "CCTV Security & Surveillance",
    desc: "From edge recording to control room displays, we design surveillance architectures that scale and keep you compliant. Comprehensive CCTV and IP surveillance solutions delivering 24/7 visibility for every premises. VertiLinks provides advanced security systems with HD/4K cameras, intelligent analytics, and centralized video management for proactive threat detection and incident response.",
    features: [
      "HD/4K IP Cameras",
      "AI-Powered Video Analytics",
      "Remote Monitoring & Access",
      "Night Vision & Low-Light Technology",
      "ANPR & License Plate Recognition",
      "Edge Recording & Cloud Storage",
      "Control Room Design & Integration",
      "Mobile & Web Viewing"
    ],
    industries: ["Corporate Offices", "Retail Stores", "Warehouses", "Banks & Financial Institutions", "Public Infrastructure", "Manufacturing Plants", "Educational Institutions", "Healthcare Facilities"],
    platformFeatures: [
      "HD/4K Camera Systems",
      "Video Management Software",
      "AI-Powered Analytics",
      "Remote Access & Monitoring",
      "Control Room Solutions"
    ],
    capabilities: [
      "Ultra-high definition IP cameras with advanced night vision and wide dynamic range",
      "Centralized video management software with multi-site support and scalable architecture",
      "AI-powered motion detection, facial recognition, people counting, and behavior analysis",
      "Mobile and web-based remote viewing with real-time alerts and playback capabilities",
      "Professional control room design with video walls, monitoring stations, and integration with access control"
    ],
  },
  "audio-video-solutions": {
    title: "Audio Video Solutions",
    desc: "Meeting rooms and command centers engineered for crystal-clear collaboration. Design and integrate conferencing, digital signage, and immersive audio tuned to each space.",
    features: ["Video Conferencing", "Digital Signage", "Room Automation", "Acoustic Design", "Control Systems", "Wireless Presentation", "Recording & Streaming"],
    industries: ["Corporate Boardrooms", "Command Centers", "Lecture Halls", "Retail", "Hospitality"],
    platformFeatures: [
      "Video Conferencing",
      "Digital Signage",
      "Room Automation",
      "Acoustic Design",
      "Control Systems"
    ],
    capabilities: [
      "4K video conferencing with all-in-one solutions",
      "Dynamic content management and scheduling",
      "Automated room control and scheduling",
      "Professional acoustic treatment and design",
      "Unified control systems for seamless operation"
    ],
  },
  "structured-cabling-solution": {
    title: "Structured Cabling Solution",
    desc: "High-speed copper and fiber backbones designed for resilient networks. From backbone fiber to floor cabling, our designs follow TIA/EIA standards and deliver predictable performance.",
    features: ["Cat6/Cat6A Cabling", "Fiber Optic Backbone", "Patch Panel Management", "Cable Testing & Certification", "Pathway Design", "Data Center Cabling"],
    industries: ["Data Centers", "Corporate Offices", "Hospitals", "Hotels", "Industrial Plants"],
    platformFeatures: [
      "Copper & Fiber Cabling",
      "Patch Panel Management",
      "Cable Testing & Certification",
      "Pathway Design",
      "Data Center Solutions"
    ],
    capabilities: [
      "Cat6/Cat6A and fiber optic installations",
      "Organized patch panel and rack management",
      "Comprehensive testing and certification reports",
      "Professional pathway and conduit design",
      "Enterprise-grade data center cabling"
    ],
  },
  "pabx-solution": {
    title: "PABX Solution",
    desc: "Unified voice platforms integrating desk phones, soft clients, and IVR flows. From SMB to enterprise clusters, our PABX solutions deliver advanced call routing, mobility, and integrations.",
    features: ["IP-PBX Systems", "IVR Menus", "Call Recording", "SIP Trunking", "Soft Clients", "Auto Attendant", "Call Analytics"],
    industries: ["Call Centers", "Corporate Offices", "Hotels", "Healthcare", "Education"],
    platformFeatures: [
      "IP-PBX Systems",
      "IVR & Auto Attendant",
      "Call Recording",
      "SIP Trunking",
      "Unified Communications"
    ],
    capabilities: [
      "Scalable IP-PBX for SMB to enterprise",
      "Custom IVR menus and call routing",
      "Compliance-ready call recording",
      "Cost-effective SIP trunking integration",
      "Unified communications with mobile apps"
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    desc: "Infrastructure that scales with you. Design resilient networks, cloud foundations, and data centers engineered to meet tomorrow's demand while keeping today's operations seamless. We assess, migrate, secure, and operate your infrastructure on AWS, Azure, GCP, or private cloud.",
    features: ["Cloud Migration", "Hybrid Cloud", "Disaster Recovery", "Cloud Security", "Cost Optimization", "DevOps", "Managed Cloud"],
    industries: ["Enterprises", "SMBs", "Government", "Healthcare", "Financial Services"],
    platformFeatures: [
      "Cloud Migration",
      "Hybrid Cloud Architecture",
      "Disaster Recovery",
      "Cloud Security",
      "Cost Optimization"
    ],
    capabilities: [
      "Seamless migration to AWS, Azure, GCP, or private cloud platforms",
      "Hybrid cloud architectures connecting on-premise and cloud resources",
      "Comprehensive disaster recovery and business continuity planning",
      "Advanced cloud security with identity management and compliance",
      "Cost optimization strategies and resource management"
    ],
  },
  "firewall-gateway-system": {
    title: "Firewall & Gateway System",
    desc: "Robust firewall and gateway systems that safeguard networks against cyber threats. VertiLinks delivers next-generation firewall solutions with VPN, IPS/IDS, and content filtering to protect enterprise data and ensure secure connectivity.",
    features: ["Next-Gen Firewall", "VPN Security", "Intrusion Detection", "Content Filtering", "Zero Trust", "SD-WAN", "Threat Intelligence"],
    industries: ["Financial Institutions", "Enterprises", "Healthcare", "Government", "Education"],
    platformFeatures: [
      "Next-Generation Firewall",
      "VPN & Remote Access",
      "Intrusion Prevention",
      "Content Filtering",
      "Threat Intelligence"
    ],
    capabilities: [
      "Advanced threat protection and deep packet inspection",
      "Secure remote access with SSL/IPSec VPN",
      "Real-time intrusion detection and prevention",
      "Web content filtering and application control",
      "Global threat intelligence and automated response"
    ],
  },
  "seo-services": {
    title: "SEO Services",
    desc: "We align SEO roadmaps with your funnel—from audits and geo-targeted optimization to content, analytics, and marketplace visibility. Drive organic traffic and improve search rankings with data-driven SEO strategies.",
    features: ["Technical SEO Audit", "On-Page Optimization", "Local SEO", "Content Strategy", "Link Building", "Analytics & Reporting", "Competitor Analysis"],
    industries: ["E-commerce", "Local Businesses", "B2B Companies", "Healthcare", "Real Estate"],
    platformFeatures: [
      "Technical SEO Audit",
      "On-Page Optimization",
      "Local SEO",
      "Content Strategy",
      "Analytics & Reporting"
    ],
    capabilities: [
      "Comprehensive technical audits identifying crawlability and indexing issues",
      "On-page optimization for keywords, meta tags, and content structure",
      "Local SEO strategies for geo-targeted search visibility",
      "Content strategy development aligned with search intent",
      "Advanced analytics and reporting with actionable insights"
    ],
  },
  "website-development-services": {
    title: "Website Development Services",
    desc: "From discovery to ongoing care, we handle front-end experience, platform engineering, CMS governance, hosting, and continuous optimization. Build modern, responsive websites that drive engagement and conversions.",
    features: ["Custom Web Development", "CMS Solutions", "E-commerce Platforms", "Responsive Design", "Performance Optimization", "SEO Integration", "Hosting & Maintenance"],
    industries: ["Startups", "SMBs", "Enterprises", "E-commerce", "Education"],
    platformFeatures: [
      "Custom Web Development",
      "CMS Solutions",
      "E-commerce Platforms",
      "Responsive Design",
      "Performance Optimization"
    ],
    capabilities: [
      "Custom web development with modern frameworks and technologies",
      "CMS solutions including WordPress, Drupal, and custom platforms",
      "E-commerce platforms with payment integration and inventory management",
      "Fully responsive designs optimized for all devices",
      "Performance optimization for fast loading and improved user experience"
    ],
  },
  "digital-marketing-solution": {
    title: "Digital Marketing Services",
    desc: "Every engagement combines strategic planning, channel execution, and analytics to connect discovery, engagement, and conversion. Drive growth with data-driven digital marketing strategies across all channels.",
    features: ["Social Media Marketing", "PPC Campaigns", "Email Marketing", "Content Marketing", "Brand Strategy", "Conversion Optimization", "Marketing Automation"],
    industries: ["Retail", "Hospitality", "Healthcare", "Real Estate", "Technology"],
    platformFeatures: [
      "Social Media Marketing",
      "PPC Campaigns",
      "Email Marketing",
      "Content Marketing",
      "Marketing Automation"
    ],
    capabilities: [
      "Multi-platform social media marketing and community management",
      "PPC campaigns on Google, Bing, and social platforms with ROI optimization",
      "Email marketing campaigns with automation and personalization",
      "Content marketing strategies including blogs, videos, and infographics",
      "Marketing automation workflows for lead nurturing and conversion"
    ],
  },
  "microsoft-services": {
    title: "Microsoft Services",
    desc: "We help organizations embrace secure collaboration, app modernization, and data insights on Microsoft cloud. Transform your business with Microsoft 365, Azure, and Dynamics 365 solutions.",
    features: ["Microsoft 365", "Azure Cloud", "Teams Deployment", "SharePoint", "Power Platform", "Dynamics 365", "Security & Compliance"],
    industries: ["Enterprises", "Education", "Government", "Healthcare", "Financial Services"],
    platformFeatures: [
      "Microsoft 365",
      "Azure Cloud",
      "Teams Deployment",
      "SharePoint",
      "Power Platform"
    ],
    capabilities: [
      "Microsoft 365 deployment and migration with security best practices",
      "Azure cloud infrastructure design, deployment, and management",
      "Microsoft Teams deployment for collaboration and communication",
      "SharePoint implementation for document management and collaboration",
      "Power Platform solutions for business process automation and analytics"
    ],
  },
  "it-support-amc": {
    title: "IT Support and AMC",
    desc: "With a dedicated and trained IT support team plus crisis-management expertise, Vertilinks handles everything from minor updates to major incidents. Signing an IT AMC with Vertilinks keeps environments protected 24x7 with proactive monitoring and rapid response.",
    features: ["24/7 Help Desk", "On-site Support", "Remote Monitoring", "Preventive Maintenance", "Asset Management", "Incident Management", "SLA-based Support"],
    industries: ["Corporate Offices", "Retail Chains", "Healthcare", "Education", "Government"],
    platformFeatures: [
      "24/7 Help Desk",
      "Remote Monitoring",
      "Preventive Maintenance",
      "Asset Management",
      "Incident Management"
    ],
    capabilities: [
      "24/7 help desk support with guaranteed response times and SLA compliance",
      "Remote monitoring and management of IT infrastructure and systems",
      "Proactive preventive maintenance to prevent issues before they occur",
      "Comprehensive asset management and inventory tracking",
      "Rapid incident management and resolution with escalation procedures"
    ],
  },
};

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = solutionData[slug || ""];
  const [form, setForm] = useState({ company: "", name: "", email: "", mobile: "", city: "", country: "", description: "" });
  // Main solutions that should have enhanced layout
  const mainSolutions = [
    "time-attendance-system",
    "access-control-system",
    "cctv-security-surveillance",
    "audio-video-solutions",
    "structured-cabling-solution",
    "pabx-solution",
    "firewall-gateway-system",
    "cloud-solutions",
    "seo-services",
    "website-development-services",
    "digital-marketing-solution",
    "microsoft-services",
    "it-support-amc"
  ];
  const hasEnhancedLayout = data?.platformFeatures && mainSolutions.includes(slug || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container section-padding text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Solution Not Found</h1>
          <Link to="/solutions" className="text-primary hover:underline">Back to Solutions</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">
              <Link to="/" className="hover:text-primary-foreground">Home</Link> / <Link to="/solutions" className="hover:text-primary-foreground">Solutions</Link> / {data.title}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">{data.title}</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">{data.desc}</p>
            {hasEnhancedLayout && (
              <Link to="#contact-form" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
                Get In Touch <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {!hasEnhancedLayout && (
              <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
                Get In Touch <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </section>

        {hasEnhancedLayout && (
          <>
            {/* Solution Overview with Image */}
            <section className="section-container section-padding">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
                  SOLUTION OVERVIEW
                </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                    {slug === "cctv-security-surveillance" 
                      ? "Comprehensive Security Surveillance System"
                      : slug === "time-attendance-system"
                      ? "Enterprise Time Tracking Platform"
                      : slug === "cloud-solutions"
                      ? "Infrastructure That Scales With You"
                      : slug === "firewall-gateway-system"
                      ? "Security Without Compromise"
                      : data.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {slug === "cctv-security-surveillance"
                      ? "From edge recording to control room displays, we design surveillance architectures that scale and keep you compliant. Our comprehensive CCTV solutions deliver 24/7 visibility with advanced analytics and intelligent monitoring."
                      : slug === "time-attendance-system"
                      ? "Deploy centrally managed biometric devices, mobile check-ins, and geo-fenced attendance with automated policy enforcement."
                      : slug === "cloud-solutions"
                      ? "Design resilient networks, cloud foundations, and data centers engineered to meet tomorrow's demand while keeping today's operations seamless."
                      : slug === "firewall-gateway-system"
                      ? "From surveillance to biometric access, VertiLinks orchestrates end-to-end protection so teams stay focused on growth and innovation."
                      : data.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.features.slice(0, 4).map((f) => (
                      <div key={f} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-brand-blue/20">
                    <img
                      src={slug === "cctv-security-surveillance"
                        ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                        : slug === "time-attendance-system"
                        ? "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                        : slug === "cloud-solutions"
                        ? "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                        : slug === "firewall-gateway-system"
                        ? "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
                        : slug === "audio-video-solutions"
                        ? "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                        : slug === "website-development-services"
                        ? "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
                        : slug === "digital-marketing-solution"
                        ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                        : slug === "microsoft-services"
                        ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                        : slug === "seo-services"
                        ? "https://images.unsplash.com/photo-1432888622747-4eb9a8f2f52c?w=800&h=600&fit=crop"
                        : slug === "it-support-amc"
                        ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                        : "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"}
                      alt={data.title}
                      className="w-full h-[500px] object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Suite Cards - Essential & Enterprise (Only for Time Attendance) */}
            {slug === "time-attendance-system" && (
              <section className="bg-secondary">
                <div className="section-container section-padding">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Where it fits</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Compare capabilities at a glance, then dive deeper into individual models, specs, and deployment best practices for every option in this category.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                  {/* Essential Suite */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-brand-blue/10">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                        alt="Essential Suite"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-display font-bold text-foreground mb-3">Essential Suite</h3>
                      <p className="text-muted-foreground mb-6">Cloud-ready attendance for SMEs with quick deployment and mobile approvals.</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">Mobile & biometric capture</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">Leave & overtime workflows</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">Payroll exports</span>
                        </li>
                      </ul>
                      <Link to="#contact-form" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        View lineup <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>

                  {/* Enterprise Suite */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-brand-blue/10">
                      <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                        alt="Enterprise Suite"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-display font-bold text-foreground mb-3">Enterprise Suite</h3>
                      <p className="text-muted-foreground mb-6">Multi-location attendance with high-availability architecture and custom integrations.</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">High availability</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">Custom integration bus</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">Advanced analytics</span>
                        </li>
                      </ul>
                      <Link to="#contact-form" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        View lineup <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                  </div>
                </div>
              </section>
            )}

            {/* Features Grid */}
            <section className="section-container section-padding">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Key Capabilities</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.features.map((f, index) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-5 bg-secondary rounded-xl hover:bg-accent transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Platform Features with Icons */}
            {data.platformFeatures && (
              <section className="bg-secondary">
                <div className="section-container section-padding">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-12 text-center">Platform Features</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.platformFeatures.map((feature, index) => {
                      // Icon mapping based on solution type
                      const getIconForFeature = (featureName: string, solutionSlug: string | undefined) => {
                        const iconMap: Record<string, any> = {
                          "time-attendance-system": [Tag, LayoutDashboard, Bell, Plug, FileCheck],
                          "access-control-system": [KeyRound, Shield, Eye, Lock, FileText],
                          "cctv-security-surveillance": [Camera, Video, Eye, Cloud, Monitor],
                          "audio-video-solutions": [Video, Monitor, Radio, Wifi, FileText],
                          "structured-cabling-solution": [Cable, Network, Database, Plug, FileCheck],
                          "pabx-solution": [PhoneCall, Radio, FileText, Cloud, LayoutDashboard],
                          "firewall-gateway-system": [Shield, Lock, Eye, Network, FileCheck],
                          "cloud-solutions": [Cloud, Database, Shield, Network, FileCheck],
                          "seo-services": [Search, FileText, Code, Network, FileCheck],
                          "website-development-services": [Code, Monitor, Network, FileText, Shield],
                          "digital-marketing-solution": [Radio, FileText, Network, Code, FileCheck],
                          "microsoft-services": [Settings, Cloud, Network, Shield, FileCheck],
                          "it-support-amc": [Wifi, Shield, Network, FileCheck, Settings],
                        };
                        const icons = iconMap[solutionSlug || ""] || [Tag, LayoutDashboard, Bell, Plug, FileCheck];
                        return icons[index] || Tag;
                      };
                      const IconComponent = getIconForFeature(feature, slug);
                      return (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                        >
                          <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-display font-bold text-foreground mb-2">{feature}</h3>
                          {data.capabilities && data.capabilities[index] && (
                            <p className="text-sm text-muted-foreground">{data.capabilities[index]}</p>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Why Choose VertiLinks with Background Image */}
            <section className="relative py-20 md:py-28 overflow-hidden bg-brand-dark">
              <div className="absolute inset-0">
                <img
                  src={slug === "cctv-security-surveillance"
                    ? "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
                    : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"}
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Cpu, title: "In-house Hardware", desc: "In-house hardware design and production." },
                    { icon: Network, title: "RFID Expertise", desc: "RFID solution expertise across 20+ industries." },
                    { icon: Shield, title: "Nationwide Service", desc: "Nationwide service network and global deployments." },
                    { icon: Code, title: "Custom Development", desc: "Custom software development and integration services." },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50"
                    >
                      <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-primary-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {!hasEnhancedLayout && (
          <>
            {/* Features */}
            <section className="section-container section-padding">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">Key Features</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Industries */}
            <section className="bg-secondary">
              <div className="section-container section-padding">
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">Industries We Serve</h2>
                <div className="flex flex-wrap gap-3">
                  {data.industries.map((ind) => (
                    <span key={ind} className="px-4 py-2 bg-card rounded-lg border border-border text-sm font-medium text-foreground">{ind}</span>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Contact Form Section - For all main solutions */}
        {hasEnhancedLayout && (
          <section id="contact-form" className="relative bg-brand-dark py-20 md:py-28">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary/20 to-brand-blue/20">
              <img
                src={slug === "cctv-security-surveillance"
                  ? "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop"
                  : "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"}
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
        )}

        {/* CTA - Only for solutions without enhanced layout */}
        {!hasEnhancedLayout && (
          <section className="section-container section-padding text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">Contact our team for a customized solution.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
