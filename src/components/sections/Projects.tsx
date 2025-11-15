"use client";

import { ExternalLink, Github } from "lucide-react";

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  src: string;
  title: string;
  desc: string;
  demo: string;
  github: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      src: "/foodieland.png",
      title: "Food Recipe App",
      desc: "A responsive food recipe platform built with React and Tailwind CSS, showcasing various recipes with dynamic UI components.",
      demo: "https://foodieland-olive.vercel.app/",
      github: "https://github.com/starkid111/Foodieland",
    },
    {
      src: "/cauntr.png",
      title: "E-Commerce Demo",
      desc: "A sleek, gadget-themed e-commerce interface built with Next.js and TypeScript, crafted in collaboration with a full-stack developer.",
      demo: "https://cauntr-ui.vercel.app/signup",
      github: "https://github.com/stDean/cauntr-ui",
    },
    {
      src: "/qyra.png",
      title: "Qyra Pass",
      desc: "A clean, responsive landing page for QyraPass — a QR-based access solution, built with React and Tailwind CSS.",
      github: "https://github.com/deyemiobaa/qyrapass.com",
      demo: "https://qyrapass-com.vercel.app/",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6"
    >
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-12 tracking-widest">
          Projects.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-2xl flex flex-col h-full justify-between  shadow p-6 hover:shadow-lg transition"
              style={{ backgroundImage: "url('/second-bg.svg')" }}
            >
              <div>
                <Image
                  src={project.src}
                  width={400}
                  height={200}
                  alt={project.title}
                  className="rounded-lg mb-4 h-[180px]"
                />
                <h3 className="text-xl font-semibold text-gray-600  mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
              </div>

              <div className="flex gap-3 items-end ">
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-1 text-cyan-700 font-medium hover:underline"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-600 font-medium hover:underline"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
