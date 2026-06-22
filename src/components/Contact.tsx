"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            <MessageSquare size={12} />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Let&apos;s discuss your next project
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I am open to full-time roles, contract work, or freelance collaborations. Drop me a line, and let&apos;s build something amazing together!
              </p>
            </div>

            <div className="space-y-4 my-8 lg:my-0">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-zinc-900/30 border border-slate-200/50 dark:border-zinc-800/50">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Email Address
                  </h4>
                  <a
                    href="mailto:alex.carter@example.com"
                    className="text-base font-semibold text-slate-800 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 transition-colors"
                  >
                    alex.carter@example.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-zinc-900/30 border border-slate-200/50 dark:border-zinc-800/50">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Location
                  </h4>
                  <span className="text-base font-semibold text-slate-800 dark:text-slate-200">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-50/50 dark:bg-zinc-900/30 border border-slate-200/50 dark:border-zinc-800/50 shadow-sm relative overflow-hidden">
              {/* Form submission overlay states */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white dark:bg-zinc-900 z-10 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="p-4 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 dark:text-green-400 mb-4"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
                      Thank you for reaching out. I will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-zinc-950/40 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 transition-all ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-slate-200 dark:border-zinc-800"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-zinc-950/40 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 transition-all ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-slate-200 dark:border-zinc-800"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-zinc-950/40 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 transition-all resize-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-slate-200 dark:border-zinc-800"
                    }`}
                    placeholder="Hello Alex, I'd like to talk about a potential project..."
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/20 dark:shadow-indigo-500/10 hover:shadow-indigo-600/30 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
