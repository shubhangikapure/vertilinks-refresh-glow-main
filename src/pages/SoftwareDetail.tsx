import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const softwareData: Record<
  string,
  {
    title: string;
    desc: string;
    features: string[];
    outcomes: string[];
  }
> = {
  erp: {
    title: "ERP Solutions",
    desc: "Enterprise resource planning platforms that connect finance, operations, inventory, and HR so leaders can make decisions from a single, trusted source of data.",
    features: [
      "Unified financials, inventory, and procurement",
      "Project and job costing modules",
      "Role-based dashboards and workflows",
      "Approval flows for purchasing and expenses",
      "Multi-company and multi-currency support",
      "Integrations with HR, payroll, and CRM",
    ],
    outcomes: [
      "Shorter month-end closing cycles",
      "Improved visibility into stock and cash flow",
      "Standardized processes across branches and entities",
      "Audit-ready records and compliance reporting",
    ],
  },
  crm: {
    title: "CRM Software",
    desc: "Customer relationship management that aligns marketing, sales, and service teams around a complete 360° view of every account and opportunity.",
    features: [
      "Lead and opportunity management",
      "Account and contact 360° profiles",
      "Sales pipeline and forecasting",
      "Email and telephony integrations",
      "Ticketing and case management",
      "Reports, dashboards, and KPIs",
    ],
    outcomes: [
      "Higher conversion from lead to opportunity",
      "Faster response times on customer cases",
      "Accurate forecasting for leadership",
      "Centralized history of every interaction",
    ],
  },
  "hr-payroll": {
    title: "HR & Payroll",
    desc: "Workforce management platforms that connect time attendance, leave management, and compliant payroll for teams across the GCC.",
    features: [
      "Employee master data and document management",
      "Leave and overtime workflows with approvals",
      "Integration with biometric time attendance",
      "Multi-country payroll rules and statutory reports",
      "Self-service portals for employees and managers",
      "Analytics across headcount, costs, and attrition",
    ],
    outcomes: [
      "Accurate, on-time payroll across locations",
      "Reduced manual spreadsheets and rework",
      "Clear insight into workforce utilization",
      "Improved employee experience with self-service",
    ],
  },
};

export default function SoftwareDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = softwareData[slug || ""];

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container section-padding text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Software Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The page you are looking for does not exist yet. Please explore our core solutions or contact our team.
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
              / Softwares / {data.title}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">
              {data.title}
            </h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">{data.desc}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
            >
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="section-container section-padding">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Key Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-secondary">
          <div className="section-container section-padding">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Business outcomes</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.outcomes.map((outcome) => (
                <div key={outcome} className="p-4 bg-card rounded-xl border border-border flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{outcome}</span>
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

