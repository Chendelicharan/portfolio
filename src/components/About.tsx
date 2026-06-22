"use client";

import React from "react";
import Image from "next/image";
import { Award, Briefcase, Smile, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: <Briefcase className="text-indigo-600 dark:text-indigo-400" size={24} />, value: "3+", label: "Years Experience" },
  { icon: <Award className="text-indigo-600 dark:text-indigo-400" size={24} />, value: "50+", label: "Projects Completed" },
  { icon: <Smile className="text-indigo-600 dark:text-indigo-400" size={24} />, value: "30+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-zinc-950/20 border-y border-slate-200/50 dark:border-slate-800/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            <Sparkles size={12} />
            <span>Biography</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Styled Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer Decorative Gradient Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md">
                <Image
                  src="/images/profile_avatar.png"
                  alt="Alex Carter Profile Avatar"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Bio Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Designing interfaces, engineering systems
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Hello! I&apos;m Alex, a passionate developer based in San Francisco. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always write clean, maintainable code while delivering exceptional user experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Since starting my journey, I&apos;ve collaborated with talented developers to build tools for startups and established enterprises. I love tackling complex problems and translating them into simple, beautiful, and intuitive interface designs.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/80 shadow-sm flex flex-col items-center text-center transition-all hover:border-indigo-500/30 dark:hover:border-indigo-400/30"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 mb-3">
                    {stat.icon}
                  </div>
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
