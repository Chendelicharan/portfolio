"use client";

import React from "react";
import { Cpu, Database, Eye, Layout, Server, Settings } from "lucide-react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: number; // percentage (0-100)
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-indigo-600 dark:text-indigo-400" size={20} />,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Server className="text-indigo-600 dark:text-indigo-400" size={20} />,
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "PostgreSQL / Prisma", level: 75 },
      { name: "MongoDB / Mongoose", level: 85 },
      { name: "GraphQL / REST APIs", level: 80 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Settings className="text-indigo-600 dark:text-indigo-400" size={20} />,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Vercel / AWS", level: 80 },
      { name: "CI / CD Pipelines", level: 75 },
      { name: "Figma (UI/UX)", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            <Cpu size={12} />
            <span>Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Skillset
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50/50 dark:bg-zinc-900/30 border border-slate-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5 flex-grow">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      {/* Animating Progress Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: skillIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
