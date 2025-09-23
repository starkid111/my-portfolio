"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll
  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track section in view
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
      { threshold: 0.5 } // ~50% visible
    );

    sections.forEach((section) => observer.observe(section));

    // Special fix: reset to "home" when scrolling back to top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "RAMADAN." },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Say Hello" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full justify-center items-center z-50">
        <div
          className="fixed top-10 border-[0.5px] border-[#6B6B6B] flex justify-between items-center p-5 rounded-xl w-[80%]"
          style={{ backgroundImage: "url('/portfolio-bg.svg')" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleMenuClick(e, `#${link.id}`)}
            >
              <p
                className={`font-bold cursor-pointer tracking-widest transition-colors ${
                  activeSection === link.id
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                {link.label}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className="fixed top-0 flex flex-col w-full md:hidden z-50"
        style={{ backgroundImage: "url('/portfolio-bg.svg')" }}
      >
        <div className="flex w-full p-5 border-b border-[#6B6B6B] justify-between items-center">
          <h1 className="font-bold tracking-widest">RAMADAN.</h1>
          <div onClick={handleClick} className="cursor-pointer">
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>

        {/* Mobile Dropdown with Framer Motion */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border border-gray-200 rounded-lg shadow-lg w-full backdrop-blur-md"
              style={{ backgroundImage: "url('/portfolio-bg.svg')" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleMenuClick(e, `#${link.id}`)}
                  className={`block px-4 py-2 font-bold tracking-widest ${
                    activeSection === link.id
                      ? "text-blue-500"
                      : "text-gray-800 hover:text-blue-500"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
