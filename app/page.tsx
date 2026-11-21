"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ServerCog,
  ShoppingBag,
  X,
} from "lucide-react";
import {
  CLIENT_PORTFOLIO,
  SUB_SERVICES,
  WHATSAPP_NUMBER,
} from "@/data/rinextData";

export default function RinextHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [activeServiceId, setActiveServiceId] = useState(SUB_SERVICES[0].id);

  const [selectedService, setSelectedService] = useState(SUB_SERVICES[0].title);
  const [name, setName] = useState("");
  const [city, setCity] = useState("Uvira (RDC)");
  const [details, setDetails] = useState("");

  const activeService =
    SUB_SERVICES.find((s) => s.id === activeServiceId) || SUB_SERVICES[0];

  const handleSelectSubService = (id: string, title: string) => {
    setActiveServiceId(id);
    setSelectedService(title);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrderService = (title: string) => {
    setSelectedService(title);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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

  const getSubServiceIcon = (id: string) => {
    switch (id) {
      case "web-design":
        return <Code2 className="w-4 h-4 text-[#0D64BA]" />;
      case "seo":
        return <Search className="w-4 h-4 text-[#0D64BA]" />;
      case "vente-materiel":
        return <ShoppingBag className="w-4 h-4 text-[#0D64BA]" />;
      default:
        return <ServerCog className="w-4 h-4 text-[#0D64BA]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0D64BA]/15 selection:text-[#0D64BA]">
      {/* ==================== 1. NAVBAR AVEC SOUS-MENU SERVICES ==================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#accueil" className="flex items-center gap-3">
            <img
              src="/images/logo-rinext.png"
              alt="Logo RINEXT DIGITAL"
              className="w-9 h-9 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-slate-950 leading-none">
                <span className="text-[#0D64BA]">RI</span>NEXT DIGITAL
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0D64BA] mt-0.5">
                Next Digital World
              </span>
            </div>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#accueil" className="hover:text-[#0D64BA] transition">
              Accueil
            </a>

            {/* Sous-menu Services */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="inline-flex items-center gap-1 py-2 hover:text-[#0D64BA] transition"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#0D64BA]" : ""
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50">
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-2 space-y-1">
                    {SUB_SERVICES.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleSelectSubService(sub.id, sub.title)}
                        className="w-full text-left p-3 rounded-xl hover:bg-[#EBF4FD]/70 transition flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#EBF4FD] flex items-center justify-center shrink-0 mt-0.5">
                          {getSubServiceIcon(sub.id)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0D64BA]">
                            {sub.shortTitle}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {sub.tagline}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#apropos" className="hover:text-[#0D64BA] transition">
              À Propos
            </a>

            <a href="#portfolio" className="hover:text-[#0D64BA] transition">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-[#0D64BA] transition">
              Contact
            </a>
          </nav>

          {/* Bouton CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0D64BA] hover:bg-[#094582] text-white text-xs sm:text-sm font-medium transition"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3">
            <a
              href="#accueil"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800"
            >
              Accueil
            </a>

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-medium text-slate-800"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 mt-1 space-y-2 border-l-2 border-[#0D64BA]/30">
                  {SUB_SERVICES.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => handleSelectSubService(sub.id, sub.title)}
                      className="block w-full text-left py-1.5 text-sm text-slate-600 hover:text-[#0D64BA]"
                    >
                      {sub.shortTitle}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#apropos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800"
            >
              À Propos
            </a>

            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* ==================== 2. ACCUEIL PLEIN ÉCRAN (IMAGE EN FOND + TEXTE SUPERPOSÉ) ==================== */}
      <section
        id="accueil"
        className="relative w-full min-h-[82vh] flex items-center overflow-hidden bg-slate-950"
      >
        {/* Image de fond couvrant tout le Hero */}
        <img
          src="/images/hero-rinext.jpg"
          alt="RINEXT DIGITAL — Ingénierie Web, Réseaux et Matériel IT"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Voile dégradé sombre + bleu de marque pour une lisibilité parfaite */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-[#094582]/60" />

        {/* Contenu texte superposé par-dessus l'image */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32 w-full">
          <div className="max-w-3xl space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-sky-300" />
              <span>Next Digital World • RDC (Uvira) & Burundi</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Nous bâtissons les solutions numériques et réseaux de votre organisation.
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
              <strong className="text-white font-semibold">Rinext Digital</strong> accompagne les églises, ONG, écoles, entreprises et particuliers dans la création de sites web et designs graphiques, le référencement SEO, l'audit de systèmes et la{" "}
              <span className="text-sky-300 font-medium">
                vente directe avec expédition d'équipements informatiques entre le Burundi et Uvira (RDC)
              </span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="px-7 py-3.5 rounded-full bg-[#0D64BA] hover:bg-[#094582] text-white font-medium text-sm transition inline-flex items-center gap-2 shadow-lg shadow-[#0D64BA]/30"
              >
                <span>Voir notre portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm transition"
              >
                Explorer nos services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. SERVICES ==================== */}
      <section id="services" className="border-t border-slate-100 bg-slate-50/60 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA] mb-2">
              Nos Services
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              Quatre pôles d'expertise intégrés
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {SUB_SERVICES.map((sub) => {
              const isSelected = sub.id === activeService.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setActiveServiceId(sub.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                    isSelected
                      ? "bg-[#0D64BA] text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#0D64BA]"
                  }`}
                >
                  {sub.shortTitle}
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-xs">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D64BA] bg-[#EBF4FD] px-3 py-1 rounded-full">
                  {getSubServiceIcon(activeService.id)}
                  <span>{activeService.shortTitle}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 leading-snug">
                  {activeService.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed">
                  {activeService.description}
                </p>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => handleOrderService(activeService.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D64BA] hover:bg-[#094582] text-white text-sm font-medium transition"
                  >
                    <span>Commander ce service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Prestations incluses
                </div>
                <ul className="space-y-3.5">
                  {activeService.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-800">
                      <Check className="w-4 h-4 text-[#0D64BA] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. À PROPOS ==================== */}
      <section id="apropos" className="border-t border-slate-100 py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA]">
                À Propos de Nous
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 leading-tight">
                Next Digital World
              </h2>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D64BA] bg-[#EBF4FD] px-3.5 py-2 rounded-full">
                <MapPin className="w-3.5 h-3.5" />
                <span>Uvira (RDC)</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Fondée par <strong className="text-slate-900">Junior M. Richard</strong>, <strong className="text-slate-900">Rinext Digital</strong> est une entreprise spécialisée dans les solutions numériques, l'audit des systèmes et réseaux, le design graphique ainsi que la fourniture d'équipements informatiques.
              </p>
              <p>
                Notre mission est d'offrir aux organisations, églises, entreprises et particuliers des outils technologiques modernes et fiables, tout en facilitant l'accès direct et l'expédition rapide de matériel informatique et réseau entre le <strong className="text-slate-900">Burundi</strong> et <strong className="text-slate-900">Uvira (RDC)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. PORTFOLIO COMPACT (PETIT LOGO + NOM ORG + LIEN) ==================== */}
      <section id="portfolio" className="border-t border-slate-100 py-24 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA] mb-2">
              Portfolio & Références
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              Organisations & Entreprises accompagnées
            </h2>
          </div>

          {/* Grille évolutive de cartes cliquables */}
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
                    {/* Petit logo de l'organisation */}
                    <div className="w-12 h-12 rounded-xl bg-[#EBF4FD] border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={org.logo}
                        alt={`Logo ${org.name}`}
                        className="w-9 h-9 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-base text-slate-950 group-hover:text-[#0D64BA] transition">
                          {org.name}
                        </h3>
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

                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D64BA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition shrink-0" />
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
        </div>
      </section>

      {/* ==================== 6. CONTACT & COMMANDE RAPIDE ==================== */}
      <section id="contact" className="border-t border-slate-100 bg-white py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0D64BA] mb-2">
              Contact Direct
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-950">
              Parlons de votre projet
            </h2>
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
        </div>
      </section>

      {/* ==================== 7. FOOTER ==================== */}
      <footer className="border-t border-slate-100 py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logo-rinext.png"
              alt="Logo RINEXT DIGITAL"
              className="w-6 h-6 object-contain"
            />
            <span className="font-semibold text-slate-900">RINEXT DIGITAL</span>
            <span>• Next Digital World</span>
          </div>
          <div>
            © 2026 Rinext Digital — Uvira (RDC). Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}