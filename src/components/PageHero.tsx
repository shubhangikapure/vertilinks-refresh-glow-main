import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  ctaLabel,
  ctaHref,
  imageUrl,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="bg-brand-dark py-16 md:py-20">
      <div className="section-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <p className="text-xs md:text-sm text-primary-foreground/60 mb-3 space-x-1">
            {breadcrumbs.map((item, index) => (
              <span key={item.label}>
                {item.href ? (
                  <Link to={item.href} className="hover:text-primary-foreground">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
              </span>
            ))}
          </p>
        )}

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            {eyebrow && (
              <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
                {eyebrow}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground mb-4">
              {title}
            </h1>
            <p className="max-w-xl text-base md:text-lg text-primary-foreground/70 leading-relaxed">
              {subtitle}
            </p>
            {ctaLabel && ctaHref && (
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground text-sm md:text-base font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
              >
                {ctaLabel}
              </Link>
            )}
          </div>

          <div className="relative">
            <div className="relative ml-auto max-w-md rounded-2xl overflow-hidden border border-border/60 shadow-2xl">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

