"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, ShieldCheck, Award, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who writes and compiles the corporate monographs?",
      answer: "We deploy a dedicated team of senior business biographers, oral historians, and research archivists. They conduct structured in-person interviews and index corporate records, catalogs, and media archives to write the narrative.",
    },
    {
      question: "What is the typical timeline for a publishing commission?",
      answer: "A standard monograph commission takes between 6 to 9 months. This timeline accounts for comprehensive oral history capture, archival research, copy editing, layout design, and hand-finished physical binding.",
    },
    {
      question: "How do you handle confidentiality and sensitive trade secrets?",
      answer: "We govern all projects under strict, legally binding corporate NDAs. Drafts are held on secure private directories, and under no circumstances is any portion of the monograph shared publicly without explicit written board clearance.",
    },
    {
      question: "Can we request additional book copies for distribution?",
      answer: "Yes. While a standard commission includes five bespoke, leather-bound archival volumes in custom clamshell cases, we can organize additional print runs (both luxury and standard linen finishes) for partners or stakeholders.",
    },
    {
      question: "Do you collaborate with international organizations?",
      answer: "Yes. Our editorial and archive research teams are fully equipped to travel internationally to conduct oral histories and secure key physical archives directly at your global offices.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.25, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <main role="main" className="flex flex-col min-h-screen bg-background text-white overflow-hidden">
      {/* Cinematic Hero Section */}
      <header className="relative min-h-[90vh] flex items-center pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,#0A0A0A)] z-0 pointer-events-none" />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Content Left (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeIn}
              >
                <span className="inline-flex items-center gap-x-2 border border-accent/20 bg-accent/5 px-3 py-1 text-2xs uppercase tracking-[0.25em] text-accent">
                  Private Monograph Commissions
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeIn}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white"
              >
                Corporate Memory is Your <br className="hidden md:inline" />
                <span className="text-accent italic font-normal">Most Undervalued</span> Asset.
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeIn}
                className="text-base sm:text-lg text-muted font-sans font-light leading-relaxed max-w-xl"
              >
                We transform the history, struggles, and triumphs of industry-defining companies into premium, physical books. Custom-designed, archival-grade volumes that codify your legacy.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center bg-accent text-background px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#b2904c] transition-all duration-300 rounded-none group"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/founder-book"
                  className="inline-flex items-center justify-center border border-white/10 hover:border-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white/5 transition-all duration-300 rounded-none"
                >
                  View The Specification
                </Link>
              </motion.div>
            </div>

            {/* Hero Image Right (Cols 8-12) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto border border-accent/20 bg-secondary p-4 rounded-none shadow-[0_0_50px_rgba(197,160,89,0.03)] group overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(10,10,10,0.85))] z-10" />
                
                {/* Thin gold decorative framing border */}
                <div className="absolute inset-2 border border-accent/10 pointer-events-none z-20 group-hover:border-accent/30 transition-colors duration-500" />

                <Image
                  src="/images/luxury_corporate_book.png"
                  alt="Premium leather-bound corporate legacy book volume cover mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Premium tag overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-25 text-left">
                  <p className="font-heading text-lg font-bold text-white tracking-wider">The Harvard & Co. Legacy</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent mt-1">Archival Case Study monograph</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Social Proof Ribbon */}
      <aside aria-label="Social Proof" className="bg-secondary border-y border-white/5 py-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">
              Trusted By Distinguished Leaders
            </span>
            <p className="text-sm font-light text-muted tracking-wide md:max-w-2xl">
              Serving Tech Founders, 2nd Gen Family Businesses, and Enterprise Leaders who demand institutional-quality historical record preservation.
            </p>
          </div>
        </div>
      </aside>

      {/* Philosophy Section / Three Columns */}
      <section aria-labelledby="philosophy-title" className="py-24 lg:py-32 relative bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-3">
              The ROI of Corporate Memory
            </span>
            <h2 id="philosophy-title" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Why Preserving Your Origin Narrative is a <span className="italic font-normal text-accent">Strategic Imperative</span>.
            </h2>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Column 1: Authority */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group border border-white/5 bg-secondary/30 p-8 lg:p-10 rounded-none hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-4xl italic text-accent/20 group-hover:text-accent/40 transition-colors duration-500 font-bold">
                    01
                  </span>
                  <Award className="h-6 w-6 text-accent/60 stroke-[1.25]" />
                </div>
                <h3 className="font-heading text-xl font-medium tracking-wide text-white">
                  Institutional Authority
                </h3>
                <p className="text-xs leading-relaxed text-muted font-light">
                  A beautifully printed company biography is the ultimate symbol of permanence. It signals institutional scale, resilience, and industry longevity to enterprise clients, prospective partners, and global markets.
                </p>
              </div>
              <div className="pt-8 border-t border-white/5 mt-8 group-hover:border-accent/10 transition-colors duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold block">
                  Verify Value &rarr;
                </span>
              </div>
            </motion.article>

            {/* Column 2: Culture */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="group border border-white/5 bg-secondary/30 p-8 lg:p-10 rounded-none hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-4xl italic text-accent/20 group-hover:text-accent/40 transition-colors duration-500 font-bold">
                    02
                  </span>
                  <BookOpen className="h-6 w-6 text-accent/60 stroke-[1.25]" />
                </div>
                <h3 className="font-heading text-xl font-medium tracking-wide text-white">
                  Cultural Codification
                </h3>
                <p className="text-xs leading-relaxed text-muted font-light">
                  As enterprises scale, the cultural nuances of early-day triumphs risk being diluted. We document the critical breakthroughs, pivots, and core ethics in a textbook format, cementing your DNA for future generations.
                </p>
              </div>
              <div className="pt-8 border-t border-white/5 mt-8 group-hover:border-accent/10 transition-colors duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold block">
                  Preserve DNA &rarr;
                </span>
              </div>
            </motion.article>

            {/* Column 3: Legacy */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="group border border-white/5 bg-secondary/30 p-8 lg:p-10 rounded-none hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-4xl italic text-accent/20 group-hover:text-accent/40 transition-colors duration-500 font-bold">
                    03
                  </span>
                  <ShieldCheck className="h-6 w-6 text-accent/60 stroke-[1.25]" />
                </div>
                <h3 className="font-heading text-xl font-medium tracking-wide text-white">
                  Generational Legacy
                </h3>
                <p className="text-xs leading-relaxed text-muted font-light">
                  For family-led businesses transitioning to second and third-generation leadership, we build a seamless bridge. Ensure that the founder's struggle, governing principles, and vision remain the guiding light.
                </p>
              </div>
              <div className="pt-8 border-t border-white/5 mt-8 group-hover:border-accent/10 transition-colors duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold block">
                  Anchor Dynasty &rarr;
                </span>
              </div>
            </motion.article>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section aria-labelledby="faq-title" className="py-24 lg:py-32 relative bg-[#0D0D0D] border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-2xs uppercase tracking-[0.25em] text-accent font-semibold block">
              Inquiries & Process
            </span>
            <h2 id="faq-title" className="font-heading text-3xl sm:text-4xl font-light text-white tracking-tight">
              Frequently Asked <span className="text-accent italic">Questions</span>
            </h2>
          </div>

          <div className="space-y-6 font-sans">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-white/5 pb-6">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-sm font-medium text-white group-hover:text-accent transition-colors duration-300">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-4 w-4 text-accent transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-xs leading-relaxed text-muted font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brief Editorial Quote CTA */}
      <section className="py-20 lg:py-28 bg-secondary border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center space-y-8">
          <p className="font-heading text-2xl md:text-3xl italic font-light tracking-wide text-white leading-relaxed">
            "Your company history is more than a marketing asset. It is the definitive constitution of your corporate longevity."
          </p>
          <div className="flex flex-col items-center gap-y-2">
            <span className="text-2xs uppercase tracking-[0.25em] text-accent">Creative Director, Imprint Legacy</span>
            <div className="h-[1px] w-12 bg-accent/40 my-3" />
            <Link
              href="/apply"
              className="inline-flex items-center justify-center border border-accent text-white hover:text-background hover:bg-accent px-6 py-3 text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 rounded-none"
            >
              Request an Invitation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
