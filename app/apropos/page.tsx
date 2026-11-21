import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez Rinext Digital (Next Digital World), entreprise fondée par Junior M. Richard à Uvira (RDC), spécialisée dans le web, l'audit réseau et le matériel IT.",
};

export default function AProposPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA]">
            À Propos de Nous
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-950 leading-tight">
            Next Digital World
          </h1>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D64BA] bg-[#EBF4FD] px-3.5 py-2 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Uvira (RDC)</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5 text-slate-600 text-base leading-relaxed">
          <p>
            Fondée par{" "}
            <a
              href="https://juniormrichard.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-900 hover:text-[#0D64BA] underline underline-offset-4"
            >
              Junior M. Richard
            </a>
            , <strong className="text-slate-900">Rinext Digital</strong> est une entreprise spécialisée dans les solutions numériques, l'audit des systèmes et réseaux, le design graphique ainsi que la fourniture d'équipements informatiques.
          </p>
          <p>
            Notre mission est d'offrir aux organisations, églises, entreprises et particuliers des outils technologiques modernes et fiables, tout en facilitant l'accès direct et l'expédition rapide de matériel informatique et réseau entre le <strong className="text-slate-900">Burundi</strong> et <strong className="text-slate-900">Uvira (RDC)</strong>.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D64BA] hover:bg-[#094582] text-white text-sm font-medium transition"
            >
              <span>Entrer en contact avec notre équipe</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}