"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animated = useRef(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          animate(0, to, {
            duration,
            ease: [0.25, 0.46, 0.45, 0.94],
            onUpdate: (v) => setValue(Math.round(v)),
          });
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observerRef.current.observe(ref.current);
    return () => observerRef.current?.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
