import StickyCta from "@/components/ui/StickyCta";
import HeroCapture from "@/components/sections/HeroCapture";
import PainSection from "@/components/sections/PainSection";
import ProofSection from "@/components/sections/ProofSection";
import CtaCapture from "@/components/sections/CtaCapture";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const whatsappNum = "22500000000"; // Remplacer par son vrai numéro WhatsApp

  return (
    <main className="min-h-screen bg-brand-bg text-slate-100 selection:bg-brand-gold selection:text-black pt-0 md:pt-20 pb-20 md:pb-0">
      {/* CTA toujours visible : Header Desktop + Sticky Mobile */}
      <StickyCta whatsappNumber={whatsappNum} clientName="M. Kwame" />

      {/* Funnel de Capture Ultra-Serré */}
      <HeroCapture whatsappNumber={whatsappNum} />
      <PainSection whatsappNumber={whatsappNum} />
      <ProofSection />
      <CtaCapture whatsappNumber={whatsappNum} />
      <Footer />
    </main>
  );
}