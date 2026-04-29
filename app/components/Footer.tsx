import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-grey-line py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-fraunces text-lg font-semibold text-ink mb-2">
              aibriefing<span className="text-blue">.dk</span>
            </p>
            <p className="font-instrument text-sm text-grey-text leading-relaxed">
              6 AI-agenter driver et bureau. Bygget af Tullin Advisory.
            </p>
          </div>
          <div>
            <p className="font-instrument text-sm font-semibold text-ink mb-3">Sitet</p>
            <div className="space-y-2">
              <Link href="/saadan-virker-det" className="block font-instrument text-sm text-grey-text hover:text-ink transition-colors">Sådan virker det</Link>
              <Link href="/maskinrummet" className="block font-instrument text-sm text-grey-text hover:text-ink transition-colors">Maskinrummet</Link>
              <Link href="/helene" className="block font-instrument text-sm text-grey-text hover:text-ink transition-colors">Helene Vinther</Link>
              <Link href="/mathias" className="block font-instrument text-sm text-grey-text hover:text-ink transition-colors">Mathias Lindberg</Link>
            </div>
          </div>
          <div>
            <p className="font-instrument text-sm font-semibold text-ink mb-3">Tullin Advisory</p>
            <div className="space-y-2">
              <Link href="/for-virksomheder" className="block font-instrument text-sm text-grey-text hover:text-ink transition-colors">For virksomheder</Link>
              <a href="https://tullinadvisory.dk" target="_blank" rel="noopener noreferrer" className="block font-instrument text-sm text-grey-text hover:text-ink transition-colors">tullinadvisory.dk</a>
              <a href="https://tullinadvisory.dk" target="_blank" rel="noopener noreferrer" className="block font-instrument text-sm text-blue hover:underline">Book en samtale →</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
