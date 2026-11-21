import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CLIENT_PORTFOLIO } from "@/data/rinextData";

export const metadata: Metadata = {
  title: "Portfolio & Références",
  description:
    "Découvrez les organisations, églises et entreprises accompagnées par Rinext Digital, dont AHAA RDC (ahaa-rdc.org).",
};

export default function PortfolioPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA] mb-2">
          Portfolio & Références
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-950">
          Organisations & Entreprises accompagnées
        </h1>
        <p className="text-base text-slate-600 mt-4">
          Plateformes web, référencement SEO et solutions numériques déployées par Rinext Digital.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CLIENT_PORTFOLIO.map((org) => (
          <a
            key={org.id}
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white border border-slate-200 p-6 hover:border-[#0D64BA] hover:shadow-md hover:shadow-[#0D64BA]/5 transition flex flex-col justify-between gap-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#EBF4FD] border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={org.logo}
                    alt={`Logo ${org.name}`}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display font-bold text-base text-slate-950 group-hover:text-[#0D64BA] transition">
                      {org.name}
                    </h2>
                    {org.status && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {org.status}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {org.fullName}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D64BA] transition shrink-0" />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">{org.service}</span>
              <span className="font-semibold text-[#0D64BA] group-hover:underline">
                {org.domain}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}