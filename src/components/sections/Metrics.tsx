"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, Globe2 } from "lucide-react";

const metrics = [
  {
    id: 1,
    value: "1,9 Md",
    unit: "FCFA",
    label: "Budget Annuel Géré",
    description: "Responsabilité P&L sur des périmètres opérationnels critiques et à fort enjeu.",
    icon: TrendingUp,
  },
  {
    id: 2,
    value: "20+",
    unit: "ans",
    label: "D'Expérience Exécutive",
    description: "Direction d'opérations dans des environnements premium et fortement réglementés.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    value: "17",
    unit: "experts",
    label: "Équipes Multidisciplinaires",
    description: "Management direct, alignement stratégique et développement des talents.",
    icon: Users,
  },
  {
    id: 4,
    value: "2",
    unit: "pays clés",
    label: "Ancrage Régional",
    description: "Maîtrise opérationnelle des marchés complexes (Côte d'Ivoire & Nigeria).",
    icon: Globe2,
  },
];

export default function Metrics() {
  return (
    <section className="py-20 relative bg-brand-bg border-y border-brand-border/60">
      {/* Halo de fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/[0.02] to-transparent pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
            Track Record & Impact Financier
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal">
            L'Excellence Opérationnelle Mesurée
          </h2>
          <p className="text-sm text-brand-muted">
            Un pilotage par la donnée et les résultats pour garantir rentabilité, conformité et pérennité.
          </p>
        </div>

        {/* Grille des KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-brand-card/60 border border-brand-border hover:border-brand-gold/40 transition-all duration-300 group"
              >
                {/* Icône en filigrane / haut de carte */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-lg bg-brand-bg border border-brand-border text-brand-gold group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-muted/70 tracking-wider">
                    KPI #0{item.id}
                  </span>
                </div>

                {/* Chiffre clé */}
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-slate-100 tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-semibold text-brand-gold uppercase">
                    {item.unit}
                  </span>
                </div>

                {/* Titre & Description */}
                <h3 className="text-sm font-semibold text-slate-200 mb-2">
                  {item.label}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Ligne d'accentuation or au survol */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/0 to-transparent group-hover:via-brand-gold/50 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}