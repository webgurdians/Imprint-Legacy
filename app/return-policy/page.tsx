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
              Return Policy
            </h1>
            <p className="text-2xs text-muted uppercase tracking-widest font-sans">
              Last Updated: June 10, 2026
            </p>
          </header>

          <section className="space-y-6 font-sans text-sm font-light leading-relaxed text-muted">
            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              1. Bespoke Craftsmanship Disclaimer
            </h2>
            <p>
              Every Imprint Legacy monograph is a custom-made work, tailored specifically to the historical records and details of the commissioning client. Due to the highly personalized nature of archival research, custom typesetting, and hand-bound printmaking, **we do not support standard cancellations, returns, or refunds** once work has commenced.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              2. Approval Milestones
            </h2>
            <p>
              To ensure absolute satisfaction, we establish multiple strict approval milestones during the commission process:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>**Structural Outline Approval:** Before writing commences.</li>
              <li>**Manuscript Sign-off:** Before typesetting and cover design layouts.</li>
              <li>**Proof Verification:** A complete digital or linen-proof layout verification before final hot-stamping and leather binding.</li>
            </ul>
            <p>
              Your physical volumes are only produced after your team signs off on the final print proofs.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              3. Damages and Defects
            </h2>
            <p>
              We stand by our 200-year archival guarantee. If any physical volume arrives with manufacturing defects, shipping damages, or binding anomalies, please notify your project manager within 7 business days of delivery. We will immediately arrange for the damaged volume to be returned and replace it with a hand-bound replacement free of charge.
            </p>

            <h2 className="font-heading text-xl font-medium text-white tracking-wide">
              4. Contact Us
            </h2>
            <p>
              If you have any questions regarding your commission specifications, please reach out to your designated account manager or email us directly at:
              <br />
              <a
                href="mailto:editorial@imprintlegacy.in"
                className="text-accent hover:underline mt-2 inline-block"
              >
                editorial@imprintlegacy.in
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
