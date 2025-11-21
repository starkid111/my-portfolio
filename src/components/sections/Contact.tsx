"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);

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
      <div
        className="max-w-3xl  mx-auto t
      ext-center"
      >
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
                href="mailto:Ramadanadex111@gmail.com"
                className="text-gray-500 hover:text-cyan-700 transition"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://github.com/starkid111"
                target="_blank"
                className="text-gray-500 hover:text-cyan-700 transition"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/ramadan-adewale-12aaa8244/"
                target="_blank"
                className="text-gray-500 hover:text-cyan-700 transition"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="tracking-widest cursor-pointer w-full md:w-[300px] text-cyan-700 border border-gray-400 py-2 items-center"
          >
            HIRE ME.
          </button>
        </div>
      </div>
      <div className="mt-20  text-gray-500 space-y-10">
        <hr />
        <p>
          @copyright 2025 | Designed & Built by{" "}
          <a
            href="https://github.com/starkid111"
            target="_blank"
            className="font-bold text-cyan-700 tracking-widest"
          >
            RAMADAN.
          </a>
        </p>
      </div>

      {/**Modal Section */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="fixed inset-0 flex items-center justify-center z-1000 p-4"
            >
              <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative"
                style={{ backgroundImage: "url('/portfolio-bg.svg')" }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                >
                  ×
                </button>

                <h2 className="text-2xl text-cyan-700 font-bold mb-4">{`Let's Connect 👋`}</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  {`Drop your message below — I’ll reply as soon as I can.`}
                </p>

                <form
                  action="https://formspree.io/f/xrbyajja"
                  method="POST"
                  className="space-y-4"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    rows={4}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-cyan-700 text-white hover:bg-cyan-600 cursor-pointer transition"
                  >
                    Send Message 🚀
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
