"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Book, Layers, Shield, Sparkles, Feather } from "lucide-react";
import { motion } from "framer-motion";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://imprintlegacy.in/founder-book/#service",
  "name": "The Founder Legacy Book",
  "provider": {
    "@id": "https://imprintlegacy.in/#organization"
  },
  "description": "A premium, Smyth-sewn hardcover narrative book documenting corporate origin stories, turning points, and vision for founders and enterprise leaders.",
  "category": "Corporate Publishing",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "75000",
    "availability": "https://schema.org/LimitedAvailability",
    "url": "https://imprintlegacy.in/apply",
    "name": "Corporate Legacy Commission - Base Tier"
  }
};

export default function FounderBook() {
  const specs = [
    {
      title: "Binding",
      value: "Traditional Smyth-Sewn",
      description: "Lie-flat construction using reinforced cotton stitching. Built for multi-generational handling and museum-grade durability.",
      icon: Layers,
    },
    {
      title: "Paper Stock",
      value: "150 GSM Archival Ivory",
      description: "Acid-free, pH-neutral cotton-blend stock. Guaranteed against yellowing, degradation, or ink bleeding for over two centuries.",
      icon: Feather,
    },
    {
      title: "Exterior Cover",
      value: "Full-Grain Italian Leather / Premium Linen",
      description: "Hand-wrapped boards featuring debossed details and hot-stamped gold foil leaf. Choice of bespoke grain textures.",
      icon: Book,
    },
    {
      title: "Curation & Slipcase",
      value: "Custom Protective Clamshell Box",
      description: "Individually sized presentation slipcase lined with archival Japanese silk to protect against dust, humidity, and wear.",
      icon: Shield,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <main role="main" className="flex flex-col min-h-screen bg-background text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* Product Hero */}
      <header className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn}>
                <span className="text-2xs uppercase tracking-[0.25em] text-accent font-semibold">
                  The Master Monograph
                </span>
              </motion.div>
              
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeIn}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]"
              >
                The Founder <br className="hidden md:inline" />
                <span className="italic font-normal text-accent">Legacy Book</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeIn}
                className="text-sm sm:text-base text-muted font-light leading-relaxed font-sans max-w-xl"
              >
                A bespoke, museum-grade monograph detailing the life, philosophy, and history of your company's founder. We deploy senior biographers, documentarians, and bookmakers to build a definitive, private archive of your lifetime achievement.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeIn}
                className="pt-4 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center bg-accent text-background px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#b2904c] transition-all duration-300 rounded-none group"
                >
                  Apply for Commission
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>

            {/* Right Asset Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/3] w-full border border-white/5 bg-secondary/40 p-3 rounded-none overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
                
                {/* Thin gold inner frame */}
                <div className="absolute inset-2.5 border border-accent/15 pointer-events-none z-20" />

                <Image
                  src="/images/luxury_corporate_book.png"
                  alt="Founder Legacy Book detailed texture and binding closeup view"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Craftsmanship & Specs Block */}
      <section aria-labelledby="product-specs" className="py-24 lg:py-32 relative bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-2xs uppercase tracking-[0.25em] text-accent font-semibold">
              Archival Standards
            </span>
            <h2 id="product-specs" className="font-heading text-3xl sm:text-4xl font-light text-white tracking-tight">
              Materials Built to Last <span className="text-accent italic">Two Centuries</span>
            </h2>
            <p className="text-xs text-muted max-w-lg mx-auto font-sans leading-relaxed">
              Every detail is chosen for permanence. Our manufacturing process utilizes hand-finished binding methods that meet national library conservation standards.
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-white/5 bg-secondary/20 p-8 rounded-none hover:border-accent/20 transition-all duration-300 flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center border border-accent/20 bg-accent/5">
                      <Icon className="h-5 w-5 text-accent stroke-[1.2]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-medium text-white tracking-wide">
                      {spec.title}
                    </h3>
                    <p className="text-2xs uppercase tracking-widest text-accent font-medium">
                      {spec.value}
                    </p>
                    <p className="text-xs leading-relaxed text-muted font-sans font-light">
                      {spec.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Block (Filter Lead) */}
      <section className="py-20 lg:py-28 bg-secondary border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-2 border-accent/40 bg-background p-10 sm:p-14 rounded-none text-center space-y-6 shadow-[0_0_50px_rgba(197,160,89,0.05)]"
          >
            <Sparkles className="h-8 w-8 text-accent mx-auto stroke-[1.2]" />
            
            <span className="text-2xs uppercase tracking-[0.3em] text-accent font-bold block">
              Investment Registry
            </span>
            
            <h3 className="font-heading text-2xl sm:text-3xl font-light text-white tracking-tight leading-tight">
              Bespoke Publishing Commissions <br />
              <span className="font-semibold text-accent mt-2 block">Begin at ₹75,000</span>
            </h3>
            
            <p className="text-xs text-muted max-w-md mx-auto leading-relaxed font-sans font-light">
              This includes complete biographical interviewing, historical document indexing, professional editorial review, layout design, and the binding of five hand-crafted archival copies. Further bespoke specifications will be priced accordingly.
            </p>
            
            <div className="pt-6">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center bg-accent text-background px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#b2904c] transition-all duration-300 rounded-none"
              >
                Apply for Commission
              </Link>
            </div>
            
            <p className="text-[10px] text-muted/60 uppercase tracking-widest font-sans pt-2">
              Strictly by review. Not all applications will be accepted.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
