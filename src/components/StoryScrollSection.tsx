"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function StoryScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number;

    const calculateProgress = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      targetProgress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
    };

    const onScroll = () => {
      calculateProgress();
      if (!ticking) {
        ticking = true;
      }
    };

    // Smooth lerp loop with gentle easing
    const animate = () => {
      const lerp = 0.12;
      currentProgress += (targetProgress - currentProgress) * lerp;

      if (Math.abs(targetProgress - currentProgress) < 0.0005) {
        currentProgress = targetProgress;
      }

      setProgress(currentProgress);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    calculateProgress();
    currentProgress = targetProgress;
    setProgress(targetProgress);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const eased =
    progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  // Exact progressive dimensions scaling:
  // Starts as a small 9:16 portrait in the center with generous negative space
  // Expands smoothly into full screen (100vw x 100vh)
  const widthVw = 20 + eased * 80;
  const heightVh = 36 + eased * 64;
  const borderRadius = Math.max(16 * (1 - eased * 1.6), 0);
  const borderOpacity = Math.max(0.3 * (1 - eased * 1.5), 0);

  // Staggered text exit props based on scroll progress
  const getTextProps = (
    exitStart: number,
    exitEnd: number,
    driftX: number,
    driftY: number,
    baseRot: number
  ) => {
    const localT = Math.min(
      Math.max((progress - exitStart) / (exitEnd - exitStart), 0),
      1
    );
    const opacity = 1 - localT;
    const tx = driftX * localT;
    const ty = driftY * localT;
    const sc = 1 - 0.15 * localT;
    const rot = baseRot + (baseRot > 0 ? 6 : -6) * localT;

    return {
      style: {
        opacity,
        transform: `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${sc})`,
        pointerEvents: opacity < 0.05 ? ("none" as const) : ("auto" as const),
        willChange: "transform, opacity",
      },
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#000000] text-[#E0E0E0] select-none"
    >
      {/* Sticky viewport pinned frame */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#000000]">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-radial from-red-950/25 via-zinc-950/40 to-black blur-[130px] transition-opacity duration-300"
          style={{ opacity: 0.35 + eased * 0.65 }}
        />

        {/* 1. TOP-LEFT: Asta's Determination */}
        <div
          {...getTextProps(0.02, 0.45, -70, -40, -3)}
          className="absolute z-20 top-[10%] left-[5%] md:left-[8%] max-w-[280px]"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-red-600 font-mono block mb-1">
            THE BEGINNING
          </span>
          <h3 className="font-serif-title text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white/95 leading-tight">
            Never <br />
            <span className="text-zinc-500 font-normal italic font-serif">
              Giving Up
            </span>
          </h3>
          <p className="mt-2 text-[11px] md:text-xs text-zinc-400 font-sans leading-relaxed tracking-wider">
            In a kingdom where everyone is born with magic, Asta had none. Yet he kept training every single day.
          </p>
        </div>

        {/* 2. TOP-RIGHT: Yuno & Asta's Promise */}
        <div
          {...getTextProps(0.04, 0.48, 80, -50, 4)}
          className="absolute z-20 top-[12%] right-[5%] md:right-[9%] max-w-[240px] text-right"
        >
          <div className="inline-block border border-red-900/50 bg-red-950/20 backdrop-blur-md px-3 py-1 rounded text-[10px] tracking-[0.2em] text-red-400 uppercase font-mono mb-2">
            THE PROMISE
          </div>
          <p className="font-serif-title text-base md:text-lg text-zinc-300 font-semibold tracking-wider uppercase">
            Rivals For Life
          </p>
          <p className="text-[10px] text-zinc-400 font-sans tracking-wide mt-1">
            Two orphans raised together in Hage, aiming for the same seat: the Wizard King.
          </p>
        </div>

        {/* 3. MIDDLE-LEFT: The Grimoire Quote */}
        <div
          {...getTextProps(0.06, 0.5, -90, 20, 2)}
          className="absolute z-20 top-[45%] left-[3%] md:left-[7%] max-w-[270px] pl-4 border-l border-red-600/40"
        >
          <p className="font-serif-title italic text-sm md:text-base text-zinc-200 leading-snug">
            “The first three leaves mean faith, hope, and love. The fourth holds good fortune. And in the fifth... lives a devil.”
          </p>
          <span className="block mt-2 text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-500">
            — THE OLD LEGEND
          </span>
        </div>

        {/* 4. MIDDLE-RIGHT: Anti-Magic Sword */}
        <div
          {...getTextProps(0.05, 0.48, 90, 30, -2)}
          className="absolute z-20 top-[48%] right-[4%] md:right-[8%] max-w-[260px]"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-serif-title text-3xl md:text-4xl font-black text-red-500 tracking-tighter">
              5-Leaf
            </span>
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              Black Grimoire
            </span>
          </div>
          <p className="text-[10px] md:text-[11px] text-zinc-400 font-sans leading-normal mt-1">
            When despair broke the book, it chose someone with zero magic to wield its swords.
          </p>
        </div>

        {/* 5. BOTTOM-LEFT: Black Bulls Creed */}
        <div
          {...getTextProps(0.08, 0.54, -60, 60, -90)}
          className="hidden lg:block absolute z-20 bottom-[16%] left-[6%] origin-bottom-left"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500/80">
            [ SURPASS YOUR LIMITS // BLACK BULLS ]
          </span>
        </div>

        {/* 6. BOTTOM-RIGHT: Asta & Liebe */}
        <div
          {...getTextProps(0.07, 0.52, 70, 60, 1)}
          className="absolute z-20 bottom-[14%] right-[5%] md:right-[10%] max-w-[240px] text-right"
        >
          <div className="flex items-center justify-end gap-2 text-xs font-mono text-zinc-400 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="tracking-wider uppercase">BROTHERS IN BATTLE</span>
          </div>
          <p className="text-[11px] text-zinc-400 font-sans tracking-wide">
            Not master and servant, but equal partners fighting side by side.
          </p>
        </div>

        {/* 7. BOTTOM CENTER: Simple scroll hint */}
        <div
          {...getTextProps(0.0, 0.2, 0, 30, 0)}
          className="absolute z-20 bottom-8 inset-x-0 flex flex-col items-center justify-center gap-1.5 text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase pointer-events-none"
        >
          <span>SCROLL DOWN</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-red-600 via-zinc-600 to-transparent animate-pulse" />
        </div>

        {/* 
          ========================================================================
          PROGRESSIVELY SCALING 9:16 IMAGE CONTAINER
          - Automatically grows from 9:16 portrait (20vw × 36vh) to 100vw × 100vh
          ========================================================================
        */}
        <div
          className="relative z-10 flex items-center justify-center overflow-hidden transition-[box-shadow,border-radius] will-change-[width,height]"
          style={{
            width: `${widthVw}vw`,
            height: `${heightVh}vh`,
            borderRadius: `${borderRadius}px`,
            border: `${1 - eased}px solid rgba(255, 255, 255, ${borderOpacity})`,
            boxShadow: `0 35px 90px rgba(0, 0, 0, ${0.9 - eased * 0.4}), 0 0 ${
              30 * (1 - eased)
            }px rgba(220, 38, 38, ${borderOpacity * 0.7})`,
          }}
        >
          {/* Inner Image with gentle counter-zoom */}
          <div
            className="relative w-full h-full will-change-transform"
            style={{
              transform: `scale(${1.06 - eased * 0.06})`,
            }}
          >
            <Image
              src="/my-new-story.png"
              alt="Black Clover Story"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center select-none"
            />

            {/* Subtle dark vignette */}
            <div
              className="pointer-events-none absolute inset-0 bg-radial from-transparent via-transparent to-black/85 transition-opacity duration-200"
              style={{ opacity: Math.max(1 - eased * 1.8, 0) }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
