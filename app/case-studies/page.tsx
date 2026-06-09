"use client";

import Link from "next/link";
import { FileText, Calendar, ArrowRight, ShieldAlert, Award, FileCode } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "cs-1",
      tag: "Family Conglomerate Transition",
      title: "The Singhania Dynastic Chronicle",
      subtitle: "Preserving 80 Years of Industrial Growth Across Four Generations",
      meta: {
        industry: "Manufacturing & Infrastructure",
        scope: "350-Page Leather Monograph",
        interviews: "42 Oral Histories Recorded",
        timeline: "9 Months of Research",
      },
      challenge:
        "As the family business transitioned from the third to the fourth generation, the pivotal core values and early founding anecdotes (dating back to 1946) were becoming diluted. Institutional history was undocumented, existing solely in the memories of aging senior board members.",
      solution:
        "We deployed a dedicated archival team of two business biographers and one corporate archivist. Over nine months, we conducted 42 comprehensive interviews, digitized 1,200 physical letters, blueprints, and archival ledgers, and curated a master leather-bound monograph.",
      impact:
        "The resulting book is now required reading for all incoming family board members and executive leaders. It successfully resolved a critical governance debate by codifying the founder's original partnership ethos.",
    },
    {
      id: "cs-2",
      tag: "Technology Scale-up & IPO",
      title: "The CloudCore Genesis Project",
      subtitle: "Documenting the Hyper-growth and Pivots of a SaaS Pioneer",
      meta: {
        industry: "Enterprise SaaS & Cloud Systems",
        scope: "220-Page Linen Case Study",
        interviews: "18 Executive Oral Histories",
        timeline: "5 Months of Research",
      },
      challenge:
        "Following a successful IPO, CloudCore experienced massive headcount growth. The original team's legendary culture of rapid experimentation and raw grit was fading as new corporate structures took over.",
      solution:
        "We focused on the founder's early years: the three near-death experiences of the company, the original codebase pivot in 2012, and early team photographs. The narrative was designed with a modern typography aesthetic and high-resolution tech archives.",
      impact:
        "A physical copy is presented to every key customer account and partner, boosting brand equity. Additionally, a softcover internal edition is given to every engineer upon hiring, maintaining high cultural integrity across global hubs.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      {/* Header */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background border-b border-white/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center space-y-6">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn}>
            <span className="text-2xs uppercase tracking-[0.25em] text-accent font-semibold">
              Archival Briefings
            </span>
          </motion.div>
          
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
            className="font-heading text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight"
          >
            Corporate Monograph <span className="italic font-normal text-accent">Case Studies</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
            className="text-sm sm:text-base text-muted font-light leading-relaxed font-sans max-w-xl mx-auto"
          >
            An inspection of how prominent family-led institutions, tech unicorns, and legacy conglomerates leverage physical monographs to secure their authority and culture.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Index */}
      <section className="py-24 relative bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-24">
          {caseStudies.map((cs, index) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="border border-white/5 bg-secondary/20 p-8 sm:p-12 rounded-none hover:border-accent/20 transition-all duration-300 relative group"
            >
              {/* Corner Tag */}
              <div className="absolute top-0 right-0 border-l border-b border-white/5 bg-secondary px-4 py-1.5 text-[9px] uppercase tracking-[0.2em] text-accent font-semibold">
                {cs.tag}
              </div>

              {/* Title & Metadata */}
              <div className="space-y-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-wide text-white group-hover:text-accent transition-colors duration-300">
                  {cs.title}
                </h2>
                <p className="text-xs italic text-muted font-sans font-light">
                  {cs.subtitle}
                </p>

                {/* Specs Meta Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 my-6 border-y border-white/5 text-left">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-muted font-semibold block">Industry</span>
                    <span className="text-xs font-light text-white mt-1 block">{cs.meta.industry}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-muted font-semibold block">Commission Scope</span>
                    <span className="text-xs font-light text-white mt-1 block">{cs.meta.scope}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-muted font-semibold block">Oral Histories</span>
                    <span className="text-xs font-light text-white mt-1 block">{cs.meta.interviews}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-muted font-semibold block">Timeline</span>
                    <span className="text-xs font-light text-white mt-1 block">{cs.meta.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Whitepaper content columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-sans font-light leading-relaxed text-muted">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white font-semibold mb-2 flex items-center gap-1.5">
                    <span className="h-1 w-1 bg-accent rounded-full" /> The Challenge
                  </h4>
                  <p>{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white font-semibold mb-2 flex items-center gap-1.5">
                    <span className="h-1 w-1 bg-accent rounded-full" /> The Archival Method
                  </h4>
                  <p>{cs.solution}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white font-semibold mb-2 flex items-center gap-1.5">
                    <span className="h-1 w-1 bg-accent rounded-full" /> The Strategic Impact
                  </h4>
                  <p>{cs.impact}</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-x-2 text-2xs uppercase tracking-[0.2em] text-accent font-semibold hover:text-white transition-colors duration-300"
                >
                  Request Similar Commission Briefing
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* NDA notice banner */}
      <section className="py-16 bg-secondary border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center space-y-4">
          <Award className="h-8 w-8 text-accent/60 mx-auto stroke-[1.2]" />
          <h3 className="font-heading text-lg font-light text-white">Strict Non-Disclosure Protocols</h3>
          <p className="text-xs text-muted max-w-xl mx-auto leading-relaxed font-sans font-light">
            Due to the sensitive family and commercial data contained within our monographs, many of our most significant projects remain entirely confidential and are omitted from this registry. All commissions are governed by binding corporate NDAs.
          </p>
        </div>
      </section>
    </div>
  );
}
