"use client";

import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

interface CtaProps {
  whatsappNumber?: string;
}

export default function CtaCapture({ whatsappNumber = "22500000000" }: CtaProps) {
  const encodedMessage = encodeURIComponent(
    "Bonjour M. Kwame, je souhaite réserver ma Session Stratégique Offerte de 20 min."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <section className="py-20 bg-gradient-to-b from-brand-bg to-emerald-950/20 text-center relative">
      <div className="container max-w-3xl mx-auto px-6">
        
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
          Ne laissez plus le désordre opérationnel piloter votre entreprise.
        </h2>
        
        <p className="text-sm sm:text-base text-slate-300 font-light mb-8 max-w-xl mx-auto">
          Réservez dès maintenant votre **Session Stratégique Offerte de 20 minutes**. Nous identifierons le plus grand blocage de votre structure et 2 leviers d'action immédiats.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all duration-200 shadow-2xl shadow-emerald-950/80 border border-emerald-400/30 group active:scale-95"
        >
          <MessageSquare className="w-5 h-5 fill-white/20" />
          <span>Lancer l'échange confidentiel sur WhatsApp</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-brand-muted">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Accès direct à M. Kwame • 0 engagement financier</span>
        </div>

      </div>
    </section>
  );
}