"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MusicControlProps {
  audioElement: HTMLAudioElement | null;
}

export default function MusicControl({ audioElement }: MusicControlProps) {
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    if (!audioElement) return;
    if (playing) {
      audioElement.pause();
      setPlaying(false);
    } else {
      audioElement.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      aria-label={playing ? "Müziği durdur" : "Müziği çal"}
      className="fixed top-5 right-6 z-50 p-2 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.35 }}
      whileHover={{ opacity: 0.75, scale: 1.1 }}
      transition={{ duration: 0.3 }}
      style={{ background: "rgba(61,10,82,0.0)" }}
    >
      {playing ? <SoundOnIcon /> : <SoundOffIcon />}
    </motion.button>
  );
}

function SoundOnIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      {/* Bars that animate */}
      {[
        { x: 2, h: 6, delay: 0 },
        { x: 6, h: 12, delay: 0.2 },
        { x: 10, h: 16, delay: 0.4 },
        { x: 14, h: 10, delay: 0.3 },
        { x: 18, h: 5, delay: 0.1 },
      ].map((bar, i) => (
        <motion.rect
          key={i}
          x={bar.x}
          width="2.5"
          rx="1"
          fill="#C9A96E"
          animate={{ height: [bar.h * 0.5, bar.h, bar.h * 0.5], y: [12 - bar.h * 0.25, 12 - bar.h * 0.5, 12 - bar.h * 0.25] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: bar.delay }}
        />
      ))}
    </svg>
  );
}

function SoundOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round">
      <line x1="2" y1="2" x2="22" y2="22" />
      <path d="M9 9v6h4l5 5V4l-5 5H9z" />
    </svg>
  );
}
