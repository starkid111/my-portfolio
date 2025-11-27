"use client"

import { ExternalLink, Github } from "lucide-react";

import ChromaGrid from "../ChromaGrid";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    image: "/gadgetHub.png",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "/cauntr.png",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
   {
    image: "/gadgetHub.png",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "/cauntr.png",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
];



const ProjectGrid = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6"
    >
      <div className="w-full" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-12 tracking-widest">
          Projects.
        </h2>
       <div style={{ height: '', position: 'relative' }} className="flex flex-col">
  <ChromaGrid
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div> 
      </div>
    </motion.section>
  )
}

export default ProjectGrid