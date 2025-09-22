"use client";

import { ExternalLink, Github } from "lucide-react";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Food Recipe App",
      desc: "A recipe web app built with React & Tailwind, fetching data from an external API.",
      demo: "https://your-live-demo-link.com",
      github: "https://github.com/yourusername/food-recipe-app",
    },
    {
      title: "E-Commerce Demo",
      desc: "A full-stack e-commerce-like project using Next.js, TypeScript, and Supabase Auth.",
      demo: "https://your-live-demo-link.com",
      github: "https://github.com/yourusername/ecommerce-demo",
    },
    {
      title: "Task Manager App",
      desc: "A React app using Context API & useReducer for state management, tracking tasks efficiently.",
      demo: "https://your-live-demo-link.com",
      github: "https://github.com/yourusername/task-manager-app",
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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) : any => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-1 text-blue-600 font-medium hover:underline"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-700 font-medium hover:underline"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
