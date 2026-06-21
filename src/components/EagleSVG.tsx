"use client";

import { motion } from "framer-motion";

interface EagleSVGProps {
  wingsOpen: boolean;
  glowing?: boolean;
}

export default function EagleSVG({ wingsOpen, glowing = true }: EagleSVGProps) {
  return (
    <div
      className={`relative ${glowing ? "eagle-glow" : ""}`}
      style={{ width: "clamp(260px, 45vw, 420px)", height: "clamp(220px, 38vw, 360px)" }}
    >
      <svg
        viewBox="0 0 420 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="eagleBodyGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#E8C97A" />
            <stop offset="45%" stopColor="#C9A96E" />
            <stop offset="100%" stopColor="#7A4F1A" />
          </radialGradient>
          <radialGradient id="wingGradL" cx="80%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#9B59B6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#6B2D8B" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2D0840" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="wingGradR" cx="20%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#9B59B6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#6B2D8B" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2D0840" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="headGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5F0E8" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#D4C8A8" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Outer glow halo */}
        <ellipse
          cx="210" cy="175"
          rx="130" ry="105"
          stroke="rgba(199,125,255,0.05)"
          strokeWidth="35"
        />
        <ellipse
          cx="210" cy="175"
          rx="95" ry="78"
          stroke="rgba(199,125,255,0.04)"
          strokeWidth="20"
        />

        {/* LEFT WING */}
        <motion.g
          style={{ transformOrigin: "210px 185px" }}
          initial={{ scaleX: 0.08 }}
          animate={{ scaleX: wingsOpen ? 1 : 0.08 }}
          transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1], delay: wingsOpen ? 0.1 : 0 }}
        >
          {/* Main wing shape */}
          <path
            d="M205,185 Q165,155 115,115 Q80,92 45,78 Q30,72 10,65
               Q30,82 52,102 Q82,126 110,148 Q148,168 190,182Z"
            fill="url(#wingGradL)"
          />
          <path
            d="M205,188 Q155,175 100,148 Q68,132 38,118 Q22,110 5,102
               Q28,115 58,132 Q95,150 138,168 Q168,180 200,190Z"
            fill="url(#wingGradL)"
            opacity="0.75"
          />
          <path
            d="M200,193 Q145,188 90,168 Q58,155 30,140 Q14,130 0,120
               Q24,132 55,148 Q92,164 138,178 Q168,187 200,195Z"
            fill="rgba(45,8,64,0.85)"
          />
          {/* Feather detail lines */}
          <path
            d="M205,185 Q165,158 118,122 M205,188 Q158,172 105,148 M200,193 Q148,180 94,162"
            stroke="rgba(201,169,110,0.25)"
            strokeWidth="0.8"
            fill="none"
          />
        </motion.g>

        {/* RIGHT WING */}
        <motion.g
          style={{ transformOrigin: "210px 185px" }}
          initial={{ scaleX: 0.08 }}
          animate={{ scaleX: wingsOpen ? 1 : 0.08 }}
          transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1], delay: wingsOpen ? 0.1 : 0 }}
        >
          <path
            d="M215,185 Q255,155 305,115 Q340,92 375,78 Q390,72 410,65
               Q390,82 368,102 Q338,126 310,148 Q272,168 230,182Z"
            fill="url(#wingGradR)"
          />
          <path
            d="M215,188 Q265,175 320,148 Q352,132 382,118 Q398,110 415,102
               Q392,115 362,132 Q325,150 282,168 Q252,180 220,190Z"
            fill="url(#wingGradR)"
            opacity="0.75"
          />
          <path
            d="M220,193 Q275,188 330,168 Q362,155 390,140 Q406,130 420,120
               Q396,132 365,148 Q328,164 282,178 Q252,187 220,195Z"
            fill="rgba(45,8,64,0.85)"
          />
          <path
            d="M215,185 Q255,158 302,122 M215,188 Q262,172 315,148 M220,193 Q272,180 326,162"
            stroke="rgba(201,169,110,0.25)"
            strokeWidth="0.8"
            fill="none"
          />
        </motion.g>

        {/* BODY */}
        <ellipse cx="210" cy="215" rx="24" ry="38" fill="url(#eagleBodyGrad)" />
        <ellipse cx="210" cy="198" rx="30" ry="26" fill="url(#eagleBodyGrad)" />

        {/* HEAD */}
        <ellipse cx="210" cy="158" rx="22" ry="26" fill="url(#eagleBodyGrad)" />
        <ellipse cx="210" cy="150" rx="17" ry="16" fill="url(#headGrad)" />

        {/* EYE */}
        <circle cx="218" cy="147" r="5.5" fill="#08060F" />
        <circle cx="219.5" cy="145.5" r="1.8" fill="rgba(245,240,232,0.9)" />
        <circle cx="218" cy="147" r="3.5" fill="#1A0030" />

        {/* BEAK */}
        <path
          d="M222,158 Q234,162 229,170 Q221,168 217,162Z"
          fill="url(#eagleBodyGrad)"
        />
        <path
          d="M222,158 Q232,161 227,167"
          stroke="rgba(100,60,10,0.7)"
          strokeWidth="0.6"
          fill="none"
        />

        {/* CHEST WHITE PATCH */}
        <ellipse cx="210" cy="205" rx="14" ry="18" fill="rgba(245,240,232,0.15)" />

        {/* TAIL */}
        <path
          d="M198,248 Q210,268 215,275 Q218,278 222,275 Q218,268 222,248Z"
          fill="url(#eagleBodyGrad)"
        />
        <path
          d="M202,248 Q210,264 214,272 M206,248 Q212,262 216,270"
          stroke="rgba(100,60,10,0.35)"
          strokeWidth="0.7"
          fill="none"
        />

        {/* TALONS */}
        <g stroke="url(#eagleBodyGrad)" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <line x1="198" y1="268" x2="190" y2="288" />
          <line x1="198" y1="268" x2="196" y2="292" />
          <line x1="198" y1="268" x2="204" y2="290" />
          <line x1="222" y1="268" x2="214" y2="288" />
          <line x1="222" y1="268" x2="220" y2="292" />
          <line x1="222" y1="268" x2="228" y2="290" />
        </g>
      </svg>
    </div>
  );
}
