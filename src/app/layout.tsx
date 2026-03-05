import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Forma — Design System for Creatives",
  description: "Forma gives creative teams a unified design system, tokens, components, and documentation that scale without friction.",
  openGraph: {
    title: "Forma — Design System Software",
    description: "Design with intention, build with precision. Forman gives creative teams a unified design system.",
    type: "website",
    url: "https://forma.design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased selection:bg-brand-accent selection:text-brand-white`}
      >
        {children}
      </body>
    </html>
  );
}
