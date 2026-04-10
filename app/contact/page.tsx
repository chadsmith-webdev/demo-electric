import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SERVICE_AREAS } from "@/lib/business";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact NWA Electric | Bentonville, AR Electrician",
  description:
    "Get a free estimate from NWA Electric. Licensed electrician serving Bentonville, Rogers, Centerton, Bella Vista, Springdale, and Fayetteville, AR. Call (479) 555-0142 or request online.",
  alternates: { canonical: "https://nwaelectric.com/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NWA Electric",
  url: "https://nwaelectric.com/contact",
  mainEntity: {
    "@type": "ElectricalContractor",
    "@id": "https://nwaelectric.com/#business",
    name: BUSINESS.name,
    telephone: BUSINESS.phonePlain,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
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
      name: "Contact",
      item: "https://nwaelectric.com/contact",
    },
  ],
};

const HOURS = [
  { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          {/* Breadcrumb */}
          <nav aria-label='Breadcrumb' style={{ marginBottom: "1.5rem" }}>
            <ol
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
              }}
            >
              <li>
                <Link
                  href='/'
                  style={{
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ opacity: 0.4 }}>›</li>
              <li style={{ color: "var(--color-amber)" }}>Contact</li>
            </ol>
          </nav>

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
                Free Estimates — No Obligation
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              Get in Touch
            </h1>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                maxWidth: 580,
                lineHeight: 1.7,
              }}
            >
              We respond to all inquiries within one business day. For faster
              response, call or text directly — Mike answers his own phone.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container'>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
              gap: "clamp(2.5rem, 5vw, 5rem)",
              alignItems: "start",
            }}
          >
            {/* Form */}
            <FadeIn direction='right'>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "var(--color-text-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    marginBottom: "1.5rem",
                  }}
                >
                  Request a Free Estimate
                </div>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Contact details sidebar */}
            <FadeIn direction='left' delay={0.15}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Phone */}
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--color-surface-raised)",
                    border: "1px solid var(--color-surface-border)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Call or Text
                  </div>
                  <a
                    href={`tel:${BUSINESS.phonePlain}`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "1.75rem",
                      color: "var(--color-amber)",
                      textDecoration: "none",
                      letterSpacing: "-0.01em",
                      display: "block",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {BUSINESS.phone}
                  </a>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.85rem",
                      margin: 0,
                    }}
                  >
                    Mike answers his own phone. Text works too.
                  </p>
                </div>

                {/* Email */}
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--color-surface-raised)",
                    border: "1px solid var(--color-surface-border)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Email
                  </div>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    style={{
                      color: "var(--color-text-primary)",
                      fontWeight: 600,
                      textDecoration: "none",
                      fontSize: "0.95rem",
                    }}
                  >
                    {BUSINESS.email}
                  </a>
                </div>

                {/* Address */}
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--color-surface-raised)",
                    border: "1px solid var(--color-surface-border)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Office Address
                  </div>
                  <address
                    style={{
                      fontStyle: "normal",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                      fontSize: "0.9rem",
                    }}
                  >
                    {BUSINESS.address.street}
                    <br />
                    {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                    {BUSINESS.address.zip}
                  </address>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.8rem",
                      margin: "0.75rem 0 0",
                    }}
                  >
                    License #{BUSINESS.license.number} ·{" "}
                    {BUSINESS.insurance.liability}
                  </p>
                </div>

                {/* Hours */}
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--color-surface-raised)",
                    border: "1px solid var(--color-surface-border)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Business Hours
                  </div>
                  <dl
                    style={{
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    {HOURS.map(({ day, hours }) => (
                      <div
                        key={day}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "1rem",
                          fontSize: "0.875rem",
                        }}
                      >
                        <dt style={{ color: "var(--color-text-secondary)" }}>
                          {day}
                        </dt>
                        <dd
                          style={{
                            margin: 0,
                            color:
                              hours === "Closed"
                                ? "var(--color-text-muted)"
                                : "var(--color-amber)",
                            fontWeight: 600,
                          }}
                        >
                          {hours}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Service areas quick list */}
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--color-surface-raised)",
                    border: "1px solid var(--color-surface-border)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Service Areas
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.375rem",
                    }}
                  >
                    {SERVICE_AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas#${area.slug}`}
                        style={{
                          background: "var(--color-surface-overlay)",
                          border: "1px solid var(--color-surface-border)",
                          color: "var(--color-text-muted)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.625rem",
                          borderRadius: "3px",
                          textDecoration: "none",
                        }}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <FadeIn direction='up'>
        <section
          style={{
            borderTop: "1px solid var(--color-surface-border)",
            height: "320px",
            background: "var(--color-surface-raised)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ textAlign: "center", color: "var(--color-text-muted)" }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📍</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              1204 SW I St, Bentonville, AR 72712
            </div>
            <div style={{ fontSize: "0.8rem", marginTop: "0.375rem" }}>
              Replace with an embedded Google Map
            </div>
          </div>
          {/* Decorative grid lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(var(--color-surface-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-surface-border) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.4,
            }}
          />
        </section>
      </FadeIn>

      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: minmax(0, 1.6fr)"] { grid-template-columns: 1fr !important; }
        }
        .contact-input:focus { border-color: var(--color-amber) !important; box-shadow: 0 0 0 3px oklch(75% 0.18 65 / 0.15) !important; }
      `}</style>
    </>
  );
}
