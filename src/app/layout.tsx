import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Başarıların, zarafetin ve attığın her adım için...",
  description: "Kişisel bir anı ve yolculuk sayfası.",
  openGraph: {
    title: "Bu Yolculuk Sana Özel",
    description: "Başarıların, zarafetin ve attığın her adım için...",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
