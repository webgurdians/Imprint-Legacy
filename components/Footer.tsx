import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/5 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="group flex flex-col focus:outline-none">
              <span className="font-heading text-lg font-bold tracking-[0.2em] text-white group-hover:text-accent transition-colors duration-300">
                IMPRINT LEGACY
              </span>
              <span className="text-[9px] tracking-[0.35em] text-muted uppercase mt-0.5">
                Institutional Publishing
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-muted max-w-sm">
              We compile, document, and publish private editions of the histories of foremost founders, corporate dynasties, and historic enterprises. Printed and bound to museum archival standards.
            </p>
          </div>

          {/* Links and Contact Cols */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-2xs font-semibold uppercase tracking-[0.2em] text-white">
                  Monographs
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/founder-book"
                      className="text-xs text-muted hover:text-white transition-colors duration-300"
                    >
                      The Founder Legacy Book
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="text-xs text-muted hover:text-white transition-colors duration-300"
                    >
                      B2B Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/apply"
                      className="text-xs text-muted hover:text-white transition-colors duration-300"
                    >
                      Apply for Commission
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-2xs font-semibold uppercase tracking-[0.2em] text-white">
                  Corporate
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <span className="text-xs text-muted">
                      Kolkata, India
                    </span>
                  </li>
                  <li>
                    <a
                      href="mailto:editorial@imprintlegacy.in"
                      className="inline-flex items-center text-xs text-muted hover:text-white transition-colors duration-300 group"
                    >
                      editorial@imprintlegacy.in
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xs font-semibold uppercase tracking-[0.2em] text-white">
                Ethos
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Each commission undergoes rigorous biographical verification, oral history capture, and premium leather/cloth bookbinding in collaboration with master printmakers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-2xs tracking-[0.05em] text-muted">
            &copy; {new Date().getFullYear()} Imprint Legacy. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-2xs text-muted">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/return-policy" className="hover:text-white transition-colors duration-300">
              Return Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms & Conditions
            </Link>
            <span className="text-muted/60">Strictly Private Editions</span>
            <span className="text-muted/60">By Invitation Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
