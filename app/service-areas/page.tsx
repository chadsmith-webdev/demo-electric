import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_AREAS, BUSINESS } from "@/lib/business";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Electrician Service Areas | Bentonville, Rogers, Fayetteville, AR",
  description:
    "NWA Electric serves Bentonville, Rogers, Centerton, Bella Vista, Springdale, and Fayetteville, AR. Licensed residential electrician within 25 miles of Bentonville. No travel fees within service area.",
  alternates: { canonical: "https://nwaelectric.com/service-areas" },
};

const areaSchemas = SERVICE_AREAS.map((area) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://nwaelectric.com/service-areas#${area.slug}`,
  name: `NWA Electric — ${area.name} Electrician`,
  parentOrganization: {
    "@type": "ElectricalContractor",
    "@id": "https://nwaelectric.com/#business",
  },
  areaServed: {
    "@type": "City",
    name: area.name,
    containedInPlace: { "@type": "State", name: "Arkansas" },
  },
  telephone: BUSINESS.phonePlain,
  url: `https://nwaelectric.com/service-areas#${area.slug}`,
}));

const AREA_CONTENT: Record<
  string,
  { headline: string; body: string; services: string[] }
> = {
  bentonville: {
    headline: "Bentonville's Local Electrician Since 2009",
    body: "Bentonville is our home base. We know the neighborhoods — from Uptown and Downtown to the Walmart AMP corridor and the newer developments off Highway 72. Most Bentonville permits are processed through the City of Bentonville Development Services, and we pull them faster than any out-of-town contractor because we've worked with the inspectors for years.",
    services: [
      "Panel Upgrades",
      "EV Charger Installation",
      "Whole-Home Rewiring",
      "Lighting & Fans",
      "Generator Hookup",
    ],
  },
  rogers: {
    headline: "Electrician Serving All of Rogers, AR",
    body: "Rogers is one of the fastest-growing cities in Arkansas, and the electrical demands of new construction and older Pinnacle Hills homes are different. We service both — from new 400-amp commercial-grade residential panels in modern homes to 100-amp panel replacements in established neighborhoods near downtown Rogers.",
    services: [
      "Panel Upgrades",
      "EV Chargers",
      "Outlet & Switch Work",
      "Lighting Installation",
      "Electrical Inspections",
    ],
  },
  centerton: {
    headline: "Electrician for Centerton's Growing Neighborhoods",
    body: "Centerton is one of the fastest-growing small cities in the U.S., and new construction is everywhere. We work directly with homeowners and custom builders on electrical rough-in, panel selection, EV-charger-ready circuits, and final trim-out work.",
    services: [
      "New Construction Electrical",
      "Panel Upgrades",
      "EV Charger Installation",
      "Generator Hookup",
      "Outdoor Lighting",
    ],
  },
  "bella-vista": {
    headline: "Electrician for Bella Vista's Established Homes",
    body: "Many Bella Vista homes were built in the 1960s through 1990s — often with Federal Pacific panels, aluminum branch wiring, and two-prong outlets. This is a specialty of ours. We know what to look for in Bella Vista homes and price accordingly.",
    services: [
      "Federal Pacific Panel Replacement",
      "Aluminum Wiring Remediation",
      "Panel Upgrades",
      "GFCI Outlet Installation",
      "Electrical Safety Inspections",
    ],
  },
  springdale: {
    headline: "Licensed Electrician Serving Springdale, AR",
    body: "We cover Springdale's established west-side neighborhoods near Har-Ber Meadows and Kensington Place as well as newer developments further east. Springdale permits run through the City of Springdale Planning and Inspection Department — a process we navigate routinely.",
    services: [
      "Panel Upgrades",
      "EV Charger Installation",
      "Rewiring",
      "Lighting",
      "Outlet Upgrades",
    ],
  },
  fayetteville: {
    headline: "Electrician Serving South & West Fayetteville",
    body: "We cover the southern and western portions of Fayetteville closest to our Bentonville base — roughly everything south of the square and west of I-49. University of Arkansas-adjacent properties and older residential neighborhoods near downtown are a regular part of our workload.",
    services: [
      "Panel Upgrades",
      "Electrical Inspections",
      "EV Charger Installation",
      "Lighting",
      "Whole-Home Rewiring",
    ],
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      {areaSchemas.map((schema, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

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
                No Travel Fees Within Service Area
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              Serving Northwest Arkansas
            </h1>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              NWA Electric serves homeowners within 25 miles of our Bentonville,
              AR base. All cities below are covered with no additional travel
              fees. We pull permits in each municipality and know the local
              inspectors.
            </p>
          </FadeIn>

          {/* Quick area links */}
          <FadeIn delay={0.2}>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginTop: "2rem",
              }}
            >
              {SERVICE_AREAS.map((area) => (
                <a
                  key={area.slug}
                  href={`#${area.slug}`}
                  style={{
                    background: "var(--color-surface-overlay)",
                    border: "1px solid var(--color-surface-border)",
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    textDecoration: "none",
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                  className='area-anchor'
                >
                  {area.name}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Area sections */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container'>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            {SERVICE_AREAS.map((area, i) => {
              const content = AREA_CONTENT[area.slug];
              return (
                <FadeIn
                  key={area.slug}
                  direction={i % 2 === 0 ? "right" : "left"}
                >
                  <div
                    id={area.slug}
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "clamp(2rem, 4vw, 4rem)",
                      alignItems: "start",
                      padding: "clamp(2rem, 4vw, 3rem)",
                      background: "var(--color-surface-raised)",
                      border: "1px solid var(--color-surface-border)",
                      borderRadius: "12px",
                      scrollMarginTop: "80px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          marginBottom: "1.25rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <h2
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 900,
                            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                            color: "var(--color-text-primary)",
                            textTransform: "uppercase",
                            margin: 0,
                          }}
                        >
                          {area.name}, {area.state}
                        </h2>
                        {area.distance === 0 ? (
                          <span
                            style={{
                              background: "var(--color-amber)",
                              color: "oklch(14% 0.01 60)",
                              fontSize: "0.65rem",
                              fontWeight: 800,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              padding: "0.25rem 0.625rem",
                              borderRadius: "3px",
                            }}
                          >
                            Home Base
                          </span>
                        ) : (
                          <span
                            style={{
                              background: "var(--color-surface-overlay)",
                              border: "1px solid var(--color-surface-border)",
                              color: "var(--color-text-muted)",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              padding: "0.25rem 0.625rem",
                              borderRadius: "3px",
                            }}
                          >
                            ~{area.distance} miles from HQ
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.8,
                          marginBottom: "1.5rem",
                        }}
                      >
                        {content?.body ?? area.description}
                      </p>
                      <a
                        href={`tel:${BUSINESS.phonePlain}`}
                        className='btn-primary'
                        style={{ fontSize: "0.9rem" }}
                      >
                        Call for {area.name} Service
                      </a>
                    </div>

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
                        Services Available in {area.name}
                      </div>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 1.5rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        {(content?.services ?? []).map((s) => (
                          <li
                            key={s}
                            style={{
                              display: "flex",
                              gap: "0.625rem",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--color-amber)",
                                fontWeight: 900,
                                fontSize: "0.8rem",
                              }}
                            >
                              →
                            </span>
                            <span
                              style={{
                                color: "var(--color-text-secondary)",
                                fontSize: "0.9rem",
                              }}
                            >
                              {s}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div
                        style={{
                          padding: "1rem",
                          background: "var(--color-surface-overlay)",
                          border: "1px solid var(--color-surface-border)",
                          borderRadius: "6px",
                          fontSize: "0.8rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.7,
                        }}
                      >
                        <strong
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          Permits:
                        </strong>{" "}
                        We pull permits through{" "}
                        {area.name === "Bentonville"
                          ? "City of Bentonville Development Services"
                          : `City of ${area.name}`}{" "}
                        and work with local inspectors.
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
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
              Not Sure if We Cover Your Area?
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Call or send a message with your zip code. If we cover it,
              we&apos;ll confirm same day.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href={`tel:${BUSINESS.phonePlain}`} className='btn-primary'>
                {BUSINESS.phone}
              </a>
              <Link href='/contact' className='btn-ghost'>
                Send a Message →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <style>{`.area-anchor:hover { color: var(--color-amber) !important; border-color: var(--color-amber) !important; }`}</style>
    </>
  );
}
