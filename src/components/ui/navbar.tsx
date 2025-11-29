"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen((prev) => !prev);


  const handleScroll = (id: string) => {
    setIsOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const nav: HTMLElement | null = document.querySelector("#main-navbar");
      const offset = nav?.offsetHeight || 0;

      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset - 10;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

   const Links = [
    { id: "home", label: "RAMADAN." },
    { id: "about", label: "About" },
    { id: "project-grid", label: "Projects" },
    { id: "tech-stack", label: "Skills" },
    { id: "contact", label: "Hire Me" },
  ];

  const navLinks = [
    { id: "home", label: "RAMADAN." },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Hire Me" },
  ];

  return (
    <>
      {/* DESKTOP */}
      <div
        id="main-navbar"
        className="hidden md:flex fixed top-10 left-1/2 -translate-x-1/2 
                   w-[80%] p-5 border border-[#6B6B6B] rounded-xl 
                   justify-between items-center z-[60] portfolio-bg"
      >
        {Links.map((link) => (
          <p
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className={`font-bold cursor-pointer tracking-widest transition-colors ${
              activeSection === link.id
                ? "text-cyan-700"
                : "text-gray-600 hover:text-cyan-700"
            }`}
          >
            {link.label}
          </p>
        ))}
      </div>

      {/* MOBILE */}
      <div className="fixed top-0 w-full md:hidden z-[60] portfolio-bg">
        <div className="flex w-full p-5 border-b border-[#6B6B6B]/50 justify-between items-center">
          <h1
            className="font-bold text-cyan-700 tracking-widest cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            RAMADAN.
          </h1>

          <div onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full border-b border-gray-300 portfolio-bg"
            >
              {navLinks
                .filter((link) => link.id !== "home")
                .map((link) => (
                  <p
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className={`px-4 py-3 font-bold tracking-widest cursor-pointer ${
                      activeSection === link.id
                        ? "text-cyan-700"
                        : "text-gray-800 hover:text-cyan-700"
                    }`}
                  >
                    {link.label}
                  </p>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
