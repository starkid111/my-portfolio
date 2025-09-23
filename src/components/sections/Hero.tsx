"use client";

import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center px-6"
    >
      <Navbar />
      <div className="flex justify-center  lg:justify-between h-screen items-center w-full lg:w-[80%]">
        <div className=" space-y-10">
          <h1 className=" text-5xl lg:text-7xl text-center  lg:text-left font-bold">
            Hi, I’m <span className="text-blue-600">RAMADAN</span>
          </h1>
          <p className="text-lg text-center  lg:text-left text-gray-600 max-w-md">
            Frontend Developer crafting smooth, modern, and scalable web
            experiences with{" "}
            <span className="font-semibold">React, Next.js & TypeScript</span>.
          </p>
          <div className="mt-6 flex justify-center  lg:justify-start gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-gray-800 text-white font-medium shadow hover:bg-gray-900 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
     
      </div>

      <div className="absolute right-0 top-0">
        <Image src="/arc.svg" width={500} height={300} alt="arc" />
      </div>
      <div className="absolute right-10 top-70 space-y-2  text-sm hidden lg:block">
          <div className="flex flex-col justifiy-between  items-center space-y-20    transform ">
  <span className="text-blue-600 tracking-widest transform rotate-90">
    MEDIUM
  </span>
  <span className="text-blue-600 tracking-widest transform rotate-90">
    LINKEDIN
  </span>
  <span className="text-blue-600 tracking-widest transform rotate-90">
    GITHUB
  </span>
  <span className="text-blue-600 tracking-widest transform rotate-90">
    TWITTER
  </span>
  <span className="text-blue-600 tracking-widest transform rotate-90">
    INSTAGRAM
  </span>
</div>

      </div>
    </motion.section>
  );
}
