import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/images/logo-rinext.png"
            alt="Logo RINEXT DIGITAL"
            className="w-6 h-6 object-contain"
          />
          <span className="font-semibold text-slate-900">RINEXT DIGITAL</span>
          <span>• Next Digital World</span>
        </Link>
        <div>
          © 2026 Rinext Digital — Uvira (RDC). Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}