"use client";

import {  Shield } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-8 bg-brand-bg border-t border-brand-border/40 text-xs text-brand-muted">
      <div className="container max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-slate-300 font-medium">
          <Shield className="w-4 h-4 text-brand-gold" />
          <span>M. Kwame — Executive Leadership</span>
        </div>

        <p className="text-[11px] text-brand-muted/70">
          © {new Date().getFullYear()} — Tous droits réservés. Notice biographique confidentielle.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-brand-card border border-brand-border text-slate-400 hover:text-brand-gold hover:border-brand-gold/40 transition-colors"
            aria-label="Profil LinkedIn"
          >
            < FaLinkedin className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}