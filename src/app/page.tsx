"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";

import StoryScrollSection from "@/components/StoryScrollSection";
import DiscoverySection from "@/components/DiscoverySection";
import Footer from "@/components/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Spotlight coordinates and visibility state
  const [isHovering, setIsHovering] = useState(false);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const [spotlightPos, setSpotlightPos] = useState({ x: -1000, y: -1000 });
  const [spotlightOpacity, setSpotlightOpacity] = useState(0);
  const animFrameRef = useRef<number | null>(null);

  // Mouse move handler over the main container
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    if (!isHovering) {
      setIsHovering(true);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    currentPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setSpotlightPos({ ...currentPos.current });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Smooth cursor-following movement with easing/lerp loop
  useEffect(() => {
    let active = true;

    const animate = () => {
      if (!active) return;

      const ease = 0.16;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      setSpotlightPos({
        x: Math.round(currentPos.current.x * 10) / 10,
        y: Math.round(currentPos.current.y * 10) / 10,
      });

      setSpotlightOpacity((prev) => {
        const targetOpacity = isHovering ? 1 : 0;
        const nextOpacity = prev + (targetOpacity - prev) * 0.18;
        return Math.abs(nextOpacity - targetOpacity) < 0.01 ? targetOpacity : nextOpacity;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      active = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isHovering]);

  // CSS radial-gradient mask with 260px radius and soft feathered edge
  const maskStyle = {
    WebkitMaskImage: `radial-gradient(circle 260px at ${spotlightPos.x}px ${spotlightPos.y}px, black 0%, black 50%, rgba(0,0,0,0.6) 75%, transparent 100%)`,
    maskImage: `radial-gradient(circle 260px at ${spotlightPos.x}px ${spotlightPos.y}px, black 0%, black 50%, rgba(0,0,0,0.6) 75%, transparent 100%)`,
    opacity: spotlightOpacity,
    transition: "opacity 0.25s ease-out",
  };

  return (
    <>
      <main
        onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-[#000000] text-[#E0E0E0] overflow-hidden flex flex-col justify-between selection:bg-red-900 selection:text-white"
    >
      {/* 
        ========================================================================
        BASE LAYER: EXISTING HERO & BASE IMAGE (im1)
        Keep current hero/background, plus base image layer underneath
        ========================================================================
      */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Base artwork im1 (night scene) filling the background */}
        <div className="absolute inset-0">
          <Image
            src="/im1.png"
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Subtle radial magical vignette blending over the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-gradient-to-tr from-red-950/20 via-purple-950/15 to-transparent blur-[140px] rounded-full opacity-60" />

        {/* Diagonal architectural band from reference layout */}
        <div
          className="absolute top-[-30%] left-[-25%] w-[160%] h-[160%] origin-center pointer-events-none opacity-30 mix-blend-screen"
          style={{
            transform: "rotate(-25deg)",
            background:
              "linear-gradient(180deg, transparent 24%, rgba(130, 130, 140, 0.08) 25%, rgba(170, 170, 185, 0.16) 42%, rgba(150, 150, 165, 0.12) 60%, transparent 61%)",
          }}
        />

        {/* Ambient particle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.03]" />
      </div>

      {/* 
        ========================================================================
        REVEAL LAYER: CURSOR-FOLLOWING REVEAL (im2)
        - Reveal image (im2, day scene) exactly aligned over im1
        - Soft circular spotlight mask centered on cursor (radius: 260px)
        - pointer-events: none
        - Above existing hero background, below all UI & text (z-[10])
        ========================================================================
      */}
      <div
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
        style={maskStyle}
      >
        <Image
          src="/im2.png"
          alt="Day Reveal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>


      {/* 
        ========================================================================
        HEADER / TOP NAVIGATION (z-30: Above hero & 3D character)
        ========================================================================
      */}
      <header className="relative z-30 w-full px-6 md:px-12 lg:px-16 pt-8 pb-4 flex items-center justify-between">
        {/* Left: Brand Identity & Nav Links */}
        <div className="flex items-center gap-10 md:gap-14">
          <Link
            href="/"
            className="group flex items-center gap-2.5 tracking-[0.28em] text-white font-medium text-lg lg:text-xl font-serif-title transition-all duration-300 hover:text-white"
          >
            <span className="text-white group-hover:text-zinc-200 transition-colors">
              BLACK CLOVER
            </span>
          </Link>

          {/* Primary Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] tracking-[0.16em] uppercase text-zinc-300 font-medium font-sans">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#story"
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              The Story
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#characters"
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              Characters
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>
        </div>

        {/* Right: Minimal Hamburger Icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-900/60 rounded-md transition-all duration-200 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-lg uppercase tracking-widest md:hidden animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-8 right-8 p-2 text-zinc-400 hover:text-white"
          >
            <X className="w-7 h-7" />
          </button>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white text-zinc-300 font-serif-title"
          >
            Home
          </Link>
          <Link
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white text-zinc-300 font-serif-title"
          >
            The Story
          </Link>
          <Link
            href="#characters"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white text-zinc-300 font-serif-title"
          >
            Characters
          </Link>
        </div>
      )}

      {/* 
        ========================================================================
        MIDDLE HERO STAGE (z-30: Above 3D character)
        - Headline "BLACK CLOVER" at TOP LEFT
        ========================================================================
      */}
      <div className="relative z-30 w-full flex-1 max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-start pt-8 sm:pt-12 md:pt-16 pb-6 pointer-events-none">
        <div className="flex flex-col items-start text-left select-none max-w-4xl pointer-events-auto">
          <div className="relative">
            {/* Ghosted backdrop glow for the letters */}
            <div className="absolute inset-0 -inset-x-8 bg-gradient-to-r from-white/10 to-transparent blur-3xl opacity-20 pointer-events-none" />

            <h1 className="font-serif-title font-black uppercase tracking-tight text-[3.8rem] sm:text-[5.5rem] md:text-[7.2rem] lg:text-[8.5rem] xl:text-[9.8rem] leading-[0.88] text-left">
              <span className="block carved-metallic-text tracking-tighter">
                BLACK
              </span>
              <span className="block carved-metallic-text tracking-tight -mt-1 sm:-mt-3 md:-mt-5">
                CLOVER
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        FOOTER / BOTTOM SECTION (z-30: Above 3D character)
        - Bottom Left: Social links
        - Bottom Right: "Next >" link
        ========================================================================
      */}
      <footer className="relative z-30 w-full px-6 md:px-12 lg:px-16 pb-8 pt-4">
        <div className="flex items-end justify-between">
          {/* Bottom Left: Social Icon Circles */}
          <div className="flex items-center gap-3">
            <Link
              href="#twitter"
              aria-label="X / Twitter"
              className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all text-xs"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="#network"
              aria-label="Community"
              className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all text-xs font-serif-title font-bold"
            >
              G
            </Link>
            <Link
              href="#community"
              aria-label="Community"
              className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all text-xs font-serif-title font-bold"
            >
              f
            </Link>
          </div>

        </div>
      </footer>
    </main>

    {/* 
      ========================================================================
      STORYTELLING SCROLL EXHIBITION SECTION
      Directly after the existing BLACK CLOVER hero section
      ========================================================================
    */}
    <div id="story">
      <StoryScrollSection />
    </div>

    {/* 
      ========================================================================
      BLACK CLOVER DISCOVERY SECTION
      Interactive digital archive with asymmetric editorial cards & CTAs
      ========================================================================
    */}
    <div id="characters">
      <DiscoverySection />
    </div>

    {/* 
      ========================================================================
      EDITORIAL ART BOOK FOOTER
      ========================================================================
    */}
    <Footer />
    </>
  );
}
