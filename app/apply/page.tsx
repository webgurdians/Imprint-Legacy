"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Award, Sparkles } from "lucide-react";

// Form Schema definition using Zod
const applySchema = z.object({
  organizationName: z
    .string()
    .min(2, "Organization name must be at least 2 characters."),
  primarySubject: z
    .string()
    .min(2, "Primary subject (e.g. founder, co-founder) must be at least 2 characters."),
  legacyMilestone: z
    .string()
    .min(15, "Please describe the milestone in at least 15 characters to help us evaluate the commission."),
  budgetConfirmed: z
    .enum(["true", "false"], {
      message: "Please select an option to confirm your budget compatibility.",
    }),
});

type ApplyFormValues = z.infer<typeof applySchema>;

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValidating },
    watch,
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    mode: "onBlur",
  });

  const nextStep = async () => {
    let fieldsToValidate: Array<keyof ApplyFormValues> = [];
    if (step === 0) {
      fieldsToValidate = ["organizationName", "primarySubject"];
    } else if (step === 1) {
      fieldsToValidate = ["legacyMilestone"];
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  const onSubmit = (data: ApplyFormValues) => {
    console.log("Form data submitted:", data);
    setIsSubmitted(true);
  };

  // Steps configurations
  const totalSteps = 3;
  const stepTitles = ["Identification", "Milestone Narrative", "Investment Alignment"];

  return (
    <div className="flex flex-col min-h-[85vh] bg-background text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative luxury gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[500px] bg-accent/3 opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-xl px-6 w-full relative z-10">
        
        {/* Main Header (Visible when not submitted) */}
        {!isSubmitted && (
          <div className="text-center mb-12 space-y-3">
            <span className="text-2xs uppercase tracking-[0.25em] text-accent font-semibold">
              Commission Registry
            </span>
            <h1 className="font-heading text-3xl font-light text-white tracking-tight">
              Application for Monograph
            </h1>
            <p className="text-xs text-muted max-w-sm mx-auto font-sans leading-relaxed">
              We accept a limited number of commissions each fiscal quarter. Please fill in our brief intake questionnaire to initiate the editorial review.
            </p>
          </div>
        )}

        {/* Progress Gauge (Visible when not submitted) */}
        {!isSubmitted && (
          <div className="mb-10">
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-muted mb-2 font-medium">
              <span>Step {step + 1} of {totalSteps}</span>
              <span>{stepTitles[step]}</span>
            </div>
            <div className="h-[2px] w-full bg-white/5 relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: "33.3%" }}
                animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="border border-white/5 bg-secondary/20 p-8 sm:p-10 rounded-none shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* STEP 1: Identification */}
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="organizationName"
                        className="block text-2xs uppercase tracking-[0.2em] text-white font-semibold"
                      >
                        Organization Name
                      </label>
                      <input
                        type="text"
                        id="organizationName"
                        placeholder="e.g. Singhania Industries, CloudCore Inc."
                        {...register("organizationName")}
                        className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-xs text-white placeholder-muted focus:border-accent focus:outline-none transition-all duration-300 rounded-none font-sans"
                      />
                      {errors.organizationName && (
                        <p className="text-2xs text-red-500 font-sans mt-1">
                          {errors.organizationName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="primarySubject"
                        className="block text-2xs uppercase tracking-[0.2em] text-white font-semibold"
                      >
                        Primary Subject of the Monograph
                      </label>
                      <input
                        type="text"
                        id="primarySubject"
                        placeholder="e.g. The Founder's Biography, Company's 50-Year Anniversary"
                        {...register("primarySubject")}
                        className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-xs text-white placeholder-muted focus:border-accent focus:outline-none transition-all duration-300 rounded-none font-sans"
                      />
                      {errors.primarySubject && (
                        <p className="text-2xs text-red-500 font-sans mt-1">
                          {errors.primarySubject.message}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Legacy Milestone Narrative */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="legacyMilestone"
                        className="block text-2xs uppercase tracking-[0.2em] text-white font-semibold"
                      >
                        Legacy Milestone Details
                      </label>
                      <span className="text-[10px] text-muted block mb-1">
                        Describe the key historical milestones, transitions, or achievements that this book will preserve.
                      </span>
                      <textarea
                        id="legacyMilestone"
                        rows={5}
                        placeholder="Detail the timeline, key pivots, and legacy objectives..."
                        {...register("legacyMilestone")}
                        className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-xs text-white placeholder-muted focus:border-accent focus:outline-none transition-all duration-300 rounded-none font-sans resize-none"
                      />
                      {errors.legacyMilestone && (
                        <p className="text-2xs text-red-500 font-sans mt-1">
                          {errors.legacyMilestone.message}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Investment Qualification */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <span className="block text-2xs uppercase tracking-[0.2em] text-white font-semibold">
                        Budget Confirmation
                      </span>
                      <p className="text-xs leading-relaxed text-muted font-sans font-light">
                        Our monographs are custom works printed on museum-grade acid-free paper with Smyth-sewn binding. Bespoke archival design services begin at <strong className="text-white font-semibold">₹75,000</strong>.
                      </p>

                      <div className="space-y-3 pt-2 font-sans">
                        <label className="flex items-start gap-3 border border-white/5 bg-[#121212] p-4 cursor-pointer hover:border-accent/40 transition-colors duration-300 rounded-none">
                          <input
                            type="radio"
                            value="true"
                            {...register("budgetConfirmed")}
                            className="mt-0.5 accent-accent focus:ring-0"
                          />
                          <span className="text-xs text-white">
                            Yes, I confirm our project budget aligns with the ₹75,000 to ₹3,00,000 bracket.
                          </span>
                        </label>

                        <label className="flex items-start gap-3 border border-white/5 bg-[#121212] p-4 cursor-pointer hover:border-accent/40 transition-colors duration-300 rounded-none">
                          <input
                            type="radio"
                            value="false"
                            {...register("budgetConfirmed")}
                            className="mt-0.5 accent-accent focus:ring-0"
                          />
                          <span className="text-xs text-white">
                            No, our requirements fall outside of this budget range.
                          </span>
                        </label>
                      </div>

                      {errors.budgetConfirmed && (
                        <p className="text-2xs text-red-500 font-sans mt-1">
                          {errors.budgetConfirmed.message}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Form Buttons */}
                <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-8">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-1 text-2xs uppercase tracking-[0.2em] text-muted hover:text-white transition-colors duration-300 focus:outline-none"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Back
                    </button>
                  ) : (
                    <div /> // Spacer
                  )}

                  {step < totalSteps - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-1.5 bg-accent text-background px-6 py-3 text-2xs font-semibold uppercase tracking-[0.2em] hover:bg-[#b2904c] transition-all duration-300 rounded-none focus:outline-none"
                    >
                      Next Step <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 bg-accent text-background px-6 py-3 text-2xs font-semibold uppercase tracking-[0.2em] hover:bg-[#b2904c] transition-all duration-300 rounded-none focus:outline-none"
                    >
                      Submit Commission Request
                    </button>
                  )}
                </div>

              </form>
            ) : (
              /* Success State Component */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-8 space-y-6"
              >
                <div className="h-16 w-16 bg-accent/10 border border-accent/30 rounded-none flex items-center justify-center mx-auto text-accent shadow-[0_0_30px_rgba(197,160,89,0.1)]">
                  <Award className="h-8 w-8 stroke-[1.2]" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="font-heading text-2xl font-light text-white tracking-tight">
                    Application Logged
                  </h2>
                  <p className="text-2xs uppercase tracking-widest text-accent font-semibold">
                    Strictly Private Review
                  </p>
                </div>

                <p className="text-xs text-muted leading-relaxed font-sans font-light max-w-sm mx-auto">
                  Your application is under review by our Creative Director. We will cross-reference your organization with our current publishing calendar and reach out within 48 business hours.
                </p>

                <div className="h-[1px] w-12 bg-white/10 mx-auto my-6" />

                <div>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center border border-white/10 text-white hover:text-background hover:bg-white px-6 py-2.5 text-2xs uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 rounded-none"
                  >
                    Return to Main Portal
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
