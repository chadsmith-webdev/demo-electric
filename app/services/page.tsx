import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/business";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Residential Electrical Services in Bentonville, AR",
  description:
    "NWA Electric provides licensed residential electrical services in Bentonville, AR: panel upgrades, EV charger installation, whole-home rewiring, lighting, outlets, generators, and electrical inspections.",
  alternates: { canonical: "https://nwaelectric.com/services" },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nwaelectric.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://nwaelectric.com/services",
    },
  ],
};

const SERVICE_DETAILS: Record<
  string,
  { what: string; includes: string[]; why: string }
> = {
  "panel-upgrades": {
    what: "Your main electrical panel controls every circuit in your home. When it's undersized, outdated, or a known hazardous brand (Federal Pacific, Zinsco), it limits what you can power — and in some cases creates a fire risk.",
    includes: [
      "New Square D QO or Eaton BR panel",
      "200A or 400A service options",
      "AFCI/GFCI breakers per NEC 2023",
      "Grounding electrode system upgrade",
      "City permit and inspection",
      "Accurate circuit labeling",
    ],
    why: "Required for EV chargers, home additions, and any home that can't support modern electrical loads.",
  },
  "ev-chargers": {
    what: "Level 2 home EV charging runs on 240 volts — the same circuit as your dryer or range. A proper installation includes a dedicated breaker, appropriately rated wire, and either a NEMA 14-50 outlet or hardwired charger.",
    includes: [
      "Dedicated 240V / 40–60A circuit",
      "NEMA 14-50 outlet or hardwired unit",
      "Compatible with all EV brands",
      "Indoor garage or outdoor weatherproof options",
      "Panel capacity verified before install",
    ],
    why: "Level 2 charging delivers 20–30 miles of range per hour versus 3–5 miles from a standard 120V outlet.",
  },
  "whole-home-rewiring": {
    what: "Homes built before 1970 often have knob-and-tube wiring or aluminum branch circuit wiring. Both present insurance and safety challenges. A full rewire replaces every branch circuit in the home with modern copper wiring.",
    includes: [
      "Full branch circuit replacement",
      "New panel if needed",
      "AFCI protection on all circuits",
      "Licensed, permitted, inspected",
      "Minimize drywall cuts where possible",
    ],
    why: "Most homeowners insurance carriers will not insure homes with active knob-and-tube wiring.",
  },
  lighting: {
    what: "Lighting work ranges from a single ceiling fan to a whole-home recessed lighting conversion. We handle all switching, dimmer compatibility, and proper load calculations.",
    includes: [
      "Recessed can installation and retrofit",
      "Ceiling fan wiring and installation",
      "Under-cabinet and accent lighting",
      "Smart dimmer switches (Lutron, Leviton)",
      "Outdoor landscape and security lighting",
    ],
    why: "LED recessed lighting combined with smart dimmers can cut your lighting energy use by 70–80%.",
  },
  "outlets-switches": {
    what: "From a single GFCI outlet in a bathroom to a full 240V range outlet installation, outlet work is some of the most common residential electrical work we do.",
    includes: [
      "GFCI outlets (kitchen, bath, garage, outdoor)",
      "USB-C outlets and combination devices",
      "240V dryer, range, and EV outlets",
      "Tamper-resistant outlets for child safety",
      "Arc-fault (AFCI) breakers for bedroom circuits",
    ],
    why: "NEC 2023 requires GFCI protection in more locations than ever — including garages, basements, and near sinks.",
  },
  generators: {
    what: "A standby generator or transfer switch keeps your home powered through Arkansas ice storms and severe weather. Proper installation requires a correctly sized transfer switch that prevents backfeed.",
    includes: [
      "Transfer switch installation (manual or automatic)",
      "Standby generator hookup",
      "Critical load panel configuration",
      "Fuel line coordination (for natural gas units)",
      "Load calculation to properly size the generator",
    ],
    why: "Arkansas averages several multi-day power outages each year due to ice storms and severe weather.",
  },
  inspections: {
    what: "A pre-purchase electrical inspection tells you exactly what you're buying. We produce a written report covering the panel, visible wiring, GFCI protection, grounding, and any code violations we can observe.",
    includes: [
      "Panel age, brand, and condition assessment",
      "Visible wiring inspection",
      "GFCI and AFCI protection audit",
      "Grounding and bonding review",
      "Written report with findings and recommendations",
    ],
    why: "Electrical defects are among the most common and most expensive surprises for new home buyers in NWA.",
  },
};

