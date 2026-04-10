import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS,
  SERVICES,
  SERVICE_AREAS,
  TESTIMONIALS,
} from "@/lib/business";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "NWA Electric | Licensed Electrician in Bentonville, AR",
  description:
    "Bentonville's most trusted residential electrician. Licensed, insured, and serving Northwest Arkansas since 2009. Panel upgrades, EV chargers, rewiring, and more.",
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is NWA Electric licensed and insured in Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NWA Electric holds Arkansas Electrical Contractor License #E-AR-12847 and carries $2,000,000 in general liability insurance plus worker's compensation coverage.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does NWA Electric serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Bentonville, Rogers, Centerton, Bella Vista, Springdale, and Fayetteville, Arkansas — all within a 25-mile radius of our Bentonville home base.",
      },
    },
    {
      "@type": "Question",
      name: "Do you pull permits for electrical work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, always. NWA Electric pulls all required permits through the City of Bentonville and surrounding municipalities. Every job is inspected and approved by the local authority having jurisdiction (AHJ).",
      },
    },
    {
      "@type": "Question",
      name: "How much does a panel upgrade cost in Bentonville, AR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard 200-amp panel upgrade in Bentonville typically runs $1,800–$3,200 depending on the existing service, meter socket condition, and grounding system. We provide free, itemized estimates.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(520px, 85vh, 840px)",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src='/images/hero.png'
            alt='Licensed electrician working on residential panel in Bentonville AR'
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes='100vw'
          />
          {/* Dark gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, oklch(11% 0.008 60) 0%, oklch(11% 0.008 60 / 0.85) 50%, oklch(11% 0.008 60 / 0.4) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className='section-container'
          style={{
            position: "relative",
            zIndex: 1,
            paddingBottom: "clamp(3rem, 6vw, 5rem)",
            paddingTop: "5rem",
            width: "100%",
          }}
        >
          <FadeIn delay={0.1} direction='up'>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "1.25rem",
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
                Bentonville, AR · Est. {BUSINESS.founded}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction='up'>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
                color: "var(--color-text-primary)",
                textTransform: "uppercase",
                lineHeight: 1,
                maxWidth: "800px",
                marginBottom: "1.25rem",
              }}
            >
              Northwest Arkansas'
              <br />
              <span style={{ color: "var(--color-amber)" }}>Trusted</span>
              <br />
              Electrician
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} direction='up'>
            <p
              style={{
                color: "oklch(82% 0.01 60)",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                maxWidth: "560px",
                marginBottom: "2.25rem",
                lineHeight: 1.65,
              }}
            >
              Licensed, insured, and permitted work — every time. Serving
              Bentonville homeowners since {BUSINESS.founded} with the
              credentials visible before you ever pick up the phone.
            </p>
          </FadeIn>

          <FadeIn delay={0.45} direction='up'>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <a
                href={`tel:${BUSINESS.phonePlain}`}
                className='btn-primary'
                style={{ fontSize: "1.05rem" }}
              >
                <PhoneIcon />
                {BUSINESS.phone}
              </a>
              <Link href='/services/panel-upgrades' className='btn-ghost'>
                Panel Upgrades →
              </Link>
            </div>
          </FadeIn>

          {/* Trust badges row */}
          <FadeIn delay={0.6} direction='up'>
            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "License #E-AR-12847", icon: "✓" },
                { label: "$2M Liability Insured", icon: "✓" },
                { label: "Worker's Comp", icon: "✓" },
                { label: "Permitted Work", icon: "✓" },
              ].map((b) => (
                <div
                  key={b.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "oklch(14% 0.01 60 / 0.8)",
                    border: "1px solid oklch(30% 0.02 60)",
                    borderRadius: "4px",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "var(--color-text-secondary)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span style={{ color: "var(--color-amber)" }}>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-amber)",
          padding: "clamp(1.5rem, 3vw, 2.25rem) 0",
        }}
      >
        <div
          className='section-container'
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {[
            {
              value: BUSINESS.yearsInBusiness,
              suffix: "+",
              label: "Years in Business",
            },
            {
              value: BUSINESS.jobsCompleted,
              suffix: "+",
              label: "Jobs Completed",
            },
            {
              value: BUSINESS.rating.count,
              suffix: "+",
              label: "Google Reviews",
            },
            { value: 100, suffix: "%", label: "Licensed & Insured" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(14% 0.01 60)",
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "oklch(28% 0.015 65)",
                  marginTop: "0.25rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container'>
          <FadeIn direction='up'>
            <div style={{ marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}>
              <div className='amber-divider' style={{ marginBottom: "1rem" }} />
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                What We Do
              </h2>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.05rem",
                  maxWidth: "560px",
                }}
              >
                Residential electrical work done right, permitted, and
                inspected. No shortcuts — every job is backed by the State of
                Arkansas.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1px",
              background: "var(--color-surface-border)",
              border: "1px solid var(--color-surface-border)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {SERVICES.map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  href={service.href}
                  style={{
                    textDecoration: "none",
                    display: "block",
                    height: "100%",
                  }}
                >
                  <div
                    className='service-card'
                    style={{
                      background: "var(--color-surface-raised)",
                      padding: "clamp(1.5rem, 3vw, 2.25rem)",
                      height: "100%",
                      transition: "background-color 0.2s",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background:
                          "color-mix(in oklch, var(--color-amber) 15%, var(--color-surface-overlay))",
                        border:
                          "1px solid color-mix(in oklch, var(--color-amber) 30%, transparent)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.25rem",
                        fontSize: "1.25rem",
                      }}
                    >
                      {serviceIcon(service.icon)}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "var(--color-text-primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        marginBottom: "0.625rem",
                      }}
                    >
                      {service.name}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {service.description}
                    </p>
                    {"featured" in service && service.featured && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          marginTop: "1.25rem",
                          color: "var(--color-amber)",
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        Learn More →
                      </div>
                    )}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Why NWA Electric ──────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(4rem, 8vw, 7rem) 0",
          background: "var(--color-surface-raised)",
          borderTop: "1px solid var(--color-surface-border)",
          borderBottom: "1px solid var(--color-surface-border)",
        }}
      >
        <div className='section-container'>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(2.5rem, 5vw, 5rem)",
              alignItems: "center",
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
                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                    color: "var(--color-text-primary)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Why Bentonville Homeowners
                  <br />
                  <span style={{ color: "var(--color-amber)" }}>
                    Call Us First
                  </span>
                </h2>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                  }}
                >
                  Hiring an electrician is a trust decision. You're letting
                  someone into your home, inside your walls, and into your
                  electrical system. We make that decision easier by being
                  transparent about every credential, every step.
                </p>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "2rem",
                  }}
                >
                  Mike Harrington founded NWA Electric in {BUSINESS.founded}{" "}
                  after years as a journeyman for larger contractors. His
                  approach: do the work right, pull the permit, and let the
                  inspection speak for itself.
                </p>
                <a href={`tel:${BUSINESS.phonePlain}`} className='btn-primary'>
                  <PhoneIcon />
                  Get a Free Estimate
                </a>
              </div>
            </FadeIn>

            <StaggerContainer
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  title: "Permits Pulled on Every Job",
                  body: "We pull permits through the city — not to cover ourselves, but because it protects you. A permitted job can be sold. An unpermitted job can't.",
                },
                {
                  title: "Upfront, Itemized Quotes",
                  body: "You'll know the material cost, labor hours, and permit fee before we start. No surprise add-ons at the end.",
                },
                {
                  title: "Master Electrician On-Site",
                  body: "Mike or a licensed Master Electrician is on every job — not just a helper supervised remotely.",
                },
                {
                  title: "Clean Work, Every Time",
                  body: "We use drop cloths, vacuum our cuts, and leave your home the way we found it. Your drywall is not our problem to ignore.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "1.25rem",
                      background: "var(--color-surface-overlay)",
                      border: "1px solid var(--color-surface-border)",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        background: "var(--color-amber)",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                        color: "oklch(14% 0.01 60)",
                        fontWeight: 900,
                        fontSize: "0.85rem",
                      }}
                    >
                      ✓
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
                          marginBottom: "0.375rem",
                        }}
                      >
                        {item.title}
                      </div>
                      <p
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
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
        </div>
      </section>

      {/* ── Service Areas ─────────────────────────────────────── */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container'>
          <FadeIn direction='up'>
            <div style={{ marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}>
              <div className='amber-divider' style={{ marginBottom: "1rem" }} />
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                Serving Northwest Arkansas
              </h2>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.05rem",
                }}
              >
                Within 25 miles of Bentonville. No travel fees within our
                service area.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {SERVICE_AREAS.map((area) => (
              <StaggerItem key={area.slug}>
                <Link
                  href={`/service-areas#${area.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className='area-card'
                    style={{
                      background: "var(--color-surface-raised)",
                      border: "1px solid var(--color-surface-border)",
                      borderRadius: "8px",
                      padding: "1.25rem 1.5rem",
                      transition: "border-color 0.2s, background-color 0.2s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                          color: "var(--color-text-primary)",
                          textTransform: "uppercase",
                        }}
                      >
                        {area.name}
                      </div>
                      {area.distance === 0 ? (
                        <span
                          style={{
                            background: "var(--color-amber)",
                            color: "oklch(14% 0.01 60)",
                            fontSize: "0.6rem",
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "3px",
                          }}
                        >
                          HQ
                        </span>
                      ) : (
                        <span
                          style={{
                            color: "var(--color-text-muted)",
                            fontSize: "0.75rem",
                          }}
                        >
                          ~{area.distance} mi
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {area.description.slice(0, 80)}…
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href='/service-areas' className='btn-ghost'>
                All Service Areas →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(4rem, 8vw, 7rem) 0",
          background: "var(--color-surface-raised)",
          borderTop: "1px solid var(--color-surface-border)",
        }}
      >
        <div className='section-container'>
          <FadeIn direction='up'>
            <div style={{ marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}>
              <div className='amber-divider' style={{ marginBottom: "1rem" }} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                    color: "var(--color-text-primary)",
                    margin: 0,
                  }}
                >
                  What Homeowners Say
                </h2>
                <div
                  style={{
                    background:
                      "color-mix(in oklch, oklch(68% 0.15 145) 15%, var(--color-surface-overlay))",
                    border:
                      "1px solid color-mix(in oklch, oklch(68% 0.15 145) 35%, transparent)",
                    color: "oklch(75% 0.12 145)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "4px",
                  }}
                >
                  {BUSINESS.rating.score} ★ · {BUSINESS.rating.count} Google
                  Reviews
                </div>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <div
                  style={{
                    background: "var(--color-surface-overlay)",
                    border: "1px solid var(--color-surface-border)",
                    borderRadius: "10px",
                    padding: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      color: "var(--color-amber)",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {"★".repeat(t.rating)}
                  </div>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.92rem",
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      marginBottom: "1.25rem",
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {t.location}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container' style={{ maxWidth: 800 }}>
          <FadeIn direction='up'>
            <div style={{ marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}>
              <div className='amber-divider' style={{ marginBottom: "1rem" }} />
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  color: "var(--color-text-primary)",
                }}
              >
                Common Questions
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
                q: "Is NWA Electric licensed and insured in Arkansas?",
                a: "Yes. We hold Arkansas Electrical Contractor License #E-AR-12847 and carry $2,000,000 in general liability insurance plus worker's compensation coverage. Both are verifiable through the Arkansas Department of Labor.",
              },
              {
                q: "Do you pull permits for electrical work?",
                a: "Always. NWA Electric pulls all required permits through the City of Bentonville and surrounding municipalities. Every job is inspected and approved by the local authority having jurisdiction (AHJ). This protects your home's resale value and insurability.",
              },
              {
                q: "How much does a panel upgrade cost in Bentonville, AR?",
                a: "A standard 200-amp panel upgrade typically runs $1,800–$3,200 depending on the existing service, meter socket condition, and grounding system. We provide free, itemized estimates — no guessing.",
              },
              {
                q: "How quickly can you start a job?",
                a: "Most jobs are scheduled within 5–10 business days. Emergency service (situations involving a safety hazard or no power) is typically same-day or next morning.",
              },
              {
                q: "Do you service older homes in Bella Vista and Rogers?",
                a: "Yes — this is a specialty. Many older NWA homes have Federal Pacific or Zinsco panels, aluminum branch wiring, or undersized service. We are experienced in all three and carry the required materials.",
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
                      fontSize: "1.05rem",
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

      <style>{`
        .service-card:hover { background-color: var(--color-surface-overlay) !important; }
        .area-card:hover { border-color: var(--color-amber) !important; background-color: var(--color-surface-overlay) !important; }
      `}</style>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
    </svg>
  );
}

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
