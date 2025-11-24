"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6"
    >
      <Navbar />
      <div className="flex justify-center  lg:justify-between h-screen items-center w-full overflow-hidden lg:w-[80%]">
        <div className=" space-y-10" data-aos="fade-right">
          <h1 className=" text-5xl lg:text-7xl text-center text-gray-600  lg:text-left font-bold">
            Hi, I’m <span className="text-cyan-700">RAMADAN</span>
          </h1>
          <p className="text-lg text-center  lg:text-left text-gray-600 max-w-md">
            A Frontend Developer crafting smooth, modern, and scalable web
            experiences with{" "}
            <span className="font-semibold">React, Next.js & TypeScript</span>.
          </p>
          <div className="mt-6 flex justify-center  lg:justify-start gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-cyan-700 text-white font-medium shadow hover:bg-cyan-600 transition z-50"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100 transition z-50"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-gray-600 text-white font-medium shadow hover:bg-gray-900 transition z-50"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0" data-aos="fade-left">
        <Image src="/arc.svg" width={500} height={300} alt="arc" />
      </div>
    {/** <DotLottieReact
        src="/welcome.lottie"
        speed={0.5}
        autoplay
        className="absolute top-0 left-0 w-full h-full -z-10 "
      /> */}  
      <div
        className="absolute right-10 top-100 space-y-2  text-sm hidden lg:block"
        data-aos="fade-up"
      >
        <div className="flex flex-col justifiy-between  items-center space-y-20    transform ">
          <a
            href="https://github.com/starkid111"
            target="_blank"
            className="text-cyan-700 font-bold tracking-widest hover:text-cyan-600 cursor-pointer transform rotate-90"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/ramadan-adewale-12aaa8244/"
            target="_blank"
            className="text-cyan-700 font-bold tracking-widest hover:text-cyan-600 cursor-pointer transform rotate-90"
          >
            LINKEDIN
          </a>

          <a
            href="mailto:Ramadanadex111@gmail.com"
            className="text-cyan-700 font-bold tracking-widest hover:text-cyan-600 cursor-pointer transform rotate-90"
          >
            EMAIL
          </a>
        </div>
      </div>
    </motion.section>
  );
}
