import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Panel Upgrades in Bentonville, AR | 100A to 200A Service",
  description:
    "NWA Electric specializes in electrical panel upgrades throughout Bentonville, Rogers, and Northwest Arkansas. 100A to 200A or 400A service, Federal Pacific replacements, and EV-ready upgrades. Licensed #E-AR-12847.",
  keywords: [
    "panel upgrade bentonville ar",
    "electrical panel replacement northwest arkansas",
    "federal pacific panel replacement bentonville",
    "200 amp service upgrade bentonville",
    "breaker box replacement rogers ar",
  ],
  alternates: { canonical: "https://nwaelectric.com/services/panel-upgrades" },
};

const panelSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Panel Upgrade",
  provider: {
    "@type": "ElectricalContractor",
    "@id": "https://nwaelectric.com/#business",
    name: "NWA Electric",
  },
  serviceType: "Electrical Panel Upgrade and Replacement",
  description:
    "Licensed panel upgrades from 100A to 200A or 400A service in Bentonville and Northwest Arkansas. Federal Pacific and Zinsco replacements. All work permitted and inspected.",
  areaServed: { "@type": "State", name: "Arkansas" },
  offers: {
    "@type": "Offer",
    priceRange: "$1,800 - $3,500",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Panel Upgrades",
      item: "https://nwaelectric.com/services/panel-upgrades",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a panel upgrade take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most 100A to 200A panel upgrades take 4–8 hours in a single day. Power is off only while the new panel is being connected — typically 2–4 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit for a panel upgrade in Bentonville, AR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, always. NWA Electric pulls the electrical permit and the job is inspected by a city electrical inspector before the panel is energized.",
      },
    },
    {
      "@type": "Question",
      name: "What does a 200-amp panel upgrade cost in Bentonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard 200-amp panel upgrade typically runs $1,800–$3,200. Free itemized estimates provided before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Is my Federal Pacific panel dangerous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal Pacific Electric (FPE) Stab-Lok panels have documented higher failure rates per the CPSC. Replacement is recommended by fire safety professionals and required by many insurance carriers.",
      },
    },
  ],
};

