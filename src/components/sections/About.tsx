"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/second-bg.svg')" }}
      
    >
      <h2 className="text-3xl font-bold mb-4 text-cyan-700 text-center tracking-widest" data-aos="fade-up">
        About Me.
      </h2>
      <div className="flex flex-col items-center gap-5" data-aos="fade-up">
        <DotLottieReact
          src="/about.lottie"
          loop
          autoplay
          className="w-[500px] h-[250px]"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            I’m a Frontend Developer with experience in  <span>React, Next.js,
            TypeScript, and Tailwind CSS.</span> I’m passionate about building clean,
            responsive, and user-focused web experiences that merge creativity
            with functionality. Coming from humble beginnings, I’ve learned the
            value of resilience, focus, and growth through every challenge. Each
            project I take on reflects my commitment to progress, writing
            better code, learning faster, and building solutions that stand out.
            Right now, I’m focused on sharpening my skills, working on
            real-world projects, and building solutions that go beyond visuals.
            I’m chasing excellence, not shortcuts. When I’m not coding, I’m
            probably learning something new, brainstorming wild ideas, or
            staying low and working in silence, because success speaks loudest
            when the grind is quiet.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
