"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ArchiveCard {
  id: string;
  name: string;
  category: string;
  code: string;
  description: string;
  image: string;
  badge: string;
  colSpan: string;
  heightClass: string;
  tiltAngle: number;
}

const ARCHIVE_ITEMS: ArchiveCard[] = [
  {
    id: "asta",
    name: "Asta",
    category: "Black Bulls // Magic Knight",
    code: "01",
    description:
      "Born without a single drop of magic in a world where magic is everything. He trained his body until he could swing massive iron swords, eventually receiving the 5-leaf grimoire that can cut down and deflect any spell.",
    image: "/peakclover/my-discovery-asta.png",
    badge: "Anti-Magic",
    colSpan: "lg:col-span-7",
    heightClass: "aspect-[16/10]",
    tiltAngle: -1.2,
  },
  {
    id: "yuno",
    name: "Yuno",
    category: "Golden Dawn // Vice Captain",
    code: "02",
    description:
      "Asta's childhood brother and lifelong rival from Hage village. Blessed by mana itself, he earned the four-leaf clover grimoire and fights with the Wind Spirit Sylph to become the Wizard King.",
    image: "/peakclover/my-discovery-yuno.jpg",
    badge: "Wind Magic",
    colSpan: "lg:col-span-5",
    heightClass: "aspect-[16/11]",
    tiltAngle: 1.4,
  },
  {
    id: "noelle",
    name: "Noelle Silva",
    category: "Black Bulls // Royal Family",
    code: "03",
    description:
      "Born to royal blood but mocked for losing control of her magic. Joining Captain Yami's Black Bulls gave her a family, unlocking her incredible Valkyrie Armor in battle.",
    image: "/peakclover/my-discovery-noelle.jpg",
    badge: "Water Magic",
    colSpan: "lg:col-span-5",
    heightClass: "aspect-[16/11]",
    tiltAngle: -1.6,
  },
  {
    id: "yami",
    name: "Captain Yami",
    category: "Black Bulls // Captain",
    code: "04",
    description:
      "A foreigner washed ashore in the Clover Kingdom who uses rare Dark Magic infused into his katana. He took in all the outcasts and gave them one rule: surpass your limits.",
    image: "/peakclover/my-discovery-yami.webp",
    badge: "Dark Magic",
    colSpan: "lg:col-span-7",
    heightClass: "aspect-[16/10]",
    tiltAngle: 1.1,
  },
];

export default function DiscoverySection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-[#000000] text-[#E0E0E0] py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/5">
      {/* Background ambient red & purple glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-red-950/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[25%] right-[-10%] w-[700px] h-[700px] bg-purple-950/15 rounded-full blur-[160px]" />

        <div className="absolute top-[8%] right-[4%] font-serif-title font-black text-[9rem] md:text-[14rem] lg:text-[18rem] text-white/[0.015] uppercase tracking-tighter leading-none select-none">
          CLOVER
        </div>
        <div className="absolute top-[52%] left-[-4%] font-serif-title font-black text-[8rem] md:text-[13rem] lg:text-[16rem] text-white/[0.015] uppercase tracking-tighter leading-none select-none">
          KNIGHTS
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:80px_80px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1720px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 md:pb-24 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-400">
                THE CHARACTERS & WORLD
              </span>
            </div>

            <h2 className="font-serif-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
              <span className="block">DISCOVER</span>
              <span className="block carved-metallic-text tracking-tighter">
                BLACK CLOVER
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed tracking-wide">
              The story of two boys from an orphanage in Hage village who made a promise to each other: whoever works the hardest will become the next Wizard King.
            </p>

            <div className="mt-4 flex items-center gap-6 text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-500">
              <span>MAGIC KNIGHT SQUADS</span>
              <span>•</span>
              <span>CLOVER KINGDOM</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 pt-16">
          {ARCHIVE_ITEMS.map((item) => {
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: isHovered
                    ? `translateY(-8px) rotate(0deg) scale(1.01)`
                    : `rotate(${item.tiltAngle}deg)`,
                  transition:
                    "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease",
                }}
                className={`${item.colSpan} relative group rounded-2xl bg-[#0a0a0d]/90 border border-white/10 hover:border-red-900/50 p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black will-change-transform cursor-pointer`}
              >
                {/* Image */}
                <div className={`relative w-full ${item.heightClass} rounded-xl overflow-hidden mb-6 bg-black`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    quality={100}
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-black/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />

                  {/* Card top badges */}
                  <div className="absolute top-4 inset-x-4 flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-300">
                      NO. {item.code}
                    </span>

                    <span className="px-2.5 py-1 rounded bg-red-950/60 backdrop-blur-md border border-red-800/40 text-[10px] font-mono tracking-[0.2em] uppercase text-red-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Editorial Information */}
                <div className="relative z-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-red-500/90 block mb-1">
                      {item.category}
                    </span>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-serif-title text-2xl md:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-amber-100 transition-colors">
                        {item.name}
                      </h3>
                      <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-red-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="mt-3 text-xs md:text-sm text-zinc-400 font-sans leading-relaxed tracking-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <span>CLOVER KINGDOM</span>
                    <span className="flex items-center gap-1 text-red-400">
                      <span>LEARN MORE</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA: ENTER THE WORLD → */}
        <div className="mt-24 md:mt-32 flex flex-col items-center justify-center text-center">
          <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-500 mb-5">
            START WATCHING OR READING
          </p>

          <Link
            href="#explore-deep"
            className="group relative inline-flex items-center justify-center px-12 py-5 transition-all duration-300"
          >
            <div className="absolute inset-0 border border-zinc-700 rounded-lg group-hover:border-zinc-400 transition-colors" />
            <div className="absolute -top-[2px] left-3 w-3 h-[2px] bg-red-600" />
            <div className="absolute -bottom-[2px] right-3 w-3 h-[2px] bg-red-600" />

            <div className="absolute inset-[2px] bg-gradient-to-r from-red-950/60 via-zinc-950/90 to-red-950/60 rounded-[6px] group-hover:from-red-900/70 group-hover:to-red-900/70 transition-all duration-300" />

            <span className="relative z-10 flex items-center gap-3 font-serif-title uppercase font-bold text-sm md:text-base tracking-[0.28em] text-white group-hover:text-white transition-colors">
              <span>ENTER THE WORLD</span>
              <span className="text-base text-red-500 transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
