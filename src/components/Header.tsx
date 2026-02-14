import { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone, Mail, MessageCircle, ChevronDown, Menu, X, ArrowRight,
  Clock, KeyRound, Camera, Monitor, Cable, PhoneCall, Cloud, Shield,
  Search, Code, Megaphone, Settings, Wrench,
  Tv, Volume2, PanelTop, Headphones,
  Eye, Radio, Fingerprint, Cpu,
  Server, ShieldCheck, Laptop,
  HelpCircle, LifeBuoy, FileText, Building, Users,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────
 * Mega-menu data
 * ──────────────────────────────────────────────── */

interface MegaGridItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface MegaMenuSection {
  type: "grid";
  heading: string;
  description: string;
  cta: { label: string; href: string };
  items: MegaGridItem[];
}

interface MegaMenuColumns {
  type: "columns";
  columns: { title: string; items: { label: string; href: string; desc?: string; icon?: LucideIcon }[] }[];
}

type MegaMenuConfig = MegaMenuSection | MegaMenuColumns;

const megaMenuData: Record<string, MegaMenuConfig> = {
  Solutions: {
    type: "grid",
    heading: "Solutions",
    description:
      "End-to-end IT & security solutions for modern businesses: from time attendance and access control to cloud, network security, and managed support.",
    cta: { label: "Explore more", href: "/solutions" },
    items: [
      { label: "Time Attendance System", href: "/solutions/time-attendance-system", icon: Clock },
      { label: "Access Control System", href: "/solutions/access-control-system", icon: KeyRound },
      { label: "CCTV Security & Surveillance", href: "/solutions/cctv-security-surveillance", icon: Camera },
      { label: "Audio Video Solutions", href: "/solutions/audio-video-solutions", icon: Monitor },
      { label: "Structured Cabling Solution", href: "/solutions/structured-cabling-solution", icon: Cable },
      { label: "PABX Solution", href: "/solutions/pabx-solution", icon: PhoneCall },
      { label: "Cloud Solutions", href: "/solutions/cloud-solutions", icon: Cloud },
      { label: "Firewall & Gateway System", href: "/solutions/firewall-gateway-system", icon: Shield },
      { label: "SEO Services", href: "/solutions/seo-services", icon: Search },
      { label: "Website Development Services", href: "/solutions/website-development-services", icon: Code },
      { label: "Digital Marketing Solution", href: "/solutions/digital-marketing-solution", icon: Megaphone },
      { label: "Microsoft Services", href: "/solutions/microsoft-services", icon: Settings },
      { label: "IT Support & AMC", href: "/solutions/it-support-amc", icon: Wrench },
    ],
  },
  Softwares: {
    type: "columns",
    columns: [
      {
        title: "Enterprise Software",
        items: [
          { label: "ERP Solutions", href: "/softwares/erp", desc: "Enterprise resource planning", icon: Server },
          { label: "CRM Software", href: "/softwares/crm", desc: "Customer relationship management", icon: Users },
          { label: "HR & Payroll", href: "/softwares/hr-payroll", desc: "Workforce management tools", icon: Building },
        ],
      },
      {
        title: "Security Software",
        items: [
          { label: "VMS Software", href: "/softwares/vms", desc: "Video management systems", icon: Eye },
          { label: "Access Management", href: "/softwares/access-management", desc: "Identity & access control", icon: ShieldCheck },
        ],
      },
    ],
  },
  Products: {
    type: "columns",
    columns: [
      {
        title: "Security & Access",
        items: [
          { label: "CCTV & IP Cameras", href: "/products/cctv-ip-cameras", desc: "HD/4K surveillance cameras", icon: Camera },
          { label: "Face & Biometric Terminals", href: "/products/face-biometric-terminals", desc: "Biometric access devices", icon: Fingerprint },
          { label: "Turnstile & Speed Gates", href: "/products/turnstile-and-speed-gates", desc: "Entry management systems", icon: ShieldCheck },
          { label: "Gate Barriers", href: "/products/gate-barriers", desc: "Parking & industrial barriers", icon: Shield },
          { label: "Time Attendance Devices", href: "/products/time-attendance", desc: "Workforce tracking devices", icon: Clock },
        ],
      },
      {
        title: "Audio & Communication",
        items: [
          { label: "IP Audio Systems", href: "/products/ip-audio", desc: "PA & intercom solutions", icon: Volume2 },
          { label: "IP-PA System", href: "/products/ip-pa-system", desc: "Paging networks", icon: Radio },
          { label: "IP Intercom System", href: "/products/ip-intercom-system", desc: "SIP-ready intercoms", icon: PhoneCall },
          { label: "Conference System", href: "/products/conference-system", desc: "Boardroom AV systems", icon: Headphones },
          { label: "Professional Audio System", href: "/products/professional-audio-system", desc: "Premium audio gear", icon: Volume2 },
        ],
      },
      {
        title: "Display & Collaboration",
        items: [
          { label: "Interactive Panels", href: "/products/interactive-panel", desc: "IQTouch smart displays", icon: Tv },
          { label: "Pen Tablets", href: "/products/pen-tablet", desc: "Drawing & input tablets", icon: PanelTop },
          { label: "Pen Displays", href: "/products/pen-display", desc: "Pressure-sensitive displays", icon: Monitor },
          { label: "Pen Computers", href: "/products/pen-computer", desc: "All-in-one pen PCs", icon: Laptop },
        ],
      },
      {
        title: "IT Infrastructure",
        items: [
          { label: "ID Card Printers", href: "/products/id-card-printers", desc: "DTC & retransfer printers", icon: FileText },
          { label: "Servers & Storages", href: "/products/server-and-storages", desc: "Enterprise servers", icon: Server },
          { label: "Laptops & Desktops", href: "/products/laptops-and-desktop-computers", desc: "Business computers", icon: Laptop },
          { label: "Printers & Scanners", href: "/products/printers-and-scanners", desc: "Office printing solutions", icon: FileText },
        ],
      },
    ],
  },
  Brands: {
    type: "columns",
    columns: [
      {
        title: "Technology Partners",
        items: [
          { label: "Hikvision", href: "/brands/hikvision", desc: "Surveillance & security", icon: Camera },
          { label: "Dahua", href: "/brands/dahua", desc: "Video technology solutions", icon: Radio },
          { label: "ZKTeco", href: "/brands/zkteco", desc: "Biometric & access control", icon: Fingerprint },
          { label: "IQBoard", href: "/brands/iqboard", desc: "Interactive displays", icon: Tv },
        ],
      },
      {
        title: "Infrastructure Partners",
        items: [
          { label: "Cisco", href: "/brands/cisco", desc: "Networking & communications", icon: Cpu },
          { label: "Fortinet", href: "/brands/fortinet", desc: "Cybersecurity solutions", icon: ShieldCheck },
          { label: "Spon Communication", href: "/brands/spon", desc: "IP audio systems", icon: Volume2 },
        ],
      },
    ],
  },
  Support: {
    type: "columns",
    columns: [
      {
        title: "Get Help",
        items: [
          { label: "Contact Us", href: "/contact", desc: "Reach our team", icon: HelpCircle },
          { label: "Technical Support", href: "/support/technical", desc: "Expert assistance", icon: LifeBuoy },
          { label: "FAQs", href: "/support/faqs", desc: "Frequently asked questions", icon: HelpCircle },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "About Us", href: "/about", desc: "Our story & mission", icon: Building },
          { label: "Careers", href: "/careers", desc: "Join our team", icon: Users },
          { label: "Terms & Conditions", href: "/support/terms", desc: "Legal terms", icon: FileText },
          { label: "Privacy Policy", href: "/support/privacy", desc: "Privacy information", icon: ShieldCheck },
          { label: "Sitemap", href: "/support/sitemap", desc: "Site navigation", icon: FileText },
        ],
      },
    ],
  },
};

