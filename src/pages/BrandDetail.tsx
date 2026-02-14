import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const brandData: Record<
  string,
  {
    name: string;
    tagline: string;
    desc: string;
    focusAreas: string[];
    highlights: string[];
  }
> = {
  hikvision: {
    name: "Hikvision",
    tagline: "Surveillance & security technology",
    desc: "Hikvision delivers video surveillance platforms ranging from entry cameras to command-center video walls. VertiLinks designs architectures that pair Hikvision imaging with recording, analytics, and storage tuned to your compliance and retention needs.",
    focusAreas: ["CCTV & IP cameras", "Video recorders and storage", "Video management systems (VMS)", "Thermal and perimeter security"],
    highlights: [
      "HD/4K imaging with advanced low-light performance",
      "AI analytics for people counting, line crossing, and intrusion detection",
      "Flexible architectures for single sites or multi-branch deployments",
      "Integration with access control, fire, and public address systems",
    ],
  },
  dahua: {
    name: "Dahua",
    tagline: "Video technology solutions",
    desc: "Dahua provides a broad portfolio of cameras, recorders, and AI-powered analytics. VertiLinks implements Dahua solutions for customers who need cost-effective, scalable video infrastructures.",
    focusAreas: ["Network cameras", "NVR/DVR platforms", "AI analytics", "Control room displays"],
    highlights: [
      "Wide range of camera form factors for indoor and outdoor use",
      "Analytics that surface incidents and reduce operator workload",
      "Hybrid options for analog and IP modernization projects",
      "Support for centralized monitoring across many locations",
    ],
  },
  zkteco: {
    name: "ZKTeco",
    tagline: "Biometric & access control",
    desc: "ZKTeco specializes in biometric terminals, controllers, and software for access control and time attendance. VertiLinks integrates ZKTeco into comprehensive workplace security and HR ecosystems.",
    focusAreas: ["Biometric access control", "Time attendance terminals", "Turnstiles and speed gates", "Visitor management"],
    highlights: [
      "Multi-modal biometrics including face, fingerprint, and palm",
      "Flexible controllers for doors, elevators, and gates",
      "Tight integration with HR and payroll platforms",
      "Scalable architectures for offices, campuses, and factories",
    ],
  },
  iqboard: {
    name: "IQBoard / IQTouch",
    tagline: "Interactive displays and collaboration",
    desc: "IQ solutions bring interactive whiteboards and collaboration panels to classrooms, boardrooms, and training centers. VertiLinks architects smart classroom and meeting room environments on top of IQ hardware and software.",
    focusAreas: ["Interactive flat panels", "Smart classroom solutions", "Wireless presentation", "Hybrid meeting rooms"],
    highlights: [
      "4K interactive displays with multi-touch support",
      "Integrated whiteboarding and annotation tools",
      "Wireless screen sharing across laptops, tablets, and phones",
      "Ecosystems tailored for education and corporate collaboration",
    ],
  },
  cisco: {
    name: "Cisco",
    tagline: "Networking & communications",
    desc: "Cisco infrastructure underpins secure connectivity for campuses, branches, and data centers. VertiLinks designs and supports Cisco-based LAN, WAN, and collaboration environments.",
    focusAreas: ["Switching and routing", "Wireless networks", "Network security", "Collaboration and voice"],
    highlights: [
      "High-availability campus and data center designs",
      "Secure remote access and SD-WAN architectures",
      "QoS-aware networks for voice, video, and critical applications",
      "Lifecycle services from design to ongoing optimization",
    ],
  },
  fortinet: {
    name: "Fortinet",
    tagline: "Cybersecurity solutions",
    desc: "Fortinet security platforms protect networks, users, and applications with next-generation firewalls and fabric-based architectures. VertiLinks delivers Fortinet designs that combine performance with deep visibility.",
    focusAreas: ["Next-generation firewalls", "Secure SD-WAN", "VPN and remote access", "Email and web security"],
    highlights: [
      "Unified security fabric across network, endpoint, and cloud",
      "Application-aware policy and threat intelligence updates",
      "Segmentation and zero-trust approaches for modern networks",
      "Branch-to-cloud designs optimized for performance and reliability",
    ],
  },
  spon: {
    name: "Spon Communication",
    tagline: "IP audio and public address systems",
    desc: "Spon delivers IP-based public address, intercom, and audio solutions used across education, transportation, and industrial campuses. VertiLinks integrates Spon audio into security and operations workflows.",
    focusAreas: ["IP loudspeakers", "Paging and announcement systems", "Intercom and talk-back", "Cloud and on-premise audio control"],
    highlights: [
      "End-to-end IP audio from microphones to amplifiers and speakers",
      "Scheduled announcements and emergency overrides",
      "Integration with CCTV, access control, and fire systems",
      "Scalable architectures for single buildings or nationwide deployments",
    ],
  },
};

export default function BrandDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = brandData[slug || ""];

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container section-padding text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Brand Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The brand page you are looking for is not available. Please explore our solutions or contact our team.
          </p>
          <Link to="/solutions" className="text-primary hover:underline">
            Back to Solutions
          </Link>
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
              <Link to="/" className="hover:text-primary-foreground">
                Home
              </Link>{" "}
              / Brands / {data.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-3">
              {data.name}
            </h1>
            <p className="text-sm uppercase tracking-wider text-primary-foreground/70 mb-4">
              {data.tagline}
            </p>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">{data.desc}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
            >
              Discuss a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Focus areas */}
        <section className="section-container section-padding">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Where we deploy {data.name}</h2>
          <div className="flex flex-wrap gap-3">
            {data.focusAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground border border-border"
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-secondary">
          <div className="section-container section-padding">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Why VertiLinks partners with {data.name}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {data.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

