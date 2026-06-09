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
              Bespoke Publishing Agreement Framework
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-2xs text-muted uppercase tracking-widest font-sans">
              Last Updated: June 10, 2026
            </p>
          </header>

          <section className="space-y-8 font-sans text-sm font-light leading-relaxed text-muted">
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                1. Retainer & Commission Framework
              </h2>
              <p>
                Bespoke publishing commissions are billed on a structured milestone basis (Retainer, Draft Completion, and Print Release). 
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Cancellations:</strong> The initial commencement retainer is non-refundable once biographical research or interviews begin, covering biographer allocation and indexing. However, if Imprint Legacy terminates the commission without cause, the retainer is fully refunded.
                </li>
                <li>
                  <strong>Pauses & Delays:</strong> If the client requests a project pause exceeding 90 consecutive days, the commission is placed on hold. Reactivation is subject to biographer availability and a 10% administrative reactivation fee.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                2. Delivery Guarantees & SLA
              </h2>
              <p>
                While final delivery timelines depend on timely access to historical documents and key stakeholders, we operate under strict service-level commitments:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Manuscript Window:</strong> We commit to delivering the initial complete manuscript draft within 180 days of obtaining primary stakeholder interviews.
                </li>
                <li>
                  <strong>Remedies for Delay:</strong> If a delay is caused solely by Imprint Legacy exceeding this window by more than 45 days, the client is entitled to a 5% discount on the final print release milestone, or two (2) additional complimentary leather-bound volumes.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                3. Revision Cycle & Editorial Disagreement
              </h2>
              <p>
                Every commission includes **two (2) rounds of comprehensive structural and editorial revisions** on the drafted manuscript prior to page layout.
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Factual Accuracy:</strong> The client retains absolute and final authority regarding all historical and biographical facts.
                </li>
                <li>
                  <strong>Aesthetic Disagreements:</strong> Imprint Legacy retains final authority on matters of graphic design, typesetting, and print execution to maintain our high binding standards.
                </li>
                <li>
                  <strong>Final Proof Sign-off:</strong> The client must provide a signed, written approval of the final digital layout proof. No alterations can be made once printing and cover engraving begin.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                4. Intellectual Property & Copyright Ownership
              </h2>
              <p>
                We enforce clear boundary guidelines regarding proprietary content and creative creative outputs:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Client Archives:</strong> The client retains exclusive ownership and all intellectual property rights for all raw corporate records, letters, logos, and historical materials supplied to us.
                </li>
                <li>
                  <strong>Manuscript & Narratives:</strong> Complete copyright ownership of the finished compiled narrative text is transferred in full to the client upon receipt of the final Milestone Payment.
                </li>
                <li>
                  <strong>Recordings & Transcripts:</strong> Exclusive ownership of all biographer oral history recordings and text transcripts is transferred to the client upon completion of the draft phase, to be kept as private client archives.
                </li>
                <li>
                  <strong>Future Reproduction:</strong> The client holds full future reproduction and reprint rights, enabling them to print additional copies through Imprint Legacy or any third-party printer at their sole discretion.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                5. Absolute Confidentiality Obligations
              </h2>
              <p>
                Given that founders and legacy companies share sensitive personal and commercial details, we operate under strict data-handling policies:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>NDA Execution:</strong> A comprehensive bilateral Non-Disclosure Agreement (NDA) is executed prior to the exchange of any archives or the commencement of oral interviews.
                </li>
                <li>
                  <strong>Data Handling:</strong> All raw recordings, transcript files, and drafts are hosted on secure, offline-capable encrypted local storage systems accessible only by your designated biography team.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-medium text-white tracking-wide">
                6. Material & Binding Specifications
              </h2>
              <p>
                Each monograph is produced to exceed national library preservation standards:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Paper:</strong> 150 GSM pH-neutral, acid-free cotton-blend archival paper (consistently Ivory).
                </li>
                <li>
                  <strong>Binding:</strong> Traditional Smyth-sewn construction using reinforced cotton stitching (guaranteed lie-flat).
                </li>
                <li>
                  <strong>Covers:</strong> Hand-wrapped, full-grain Italian calfskin leather or premium grade-A library linen with hot-stamped 24k gold leaf foil details.
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <p className="text-xs italic text-muted">
                Note: The above public terms serve as our standard operating framework. Every commission is governed by a separate, detailed bilateral Commission Agreement signed by authorized representatives of both parties prior to any billing.
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
