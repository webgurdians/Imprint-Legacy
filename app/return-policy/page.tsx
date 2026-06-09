"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ReturnPolicy() {
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
              Bespoke Quality Guarantees
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Return & Replacement Policy
            </h1>
            <p className="text-2xs text-muted uppercase tracking-widest font-sans">
              Last Updated: June 10, 2026
            </p>
          </header>

          <section className="space-y-8 font-sans text-sm font-light leading-relaxed text-muted">
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                1. Custom Craftsmanship Notice
              </h2>
              <p>
                Each Imprint Legacy monograph is individually curated, typeset, and hand-bound. Because these volumes are custom-crafted using your organization's private archives and oral histories, **all sales are final**. We do not support cancellations, changes, or refunds once printing plates have been created and binding boards have been wrapped.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                2. Proof Verification Milestone
              </h2>
              <p>
                To prevent errors, clients are required to approve a physical linen-bound proof or a high-resolution digital layout proof before we begin final print production. 
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Editorial Scope:</strong> Factual or editorial errors that were present in the approved proof are not grounds for a refund or replacement.
                </li>
                <li>
                  <strong>Production Agreement:</strong> Your final print release signature indicates complete approval of all content, typography, and image placement.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                3. Manufacturing Defect Replacements
              </h2>
              <p>
                We stand by our 200-year archival materials guarantee. If your custom volumes arrive with defects in manufacturing, assembly, or shipping damage, we will replace them in full:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Reporting Window:</strong> Any manufacturing anomalies (e.g., loose binding stitching, pages binding out of sequence, leather tears, foil hot-stamping smudges, or shipping indentations) must be reported to your project manager within **30 calendar days** of delivery.
                </li>
                <li>
                  <strong>Remedy:</strong> Upon verification of the defect, we will reproduce and bind a replacement volume matching your original specifications at our own cost. Defective volumes must be returned to us for recycling and verification.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                4. Print Run Discrepancies
              </h2>
              <p>
                For commissions involving large print runs (for stakeholder gifting or distribution), we verify the exact copy count before shipping. Any shortages in the final delivery will be rectified immediately by shipping the missing quantity or adjusting the final invoice proportionally.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <p className="text-xs italic text-muted">
                Questions? For assistance with delivery audits or physical volume replacements, please reach out to your designated account manager or email our printmaking department at:
                <br />
                <a
                  href="mailto:editorial@imprintlegacy.in"
                  className="text-accent hover:underline mt-2 inline-block font-sans not-italic"
                >
                  editorial@imprintlegacy.in
                </a>
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
