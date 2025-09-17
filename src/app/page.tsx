// Portfolio Starter Code for WILDR£AM$

// File: app/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        WILDR£AM$
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl mb-6"
      >
        Frontend Developer on a mission from the trenches
      </motion.h2>
      <div className="flex gap-4">
        <Button asChild className="bg-white text-black hover:bg-gray-200">
          <Link href="/resume.pdf" download>
            Download Resume
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/projects">
            View Projects
          </Link>
        </Button>
      </div>
    </main>
  );
}

// Folder structure includes:
// - /public/resume.pdf (You will place your resume here)
// - /app/about/page.tsx (Your story)
// - /app/projects/page.tsx (Your builds)
// - /app/contact/page.tsx (Contact form or info)

// You also have Tailwind + Framer Motion installed for styling & animation.

// To get started:
// 1. Place your resume PDF in the /public folder
// 2. Run `npm install` then `npm run dev`
// 3. Start customizing About, Projects, etc.
