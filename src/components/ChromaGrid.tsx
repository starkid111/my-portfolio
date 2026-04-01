import { ExternalLink, Github } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  github?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,

  damping = 0.08,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const frameId = useRef<number | undefined>(undefined);
  const [isFading, setIsFading] = useState(true); //

  const demo: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
  ];

  const data = items?.length ? items : demo;

  const animate = () => {
    if (!rootRef.current) return;

    const dx = targetPos.current.x - currentPos.current.x;
    const dy = targetPos.current.y - currentPos.current.y;

    currentPos.current.x += dx * damping;
    currentPos.current.y += dy * damping;

    rootRef.current.style.setProperty("--x", `${currentPos.current.x}px`);
    rootRef.current.style.setProperty("--y", `${currentPos.current.y}px`);

    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      frameId.current = requestAnimationFrame(animate);
    } else {
      frameId.current = undefined;
    }
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const { width, height } = el.getBoundingClientRect();
    currentPos.current = { x: width / 2, y: height / 2 };
    targetPos.current = { x: width / 2, y: height / 2 };
    el.style.setProperty("--x", `${currentPos.current.x}px`);
    el.style.setProperty("--y", `${currentPos.current.y}px`);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    targetPos.current.x = e.clientX - r.left;
    targetPos.current.y = e.clientY - r.top;

    if (!frameId.current) {
      frameId.current = requestAnimationFrame(animate);
    }

    setIsFading(false);
  };

  const handleLeave = () => {
    const el = rootRef.current;
    if (el) {
      const { width, height } = el.getBoundingClientRect();
      targetPos.current = { x: width / 2, y: height / 2 };
    }

    if (!frameId.current) {
      frameId.current = requestAnimationFrame(animate);
    }

    setIsFading(true);
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);

    c.style.setProperty("filter", "grayscale(0)");
  };

  const handleCardLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    c.style.setProperty("filter", "grayscale(1)");
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={` relative w-full grid md:grid-cols-2 gap-5  justify-between ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties & Record<string, string>
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
          onClick={() => handleCardClick(c.url)}
          className="group w-full h-full relative flex flex-col rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer "
          style={
            {
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",

              filter: "grayscale(1)",
              transition: "filter 300ms ease-in-out",
            } as React.CSSProperties
          }
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          <div className="relative z-10 flex-1 p-[10px] box-border">
            <Image
            width={200}
            height={200}
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-[350px] object-cover rounded-[10px]"
            />
          </div>

          <footer className="relative z-10 p-3 text-gray-700 font-sans flex flex-col gap-1 flex-grow">
            <div>
              <h3 className="text-xl font-semibold text-gray-600">{c.title}</h3>

              <p className="text-gray-600 text-sm">{c.subtitle}</p>
            </div>

            <div className="flex gap-3 mt-auto pt-3 border-t border-gray-500/10">
              <a
                href={c.url}
                target="_blank"
                className="flex items-center gap-1 text-cyan-700 font-medium hover:underline"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              {c.github && c.github !== "private" && c.github !== "#" && (
                <a
                  href={c.github}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-600 font-medium hover:underline"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
            </div>
          </footer>
        </article>
      ))}

      <div
        ref={fadeRef}
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-40 ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
        }}
      />
    </div>
  );
};

export default ChromaGrid;