const navItems = ["Solutions", "Softwares", "Products", "Brands", "Support"];

function getAllLinks(config: MegaMenuConfig) {
  if (config.type === "grid") return config.items.map((i) => ({ label: i.label, href: i.href }));
  return config.columns.flatMap((c) => c.items.map((i) => ({ label: i.label, href: i.href })));
}

/* ─── Full-Width Grid Dropdown (Solutions) ─── */
function GridDropdown({ data }: { data: MegaMenuSection }) {
  return (
    <div className="flex bg-popover" style={{ boxShadow: "var(--shadow-mega)" }}>
      {/* Left panel */}
      <div className="w-[280px] shrink-0 bg-secondary p-8 flex flex-col justify-between border-r border-border">
        <div>
          <h3 className="text-xl font-display font-bold text-foreground mb-3">{data.heading}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
        </div>
        <Link
          to={data.cta.href}
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          {data.cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Right icon grid */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-4 gap-x-6 gap-y-2">
          {data.items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
            >
              <item.icon className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Full-Width Columns Dropdown ─── */
function ColumnsDropdown({ data }: { data: MegaMenuColumns }) {
  return (
    <div
      className="bg-popover p-8 grid gap-8"
      style={{
        gridTemplateColumns: `repeat(${data.columns.length}, 1fr)`,
        boxShadow: "var(--shadow-mega)",
      }}
    >
      {data.columns.map((col) => (
        <div key={col.title}>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            {col.title}
          </h4>
          <ul className="space-y-1">
            {col.items.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors group"
                >
                  {link.icon && <link.icon className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />}
                  <div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                    {link.desc && (
                      <span className="block text-xs text-muted-foreground mt-0.5">
                        {link.desc}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ─── Logo Component ─── */
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-0 shrink-0">
      <div className="flex items-center px-2">
        <img
          src="/PNG Vertilinks.png"
          alt="Vertilinks Technologies LLC"
          className="h-24 sm:h-30 w-auto object-contain"
        />
      </div>
    </Link>
  );
}

/* ─── Header ─── */
export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const handleMouseEnter = useCallback((item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(item);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-brand-dark">
        <div className="section-container flex items-center justify-end gap-6 py-2 text-sm">
          <a href="tel:+971505810499" className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span>+971 50 581 0499</span>
          </a>
          <a href="mailto:services@vertilinks.com" className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">services@vertilinks.com</span>
          </a>
          <a href="https://wa.me/971505810499" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    activeMenu === item ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item ? "rotate-180" : ""}`} />
                </button>
              </div>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Full-Width Mega Dropdown (Desktop) */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block absolute left-0 right-0 top-full z-50 border-b border-border"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full">
              {megaMenuData[activeMenu].type === "grid" ? (
                <GridDropdown data={megaMenuData[activeMenu] as MegaMenuSection} />
              ) : (
                <ColumnsDropdown data={megaMenuData[activeMenu] as MegaMenuColumns} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="section-container py-4 space-y-1">
              {navItems.map((item) => {
                const links = getAllLinks(megaMenuData[item]);
                return (
                  <div key={item}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item ? null : item)}
                      className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-accent"
                    >
                      {item}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1">
                            {links.map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <Link
                to="/contact"
                className="block text-center mt-4 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
