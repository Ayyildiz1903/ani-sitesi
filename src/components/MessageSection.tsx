"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MESSAGES = [
  {
    id: 1,
    text: "Başarılarının şahidi olmak büyük bir ilham.",
    sub: "Her zirve, ardında bırakılan bir iz değil; içinde taşınan bir bilinçtir.",
    delay: 0.1,
  },
  {
    id: 2,
    text: "Dünyaya kattığın değer kendi ışığından.",
    sub: "Gerçek aydınlık, başkalarının gözünde değil; kendi tercihlerinde doğar.",
    delay: 0.2,
  },
  {
    id: 3,
    text: "Attığın her adımda, vardığın her zirvede; sessizce yanında olan bir destekçin olduğunu bilmen dileğiyle.",
    sub: null,
    delay: 0.3,
    featured: true,
  },
];

export default function MessageSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 sm:px-10 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(61,10,82,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Horizontal rule top */}
      <div className="max-w-3xl mx-auto mb-20">
        <div
          className="h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(107,45,139,0.3), transparent)" }}
        />
      </div>

      <div className="max-w-3xl mx-auto space-y-16">
        {MESSAGES.map((msg) =>
          msg.featured ? (
            <FeaturedMessage key={msg.id} msg={msg} inView={inView} />
          ) : (
            <RegularMessage key={msg.id} msg={msg} inView={inView} />
          )
        )}
      </div>

      {/* Horizontal rule bottom */}
      <div className="max-w-3xl mx-auto mt-20">
        <div
          className="h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(107,45,139,0.3), transparent)" }}
        />
      </div>
    </section>
  );
}

function RegularMessage({
  msg,
  inView,
}: {
  msg: (typeof MESSAGES)[0];
  inView: boolean;
}) {
  return (
    <motion.div
      className="grid sm:grid-cols-[1fr_2fr] gap-8 items-start"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, delay: msg.delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left: decorative vertical line + dot */}
      <div className="hidden sm:flex flex-col items-end pt-2">
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)" }}
        />
        <div
          className="w-2 h-2 rounded-full mt-1"
          style={{ background: "#C9A96E", boxShadow: "0 0 8px rgba(201,169,110,0.6)" }}
        />
      </div>

      {/* Right: text */}
      <div>
        <p
          className="font-display italic font-normal leading-[1.5] mb-3"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.7rem)",
            color: "#F2EDE4",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {msg.text}
        </p>
        {msg.sub && (
          <p
            className="font-serif font-light italic"
            style={{
              fontSize: "0.95rem",
              color: "rgba(242,237,228,0.4)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {msg.sub}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function FeaturedMessage({
  msg,
  inView,
}: {
  msg: (typeof MESSAGES)[0];
  inView: boolean;
}) {
  return (
    <motion.div
      className="relative text-center py-12 px-8 sm:px-16"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: msg.delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glass background */}
      <div
        className="absolute inset-0 glass-card"
        style={{ borderRadius: "1px 20px 1px 20px" }}
      />

      {/* Decorative quote mark */}
      <div
        className="absolute top-4 left-6 font-display"
        style={{
          fontSize: "5rem",
          lineHeight: 1,
          color: "rgba(107,45,139,0.2)",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        "
      </div>

      {/* Star ornament top */}
      <div className="flex justify-center mb-6">
        <StarOrnament />
      </div>

      <p
        className="relative z-10 font-display italic font-normal leading-[1.6]"
        style={{
          fontSize: "clamp(1.15rem, 2.5vw, 1.55rem)",
          color: "#F2EDE4",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {msg.text}
      </p>

      {/* Star ornament bottom */}
      <div className="flex justify-center mt-6">
        <StarOrnament />
      </div>
    </motion.div>
  );
}

function StarOrnament() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.4))" }} />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(201,169,110,0.5)">
        <path d="M6,0 L7.2,4.8 L12,6 L7.2,7.2 L6,12 L4.8,7.2 L0,6 L4.8,4.8Z" />
      </svg>
      <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(201,169,110,0.4))" }} />
    </div>
  );
}
