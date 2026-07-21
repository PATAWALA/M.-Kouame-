"use client";

import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

interface StickyCtaProps {
  whatsappNumber?: string; // Ex: "2250700000000" (sans le +)
  clientName?: string;
}

export default function StickyCta({
  whatsappNumber = "22500000000", // Remplace par son vrai numéro WhatsApp
  clientName = "M. Kwame"
}: StickyCtaProps) {

  // Message pré-rédigé pour faciliter le premier contact sur WhatsApp
  const encodedMessage = encodeURIComponent(
    `Bonjour ${clientName}, j'ai consulté votre profil exécutif. Je souhaite réserver ma Session Stratégique Offerte de 20 min concernant une opportunité / un diagnostic opérationnel.`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <>
      {/* ========================================================= */}
      {/* 1. HEADER FIXE DESKTOP (Visible uniquement sur md et +)   */}
      {/* ========================================================= */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border/60 transition-all">
        <div className="container max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Identité / Logo textuel */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif font-bold text-sm">
              MK
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-semibold text-slate-100 tracking-wide">
                {clientName}
              </span>
              <span className="text-[10px] text-brand-muted uppercase tracking-wider">
                Executive Leadership
              </span>
            </div>
          </a>

          {/* Navigation Rapide & CTA Desktop */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6 text-xs font-medium text-slate-300">
              <a href="#expertise" className="hover:text-brand-gold transition-colors">Expertise</a>
              <a href="#framework" className="hover:text-brand-gold transition-colors">Méthodologie</a>
              <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
            </nav>

            {/* Bouton WhatsApp Desktop */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all duration-200 shadow-lg shadow-emerald-950/40 border border-emerald-400/30 group"
            >
              <MessageSquare className="w-4 h-4 text-emerald-100 fill-emerald-100/20" />
              <span>Session Stratégique Offerte</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. FLOATING BAR MOBILE (Visible uniquement sous md)        */}
      {/* ========================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-brand-bg via-brand-bg/95 to-transparent backdrop-blur-lg border-t border-brand-border/80">
        <div className="flex flex-col gap-2">
          
          {/* Micro-accroche Rassurance */}
          <div className="flex items-center justify-between text-[11px] text-slate-300 px-1">
            <span className="flex items-center gap-1.5 text-brand-gold font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Échange confidentiel (20 min)
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              Offert
            </span>
          </div>

          {/* Gros Bouton WhatsApp Mobile */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/60 border border-emerald-400/30 active:scale-[0.98] transition-transform"
          >
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span>Réserver mon Diagnostic WhatsApp</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

        </div>
      </div>
    </>
  );
}