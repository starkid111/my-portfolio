// "use client";

// import CurvedLoop from "../CurvedLoop";
// import { motion } from "framer-motion";

// export default function TechStack() {
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Git",
//     "GitHub",
//     "Next.js",
//     "TypeScript",
//     "TailwindCSS",
//   ];

//   return (
//     <motion.section
//       id="skills"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="py-20 px-6 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/second-bg.jpg')" }}
//     >
//       <div className="">
//         <h2 className="text-3xl text-center font-bold mb-8 text-cyan-700 tracking-widest">
//           Tech Stack.
//         </h2>
//         <CurvedLoop
//           marqueeText="HTML ✦ CSS ✦ JavaScript ✦ React ✦ TailwindCSS ✦ TypeScript ✦ Next.js ✦ Git ✦ Github  ✦"
//           speed={3}
//           curveAmount={100}
//           direction="right"
//           interactive={true}
//           className="custom-text-style text-5xl text-black "
//         />
//       </div>
//     </motion.section>
//   );
// }
