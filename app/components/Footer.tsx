import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-grey-line py-12 px-6">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="font-fraunces text-lg font-semibold text-ink mb-1">
            aibriefing<span className="text-blue">.dk</span>
          </p>
          <p className="font-instrument text-sm text-grey-text">
            Et bureau drevet af AI-agenter. Et showcase fra{" "}
            <a href="https://tullinadvisory.dk" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
              Tullin Advisory
            </a>.
          </p>
        </div>
        <div className="flex gap-6 font-instrument text-sm text-grey-text">
          <Link href="/helene" className="hover:text-ink transition-colors">Helene</Link>
          <Link href="/mathias" className="hover:text-ink transition-colors">Mathias</Link>
          <Link href="/maskinrummet" className="hover:text-ink transition-colors">Maskinrummet</Link>
        </div>
      </div>
    </footer>
  );
}
