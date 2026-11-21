"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { SUB_SERVICES, WHATSAPP_NUMBER } from "@/data/rinextData";

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState(SUB_SERVICES[0].title);
  const [name, setName] = useState("");
  const [city, setCity] = useState("Uvira (RDC)");
  const [details, setDetails] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Bonjour *RINEXT DIGITAL* (Next Digital World),`,
      `• *Nom / Structure :* ${name}`,
      `• *Ville :* ${city}`,
      `• *Service :* ${selectedService}`,
      `• *Détails :* ${details || "Demande d'information"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA] mb-2">
          Contact Direct
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
          Parlons de votre projet
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Sélectionnez votre service ou le matériel à commander et envoyez directement votre demande sur WhatsApp (+243 97 44 51 186).
        </p>
      </div>

      <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Nom ou Organisation *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: AHAA RDC / Votre nom"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#0D64BA] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Ville / Pays *
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#0D64BA] focus:outline-none"
            >
              <option value="Uvira (RDC)">Uvira (RDC)</option>
              <option value="Bujumbura (Burundi)">Bujumbura (Burundi)</option>
              <option value="Bukavu / Sud-Kivu (RDC)">Bukavu / Sud-Kivu (RDC)</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Service concerné *
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#0D64BA] focus:outline-none"
          >
            {SUB_SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Détails du besoin *
          </label>
          <textarea
            rows={4}
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Décrivez votre site web, votre besoin SEO, l'audit réseau souhaité ou l'équipement informatique à commander..."
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#0D64BA] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 rounded-full bg-[#0D64BA] hover:bg-[#094582] text-white font-semibold text-sm transition flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Envoyer la demande sur WhatsApp</span>
        </button>
      </form>
    </section>
  );
}