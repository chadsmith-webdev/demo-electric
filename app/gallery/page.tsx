import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Project Gallery | Electrical Work in Northwest Arkansas",
  description:
    "See completed electrical projects by NWA Electric — panel upgrades, EV charger installations, recessed lighting, outdoor outlets, and more in Bentonville, Rogers, and surrounding areas.",
  alternates: { canonical: "https://nwaelectric.com/gallery" },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "NWA Electric Project Gallery",
  description:
    "Completed electrical projects by NWA Electric in Bentonville, Rogers, and Northwest Arkansas.",
  url: "https://nwaelectric.com/gallery",
  author: {
    "@type": "ElectricalContractor",
    "@id": "https://nwaelectric.com/#business",
  },
};

const GALLERY_ITEMS = [
  {
    src: "/images/hero.png",
    alt: "NWA Electric licensed electrician on the job in Northwest Arkansas",
    category: "Team",
    title: "Professional Electrical Service",
    location: "Bentonville, AR",
    description:
      "Our licensed electricians bring precision and professionalism to every job, from routine repairs to complete electrical overhauls.",
    wide: true,
  },
  {
    src: "/images/panel.png",
    alt: "Licensed electrician upgrading a 200-amp residential electrical panel",
    category: "Panel Upgrade",
    title: "200-Amp Panel Upgrade",
    location: "Rogers, AR",
    description:
      "Full panel replacement from an outdated 100-amp Federal Pacific box to a new 200-amp Square D panel. Permitted and inspected.",
  },
  {
    src: "/images/gallery1.png",
    alt: "New 200-amp Square D electrical panel with neatly labeled circuit breakers",
    category: "Panel Upgrade",
    title: "Clean Panel Install — Square D",
    location: "Centerton, AR",
    description:
      "A freshly installed 200-amp Square D QO panel with every circuit labeled and neatly organized. This is what a proper install looks like.",
  },
  {
    src: "/images/gallery2.png",
    alt: "Level 2 EV charger mounted on garage wall with clean wire management",
    category: "EV Charger",
    title: "Level 2 EV Charger — Garage Install",
    location: "Bella Vista, AR",
    description:
      "Hardwired 48-amp Level 2 EV charger on a dedicated 60-amp circuit. Adds up to 37 miles of range per hour vs. 5 miles with a standard outlet.",
  },
  {
    src: "/images/gallery3.png",
    alt: "Recessed LED lighting in a vaulted living room ceiling",
    category: "Lighting",
    title: "Recessed Lighting — Vaulted Ceiling",
    location: "Fayetteville, AR",
    description:
      "16 wafer-style LED recessed lights installed in a vaulted living room ceiling. No attic access — all done from below through small drywall cutouts.",
  },
  {
    src: "/images/gallery4.png",
    alt: "Outdoor weatherproof outlet installed on brick exterior",
    category: "Outdoor",
    title: "Exterior GFCI Outlet",
    location: "Springdale, AR",
    description:
      "Weatherproof duplex GFCI outlet installed on a brick exterior with proper caulking and an in-use cover. Code-required for all outdoor receptacles.",
  },
  {
    src: "/images/gallery5.png",
    alt: "New ceiling fan installed and wired in a modern master bedroom",
    category: "Lighting & Fans",
    title: "Ceiling Fan Install — New Wiring",
    location: "Bentonville, AR",
    description:
      "Ceiling fan installed in a room with no existing fixture. Required running a new circuit — not just swapping a fixture. Done in a single morning.",
  },
];

const CATEGORIES = [
  "All",
  "Panel Upgrade",
  "EV Charger",
  "Lighting",
  "Outdoor",
  "Lighting & Fans",
  "Team",
];

export default function GalleryPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
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
                Real Projects, Real Work
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              Project Gallery
            </h1>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              Every photo is from an actual NWA Electric job site. We don&apos;t
              use stock photography — these are real panels, real installs, real
              homes in your neighborhood.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className='section-container'>
          <StaggerContainer>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "1.5rem",
                gridAutoRows: "300px",
              }}
            >
              {GALLERY_ITEMS.map((item, i) => (
                <StaggerItem key={i}>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid var(--color-surface-border)",
                      background: "var(--color-surface-raised)",
                      gridColumn: item.wide ? "span 2" : "span 1",
                      height: "100%",
                      cursor: "default",
                    }}
                    className='gallery-card'
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      sizes={
                        item.wide
                          ? "(max-width: 768px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                      className='gallery-img'
                    />
                    {/* Gradient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, oklch(10% 0.01 60 / 0.92) 0%, oklch(10% 0.01 60 / 0.3) 45%, transparent 70%)",
                        transition: "opacity 0.3s ease",
                      }}
                      className='gallery-overlay'
                    />
                    {/* Info */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.375rem",
                        }}
                      >
                        <span
                          style={{
                            background: "var(--color-amber)",
                            color: "oklch(14% 0.01 60)",
                            fontSize: "0.6rem",
                            fontWeight: 800,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "3px",
                          }}
                        >
                          {item.category}
                        </span>
                        <span
                          style={{
                            color: "oklch(75% 0.008 60)",
                            fontSize: "0.75rem",
                          }}
                        >
                          {item.location}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                          color: "#fff",
                          textTransform: "uppercase",
                          margin: "0 0 0.375rem",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: "oklch(80% 0.008 60)",
                          fontSize: "0.8rem",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                        className='gallery-desc'
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Stats / proof bar */}
      <FadeIn direction='up'>
        <section
          style={{
            background: "var(--color-amber)",
            padding: "clamp(2.5rem, 5vw, 4rem) 0",
          }}
        >
          <div className='section-container'>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "2rem",
                textAlign: "center",
              }}
            >
              {[
                { value: "1,800+", label: "Jobs Completed" },
                { value: "17 yrs", label: "In Business" },
                { value: "4.9★", label: "Google Rating" },
                { value: "214", label: "Verified Reviews" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      color: "oklch(14% 0.01 60)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "oklch(28% 0.05 60)",
                      marginTop: "0.375rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) 0" }}>
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
              Ready to Start Your Project?
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Call or request a quote online. Most estimates are scheduled
              within 48 hours.
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
                Get a Free Estimate →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <style>{`
        .gallery-card:hover .gallery-img { transform: scale(1.04); }
        .gallery-desc { opacity: 0; transform: translateY(8px); transition: opacity 0.3s ease, transform 0.3s ease; }
        .gallery-card:hover .gallery-desc { opacity: 1; transform: translateY(0); }
        @media (max-width: 700px) { [style*="gridColumn: span 2"] { grid-column: span 1 !important; } }
      `}</style>
    </>
  );
}
