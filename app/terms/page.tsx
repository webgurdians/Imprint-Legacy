"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
              Legal Commissions Framework
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-2xs text-muted uppercase tracking-widest font-sans">
              Last Updated: June 10, 2026
            </p>
          </header>

          <section className="space-y-6 font-sans text-sm font-light leading-relaxed text-muted">
            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              1. Commission Services
            </h2>
            <p>
              By applying for and funding a publishing commission with Imprint Legacy, you contract for our bespoke corporate historical curation, biographical research, layout design, and hand-binding services.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              2. Intake Evaluation
            </h2>
            <p>
              Due to publishing calendar constraints, all commission requests are subject to editorial review by our Creative Director. We reserve the right to reject any application for any reason, including schedule conflicts or thematic alignment.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              3. Copyright and Ownership
            </h2>
            <p>
              Unless explicitly negotiated otherwise, you retain complete proprietary ownership of any corporate archives, trademarks, and records supplied to us. Upon final delivery and full payment settlement, the copyright of the custom compiled narrative text is transferred in full to the commissioning entity.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              4. Payment & Milestones
            </h2>
            <p>
              Bespoke commissions are billed on a structured milestone basis: a non-refundable commencement retainer, a drafting milestone, and a final print release payment. Delivery schedules depend on prompt access to stakeholders and historical documentation.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              5. Governing Law
            </h2>
            <p>
              These Terms and any individual commission contracts are governed and construed in accordance with the laws of India. Any legal disputes arising under these terms are subject to the exclusive jurisdiction of the courts of Kolkata, India.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
