"use client";

import Image from "next/image";
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
            <h2 className="text-3xl font-bold mb-4 text-center tracking-widest">About Me</h2>
            <div className="flex flex-col items-center gap-8 mt-8">
              
                 <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-600 leading-relaxed">
          I’m an aspiring Software Engineer with over 2 years of frontend
          development experience. Skilled in building modern apps with React,
          Next.js, and Tailwind. I’m passionate about solving problems,
          bringing ideas to life, and creating experiences that users love.
        </p>
      </div>
            </div>
     
    </motion.section>
  );
}
