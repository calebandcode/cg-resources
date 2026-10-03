"use client";

import React, { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon, CloseIcon } from "@/components/ui/icons";

export interface MembershipModalData {
  programme: string;
  package: string;
  price: string;
  period?: string;
  note?: string;
}

interface MembershipModalProps {
  data: MembershipModalData | null;
  onClose: () => void;
}

export function MembershipModal({ data, onClose }: MembershipModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (data) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  const isRateOnRequest = data.price === "On request" || data.price === "Contact us";

  const whatsappMessage = isRateOnRequest
    ? `Hello CMA, I am interested in ${data.programme} — ${data.package}. Could you please share the current rate and registration information? Thank you.`
    : `Hello CMA, I am interested in ${data.programme} — ${data.package} (${data.price}${data.period ? " " + data.period : ""}). I'd like to know more about registration and how to begin training.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-ink/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cmaModalTitle"
    >
      <div className="w-full max-w-[560px] max-h-[90vh] overflow-y-auto bg-paper text-ink border border-sand rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-7 sm:py-6 border-b border-sand">
          <h3 id="cmaModalTitle" className="font-display text-base sm:text-xl uppercase tracking-wider font-bold text-ink">
            {data.programme} — {data.package}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-full border border-sand bg-cream text-ink hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200 cursor-pointer shrink-0"
          >
            <CloseIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider bg-accent/10 border border-accent text-accent">
              {data.programme}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider bg-gold/10 border border-gold text-gold">
              {data.package}
            </span>
          </div>

          <div className="my-3 sm:my-4 font-display text-3xl sm:text-4xl font-extrabold text-accent leading-tight">
            {isRateOnRequest ? (
              "Rates on request"
            ) : (
              <>
                {data.price}
                {data.period && (
                  <small className="ml-2 font-sans text-sm font-medium text-ink-soft">
                    {data.period}
                  </small>
                )}
              </>
            )}
          </div>

          <div className="divide-y divide-sand text-sm mt-6 font-sans">
            <div className="flex justify-between py-3">
              <span className="text-ink-soft">Programme</span>
              <span className="font-semibold text-ink text-right">
                {data.programme}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-ink-soft">Package</span>
              <span className="font-semibold text-ink text-right">
                {data.package}
              </span>
            </div>
            {data.period && (
              <div className="flex justify-between py-3">
                <span className="text-ink-soft">Billing</span>
                <span className="font-semibold text-ink text-right">
                  {data.period}
                </span>
              </div>
            )}
            <div className="flex justify-between py-3">
              <span className="text-ink-soft">Price</span>
              <span className="font-semibold text-ink text-right font-display text-base">
                {data.price}
              </span>
            </div>
          </div>

          {data.note && (
            <div className="mt-5 p-4 bg-cream-100 border-l-4 border-accent rounded-r-2xl text-xs sm:text-sm text-ink-soft leading-relaxed font-sans">
              {data.note}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-display text-xs sm:text-sm font-bold tracking-wider uppercase hover:shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp CMA →
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-sand bg-transparent text-ink font-display text-xs sm:text-sm font-bold tracking-wider uppercase hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
