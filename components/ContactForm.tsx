"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/business";
import { FadeIn } from "@/components/Animations";

const SERVICES_LIST = SERVICES.map((s) => s.name);

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    area: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Static demo — no backend. Simulate success after 1s.
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  }

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "var(--color-surface-overlay)",
    border: "1px solid var(--color-surface-border)",
    borderRadius: "6px",
    color: "var(--color-text-primary)",
    fontSize: "0.95rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.15s",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--color-text-muted)",
    marginBottom: "0.375rem",
  };

  return (
    <AnimatePresence mode='wait'>
      {status === "success" ? (
        <motion.div
          key='success'
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            textAlign: "center",
            padding: "3rem 2rem",
            background: "var(--color-surface-raised)",
            border: "1px solid var(--color-surface-border)",
            borderRadius: "12px",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚡</div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "1.75rem",
              textTransform: "uppercase",
              color: "var(--color-text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            Message Received!
          </h3>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              maxWidth: 400,
            }}
          >
            We&apos;ll follow up within one business day — usually much sooner.
            If it&apos;s urgent, call us directly at{" "}
            <a
              href={`tel:${BUSINESS.phonePlain}`}
              style={{ color: "var(--color-amber)", fontWeight: 600 }}
            >
              {BUSINESS.phone}
            </a>
            .
          </p>
        </motion.div>
      ) : (
        <motion.form
          key='form'
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
          >
            <div>
              <label htmlFor='name' style={labelStyle}>
                Full Name *
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                placeholder='Jane Smith'
                className='contact-input'
              />
            </div>
            <div>
              <label htmlFor='phone' style={labelStyle}>
                Phone Number *
              </label>
              <input
                id='phone'
                name='phone'
                type='tel'
                required
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
                placeholder='(479) 555-0000'
                className='contact-input'
              />
            </div>
          </div>
          <div>
            <label htmlFor='email' style={labelStyle}>
              Email Address
            </label>
            <input
              id='email'
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder='jane@example.com'
              className='contact-input'
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
          >
            <div>
              <label htmlFor='service' style={labelStyle}>
                Service Needed
              </label>
              <select
                id='service'
                name='service'
                value={form.service}
                onChange={handleChange}
                style={inputStyle}
                className='contact-input'
              >
                <option value=''>Select a service…</option>
                {SERVICES_LIST.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
                <option value='Other'>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor='area' style={labelStyle}>
                Your City
              </label>
              <select
                id='area'
                name='area'
                value={form.area}
                onChange={handleChange}
                style={inputStyle}
                className='contact-input'
              >
                <option value=''>Select your city…</option>
                {SERVICE_AREAS.map((a) => (
                  <option key={a.slug} value={a.name}>
                    {a.name}
                  </option>
                ))}
                <option value='Other'>Other / Not Listed</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor='message' style={labelStyle}>
              Describe Your Project
            </label>
            <textarea
              id='message'
              name='message'
              rows={5}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "vertical" }}
              placeholder='e.g. I need a 200-amp panel upgrade in my 1980s home. Currently have a Federal Pacific box…'
              className='contact-input'
            />
          </div>
          <motion.button
            type='submit'
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              background:
                status === "sending"
                  ? "oklch(45% 0.08 65)"
                  : "var(--color-amber)",
              color: "oklch(14% 0.01 60)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "6px",
              cursor: status === "sending" ? "wait" : "pointer",
              alignSelf: "flex-start",
            }}
          >
            {status === "sending" ? "Sending…" : "Send Message →"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
