"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/saadan-virker-det", label: "Sådan virker det" },
    { href: "/maskinrummet", label: "Maskinrummet" },
    { href: "/for-virksomheder", label: "For virksomheder" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-grey-line z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-fraunces text-xl font-semibold text-ink" onClick={() => setOpen(false)}>
          aibriefing<span className="text-blue">.dk</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-instrument text-sm hover:text-ink transition-colors ${
                pathname === link.href ? "text-ink font-semibold" : "text-grey-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#tilmeld"
            className="px-4 py-2 bg-blue text-white rounded-lg font-instrument font-semibold text-sm hover:bg-blue/90 transition-colors"
          >
            Tilmeld
          </Link>
        </div>

        {/* Burger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-grey-line bg-white px-6 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block font-instrument text-base ${
                pathname === link.href ? "text-ink font-semibold" : "text-grey-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/helene"
            onClick={() => setOpen(false)}
            className="block font-instrument text-base text-grey-text"
          >
            Helene
          </Link>
          <Link
            href="/mathias"
            onClick={() => setOpen(false)}
            className="block font-instrument text-base text-grey-text"
          >
            Mathias
          </Link>
          <div className="pt-2">
            <Link
              href="/#tilmeld"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-3 bg-blue text-white rounded-lg font-instrument font-semibold text-sm"
            >
              Tilmeld gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
