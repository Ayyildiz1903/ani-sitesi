"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EagleSVG from "./EagleSVG";

interface IntroScreenProps {
  onComplete: (audio: HTMLAudioElement) => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [phase, setPhase] = useState<"arrive" | "spread" | "text" | "hint">("arrive");
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase("spread"), 2400);
    const t2 = setTimeout(() => setPhase("text"), 3800);
    const t3 = setTimeout(() => setPhase("hint"), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const handleClick = () => {
    if (exiting) return;
    setExiting(true);

    // Start music
    const audio = new Audio("/music/kumralim.mp3");
    audio.loop = true;
    audio.volume = 0.55;
    audio.play().catch(() => {});
    audioRef.current = audio;

    setTimeout(() => onComplete(audio), 1200);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
      style={{ background: "#08060F" }}
      onClick={handleClick}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Deep radial bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #1A0030 0%, #08060F 65%)",
        }}
      />

      {/* Corner floral ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Horizontal glow line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          top: "50%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(107,45,139,0.4) 20%, rgba(199,125,255,0.2) 50%, rgba(107,45,139,0.4) 80%, transparent 100%)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: exiting ? 0 : 1, opacity: exiting ? 0 : 1 }}
        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
      />

      {/* Eagle */}
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          className="relative"
          initial={{ y: -320, scale: 0.2, opacity: 0 }}
          animate={
            exiting
              ? { scale: [1, 0.05], opacity: [1, 0], y: [0, -60], filter: ["blur(0px)", "blur(20px)"] }
              : { y: 0, scale: 1, opacity: 1 }
          }
          transition={
            exiting
              ? { duration: 0.9, ease: "easeIn" }
              : { duration: 2.0, ease: [0.16, 1, 0.3, 1] }
          }
        >
          <EagleSVG
            wingsOpen={phase !== "arrive"}
            glowing={!exiting}
          />
        </motion.div>

        {/* Subtitle text under wings */}
        <AnimatePresence>
          {phase === "text" || phase === "hint" ? (
            <motion.p
              key="subtitle"
              className="absolute font-script text-center text-gold-pale leading-relaxed px-6"
              style={{
                bottom: "-80px",
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                textShadow: "0 0 30px rgba(201,169,110,0.5)",
                fontFamily: "'Dancing Script', cursive",
                whiteSpace: "nowrap",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              Başarıların, zarafetin ve attığın her adım için...
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Click hint */}
      <AnimatePresence>
        {phase === "hint" && !exiting && (
          <motion.div
            key="hint"
            className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-px h-8"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.4))" }}
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: "rgba(201,169,110,0.35)", fontFamily: "Inter, sans-serif" }}
            >
              — dokunmak için tıkla —
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CornerOrnament({ position }: { position: string }) {
  const corners: Record<string, string> = {
    "top-left":     "top-0 left-0",
    "top-right":    "top-0 right-0 scale-x-[-1]",
    "bottom-left":  "bottom-0 left-0 scale-y-[-1]",
    "bottom-right": "bottom-0 right-0 scale-[-1]",
  };

  return (
    <motion.div
      className={`absolute w-48 h-48 pointer-events-none ${corners[position]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 2 }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-[0.07]">
        <g fill="none" stroke="#C9A96E" strokeWidth="0.8">
          <ellipse cx="45" cy="45" rx="32" ry="16" transform="rotate(-30 45 45)" />
          <ellipse cx="85" cy="28" rx="26" ry="13" transform="rotate(15 85 28)" />
          <ellipse cx="25" cy="95" rx="20" ry="10" transform="rotate(-50 25 95)" />
          <path d="M55,75 Q78,38 115,55 Q95,85 55,75Z" fill="rgba(74,21,85,0.5)" />
          <path d="M18,140 Q48,100 78,120 Q52,152 18,140Z" fill="rgba(74,21,85,0.4)" />
          <circle cx="108" cy="18" r="5" fill="rgba(201,169,110,0.5)" />
          <circle cx="138" cy="44" r="3" fill="rgba(201,169,110,0.4)" />
          <ellipse cx="38" cy="155" rx="14" ry="7" transform="rotate(25 38 155)" fill="rgba(74,21,85,0.35)" />
          <path d="M0,0 Q90,90 170,195" stroke="rgba(107,45,139,0.08)" strokeWidth="55" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </motion.div>
  );
}
