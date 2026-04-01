"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Lena (EdTech App & Landing Site)",
      role: "Junior Frontend Engineer",
      duration: "Jan 2026 - Present",
      description: "Lena is an AI-powered educational platform designed to accelerate learning in math and literacy for primary school students through gamification and personalized tutoring.",
      points: [
        "Contributed to an offline-capable Progressive Web App (PWA) with background synchronization to support usage in low-network conditions.",
        "Designed and implemented a multi-role onboarding and authentication flow, streamlining the experience for both parents and schools.",
        "Integrated PostHog for product analytics and managed a localization (i18n) system with 2,500+ translation keys.",
        "Built the landing page UI and structured responsive components for dual-target audiences (Schools & Parents).",
      ],
    },
    {
      company: "Spotlight",
      role: "Frontend Developer / Core Contributor",
      duration: "Dec 2025",
      description: "Spotlight is a professional talent discovery and event management platform that allows creators to build portfolios and connect with recruiters.",
      points: [
        "Engineered robust end-to-end authentication flows with seamless backend integration.",
        "Architected scalable global state management solutions using Zustand",
        "Translated complex Figma mockups into pixel-perfect, responsive UI including Landing, Explore, and User Dashboard interfaces.",
        "Interfaced with Cloudinary for optimized media storage.",
      ],
    },
  ];

  const education = [
    {
      institution: "Yaba College of Technology (YABATECH)",
      degree: "Higher National Diploma (HND), Electrical Electronics Engineering",
      duration: "In View (HND 2 - Present)",
    },
    {
      institution: "Axia Africa",
      degree: "Front-End Development Certification",
      duration: "Completed: 2024",
    },
    {
      institution: "Yaba College of Technology (YABATECH)",
      degree: "Ordinary National Diploma (OND), Electrical Electronics Engineering",
      duration: "Completed: 2023",
    },
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        {/* Desktop Split, Mobile Stacked */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          {/* Experience Column */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-700 mb-10 uppercase">
              Experience
            </h2>
            <div className="relative border-l-2 border-cyan-100 ml-3 md:ml-0">
              {experiences.map((exp, idx) => (
                <div key={idx} className="mb-12 ml-8 relative group">
                  <div className="absolute w-4 h-4 rounded-full bg-cyan-500 -left-[41px] top-1.5 border-4 border-white group-hover:bg-cyan-600 transition-colors"></div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                  <p className="text-cyan-700 font-medium mb-1">{exp.role}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                  <p className="text-gray-600 italic text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-gray-600">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-700 mb-10 lg:pl-4 uppercase">
              Education
            </h2>
            <div className="relative border-l-2 border-cyan-100 ml-3 md:ml-4">
              {education.map((edu, idx) => (
                <div key={idx} className="mb-10 ml-8 relative group">
                  <div className="absolute w-4 h-4 rounded-full bg-cyan-500 -left-[41px] top-1.5 border-4 border-white group-hover:bg-cyan-600 transition-colors"></div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                  <p className="text-gray-700 font-medium mb-1">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
