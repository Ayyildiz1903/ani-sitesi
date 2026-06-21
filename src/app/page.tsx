"use client";

import { useState } from "react";
import IntroScreen from "@/components/IntroScreen";
import ParticleField from "@/components/ParticleField";
import MusicControl from "@/components/MusicControl";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [musicRef, setMusicRef] = useState<HTMLAudioElement | null>(null);

  const handleIntroComplete = (audio: HTMLAudioElement) => {
    setMusicRef(audio);
    setIntroComplete(true);
  };

  return (
    <main className="relative min-h-screen bg-noir overflow-x-hidden">
      {/* SVG defs for brush/glow filters */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="brushFilter" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.04 0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float-slow"
          style={{
            background:
              "radial-gradient(ellipse, #6B2D8B 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 animate-float-slow"
          style={{
            background:
              "radial-gradient(ellipse, #3D0A52 0%, transparent 70%)",
            filter: "blur(80px)",
            animationDelay: "4s",
          }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full opacity-6"
          style={{
            background:
              "radial-gradient(ellipse, #C9A96E 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Particles always render */}
      <ParticleField />

      {/* Intro gate */}
      <AnimatePresence>
        {!introComplete && (
          <IntroScreen onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Main content revealed after intro */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <MusicControl audioElement={musicRef} />
            <HeroSection />
            <GallerySection />
            <MessageSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
