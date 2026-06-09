"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main role="main" className="flex flex-col min-h-screen bg-background text-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 w-full">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-2xs uppercase tracking-[0.2em] text-muted hover:text-white transition-colors duration-300 focus:outline-none"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Portal
          </Link>
        </div>

        {/* Content */}
        <article className="space-y-10">
          <header className="space-y-4 border-b border-white/5 pb-8">
            <span className="text-2xs uppercase tracking-[0.25em] text-accent font-semibold">
              Strict Confidentiality Protocols
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-2xs text-muted uppercase tracking-widest font-sans">
              Last Updated: June 10, 2026
            </p>
          </header>

          <section className="space-y-6 font-sans text-sm font-light leading-relaxed text-muted">
            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              1. Our Pledge of Absolute Discretion
            </h2>
            <p>
              Imprint Legacy operates under the highest standards of corporate privacy. Due to the sensitive historical, commercial, and personal records indexed during our monograph commissions, we maintain strict non-disclosure compliance at every tier of our publishing process.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              2. Information We Collect
            </h2>
            <p>
              We only collect information necessary to evaluate publishing commissions and perform research. This includes:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Contact coordinates and corporate identification supplied via our application forms.</li>
              <li>Oral history recordings, transcripts, letters, blueprints, and digital asset archives compiled strictly for commission compilation.</li>
            </ul>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              3. Processing and Storage
            </h2>
            <p>
              All files, media transcripts, and manuscript drafts are hosted on secure, encrypted internal servers. Access to draft documents is restricted solely to the biographers and printmakers assigned directly to your project.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              4. Data Retention & Erasure
            </h2>
            <p>
              Following the delivery of your physical monograph, any excess oral transcripts or original corporate copies will either be archived under seal or permanently destroyed in accordance with your board's preferences.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              5. Third-Party Sharing
            </h2>
            <p>
              We do not sell, license, or distribute your data. Archival printmaking partners are bound by individual project NDAs matching our core standards of absolute discretion.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
