"use client";

import { useState } from "react";
import { ExternalLink, MapPin, Navigation, PhoneCall } from "lucide-react";

const LOCATIONS = [
  {
    id: "uvira",
    label: "Base Opérationnelle — Uvira (RDC)",
    address: "Uvira, Province du Sud-Kivu, République Démocratique du Congo",
    details: "Déploiements sur site, installation réseau, création web, design et réception des commandes matérielles.",
    mapEmbedUrl: "https://www.google.com/maps?q=Uvira,Democratic+Republic+of+the+Congo&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Uvira+Sud-Kivu+RDC",
  },
];

export default function LocationMap() {
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0]);

  return (
    <section id="localisation" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#0D64BA] font-bold text-xs uppercase tracking-widest">
            Présence Régionale & Logistique
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Notre Localisation en Ligne (RDC)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Sélectionnez un pôle pour visualiser notre zone d'intervention et d'expédition directe.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Sélecteur des deux pôles */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {LOCATIONS.map((loc) => {
              const selected = activeLoc.id === loc.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => setActiveLoc(loc)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${
                    selected
                      ? "border-[#0D64BA] bg-[#EBF4FD]/50 shadow-md"
                      : "border-slate-200 bg-white hover:border-[#0D64BA]/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        selected ? "bg-[#0D64BA] text-white" : "bg-slate-100 text-[#0D64BA]"
                      }`}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900">
                        {loc.label}
                      </h3>
                      <p className="text-xs font-semibold text-[#0D64BA] mt-0.5">
                        {loc.address}
                      </p>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {loc.details}
                      </p>
                      <a
                        href={loc.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D64BA] hover:underline mt-3"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Ouvrir dans Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="p-5 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
              <div>
                <div className="text-xs text-sky-400 font-semibold uppercase">Ligne Directe</div>
                <div className="font-display font-bold text-base mt-0.5">+243 97 44 51 186</div>
              </div>
              <a
                href="https://wa.me/243974451186"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#0D64BA] hover:bg-[#094582] text-white text-xs font-bold flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Appeler / WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Carte Interactive Google Maps */}
          <div className="lg:col-span-7 min-h-[340px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <iframe
              key={activeLoc.id}
              src={activeLoc.mapEmbedUrl}
              title={activeLoc.label}
              className="w-full h-full min-h-[340px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}