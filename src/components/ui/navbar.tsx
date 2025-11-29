"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id: string) => {
    setIsOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    } else {
      const section = document.getElementById(id);
      if (section) {
        const offset = 80;
        const top =
          section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  // Track active section
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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleTopScroll = () => {
      if (window.scrollY < 100) setActiveSection("home");
    };

    window.addEventListener("scroll", handleTopScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "RAMADAN." },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Hire Me" },
  ];

  const mobileLinks = navLinks.filter((link) => link.id !== "home");

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full justify-center items-center z-50">
        <div
          className="fixed top-10 border-[0.5px] border-[#6B6B6B] flex justify-between items-center p-5 rounded-xl w-[80%]"
          style={{ backgroundImage: "url('/portfolio-bg.jpg')"}}
          data-aos="fade-down"
        >
          {navLinks.map((link) => (
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
      </div>

      {/* Mobile Navbar */}
      <div
        className="fixed top-0 flex flex-col w-full md:hidden z-50 portfolio-bg"
        
      >
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

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border border-gray-200 rounded-lg shadow-lg w-full backdrop-blur-md portfolio-bg"
            >
              {mobileLinks.map((link) => (
                <p
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`block px-4 py-2 font-bold tracking-widest cursor-pointer ${
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
