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
      src: "/lena.png",
      title: "Lena",
      desc: "Lena is an AI-powered EdTech platform that accelerates learning for primary students by blending a personalized AI tutor with curriculum-aligned gamification. I architected its robust offline-first PWA system, ensuring a seamless experience for students, parents, and schools even in low-connectivity areas.",
      demo: "https://uselena.com/",
      github: "private",
    },
     {
      src: "/spotlight.png",
      title: "Spotlight",
      desc: "Spotlight is a talent discovery platform for professionals. Built in collaboration with a team where I worked as the frontend developer, it allows users to create portfolios, showcase their skills, and features an 'Explore' page for recruiters to discover and connect with top talent.",
      demo: "https://spotlight-flax.vercel.app/",
      github: "https://github.com/Fortress-Team/frontend",
    },
   
    {
      src: "/gadgetHub.png",
      title: "Gadget Hub",
      desc: "A Gadget Management Dashboard built to demonstrate real CRUD operations, API fetching with Axios, state management, modals, and pagination. It’s a practical front-end project that showcases my ability to structure real workflows, handle data flows, and build functional, scalable UI components.",
      github: "https://github.com/starkid111/Gadget-Manager-App",
      demo: "https://gadget-manager-app.vercel.app/",
    },
    {
      src: "/cauntr.png",
      title: "Cauntr UI",
      desc: "Cauntr is a web app for small businesses to manage inventory, track sales, and monitor profits ,built in collaboration with a full-stack developer. I handled the front-end UI with Tailwind and Next.js from Figma designs, creating reusable, mobile-first components while my partner managed data and API integration, all coordinated via Git and Github.",
      demo: "https://cauntr-ui.vercel.app/signup",
      github: "https://github.com/stDean/cauntr-ui",
    },
    {
      src: "/foodieland.png",
      title: "FoodieLand",
      desc: "Foodieland is a recipe and food blog built with React and Tailwind CSS to showcase recipes and articles in a clean, organized layout. I implemented the full front-end UI from Figma designs, creating reusable, responsive components for recipe cards, navigation, and layout, delivering a polished, functional interface.",
      demo: "https://foodieland-olive.vercel.app/",
      github: "https://github.com/starkid111/Foodieland",
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
      className="py-20 px-6 bg-cover bg-center bg-no-repeat overflow-hidden secondary-bg"
    >
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-12 tracking-widest">
          Projects.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-2xl flex flex-col h-full justify-between  shadow p-6 hover:shadow-lg transition"
              style={{ backgroundImage: "url('/project-bg.jpg')" }}
            >
              <div>
                <Image
                  src={project.src}
                  width={400}
                  height={200}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-[250px]"
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
                {project.github !== "private" && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-600 font-medium hover:underline"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
