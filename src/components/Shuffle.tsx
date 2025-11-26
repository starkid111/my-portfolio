import React, { useEffect, useRef, useState, type JSX } from "react";

import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface ShuffleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  shuffleDirection?: "left" | "right";
  duration?: number;
  maxDelay?: number;
  ease?: string | ((t: number) => number);
  threshold?: number;
  rootMargin?: string;
  tag?: keyof JSX.IntrinsicElements;
  textAlign?: React.CSSProperties["textAlign"];
  onShuffleComplete?: () => void;
  shuffleTimes?: number;
  animationMode?: "random" | "evenodd";
  loop?: boolean;
  loopDelay?: number;
  stagger?: number;
  scrambleCharset?: string;
  colorFrom?: string;
  colorTo?: string;
  triggerOnce?: boolean;
  respectReducedMotion?: boolean;
  triggerOnHover?: boolean;
}

const Shuffle: React.FC<ShuffleProps> = ({
  text,
  className = "",
  style = {},
  shuffleDirection = "right",
  duration = 0.35,
  maxDelay = 0,
  ease = "power3.out",
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  onShuffleComplete,
  shuffleTimes = 1,
  animationMode = "evenodd",
  loop = false,
  loopDelay = 0,
  stagger = 0.03,
  scrambleCharset = "",
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  const splitRef = useRef<GSAPSplitText | null>(null);
  const wrappersRef = useRef<HTMLElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const playingRef = useRef(false);
  const hoverHandlerRef = useRef<((e: Event) => void) | null>(null);

  useEffect(() => {
    if ("fonts" in document) {
      if (document.fonts.status === "loaded") setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (
        respectReducedMotion &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
      ) {
        onShuffleComplete?.();
        return;
      }

      const el = ref.current;

      const startPct = (1 - threshold) * 100;
      const match = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const offsetValue = match ? parseFloat(match[1]) : 0;
      const offsetUnit = match ? match[2] || "px" : "px";
      const start = `top ${startPct}%${offsetValue === 0 ? "" : offsetValue < 0 ? `-=${Math.abs(offsetValue)}${offsetUnit}` : `+=${offsetValue}${offsetUnit}`}`;

      const teardown = () => {
        tlRef.current?.kill();
        tlRef.current = null;

        wrappersRef.current.forEach((wrap) => {
          const inner = wrap.firstElementChild as HTMLElement | null;
          const orig = inner?.querySelector<HTMLElement>('[data-orig="1"]');
          if (orig && wrap.parentNode) wrap.parentNode.replaceChild(orig, wrap);
        });
        wrappersRef.current = [];

        try {
          splitRef.current?.revert();
        } catch {}
        splitRef.current = null;
        playingRef.current = false;

        if (hoverHandlerRef.current && ref.current) {
          ref.current.removeEventListener("mouseenter", hoverHandlerRef.current);
          hoverHandlerRef.current = null;
        }
      };

      const build = () => {
        teardown();

        const fontFamily = getComputedStyle(el).fontFamily;
        splitRef.current = new GSAPSplitText(el, { type: "chars", charsClass: "shuffle-char" });
        const chars = splitRef.current.chars as HTMLElement[];
        wrappersRef.current = [];

        chars.forEach((ch) => {
          const parent = ch.parentElement;
          if (!parent) return;

          const width = ch.getBoundingClientRect().width;
          if (!width) return;

          const wrap = document.createElement("span");
          wrap.className = "inline-block overflow-hidden align-baseline text-left";
          wrap.style.width = `${width}px`;

          const inner = document.createElement("span");
          inner.className = "inline-block whitespace-nowrap will-change-transform origin-left transform-gpu";

          parent.insertBefore(wrap, ch);
          wrap.appendChild(inner);

          const firstOrig = ch.cloneNode(true) as HTMLElement;
          firstOrig.className = "inline-block text-left";
          firstOrig.style.width = `${width}px`;
          firstOrig.style.fontFamily = fontFamily;

          ch.setAttribute("data-orig", "1");
          ch.className = "inline-block text-left";
          ch.style.width = `${width}px`;
          ch.style.fontFamily = fontFamily;

          inner.appendChild(firstOrig);

          const rolls = Math.max(1, Math.floor(shuffleTimes));
          const randChar = (set: string) => set.charAt(Math.floor(Math.random() * set.length)) || "";

          for (let k = 0; k < rolls; k++) {
            const clone = ch.cloneNode(true) as HTMLElement;
            if (scrambleCharset) clone.textContent = randChar(scrambleCharset);
            clone.className = "inline-block text-left";
            clone.style.width = `${width}px`;
            clone.style.fontFamily = fontFamily;
            inner.appendChild(clone);
          }

          inner.appendChild(ch);

          let startX = 0,
            finalX = -rolls * width;

          if (shuffleDirection === "right") {
            const firstCopy = inner.firstElementChild;
            const lastReal = inner.lastElementChild;
            if (lastReal) inner.insertBefore(lastReal, inner.firstChild);
            if (firstCopy) inner.appendChild(firstCopy);
            startX = -rolls * width;
            finalX = 0;
          }

          gsap.set(inner, { x: startX, force3D: true });
          if (colorFrom) inner.style.color = colorFrom;

          inner.dataset.finalX = String(finalX);
          inner.dataset.startX = String(startX);

          wrappersRef.current.push(wrap);
        });
      };

      const strips = () => wrappersRef.current.map((w) => w.firstElementChild as HTMLElement);

      const play = () => {
        const targets = strips();
        if (!targets.length) return;

        playingRef.current = true;

        const tl = gsap.timeline({
          smoothChildTiming: true,
          repeat: loop ? -1 : 0,
          repeatDelay: loop ? loopDelay : 0,
          onRepeat: () => {
            if (scrambleCharset) targets.forEach((t) => (t.textContent = scrambleCharset.charAt(Math.floor(Math.random() * scrambleCharset.length))));
            gsap.set(targets, { x: (i, t) => parseFloat(t.dataset.startX || "0") });
            onShuffleComplete?.();
          },
          onComplete: () => {
            playingRef.current = false;
            if (!loop) {
              targets.forEach((t) => {
                const orig = t.querySelector<HTMLElement>('[data-orig="1"]');
                if (orig) t.replaceChildren(orig);
                t.style.transform = "none";
                t.style.willChange = "auto";
                if (colorTo) t.style.color = colorTo;
              });
              onShuffleComplete?.();
              armHover();
            }
          },
        });

        const addTween = (tgs: HTMLElement[], at: number) => {
          tl.to(tgs, { x: (i, t) => parseFloat(t.dataset.finalX || "0"), duration, ease, force3D: true, stagger: animationMode === "evenodd" ? stagger : 0 }, at);
          if (colorFrom && colorTo) tl.to(tgs, { color: colorTo, duration, ease }, at);
        };

        if (animationMode === "evenodd") {
          const odd = targets.filter((_, i) => i % 2 === 1);
          const even = targets.filter((_, i) => i % 2 === 0);
          const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
          const evenStart = odd.length ? oddTotal * 0.7 : 0;
          if (odd.length) addTween(odd, 0);
          if (even.length) addTween(even, evenStart);
        } else {
          targets.forEach((t) => {
            const d = Math.random() * maxDelay;
            tl.to(t, { x: parseFloat(t.dataset.finalX || "0"), duration, ease, force3D: true }, d);
            if (colorFrom && colorTo) tl.fromTo(t, { color: colorFrom }, { color: colorTo, duration, ease }, d);
          });
        }

        tlRef.current = tl;
      };

      const armHover = () => {
        if (!triggerOnHover || !ref.current) return;
        hoverHandlerRef.current = () => {
          if (playingRef.current) return;
          build();
          play();
        };
        ref.current.addEventListener("mouseenter", hoverHandlerRef.current);
      };

      const onEnter = () => {
        build();
        play();
        armHover();
        setReady(true);
      };

      const st = ScrollTrigger.create({
        trigger: el,
        start,
        once: triggerOnce,
        onEnter,
      });

      return () => {
        st.kill();
        teardown();
        setReady(false);
      };
    },
    { dependencies: [text, duration, maxDelay, ease, threshold, rootMargin, fontsLoaded, shuffleDirection, shuffleTimes, animationMode, loop, loopDelay, stagger, scrambleCharset, colorFrom, colorTo, triggerOnce, respectReducedMotion, triggerOnHover], scope: ref }
  );

  const baseClass = "inline-block whitespace-normal break-words will-change-transform text-2xl leading-none";
  const Tag = tag || "p";

  return React.createElement(Tag, {
    ref,
    className: `${baseClass} ${ready ? "visible" : "invisible"} ${className}`.trim(),
    style: { textAlign, ...style },
  }, text);
};

export default Shuffle;
