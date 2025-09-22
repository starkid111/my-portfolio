"use client";

import { Github, Linkedin, Mail, Menu } from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/footer-bg.svg')" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          Have a project in mind or just want to connect? Let’s talk.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:your@email.com"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
