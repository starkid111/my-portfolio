"use client";

import "aos/dist/aos.css";

import { useEffect } from "react";

import AOS from "aos";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main className="min-h-screen relative  text-gray-900">
      <ScrollToTop />
      <Hero />
      <About />
      <div className="block md:hidden ">
        <Projects />
        <Skills />
      </div>
      <div className="hidden md:block">
        <ProjectGrid />
        <TechStack />
      </div>

      <Contact />
    </main>
  );
}



