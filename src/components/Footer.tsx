"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 text-center border-t" style={{ borderColor: "rgba(107,45,139,0.12)" }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p
          className="mb-2"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.9rem",
            color: "rgba(201,169,110,0.45)",
          }}
        >
          Bu Yolculuk Sana Özel...
        </p>
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            color: "rgba(242,237,228,0.15)",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Her an, bir sanat eseri — her adım, bir şiir
        </p>
      </motion.div>
    </footer>
  );
}
