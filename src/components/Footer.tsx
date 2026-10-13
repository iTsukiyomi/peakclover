"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#000000] text-[#E0E0E0] pt-28 pb-16 px-6 md:px-12 lg:px-20 border-t border-white/10 select-none overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-950/20 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1720px] mx-auto flex flex-col justify-between">
        {/* Top footer row: Message & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          {/* Simple message */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[10px] font-mono tracking-[0.25em] uppercase text-red-500">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span>BLACK CLOVER TRIBUTE</span>
              </div>
              <p className="font-serif-title text-xl md:text-2xl text-zinc-300 font-normal leading-relaxed">
                “My magic is never giving up!”
              </p>
              <p className="mt-3 text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
                A simple appreciation project celebrating Yuki Tabata&apos;s story of grit, friendship, and surpassing your limits.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-500">
              CLOVER KINGDOM • SQUAD LOG
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Navigation Links Columns */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-500 mb-6">
              SECTIONS
            </h4>
            <ul className="flex flex-col gap-3 text-xs tracking-[0.16em] uppercase font-sans">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#story"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  The Story
                </Link>
              </li>
              <li>
                <Link
                  href="#characters"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Characters
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Media / Social Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-500 mb-6">
              OFFICIAL LINKS
            </h4>
            <ul className="flex flex-col gap-3 text-xs tracking-[0.16em] uppercase font-sans">
              <li>
                <a
                  href="https://www.viz.com/shonenjump/chapters/black-clover"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Read on VIZ</span>
                  <span className="text-zinc-600">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchyroll.com/series/GRE5G1986/black-clover"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Watch on Crunchyroll</span>
                  <span className="text-zinc-600">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/bclover_pr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Official Twitter</span>
                  <span className="text-zinc-600">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized BLACK CLOVER Typography */}
        <div className="pt-16 pb-12 select-none overflow-hidden">
          <h1 className="font-serif-title font-black text-center uppercase tracking-tighter text-[13vw] leading-[0.82] text-zinc-900 hover:text-zinc-800 transition-colors duration-700">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/15 via-white/5 to-transparent">
              BLACK CLOVER
            </span>
          </h1>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">
          <div>
            BLACK CLOVER © YUKI TABATA / SHUEISHA, TV TOKYO
          </div>
          <div className="text-zinc-600">
            FAN-MADE TRIBUTE PROJECT
          </div>
        </div>
      </div>
    </footer>
  );
}
