"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BUSINESS } from "@/lib/business";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Services", href: "/services" },
    { label: "Panel Upgrades", href: "/services/panel-upgrades" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Trust bar — license + insurance visible immediately */}
      <div
        style={{
          backgroundColor: "oklch(11% 0.008 60)",
          borderBottom: "1px solid oklch(22% 0.014 60)",
        }}
      >
        <div
          className='section-container'
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            padding: "0.5rem clamp(1.25rem, 4vw, 3rem)",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <span
              className='trust-badge'
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.25rem 0.75rem",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <ShieldIcon />
              {BUSINESS.license.number}
            </span>
            <span
              className='trust-badge'
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.25rem 0.75rem",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <ShieldIcon />
              $2M Liability Insured
            </span>
          </div>
          <a
            href={`tel:${BUSINESS.phonePlain}`}
            style={{
              color: "var(--color-amber)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "oklch(14% 0.01 60)"
            : "oklch(14% 0.01 60 / 0.95)",
          boxShadow: scrolled ? "0 2px 40px oklch(0% 0 0 / 0.5)" : "none",
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: "1px solid oklch(22% 0.014 60)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className='section-container'
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <Link
            href='/'
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <BoltLogo />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                  color: "var(--color-text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                NWA Electric
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Bentonville, AR
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "center",
            }}
            className='desktop-nav'
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "4px",
                  transition: "color 0.15s, background-color 0.15s",
                }}
                className='nav-link'
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phonePlain}`}
              className='btn-primary'
              style={{
                padding: "0.5rem 1.25rem",
                fontSize: "0.875rem",
                marginLeft: "0.5rem",
              }}
            >
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='mobile-menu-btn'
            aria-label='Toggle menu'
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--color-text-primary)",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{
            overflow: "hidden",
            backgroundColor: "oklch(16% 0.012 60)",
            borderBottom: menuOpen ? "1px solid oklch(22% 0.014 60)" : "none",
          }}
          className='mobile-menu'
        >
          <div
            style={{
              padding: "1rem clamp(1.25rem, 4vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid oklch(22% 0.014 60)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phonePlain}`}
              className='btn-primary'
              style={{
                marginTop: "1rem",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </motion.div>
      </motion.header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-link:hover {
          color: var(--color-amber) !important;
          background-color: oklch(22% 0.014 60) !important;
        }
      `}</style>
    </>
  );
}

function BoltLogo() {
  return (
    <svg width='36' height='36' viewBox='0 0 36 36' fill='none'>
      <rect width='36' height='36' rx='6' fill='var(--color-amber)' />
      <path
        d='M21 4L10 20H18L15 32L26 16H18L21 4Z'
        fill='oklch(14% 0.01 60)'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width='10' height='12' viewBox='0 0 10 12' fill='currentColor'>
      <path d='M5 0L0 2v4c0 3.31 2.14 5.63 5 6.5C7.86 11.63 10 9.31 10 6V2L5 0z' />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
    >
      {open ? (
        <>
          <line x1='18' y1='6' x2='6' y2='18' />
          <line x1='6' y1='6' x2='18' y2='18' />
        </>
      ) : (
        <>
          <line x1='3' y1='6' x2='21' y2='6' />
          <line x1='3' y1='12' x2='21' y2='12' />
          <line x1='3' y1='18' x2='21' y2='18' />
        </>
      )}
    </svg>
  );
}
