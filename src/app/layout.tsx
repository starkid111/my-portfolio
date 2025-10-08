import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Loader from "@/components/ui/loader";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Ramadan's Portfolio",
  description: "Frontend Developer | React, Next.js, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Preload background image */}
        <link rel="preload" as="image" href="/portfolio-bg.svg" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundImage: "url('/portfolio-bg.svg')" }}
      >
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
