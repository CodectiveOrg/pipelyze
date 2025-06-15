import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";

import clsx from "clsx";

import "@/styles/colors.css";
import "@/styles/shadows.css";
import "@/styles/typography.css";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pipelyze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.className, barlow.variable)}>
      <body>{children}</body>
    </html>
  );
}
