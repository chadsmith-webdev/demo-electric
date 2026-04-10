import Link from "next/link";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "oklch(11% 0.008 60)",
        borderTop: "1px solid oklch(22% 0.014 60)",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "2rem",
      }}
    >
      <div className='section-container'>
        {/* CTA band */}
        <div
          style={{
            background: "var(--color-amber)",
            borderRadius: "12px",
            padding: "clamp(2rem, 4vw, 3rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "oklch(14% 0.01 60)",
                textTransform: "uppercase",
                lineHeight: 1.05,
              }}
            >
              Ready to schedule?
            </div>
            <div
              style={{
                color: "oklch(25% 0.015 60)",
                fontSize: "1rem",
                marginTop: "0.375rem",
              }}
            >
              Free estimates · Licensed · Insured · Permitted work guaranteed
            </div>
          </div>
          <a
            href={`tel:${BUSINESS.phonePlain}`}
            style={{
              background: "oklch(14% 0.01 60)",
              color: "var(--color-amber)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
              borderRadius: "6px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {BUSINESS.phone}
          </a>
        </div>

        {/* Footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "1.25rem",
                color: "var(--color-text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginBottom: "0.75rem",
              }}
            >
              NWA Electric
            </div>
            <div className='amber-divider' style={{ marginBottom: "1rem" }} />
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              Licensed residential electrician serving Bentonville, AR and
              surrounding Northwest Arkansas communities since{" "}
              {BUSINESS.founded}.
            </p>
            <div
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.75rem",
                lineHeight: 1.8,
              }}
            >
              <div>{BUSINESS.license.label}</div>
              <div>{BUSINESS.insurance.liability}</div>
              <div>{BUSINESS.insurance.workers}</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    style={{
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.15s",
                    }}
                    className='footer-link'
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <FooterHeading>Service Areas</FooterHeading>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas#${area.slug}`}
                    style={{
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.15s",
                    }}
                    className='footer-link'
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <FooterHeading>Contact & Hours</FooterHeading>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <a
                href={`tel:${BUSINESS.phonePlain}`}
                style={{
                  color: "var(--color-amber)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                }}
              >
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                {BUSINESS.email}
              </a>
              <address
                style={{
                  fontStyle: "normal",
                  color: "var(--color-text-muted)",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                }}
              >
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                {BUSINESS.address.zip}
              </address>
              <div
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.8rem",
                  lineHeight: 1.8,
                  borderTop: "1px solid oklch(22% 0.014 60)",
                  paddingTop: "0.75rem",
                }}
              >
                <div>{BUSINESS.hours.weekdays}</div>
                <div>{BUSINESS.hours.saturday}</div>
                <div style={{ color: "var(--color-amber)", fontWeight: 600 }}>
                  {BUSINESS.hours.emergency}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid oklch(22% 0.014 60)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.8rem",
              margin: 0,
            }}
          >
            © {currentYear} {BUSINESS.legalName} · All rights reserved ·{" "}
            {BUSINESS.address.city}, {BUSINESS.address.state}
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              href='/'
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
            >
              Privacy
            </Link>
            <Link
              href='/'
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
            >
              Terms
            </Link>
            <Link
              href='/sitemap.xml'
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
            >
              Sitemap
            </Link>
          </div>
        </div>

        {/* Built by */}
        <div
          style={{
            borderTop: "1px solid oklch(22% 0.014 60)",
            paddingTop: "1rem",
            textAlign: "center",
          }}
        >
          <a
            href='https://localsearchally.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              fontSize: "0.75rem",
              textDecoration: "none",
              color: "var(--color-text-muted)",
            }}
          >
            Built by <span style={{ color: "#fff" }}>Local Search</span>
            <span style={{ color: "#7bafd4" }}>Ally</span>
          </a>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--color-amber) !important; }
      `}</style>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}
