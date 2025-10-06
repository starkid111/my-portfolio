"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-cover  bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/footer-bg.svg')" }}
      data-aos="fade-down"
    >
      <div className="max-w-3xl  mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-700 mb-4 tracking-widest">
          Get In Touch.
        </h2>
        <p className="text-gray-600 mt-10">
          Have a project in mind or just want to connect? Let’s talk.
        </p>
        <div className="flex flex-col space-y-5 md:items-center md:flex-row  justify-center md:justify-between mt-10">
          <div className="space-y-2">
            <p className="tracking-widest font-semibold text-gray-600 text-left">
              REACH ME AT
            </p>
            <p className="text-gray-500 text-left">Ramadanadex111@gmail.com</p>
          </div>
            <div className="space-y-2">
            <p className="tracking-widest text-gray-600 font-semibold text-left">
              SOCIALS
            </p>
             <div className="flex  gap-6">
          <a
            href="mailto:your@email.com"
            className="text-gray-500 hover:text-cyan-700 transition"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-gray-500 hover:text-cyan-700 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-500 hover:text-cyan-700 transition"
          >
            <Linkedin size={28} />
          </a>
        </div>
          </div>
          <button className="tracking-widest cursor-pointer w-full md:w-[300px] text-cyan-700 border border-gray-400 py-2 items-center">
            SAY HELLO.
          </button>
        </div>

       
      </div>
      <div className="mt-20  text-gray-500 space-y-10">
          <hr />
      <p>
        @copyright 2025 | Designed & Built by <span className="font-bold text-cyan-700 tracking-widest">RAMADAN.</span>
      </p>
      </div>
    
    </motion.section>
  );
}
