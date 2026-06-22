"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const roles = ["Full-stack Developer", "UI/UX Enthusiast", "Next.js Specialist", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(120);
      }, typingSpeed);
    }

    // Finished typing current role
    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait 1.5s before deleting
    }

    // Finished deleting current role, move to next role
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden dots-bg"
    >
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/15 blur-3xl -z-10 animate-pulse duration-8000" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/50 dark:bg-indigo-950/30 dark:text-indigo-400 dark:border-indigo-900/30 mb-6 shadow-sm shadow-indigo-600/5"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping" />
          Available for Hire
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">
            Alex Carter
          </span>
        </motion.h1>

        {/* Sub-headline / Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-200 h-10 mb-6 flex items-center justify-center font-mono"
        >
          <span>I am a </span>
          <span className="text-indigo-600 dark:text-indigo-400 ml-2 border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 animate-pulse">
            {displayText}
          </span>
        </motion.div>

        {/* Intro description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed"
        >
          I craft beautiful, accessible, and high-performance digital experiences. Specializing in modern web applications using Next.js and Tailwind CSS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/25 dark:shadow-indigo-500/20 hover:shadow-indigo-600/35 transition-all hover:-translate-y-0.5 duration-200 group cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="file:///C:/Users/frien/.gemini/antigravity/scratch/portfolio/public/resume.pdf"
            download="Alex_Carter_Resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 font-semibold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 duration-200 cursor-pointer"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-5"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all border border-transparent hover:border-slate-200 dark:hover:border-zinc-800"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all border border-transparent hover:border-slate-200 dark:hover:border-zinc-800"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="#contact"
            className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all border border-transparent hover:border-slate-200 dark:hover:border-zinc-800"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
