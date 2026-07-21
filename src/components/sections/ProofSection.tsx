"use client";

import { MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

interface ProofProps {
  whatsappNumber?: string;
}

export default function ProofSection({ whatsappNumber = "22500000000" }: ProofProps) {
  const encodedMessage = encodeURIComponent(
    "Bonjour M. Kwame, j'ai lu votre parcours. Je souhaite discuter de mon entreprise avec vous lors d'un échange de 20 min."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <section className="py-20 md:py-28 bg-brand-bg text-slate-100 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-brand-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        
        {/* TITRE NARRATIF */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-gold">
            Parcours & Expérience de Terrain
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            « Pendant plus de 20 ans, j'ai été aux commandes là où l'erreur ne pardonne pas. »
          </h2>
        </div>

        {/* LE RÉCIT PERSONNEL ET FLUIDE */}
        <div className="p-8 md:p-12 rounded-2xl bg-brand-card border border-brand-border space-y-6 text-slate-300 text-base md:text-xl font-light leading-relaxed shadow-2xl">
          
          <p>
            Pendant plus de deux décennies, j'ai dirigé des établissements de premier plan, notamment au poste de Directeur Général du <strong className="text-slate-100 font-semibold">Pullman Abidjan</strong>. Sur le terrain, j'ai eu la responsabilité directe de gérer des budgets d'exploitation dépassant <strong className="text-brand-gold font-semibold">1,9 Milliard de FCFA</strong> et de piloter des centaines de collaborateurs au quotidien.
          </p>

          <p>
            J'ai connu les fins de mois difficiles, les tensions dans les équipes, les contrôles administratifs rigoureux et les exigences des normes internationales les plus strictes (comme la certification de sécurité bancaire PCI DSS). 
          </p>

          <p>
            Ce que cette longue expérience m'a appris, c'est une vérité très simple : <strong className="text-slate-100 font-semibold">il n'y a pas de petite ou de grande entreprise face au désordre.</strong> 
          </p>

          <p>
            Que vous gériez un établissement prestigieux ou une structure à taille humaine, les ingrédients d'une affaire qui réussit restent exactement les mêmes : 
          </p>

          <ul className="space-y-3 pt-2 text-slate-200">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <span>Savoir exactement où va chaque franc dépensé.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <span>Donner des consignes simples et précises à ses employés pour que le travail soit fait correctement, même quand le patron n'est pas là.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <span>Garder une qualité constante pour que les clients reviennent avec le sourire.</span>
            </li>
          </ul>

          <div className="pt-6 border-t border-brand-border/60">
            <p className="text-slate-100 font-medium italic">
              « Je ne viens pas vous donner des leçons depuis un bureau. Je viens m'asseoir à vos côtés, regarder votre réalité et vous aider à remettre de l'ordre pour que votre entreprise devienne enfin rentable et agréable à gérer. »
            </p>
          </div>

        </div>

        {/* CTA WHATSAPP */}
        <div className="mt-12 text-center space-y-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base md:text-lg transition-all duration-200 shadow-xl shadow-emerald-950/80 border border-emerald-400/30 group active:scale-95"
          >
            <MessageSquare className="w-6 h-6 fill-white/20" />
            <span>Réserver un échange gratuit de 20 min avec M. Kwame</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}