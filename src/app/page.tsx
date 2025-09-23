// Portfolio Starter Code for WILDR£AM$

// File: app/page.tsx
// app/page.tsx (Next.js 13+ App Router)
// app/page.tsx
// app/page.tsx
"use client";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900">
      <ScrollToTop />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
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