function serviceIcon(icon: string) {
  const icons: Record<string, string> = {
    panel: "⚡",
    bolt: "🔌",
    wire: "🔧",
    light: "💡",
    outlet: "🔋",
    generator: "⚙️",
    inspect: "📋",
  };
  return icons[icon] ?? "⚡";
}

export default function ServicesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Page header */}
      <section
        style={{
          background: "var(--color-surface-raised)",
          borderBottom: "1px solid var(--color-surface-border)",
          padding: "clamp(4rem, 8vw, 7rem) 0 clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        <div className='section-container'>
          <FadeIn direction='up'>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: "var(--color-amber)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-amber)",
                }}
              >
                All Licensed · All Permitted
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              Residential Electrical Services
            </h1>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              Every service NWA Electric provides is backed by a state license,
              pulled permits, and a passing inspection. Here is what we do and
              what each job actually involves.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service list */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container'>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            {SERVICES.map((service, i) => {
              const detail = SERVICE_DETAILS[service.id];
              return (
                <FadeIn
                  key={service.id}
                  direction={i % 2 === 0 ? "right" : "left"}
                >
                  <div
                    id={service.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                      gap: "clamp(2rem, 4vw, 4rem)",
                      alignItems: "start",
                      padding: "clamp(2rem, 4vw, 3rem)",
                      background: "var(--color-surface-raised)",
                      border: "1px solid var(--color-surface-border)",
                      borderRadius: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "1.25rem",
                        }}
                      >
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            background:
                              "color-mix(in oklch, var(--color-amber) 15%, var(--color-surface-overlay))",
                            border:
                              "1px solid color-mix(in oklch, var(--color-amber) 30%, transparent)",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.35rem",
                            flexShrink: 0,
                          }}
                        >
                          {serviceIcon(service.icon)}
                        </div>
                        <h2
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
                            fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
                            color: "var(--color-text-primary)",
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                            margin: 0,
                          }}
                        >
                          {service.name}
                        </h2>
                      </div>
                      <p
                        style={{
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.8,
                          marginBottom: "1.5rem",
                        }}
                      >
                        {detail?.what ?? service.description}
                      </p>
                      {detail?.why && (
                        <div
                          style={{
                            background:
                              "color-mix(in oklch, var(--color-amber) 8%, var(--color-surface-overlay))",
                            border:
                              "1px solid color-mix(in oklch, var(--color-amber) 20%, transparent)",
                            borderRadius: "6px",
                            padding: "0.875rem 1rem",
                            fontSize: "0.875rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.6,
                          }}
                        >
                          <strong
                            style={{
                              color: "var(--color-amber)",
                              fontFamily: "var(--font-display)",
                              textTransform: "uppercase",
                              fontSize: "0.75rem",
                              letterSpacing: "0.06em",
                            }}
                          >
                            Why it matters:{" "}
                          </strong>
                          {detail.why}
                        </div>
                      )}
                    </div>

                    {detail?.includes && (
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--color-text-muted)",
                            marginBottom: "1rem",
                          }}
                        >
                          What&apos;s Included
                        </div>
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "0 0 1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.625rem",
                          }}
                        >
                          {detail.includes.map((item) => (
                            <li
                              key={item}
                              style={{
                                display: "flex",
                                gap: "0.625rem",
                                alignItems: "flex-start",
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--color-amber)",
                                  fontWeight: 900,
                                  flexShrink: 0,
                                  marginTop: "2px",
                                  fontSize: "0.8rem",
                                }}
                              >
                                ✓
                              </span>
                              <span
                                style={{
                                  color: "var(--color-text-secondary)",
                                  fontSize: "0.9rem",
                                  lineHeight: 1.6,
                                }}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {"featured" in service && service.featured ? (
                          <Link
                            href={service.href}
                            className='btn-primary'
                            style={{ fontSize: "0.875rem" }}
                          >
                            Full Panel Upgrade Guide →
                          </Link>
                        ) : (
                          <a
                            href={`tel:${"+14795550142"}`}
                            className='btn-ghost'
                            style={{ fontSize: "0.875rem" }}
                          >
                            Get a Quote
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
