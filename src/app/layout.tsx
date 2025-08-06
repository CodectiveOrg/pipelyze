import { PropsWithChildren, ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/colors.css";
import "@/styles/shadows.css";
import "@/styles/shape.css";
import "@/styles/typography.css";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pipelyze",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props): ReactNode {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
