"use client";

import Image from "next/image";
import { ArrowRight, ShieldAlert, CheckCircle2, MessageSquare } from "lucide-react";

interface HeroProps {
  whatsappNumber?: string;
}

export default function HeroCapture({ whatsappNumber = "22500000000" }: HeroProps) {
  const encodedMessage = encodeURIComponent(
    "Bonjour M. Kwame, j'ai lu votre message. Je souhaite échanger 20 minutes sur la situation de mon entreprise."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-brand-bg text-slate-100 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* EN-TÊTE DIRECT ET ACCESSIBLE */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-card border border-brand-gold/30 text-brand-gold font-semibold text-xs md:text-sm tracking-wider uppercase">
            Organisation, Rentabilité & Gestion de Terrain
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.18] text-slate-100">
            « On investit ses économies, son temps et son énergie... <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold">
              pour au final voir l'argent s'échapper et le désordre s'installer. »
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Peu importe la taille de votre structure, quand l'organisation flanche, les pertes s'accumulent et le dirigeant se retrouve épuisé à éteindre des incendies au lieu de faire grandir son activité.
          </p>
        </div>

        {/* PHOTO + STORYTELLING "J'AI VU..." */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden border border-brand-border bg-brand-card shadow-2xl group">
                <Image
                  src="/images/portrait.jpg"
                  alt="Portrait M. Kwame"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-brand-bg/90 backdrop-blur-md border border-brand-border">
                  <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">M. Kouame</p>
                  <p className="text-base font-semibold text-slate-100">Direction & Pilotage d'Établissements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-base md:text-xl text-slate-300 font-light leading-relaxed">
            
            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border space-y-4">
              <p className="text-lg md:text-2xl font-serif text-brand-gold italic">
                Je sais exactement ce que c'est que de se battre chaque jour pour faire tourner une entreprise et de voir les bénéfices disparaître sans comprendre où va l'argent.
              </p>
              <p className="text-slate-300 text-base md:text-lg">
                Que ce soit dans un grand hôtel, un restaurant, un cabinet professionnel ou une PME, le problème est toujours le même : quand il n'y a pas de règles claires et de suivi rigoureux, c'est le chaos.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 shrink-0 mt-1">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-100 text-lg md:text-xl mb-1">
                    J'ai vu des structures perdre des millions sans s'en rendre compte
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg">
                    Des stocks qui disparaissent, des achats payés trop cher, des erreurs de caisse ou des factures oubliées. Des petites fuites quotidiennes qui finissent par couler l'entreprise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-1">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-100 text-lg md:text-xl mb-1">
                    J'ai vu des patrons devenus esclaves de leur propre affaire
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg">
                    Incapables de s'absenter une seule journée sans que le travail ne s'arrête ou que les employés ne fassent n'importe quoi, faute d'organisation claire.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-1">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-100 text-lg md:text-xl mb-1">
                    J'ai vu des clients déçus qui ne reviennent plus jamais
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg">
                    Simplement parce que le service n'est pas régulier et que la qualité dépend de l'humeur du personnel du jour.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-brand-border space-y-4">
              <h3 className="font-serif text-2xl font-bold text-slate-100">
                Cette souffrance et ce gaspillage ne sont pas une fatalité.
              </h3>
              <p className="text-base md:text-lg text-slate-300">
                Aujourd'hui, je mets mon expérience de terrain au service des dirigeants et propriétaires qui veulent remettre de l'ordre, stopper les pertes et retrouver leur tranquillité d'esprit.
              </p>
            </div>

          </div>

        </div>

        {/* CALL TO ACTION */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-brand-card to-brand-bg border border-brand-gold/40 text-center space-y-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Échange Direct & Simple</span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-slate-100">
              Parlons de votre situation en toute simplicité.
            </h2>
            <p className="text-slate-300 text-sm md:text-base">
              Pendant 20 minutes sur WhatsApp, nous faisons le point ensemble sur votre organisation actuelle et les moyens simples de corriger ce qui ne va pas.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base md:text-lg transition-all duration-200 shadow-xl shadow-emerald-950/80 border border-emerald-400/30 active:scale-95 group"
          >
            <MessageSquare className="w-6 h-6 fill-white/20" />
            <span>Discuter avec M. Kwame sur WhatsApp (20 min)</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-muted pt-2">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sans charabia technique</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Confidentiel</span>
          </div>
        </div>

      </div>
    </section>
  );
}