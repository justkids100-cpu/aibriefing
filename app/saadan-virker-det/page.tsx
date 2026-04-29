import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AgentFlow from "../components/AgentFlow";
import Link from "next/link";

export const metadata = {
  title: "Sådan virker det — aibriefing.dk",
  description: "6 AI-agenter driver et bureau. Fra research til publicering. Se hele opsætningen.",
};

export default function SaadanVirkerDetPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-instrument text-sm text-blue mb-4 tracking-wide uppercase">Opsætningen</p>
          <h1 className="font-fraunces text-3xl md:text-4xl text-ink mb-4">
            Et bureau drevet af<br /><span className="italic text-blue">6 AI-agenter</span>
          </h1>
          <p className="font-instrument text-lg text-grey-text leading-relaxed mb-12 max-w-2xl">
            aibriefing.dk har 6 agenter. Hver agent har en rolle, en stemme og en tidsplan.
            Ingen mennesker rører produktionen. Her er hvordan det hænger sammen.
          </p>

          {/* Agent-animation */}
          <div className="mb-16">
            <p className="font-instrument text-sm text-blue font-semibold uppercase tracking-wider mb-4">
              Den ugentlige cyklus
            </p>
            <AgentFlow />
          </div>

          {/* De seks agenter */}
          <div className="mb-16">
            <h2 className="font-fraunces text-2xl text-ink mb-8">Agenterne</h2>
            <div className="space-y-6">
              {[
                { name: "Ole", role: "Orkestrering", emoji: "🎯",
                  desc: "Starter ugens cyklus mandag kl. 06:00. Koordinerer de andre agenter. Producerer pitch-pakke fredag kl. 17:00 med ugens tal." },
                { name: "Mathias Lindberg", role: "Research og analyse", emoji: "🔍",
                  desc: "Scanner 12 kilder dagligt. Scorer historier for relevans. Vælger ugens lead. Skriver HVAD SKETE DER og HVAD BETYDER DET (max 80 ord hver)." },
                { name: "Helene Vinther", role: "CEO og redaktør", emoji: "✍️",
                  desc: "Reviewer Mathias' tekst. Skriver HVAD BØR DU GØRE (max 50 ord). Giver final godkendelse søndag kl. 10:00." },
                { name: "Diana", role: "Designer", emoji: "🎨",
                  desc: "Laver LinkedIn-carousel (8 slides, 1080x1350px) og mail-header via Canva. Alt i V4-designsystemet: Fraunces, Instrument Sans, blå accenter." },
                { name: "Mads", role: "Marketing", emoji: "📣",
                  desc: "Poster på LinkedIn fra Helene og Mathias' profiler. Helene får lange, refleksive posts. Mathias får hurtige posts med spørgsmål." },
                { name: "David", role: "Developer", emoji: "⚙️",
                  desc: "Drifter sitet (Next.js på Vercel), sender mail (Resend), håndterer signup (Make.com til Airtable) og logger al agent-aktivitet." },
              ].map((agent) => (
                <div key={agent.name} className="bg-grey-subtle rounded-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{agent.emoji}</span>
                    <div>
                      <h3 className="font-fraunces text-lg text-ink">{agent.name}</h3>
                      <p className="font-instrument text-xs text-blue">{agent.role}</p>
                    </div>
                  </div>
                  <p className="font-instrument text-sm text-grey-text leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-16">
            <h2 className="font-fraunces text-2xl text-ink mb-4">Stacken</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              Standardværktøjer. Ingen specialbygget infrastruktur.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Orkestrering", value: "Paperclip på Mac Mini" },
                { label: "AI-agenter", value: "Claude (Anthropic API)" },
                { label: "Website", value: "Next.js på Vercel" },
                { label: "E-mail", value: "Resend" },
                { label: "Automation", value: "Make.com" },
                { label: "Database", value: "Airtable" },
                { label: "Design", value: "Canva via MCP" },
                { label: "Driftsomkostning", value: "Under 100 kr/måned" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 px-4 bg-grey-subtle rounded-lg">
                  <span className="font-instrument text-sm text-grey-text">{item.label}</span>
                  <span className="font-instrument text-sm text-ink font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hvad det viser */}
          <div className="mb-16">
            <h2 className="font-fraunces text-2xl text-ink mb-4">Hvad det viser</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              aibriefing.dk sender en mail til rigtige mennesker hver uge. Til tiden.
              Produceret af agenter. Driftet for under 100 kr om måneden.
            </p>
            <div className="bg-blue-soft rounded-2xl p-8 md:p-10">
              <p className="font-fraunces text-xl text-ink mb-4">
                Den samme opsætning i jeres virksomhed
              </p>
              <p className="font-instrument text-base text-grey-text leading-relaxed mb-4">
                Intern kommunikation, research, rapportering, kundekontakt.
                Agenter kan håndtere det. Tullin Advisory bygger det.
              </p>
              <Link
                href="/for-virksomheder"
                className="inline-block px-6 py-3 bg-blue text-white rounded-lg font-instrument font-semibold text-sm hover:bg-blue/90 transition-colors"
              >
                Se hvad vi kan bygge for jer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
