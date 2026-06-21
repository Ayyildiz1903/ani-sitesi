"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Brush stroke border top */}
      <BrushBorderTop />
      <BrushBorderBottom />

      {/* Corner florals */}
      <FloralCorner className="absolute top-0 left-0 w-56 h-56 opacity-[0.065]" rotate={0} />
      <FloralCorner className="absolute top-0 right-0 w-56 h-56 opacity-[0.065]" rotate={90} />
      <FloralCorner className="absolute bottom-0 left-0 w-56 h-56 opacity-[0.065]" rotate={270} />
      <FloralCorner className="absolute bottom-0 right-0 w-56 h-56 opacity-[0.065]" rotate={180} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-[0.45em] uppercase mb-8"
          style={{ color: "rgba(201,169,110,0.55)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bir Yolculuğun İzinde
        </motion.p>

        {/* Main title */}
        <motion.h1
          className="font-display font-normal italic leading-[1.15] mb-6"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
            color: "#F2EDE4",
            fontFamily: "'Playfair Display', serif",
            textShadow: "0 0 80px rgba(107,45,139,0.3)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Başarılarının
          <br />
          <motion.span
            style={{ color: "#C9A96E" }}
            animate={{ textShadow: ["0 0 20px rgba(201,169,110,0.2)", "0 0 40px rgba(201,169,110,0.5)", "0 0 20px rgba(201,169,110,0.2)"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            şahidi olmak
          </motion.span>
          <br />
          büyük bir ilham.
        </motion.h1>

        {/* Ornament line */}
        <motion.div
          className="flex items-center gap-4 justify-center mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.4))" }} />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7,0 L8.5,5.5 L14,7 L8.5,8.5 L7,14 L5.5,8.5 L0,7 L5.5,5.5Z" fill="rgba(201,169,110,0.5)" />
          </svg>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(to left, transparent, rgba(201,169,110,0.4))" }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-serif font-light italic leading-[1.85]"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "rgba(242,237,228,0.55)",
            fontFamily: "'Cormorant Garamond', serif",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          Dünyaya kattığın değer kendi ışığından.
        </motion.p>
      </div>
    </section>
  );
}

function BrushBorderTop() {
  return (
    <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none" style={{ filter: "url(#brushFilter)" }}>
      <div className="h-full" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(107,45,139,0.35) 30%, rgba(199,125,255,0.2) 50%, rgba(107,45,139,0.35) 70%, transparent 100%)" }} />
    </div>
  );
}
function BrushBorderBottom() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 pointer-events-none" style={{ filter: "url(#brushFilter)" }}>
      <div className="h-full" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(107,45,139,0.25) 30%, rgba(199,125,255,0.15) 50%, rgba(107,45,139,0.25) 70%, transparent 100%)" }} />
    </div>
  );
}

function FloralCorner({ className, rotate }: { className: string; rotate: number }) {
  return (
    <div className={className} style={{ transform: `rotate(${rotate}deg)` }}>
      <svg viewBox="0 0 220 220" fill="none" className="w-full h-full">
        <g stroke="#C9A96E" strokeWidth="0.75">
          <ellipse cx="42" cy="42" rx="30" ry="14" transform="rotate(-32 42 42)" />
          <ellipse cx="82" cy="26" rx="24" ry="11" transform="rotate(18 82 26)" />
          <ellipse cx="22" cy="90" rx="18" ry="9" transform="rotate(-52 22 90)" />
          <path d="M52,72 Q74,36 112,52 Q93,82 52,72Z" fill="rgba(61,10,82,0.6)" />
          <path d="M16,136 Q46,98 76,118 Q50,150 16,136Z" fill="rgba(61,10,82,0.5)" />
          <circle cx="104" cy="16" r="4.5" fill="rgba(201,169,110,0.55)" />
          <circle cx="136" cy="42" r="2.8" fill="rgba(201,169,110,0.45)" />
          <ellipse cx="36" cy="152" rx="13" ry="6.5" transform="rotate(28 36 152)" fill="rgba(61,10,82,0.45)" />
          <path d="M0,0 Q85,85 165,192" stroke="rgba(107,45,139,0.07)" strokeWidth="50" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </div>
  );
}
