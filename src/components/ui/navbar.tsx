"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Close menu and smooth scroll
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // close dropdown

    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full justify-center items-center">
        <div
          className="fixed top-0 border-[0.5px] border-[#6B6B6B] flex justify-between items-center p-5 rounded-xl w-[80%]"
          style={{ backgroundImage: "url('/portfolio-bg.svg')" }}
        >
          <p className="font-bold cursor-pointer">Home</p>
          <p className="font-bold cursor-pointer">About</p>
          <p className="font-bold cursor-pointer">Skills</p>
          <p className="font-bold cursor-pointer">Say Hello</p>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className="fixed top-0 flex flex-col w-full md:hidden z-50"
        style={{ backgroundImage: "url('/portfolio-bg.svg')" }}
      >
        <div className="flex w-full p-5 border-b border-[#6B6B6B] justify-between items-center">
          <h1 className="font-bold">RAMADAN.</h1>
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
              <a
                href="#home"
                onClick={(e) => handleMenuClick(e, "#home")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleMenuClick(e, "#about")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => handleMenuClick(e, "#skills")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={(e) => handleMenuClick(e, "#contact")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
