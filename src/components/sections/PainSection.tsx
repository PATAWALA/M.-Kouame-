"use client";

import { MessageSquare, ArrowRight, Wallet, Frown, Users } from "lucide-react";

interface PainProps {
  whatsappNumber?: string;
}

export default function PainSection({ whatsappNumber = "22500000000" }: PainProps) {
  const encodedMessage = encodeURIComponent(
    "Bonjour M. Kwame, je me reconnais dans le constat sur les pertes et l'organisation. Je souhaite faire le point lors d'un échange de 20 min."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <section className="py-20 md:py-28 bg-brand-card/40 border-y border-brand-border/60 text-slate-100">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* EN-TÊTE : SIMPLE ET SANS JARGON */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-gold">
            Ce Qui Se Passe Vraiment Sur Le Terrain
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            « Quand l'organisation manque, l'entreprise s'épuise en silence. »
          </h2>
          <p className="text-base md:text-xl text-slate-300 font-light leading-relaxed">
            Dans la plupart des affaires qui stagnent, le problème vient rarement de la volonté du patron. Il vient des mauvaises habitudes qui se sont installées au fil du temps.
          </p>
        </div>

        {/* LES 3 VRAIS PROBLÈMES DU QUOTIDIEN */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* PROBLÈME 1 : L'ARGENT QUI FUIT */}
          <div className="p-8 rounded-2xl bg-brand-card border border-brand-border space-y-4 relative overflow-hidden group hover:border-red-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 w-fit">
              <Wallet className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-100">
              1. Les fuites d'argent invisibles
            </h3>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
              Des achats mal négociés, des petites pertes de matériel, du gaspillage quotidien et des oublis de facturation. À la fin du mois, c'est autant d'argent en moins dans la trésorerie.
            </p>
          </div>

          {/* PROBLÈME 2 : L'ÉQUIPE ET LE PERSONNEL */}
          <div className="p-8 rounded-2xl bg-brand-card border border-brand-border space-y-4 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-100">
              2. La dépendance aux personnes
            </h3>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
              Comme rien n'est écrit ni structuré, si un employé clé part ou tombe malade, c'est la panique. Tout repose sur quelques personnes au lieu de reposer sur des règles claires.
            </p>
          </div>

          {/* PROBLÈME 3 : LA FATIGUE DU PATRON */}
          <div className="p-8 rounded-2xl bg-brand-card border border-brand-border space-y-4 relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
              <Frown className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-100">
              3. L'épuisement du dirigeant
            </h3>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
              Rentrer tard le soir avec le sentiment de n'avoir fait que régler des problèmes d'employés ou de clients. Ne plus avoir une minute pour réfléchir à l'avenir de son affaire.
            </p>
          </div>

        </div>

        {/* TRANSITION HUMAINE */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-brand-card via-brand-bg to-brand-card border border-brand-gold/30 text-center space-y-6">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-100">
            « Vous n'avez pas créé votre entreprise pour être prisonnier du quotidien. »
          </h3>
          <p className="text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Remettre les choses à plat ne demande pas de tout casser. Il faut juste regarder la réalité en face et corriger les bons détails, un par un.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base md:text-lg transition-all duration-200 shadow-xl shadow-emerald-950/80 border border-emerald-400/30 group active:scale-95"
          >
            <MessageSquare className="w-6 h-6 fill-white/20" />
            <span>Échanger 20 minutes sur WhatsApp pour faire le point</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}