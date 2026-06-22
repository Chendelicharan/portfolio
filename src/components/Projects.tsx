"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FolderGit2, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  category: "frontend" | "fullstack";
  image: string;
  tags: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "Zenith Headless Commerce",
    description: "A high-performance e-commerce platform featuring Stripe integration, dynamic checkout flows, and a localized visual product catalog.",
    category: "fullstack",
    image: "/images/project_ecommerce.png",
    tags: ["Next.js", "GraphQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Nova Dashboard & Analytics",
    description: "A real-time data visualization dashboard featuring multi-tenant metrics analytics, customizable widgets, and secure JWT-based workspace auth.",
    category: "frontend",
    image: "/images/project_analytics.png",
    tags: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Pulse Real-time Chat",
    description: "A secure messaging platform featuring instant channel synchronization via WebSockets, online state detection, and markdown-friendly chats.",
    category: "fullstack",
    image: "/images/project_chat.png",
    tags: ["Next.js", "WebSockets", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "frontend" | "fullstack">("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-zinc-950/20 border-y border-slate-200/50 dark:border-slate-800/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            <FolderGit2 size={12} />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Recent Projects
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(["all", "frontend", "fullstack"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all cursor-pointer ${
                filter === tab
                  ? "text-white bg-indigo-600 shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/10"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800"
              }`}
            >
              {tab === "all" ? "All Projects" : tab === "frontend" ? "Frontend" : "Fullstack"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col h-full rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-500/30 dark:hover:border-indigo-400/30"
              >
                {/* Project Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-zinc-950 border-b border-slate-200/50 dark:border-zinc-800/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5 glass px-2.5 py-1.5 rounded-lg border border-white/20">
                      <Sparkles size={12} />
                      Featured Project
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Pill */}
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                    {project.category === "frontend" ? "Frontend UI" : "Full-stack System"}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-zinc-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-zinc-800/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>Repository</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors ml-auto"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
