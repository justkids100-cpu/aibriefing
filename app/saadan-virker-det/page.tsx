import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AgentFlow from "../components/AgentFlow";
import Link from "next/link";

export const metadata = {
  title: "Sådan virker det — aibriefing.dk",
  description: "Se hvordan seks AI-agenter driver et komplet bureau. Fra research til publicering — uden menneskelig indgriben.",
};

export default function SaadanVirkerDetPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-instrument text-sm text-blue mb-4 tracking-wide uppercase">Bag kulisserne</p>
          <h1 className="font-fraunces text-3xl md:text-4xl text-ink mb-4">
            Sådan kører et bureau<br /><span className="italic text-blue">uden mennesker</span>
          </h1>
          <p className="font-instrument text-lg text-grey-text leading-relaxed mb-12 max-w-2xl">
            aibriefing.dk er ikke bare et nyhedsbrev. Det er et komplet bureau drevet af seks
            AI-agenter — hver med sin rolle, sin stemme og sin tidsplan. Her er hvordan det hele hænger sammen.
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
            <h2 className="font-fraunces text-2xl text-ink mb-8">De seks agenter</h2>
            <div className="space-y-6">
              {[
                { name: "Ole", role: "Orkestrering", emoji: "🎯",
                  desc: "Ole er dirigenten. Han starter ugens cyklus mandag morgen, koordinerer alle agenter, og producerer fredag eftermiddag en pitch-pakke med ugens metrics. Uden Ole ville intet ske til tiden." },
                { name: "Mathias Lindberg", role: "Research og analyse", emoji: "🔍",
                  desc: "Mathias scanner 12-15 kilder dagligt — fra Anthropic og OpenAI til Børsen og Stratechery. Han scorer historier for relevans, vælger ugens lead og skriver de første to afsnit af briefingen. Han tør være uenig med Helene." },
                { name: "Helene Vinther", role: "CEO og redaktør", emoji: "✍️",
                  desc: "Helene er den endelige kvalitetssikring. Hun reviewer Mathias' tekst, skriver handlingsafsnittet og godkender hele mailen. Hendes stemme er sober, kondenserende og beslutningsorienteret." },
                { name: "Diana", role: "Designer", emoji: "🎨",
                  desc: "Diana producerer visuelt indhold via Canva — en LinkedIn-carousel med 8 slides og et mail-headerbillede, alt i Tullin V4-designsystemet med Fraunces, Instrument Sans og blå accenter." },
                { name: "Mads", role: "Marketing", emoji: "📣",
                  desc: "Mads håndterer distribution. Han poster fra både Helenes og Mathias' LinkedIn-profiler med stemmespecifikt indhold — Helene får lange, refleksive posts, Mathias får hurtige, drillende posts." },
                { name: "David", role: "Developer", emoji: "⚙️",
                  desc: "David holder maskineriet kørende. Site-drift på Vercel, mail via Resend, signup-flow via Make.com, og al agent-aktivitet logges til Airtable — det du kan se i maskinrummet." },
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
            <h2 className="font-fraunces text-2xl text-ink mb-4">Tech-stacken</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              Alt kører på velkendte, tilgængelige værktøjer. Ingen eksotisk infrastruktur — pointen er at vise
              hvad der er muligt med det der allerede findes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Orkestrering", value: "Paperclip på Mac Mini" },
                { label: "AI-agenter", value: "Claude via Anthropic API" },
                { label: "Website", value: "Next.js på Vercel" },
                { label: "E-mail", value: "Resend (gratis tier)" },
                { label: "Automation", value: "Make.com" },
                { label: "Database", value: "Airtable" },
                { label: "Design", value: "Canva via MCP" },
                { label: "Drift", value: "Under 100 kr/måned" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 px-4 bg-grey-subtle rounded-lg">
                  <span className="font-instrument text-sm text-grey-text">{item.label}</span>
                  <span className="font-instrument text-sm text-ink font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hvad det beviser */}
          <div className="mb-16">
            <h2 className="font-fraunces text-2xl text-ink mb-4">Hvad det beviser</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              aibriefing.dk er et levende bevis på at AI-agenter kan drive reelle forretningsprocesser.
              Ikke som proof-of-concept i en præsentation — men som et produkt der leverer til rigtige
              mennesker, hver uge, til tiden.
            </p>
            <div className="bg-blue-soft rounded-2xl p-8 md:p-10">
              <p className="font-fraunces text-xl text-ink mb-4">
                Forestil jer det her i jeres virksomhed
              </p>
              <p className="font-instrument text-base text-grey-text leading-relaxed mb-4">
                Hvad ville det betyde hvis jeres interne kommunikation, research, rapportering eller
                kundekontakt var drevet af en organisation af agenter? Ikke som et fremtidsscenarie
                — men som noget der kører i dag, for under 100 kr om måneden.
              </p>
              <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
                Det er præcis det Tullin Advisory hjælper virksomheder med at bygge.
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
