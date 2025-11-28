import React, { RefObject, useEffect, useRef } from "react";

const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

const getMousePos = (e: Event): { x: number; y: number } => {
  const mouseEvent = e as MouseEvent;

  return { x: mouseEvent.clientX, y: mouseEvent.clientY };
};

interface CrosshairProps {
  color?: string;

  containerRef?: RefObject<HTMLElement | null>;
}

const Crosshair: React.FC<CrosshairProps> = ({ color = "#4d7cff" }) => {
  const lineHorizontalRef = useRef<HTMLDivElement>(null);
  const lineVerticalRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const renderedPos = useRef({ x: 0, y: 0 });
  const frameId = useRef<number | null>(null);

  const DAMPING = 0.15;

  const render = () => {
    if (!lineHorizontalRef.current || !lineVerticalRef.current) return;

    renderedPos.current.x = lerp(
      renderedPos.current.x,
      mouse.current.x,
      DAMPING
    );
    renderedPos.current.y = lerp(
      renderedPos.current.y,
      mouse.current.y,
      DAMPING
    );

    lineVerticalRef.current.style.transform = `translate3d(${renderedPos.current.x}px, 0, 0) translateX(-50%)`;
    lineHorizontalRef.current.style.transform = `translate3d(0, ${renderedPos.current.y}px, 0) translateY(-50%)`;

    frameId.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    const target = document.body;

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    renderedPos.current = { x: initialX, y: initialY };

    if (lineHorizontalRef.current && lineVerticalRef.current) {
      lineHorizontalRef.current.style.opacity = "0";
      lineVerticalRef.current.style.opacity = "0";
    }

    const handleMouseMove = (ev: Event) => {
      mouse.current = getMousePos(ev);

      if (lineHorizontalRef.current && lineVerticalRef.current) {
        lineHorizontalRef.current.style.transition = "opacity 0.3s ease-out";
        lineVerticalRef.current.style.transition = "opacity 0.3s ease-out";
        lineHorizontalRef.current.style.opacity = "1";
        lineVerticalRef.current.style.opacity = "1";
      }

      if (!frameId.current) {
        frameId.current = requestAnimationFrame(render);
      }
    };

    const handleMouseLeave = () => {
      if (lineHorizontalRef.current && lineVerticalRef.current) {
        lineHorizontalRef.current.style.opacity = "0";
        lineVerticalRef.current.style.opacity = "0";
      }
    };

    target.addEventListener("mousemove", handleMouseMove);
    target.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mouseleave", handleMouseLeave);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[10000]">
      <div
        ref={lineHorizontalRef}
        className={`absolute w-full h-px pointer-events-none`}
        style={{ background: color }}
      ></div>

      <div
        ref={lineVerticalRef}
        className={`absolute h-full w-px pointer-events-none`}
        style={{ background: color }}
      ></div>
    </div>
  );
};
export default Crosshair;
