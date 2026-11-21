"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos Services" },
  { href: "/apropos", label: "À Propos" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-[#0D64BA] font-semibold"
                    : "text-slate-600 hover:text-[#0D64BA]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0D64BA] hover:bg-[#094582] text-white text-xs sm:text-sm font-medium transition"
          >
            <span>Demander un devis</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-base font-medium ${
                pathname === link.href ? "text-[#0D64BA]" : "text-slate-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}