export default function PanelUpgradesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(panelSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div
        style={{
          background: "var(--color-surface-raised)",
          borderBottom: "1px solid var(--color-surface-border)",
          padding: "0.75rem 0",
        }}
      >
        <div
          className='section-container'
          style={{
            display: "flex",
            gap: "0.5rem",
            fontSize: "0.8rem",
            color: "var(--color-text-muted)",
          }}
        >
          <Link
            href='/'
            style={{ color: "var(--color-text-muted)", textDecoration: "none" }}
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href='/services'
            style={{ color: "var(--color-text-muted)", textDecoration: "none" }}
          >
            Services
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-amber)" }}>Panel Upgrades</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src='/images/panel.png'
            alt='Electrician upgrading residential electrical panel in Bentonville AR'
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes='100vw'
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, oklch(11% 0.008 60) 50%, oklch(11% 0.008 60 / 0.5) 100%)",
            }}
          />
        </div>
        <div
          className='section-container'
          style={{
            position: "relative",
            zIndex: 1,
            padding: "clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 3rem)",
          }}
        >
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
                Licensed · Permitted · Inspected
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "var(--color-text-primary)",
                maxWidth: "700px",
                marginBottom: "1.25rem",
              }}
            >
              Electrical Panel Upgrades
              <span style={{ display: "block", color: "var(--color-amber)" }}>
                Bentonville, AR
              </span>
            </h1>
            <p
              style={{
                color: "oklch(82% 0.01 60)",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                maxWidth: "560px",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              From 100A to 200A or 400A service. Federal Pacific and Zinsco
              replacements. EV-charger–ready upgrades. Licensed #E-AR-12847.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={`tel:${BUSINESS.phonePlain}`} className='btn-primary'>
                Call for Free Estimate
              </a>
              <a href='#process' className='btn-ghost'>
                What&apos;s Involved ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cost snapshot */}
      <section
        style={{
          background: "var(--color-surface-raised)",
          borderBottom: "1px solid var(--color-surface-border)",
          padding: "clamp(2.5rem, 5vw, 4rem) 0",
        }}
      >
        <div className='section-container'>
          <StaggerContainer
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                label: "100A → 200A Panel Upgrade",
                price: "$1,800–$2,800",
                note: "Most common residential upgrade",
              },
              {
                label: "Federal Pacific / Zinsco Replacement",
                price: "$2,200–$3,500",
                note: "Includes hazardous panel disposal",
              },
              {
                label: "200A → 400A Service Upgrade",
                price: "$3,500–$5,500",
                note: "For large homes or shops",
              },
              {
                label: "EV-Ready Panel Upgrade",
                price: "$2,200–$3,200",
                note: "200A service + 50A EV circuit",
              },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div
                  style={{
                    background: "var(--color-surface-overlay)",
                    border: "1px solid var(--color-surface-border)",
                    borderRadius: "8px",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: "var(--color-amber)",
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.price}
                  </div>
                  <div
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.78rem",
                    }}
                  >
                    {item.note}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3}>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                marginTop: "1rem",
                fontStyle: "italic",
              }}
            >
              Price ranges reflect typical Bentonville area projects. Final cost
              depends on meter socket, grounding, and service entrance
              condition. Free itemized estimate always provided before work
              begins.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section id='process' style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container' style={{ maxWidth: 960 }}>
          <FadeIn direction='up'>
            <div style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
              <div className='amber-divider' style={{ marginBottom: "1rem" }} />
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  color: "var(--color-text-primary)",
                  marginBottom: "1rem",
                }}
              >
                What a Panel Upgrade Actually Involves
              </h2>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  maxWidth: 760,
                }}
              >
                A panel upgrade replaces your home&apos;s main service panel —
                the gray box where all your circuit breakers live. The new panel
                gets a higher amperage rating, modern AFCI/GFCI breakers per
                code, accurate labeling, and a grounding system that meets
                current NEC standards.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                step: "01",
                title: "Utility Notification",
                body: "We contact Ozarks Electric or the appropriate utility to pull the meter and coordinate the power outage. Required by law — it protects you and the crew.",
              },
              {
                step: "02",
                title: "Old Panel Removed",
                body: "The existing panel is de-energized, all branch circuit wires are landed out, and the old enclosure is removed. We document everything unusual: aluminum branch wiring, double-taps, missing grounds.",
              },
              {
                step: "03",
                title: "New Panel Installed",
                body: "A new Square D QO or Eaton BR panel is mounted. All branch circuits are landed to new breakers. AFCI breakers installed in all required locations per current NEC.",
              },
              {
                step: "04",
                title: "Grounding & Bonding",
                body: "Your grounding electrode system is verified or upgraded. This is the most overlooked part of any panel replacement — and the part that matters most for safety.",
              },
              {
                step: "05",
                title: "Permit Inspection",
                body: "We schedule the inspection with the city. An electrical inspector reviews the installation. The panel is not permanently energized until the inspection passes.",
              },
              {
                step: "06",
                title: "Final Walkthrough",
                body: "Every circuit is labeled. You receive the inspection sign-off card. We walk you through the new panel, show you the main shutoff, and answer questions.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1.5rem",
                    background: "var(--color-surface-raised)",
                    border: "1px solid var(--color-surface-border)",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "1.75rem",
                      color: "var(--color-amber)",
                      opacity: 0.4,
                      lineHeight: 1,
                      flexShrink: 0,
                      width: 48,
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--color-text-primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Warning signs */}
      <section
        style={{
          background: "var(--color-surface-raised)",
          borderTop: "1px solid var(--color-surface-border)",
          borderBottom: "1px solid var(--color-surface-border)",
          padding: "clamp(4rem, 8vw, 7rem) 0",
        }}
      >
        <div className='section-container' style={{ maxWidth: 960 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(2.5rem, 5vw, 5rem)",
              alignItems: "start",
            }}
          >
            <FadeIn direction='right'>
              <div>
                <div
                  className='amber-divider'
                  style={{ marginBottom: "1rem" }}
                />
                <h2
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                    color: "var(--color-text-primary)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Signs Your Panel Needs an Upgrade
                </h2>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                  }}
                >
                  Older homes in Bella Vista, Rogers, and NWA built from the
                  1960s–1990s often have 100-amp or 60-amp panels. Modern homes
                  use far more power. Here is when to act.
                </p>
                <a href={`tel:${BUSINESS.phonePlain}`} className='btn-primary'>
                  Schedule a Free Assessment
                </a>
              </div>
            </FadeIn>
            <StaggerContainer
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                "Breakers trip frequently under normal household loads",
                "You want to add an EV charger or hot tub",
                "Your panel is Federal Pacific Stab-Lok or Zinsco brand",
                "Lights dim when large appliances start",
                "You're adding a home addition or ADU",
                "Your insurance company is flagging your panel",
                "You have fuses instead of circuit breakers (60A or 100A fuse box)",
                "Breakers that feel warm to the touch or won't reset",
              ].map((sign) => (
                <StaggerItem key={sign}>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      padding: "0.875rem 1rem",
                      background: "var(--color-surface-overlay)",
                      border: "1px solid var(--color-surface-border)",
                      borderRadius: "6px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-amber)",
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    <span
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {sign}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container' style={{ maxWidth: 800 }}>
          <FadeIn direction='up'>
            <div style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
              <div className='amber-divider' style={{ marginBottom: "1rem" }} />
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  color: "var(--color-text-primary)",
                }}
              >
                Panel Upgrade FAQs
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "var(--color-surface-border)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {[
              {
                q: "How long does a panel upgrade take?",
                a: "Most 100A to 200A upgrades complete in 4–8 hours. Power is fully off only while the new panel is being wired — typically 2–4 hours. We notify you of the exact window when we confirm the appointment.",
              },
              {
                q: "Do I need a permit in Bentonville, AR?",
                a: "Yes, always. We pull the permit through the City of Bentonville or appropriate municipality. A city electrical inspector must approve the installation before we restore permanent power. This legally protects your home.",
              },
              {
                q: "What does a 200-amp upgrade cost near me?",
                a: "In the Bentonville and Rogers area, a standard 200-amp upgrade runs $1,800–$2,800. If your meter socket, service entrance cable, or grounding system also need work, total can reach $3,200–$3,500. We provide itemized written estimates.",
              },
              {
                q: "Should I replace my Federal Pacific panel?",
                a: "Federal Pacific Electric (FPE) Stab-Lok panels have a documented higher failure rate confirmed by the CPSC. Many insurance carriers now require replacement. We strongly recommend replacing any FPE panel.",
              },
              {
                q: "Will I need to upgrade my meter socket too?",
                a: "Sometimes. If your meter socket is cracked, heavily oxidized, or rated below 200A, the utility may require a replacement as part of the service upgrade. We inspect this during the estimate and include it in the quote when needed.",
              },
            ].map((item) => (
              <StaggerItem key={item.q}>
                <div
                  style={{
                    background: "var(--color-surface-raised)",
                    padding: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--color-text-primary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-surface-raised)",
          borderTop: "1px solid var(--color-surface-border)",
          padding: "clamp(3.5rem, 7vw, 6rem) 0",
        }}
      >
        <FadeIn direction='up'>
          <div
            className='section-container'
            style={{ textAlign: "center", maxWidth: 700 }}
          >
            <div
              className='amber-divider'
              style={{ margin: "0 auto 1.25rem" }}
            />
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              Ready to Schedule Your Panel Upgrade?
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Free estimates for homeowners in Bentonville, Rogers, Centerton,
              Bella Vista, Springdale, and Fayetteville.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href={`tel:${BUSINESS.phonePlain}`}
                className='btn-primary'
                style={{ fontSize: "1.1rem" }}
              >
                {BUSINESS.phone}
              </a>
              <Link href='/contact' className='btn-ghost'>
                Send a Message →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
