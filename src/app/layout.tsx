import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Typography from "@/components/Typography";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="en" className={inter.className}>
      <body>
        <Typography variant="h1">l;dsjasdlfj</Typography>
        {children}</body>
    </html>
  );
}
