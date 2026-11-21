import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SUB_SERVICES } from "@/data/rinextData";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Développement web et design, référencement SEO, audit systèmes & réseaux, et vente directe d'équipements informatiques à Uvira (RDC).",
};

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA] mb-2">
          Nos Services
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-950">
          Quatre pôles d'expertise intégrés
        </h1>
        <p className="text-base text-slate-600 mt-4 leading-relaxed">
          Des solutions technologiques complètes pour accompagner la croissance et la sécurité numérique des organisations et entreprises en RDC.
        </p>
      </div>

      <div className="space-y-8">
        {SUB_SERVICES.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 grid lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block text-xs font-semibold text-[#0D64BA] bg-[#EBF4FD] px-3 py-1 rounded-full">
                {service.shortTitle}
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-950">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D64BA] hover:bg-[#094582] text-white text-sm font-medium transition"
                >
                  <span>Commander ce service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Prestations incluses
              </div>
              <ul className="space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-800">
                    <Check className="w-4 h-4 text-[#0D64BA] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}