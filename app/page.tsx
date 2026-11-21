import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe } from "lucide-react";
import { SUB_SERVICES } from "@/data/rinextData";

export default function HomePage() {
  return (
    <div>
      {/* HERO PLEIN ÉCRAN */}
      <section className="relative w-full min-h-[82vh] flex items-center overflow-hidden bg-slate-950">
        <img
          src="/images/hero-rinext.jpg"
          alt="RINEXT DIGITAL — Ingénierie Web, Réseaux et Matériel IT"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-[#094582]/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32 w-full">
          <div className="max-w-3xl space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-sky-300" />
              <span>Next Digital World • Uvira (RDC)</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Nous bâtissons les solutions numériques et réseaux de votre organisation.
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
              <strong className="text-white font-semibold">Rinext Digital</strong> accompagne les églises, ONG, écoles, entreprises et particuliers dans la création de sites web, le référencement SEO, l'audit de systèmes et la{" "}
              <span className="text-sky-300 font-medium">
                vente directe avec expédition d'équipements informatiques entre le Burundi et Uvira (RDC)
              </span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/portfolio"
                className="px-7 py-3.5 rounded-full bg-[#0D64BA] hover:bg-[#094582] text-white font-medium text-sm transition inline-flex items-center gap-2 shadow-lg shadow-[#0D64BA]/30"
              >
                <span>Voir notre portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm transition"
              >
                Explorer nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APERÇU VERS LES PAGES DÉDIÉES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA] mb-2">
              Nos Expertises
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              Solutions digitales, réseaux et matériel IT
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D64BA] hover:underline"
          >
            <span>Découvrir tous nos services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SUB_SERVICES.map((service) => (
            <Link
              key={service.id}
              href="/services"
              className="group p-6 rounded-2xl border border-slate-200 hover:border-[#0D64BA] transition flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="font-display font-bold text-base text-slate-950 group-hover:text-[#0D64BA] transition">
                  {service.shortTitle}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {service.tagline}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D64BA]">
                <span>En savoir plus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}