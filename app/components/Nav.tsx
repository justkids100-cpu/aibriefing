"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const links = [
    { href: "/helene", label: "Helene" },
    { href: "/mathias", label: "Mathias" },
    { href: "/maskinrummet", label: "Maskinrummet" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-grey-line z-50">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-fraunces text-xl font-semibold text-ink">
          aibriefing<span className="text-blue">.dk</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-instrument text-grey-text">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-ink transition-colors ${
                pathname === link.href ? "text-ink font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
