"use client";

import "aos/dist/aos.css";

import AOS from "aos";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Skills from "@/components/sections/Skills";
import { useEffect } from "react";

export default function Home() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <main className="min-h-screen  text-gray-900">
      <ScrollToTop />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}



