"use client"

import ChromaGrid from "../ChromaGrid";
import { motion } from "framer-motion";

const items = [
  {
    image: "/lena.png",
    title: "Lena",
    subtitle: "Lena is an AI-powered EdTech platform that accelerates learning for primary students by blending a personalized AI tutor with curriculum-aligned gamification. I architected its robust offline-first PWA system, ensuring a seamless experience for students, parents, and schools even in low-connectivity areas.",
    borderColor: "#10B981",
    gradient: "linear-gradient(to bottom, #007595,   #D9D9D8 ,#D9D9D8 )",
    url: "https://uselena.com/",
    github: "private",
  },
  {
    image: "/spotlight.png",
    title: "Spotlight",
    subtitle: "Spotlight is an event management and talent discovery platform for professionals. Built in collaboration with a team where I worked as the frontend developer, it allows users to create portfolios, showcase their skills, and features an 'Explore' page for recruiters to discover and connect with top talent.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(to bottom, #007595,   #D9D9D8 ,#D9D9D8 )",
    url: "https://spotlight-flax.vercel.app/",
    github: "https://github.com/Fortress-Team/frontend",
  },
  {
    image: "/gadgetHub.png",
    title: "GadgetHub",
    subtitle: "A Gadget Management Dashboard built to demonstrate real CRUD operations, API fetching with Axios, state management, modals, and pagination. It’s a practical front-end project that showcases my ability to structure real workflows, handle data flows, and build functional, scalable UI components.",
    
    borderColor: "#007595",
    gradient: "linear-gradient(to bottom, #007595,   #D9D9D8 ,#D9D9D8 )",
    url: "https://gadget-manager-app.vercel.app/",
       github: "https://github.com/starkid111/Gadget-Manager-App",
  },
  {
    image: "/cauntr.png",
    title: "Cauntr UI",
    subtitle: "Cauntr is a web app for small businesses to manage inventory, track sales, and monitor profits ,built in collaboration with a full-stack developer. I handled the front-end UI with Tailwind and Next.js from Figma designs, creating reusable, mobile-first components while my partner managed data and API integration, all coordinated via Git and Github.",
  
    borderColor: "#10B981",
    gradient: "linear-gradient(to bottom, #007595,   #D9D9D8 ,#D9D9D8 )",
    url: "https://cauntr-ui.vercel.app/signup",
      github: "https://github.com/stDean/cauntr-ui",
  },
   {
    image: "/foodieland.png",
    title: "FoodieLand",
    subtitle: "Foodieland is a recipe and food blog built with React and Tailwind CSS to showcase recipes and articles in a clean, organized layout. I implemented the full front-end UI from Figma designs, creating reusable, responsive components for recipe cards, navigation, and layout, delivering a polished, functional interface.",

    borderColor: "#3B82F6",
gradient: "linear-gradient(to bottom, #007595,   #D9D9D8 ,#D9D9D8 )",
    url: "https://foodieland-olive.vercel.app/",
    github: "https://github.com/starkid111/Foodieland",
  },
  {
    image: "/qyra.png",
    title: "Qyra Pass",
    subtitle: "A clean, responsive landing page for QyraPass — a QR-based access solution, built with React and Tailwind CSS.",
  
    borderColor: "#10B981",
gradient: "linear-gradient(to bottom, #007595,   #D9D9D8 ,#D9D9D8 )",
    url:  "https://qyrapass-com.vercel.app/",
     github: "https://github.com/deyemiobaa/qyrapass.com",
  }
];



const ProjectGrid = () => {
  return (
    <motion.section
      id="project-grid"
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
       <div style={{ height: '', position: 'relative' }} className="w-[80%] mx-auto ">
  <ChromaGrid
    items={items}
    radius={300}
    damping={0.45}
    className="w-full h-full"
  />
</div> 
      </div>
    </motion.section>
  )
}

export default ProjectGrid