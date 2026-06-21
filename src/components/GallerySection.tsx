"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface CardData {
  id: number;
  label: string;
  caption: string;
  category: "mezuniyet" | "ozel";
  photoSrc: string;
  rotate: string;
  delay: number;
}

const CARDS: CardData[] = [
  {
    id: 1,
    label: "Mezuniyet · I",
    caption: "Zarafetin tacı, bilginin meyvesidir.",
    category: "mezuniyet",
    photoSrc: "/photos/mezuniyet-1.jpg",
    rotate: "-2deg",
    delay: 0.1,
  },
  {
    id: 2,
    label: "Mezuniyet · II",
    caption: "Bir kapı kapandı; bir ufuk açıldı.",
    category: "mezuniyet",
    photoSrc: "/photos/mezuniyet-2.jpg",
    rotate: "1.5deg",
    delay: 0.2,
  },
  {
    id: 3,
    label: "Mezuniyet · III",
    caption: "Yılların birikimi, tek bir anda taçlandı.",
    category: "mezuniyet",
    photoSrc: "/photos/mezuniyet-3.jpg",
    rotate: "-1deg",
    delay: 0.3,
  },
  {
    id: 4,
    label: "Özel An · I",
    caption: "Doğa, bizi kendimize döndürür.",
    category: "ozel",
    photoSrc: "/photos/ozel-1.jpg",
    rotate: "2deg",
    delay: 0.15,
  },
  {
    id: 5,
    label: "Özel An · II",
    caption: "Güzellik, hisseden kalpte yaşar.",
    category: "ozel",
    photoSrc: "/photos/ozel-2.jpg",
    rotate: "-1.5deg",
    delay: 0.25,
  },
  {
    id: 6,
    label: "Özel An · III",
    caption: "Her an, benzersiz bir hediyedir.",
    category: "ozel",
    photoSrc: "/photos/ozel-3.jpg",
    rotate: "1deg",
    delay: 0.35,
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 sm:px-10 max-w-6xl mx-auto"
    >
      {/* Section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span
          className="block text-xs tracking-[0.5em] uppercase mb-4"
          style={{ color: "rgba(201,169,110,0.5)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
        >
          Anılar Galerisi
        </span>
        <h2
          className="font-display font-normal italic"
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            color: "#F2EDE4",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Işığın Düştüğü Anlar
        </h2>
      </motion.div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-12 gap-5 sm:gap-7">
        {/* Row 1: col 1-5 and 6-13 */}
        <GalleryCard card={CARDS[0]} inView={inView} colSpan="col-span-12 sm:col-span-5" marginTop="mt-0" />
        <GalleryCard card={CARDS[1]} inView={inView} colSpan="col-span-12 sm:col-span-7" marginTop="sm:mt-10" wide />
        {/* Row 2 */}
        <GalleryCard card={CARDS[2]} inView={inView} colSpan="col-span-12 sm:col-span-6" marginTop="sm:-mt-8" />
        <GalleryCard card={CARDS[3]} inView={inView} colSpan="col-span-12 sm:col-span-6" marginTop="sm:mt-4" />
        {/* Row 3 */}
        <GalleryCard card={CARDS[4]} inView={inView} colSpan="col-span-12 sm:col-span-4" marginTop="sm:mt-6" />
        <GalleryCard card={CARDS[5]} inView={inView} colSpan="col-span-12 sm:col-span-8" marginTop="sm:-mt-4" wide />
      </div>
    </section>
  );
}

function GalleryCard({
  card,
  inView,
  colSpan,
  marginTop,
  wide = false,
}: {
  card: CardData;
  inView: boolean;
  colSpan: string;
  marginTop: string;
  wide?: boolean;
}) {
  const isGrad = card.category === "mezuniyet";

  return (
    <motion.div
      className={`${colSpan} ${marginTop}`}
      initial={{ opacity: 0, y: 32, rotate: 0 }}
      animate={
        inView
          ? { opacity: 1, y: 0, rotate: parseFloat(card.rotate) }
          : {}
      }
      transition={{ duration: 0.75, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        rotate: 0,
        scale: 1.025,
        zIndex: 10,
        transition: { duration: 0.35, ease: "easeOut" },
      }}
    >
      <div
        className="glass-card relative overflow-hidden group cursor-pointer"
        style={{
          borderRadius: "2px 16px 2px 16px",
          aspectRatio: wide ? "16/9" : "4/3",
        }}
      >
        {/* Brush stroke frame overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ filter: "url(#brushFilter)" }}
        >
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              border: `1px solid rgba(${isGrad ? "199,125,255" : "201,169,110"},0.18)`,
            }}
          />
        </div>

        {/* Photo area */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0030] to-[#08060F]">
          {/* Try to load image; shows placeholder if not found */}
          <PhotoOrPlaceholder src={card.photoSrc} alt={card.label} />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(8,6,15,0.1) 0%,
              rgba(8,6,15,0.05) 40%,
              rgba(8,6,15,0.7) 80%,
              rgba(8,6,15,0.92) 100%
            )`,
          }}
        />

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 z-[3] px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(61,10,82,0.6)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(199,125,255,0.15)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "rgba(201,169,110,0.7)",
            fontFamily: "Inter, sans-serif",
            textTransform: "uppercase",
          }}
        >
          {card.label}
        </div>

        {/* Caption on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[4] p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"
        >
          <p
            className="font-serif italic text-center"
            style={{
              fontSize: "clamp(0.82rem, 1.5vw, 1rem)",
              color: "rgba(242,237,228,0.75)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {card.caption}
          </p>
        </div>

        {/* Static caption label at bottom (always visible) */}
        <div className="absolute bottom-3 left-0 right-0 z-[3] px-4 group-hover:opacity-0 transition-opacity duration-300">
          <p
            className="text-center"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "rgba(201,169,110,0.4)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {card.category === "mezuniyet" ? "✦ Mezuniyet" : "✦ Özel An"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function PhotoOrPlaceholder({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-full">
      {/* Placeholder background (shows when no image) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.25)" strokeWidth="1.2" strokeLinecap="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "rgba(201,169,110,0.2)", fontFamily: "Inter, sans-serif", textTransform: "uppercase" }}>
          {alt}
        </span>
      </div>
      {/* Actual image (comment src in to use) */}
      <Image src={src} alt={alt} fill className="object-cover opacity-60" />
    </div>
  );
}
