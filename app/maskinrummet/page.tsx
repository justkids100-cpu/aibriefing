import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Maskinrummet — aibriefing.dk",
  description: "Se præcis hvad agenterne lavede for at producere denne uges briefing.",
};

const weekLog = [
  {
    day: "Mandag",
    entries: [
      { time: "06:00", agent: "Ole", action: "Startede ugens cyklus. Abonnenttal: 47. Ingen særlige temaer. Trigget Mathias." },
      { time: "07:00", agent: "David", action: "Mail fra uge 17 sendt til 47 abonnenter via Resend. Åbningsrate: 62%." },
      { time: "09:00", agent: "Mads", action: "Publicerede Helenes LinkedIn-post om EU AI Act. 1.800 impressions første time." },
      { time: "09:30", agent: "Mads", action: "Publicerede Mathias' LinkedIn-post om Cohere-fusionen. 2.200 impressions." },
    ],
  },
  {
    day: "Onsdag",
    entries: [
      { time: "10:00", agent: "Mads", action: "Carousel postet fra Mathias' LinkedIn. 8 slides. 3.100 impressions." },
    ],
  },
  {
    day: "Torsdag",
    entries: [
      { time: "08:00", agent: "Mathias", action: "Scannede 14 historier fra 12 kilder. Scorede på konkret ændring, dansk relevans og nyhedsværdi." },
      { time: "08:45", agent: "Mathias", action: "Top 5 sendt til Helene. Lead-anbefaling: Anthropics audit-funktion (score 14/15)." },
      { time: "14:00", agent: "Mads", action: "Monitorerede kommentarer. 7 nye. 3 svar foreslået, afventer Peters godkendelse." },
    ],
  },
  {
    day: "Fredag",
    entries: [
      { time: "16:00", agent: "Ole", action: "Fredagsstatus: 6 agent-handlinger, 0 fejl. Abonnenttal steget fra 47 til 52." },
      { time: "17:00", agent: "Ole", action: "Pitch-pakke genereret. 3-slide PowerPoint + PDF. Gemt i Google Drive." },
    ],
  },
  {
    day: "Lørdag",
    entries: [
      { time: "09:00", agent: "Mathias", action: "Skrev 3 historier: Anthropic audit, EU AI Act enforcement, Cohere/Aleph Alpha. Sendt til Helene." },
      { time: "14:00", agent: "Helene", action: "Godkendte historie 1 og 3. Afviste historie 2 (for teknisk). Bad Mathias omskrive med fokus på ledelseskonsekvens." },
      { time: "15:30", agent: "Mathias", action: "Omskrev historie 2. Ny vinkel: bødeniveauer og tidsfrister. Sendt til Helene." },
      { time: "16:00", agent: "Helene", action: "Godkendte. Skrev HVAD BØR DU GØRE for alle 3 historier." },
      { time: "16:00", agent: "Diana", action: "Producerede 8-slide carousel + mail-header i V4-design." },
    ],
  },
  {
    day: "Søndag",
    entries: [
      { time: "10:00", agent: "Helene", action: "Final godkendelse af mail. Alle ordgrænser overholdt. Tullin-blok inkluderet." },
      { time: "20:00", agent: "David", action: "Mail scheduleret til mandag 07:00. 52 modtagere." },
    ],
  },
];

function agentColor(agent: string) {
  const colors: Record<string, string> = {
    Mathias: "bg-blue text-white",
    Helene: "bg-ink text-white",
    Diana: "bg-blue-light text-ink",
    Mads: "bg-blue-soft text-blue",
    David: "bg-grey-subtle text-grey-text border border-grey-line",
    Ole: "bg-blue-soft text-ink",
  };
  return colors[agent] || "bg-grey-subtle text-grey-text";
}

export default function MaskinrummetPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-instrument text-sm text-blue mb-4 tracking-wide uppercase">
            Uge 18 · 2026
          </p>
          <h1 className="font-fraunces text-3xl md:text-4xl text-ink mb-3">
            Maskinrummet
          </h1>
          <p className="font-instrument text-base text-grey-text leading-relaxed mb-4">
            Her er præcis hvad der skete denne uge. Hver linje er en handling udført af en agent.
            Ingen redigering, ingen filter.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-grey-subtle rounded-xl p-4 text-center">
              <p className="font-fraunces text-2xl text-ink">6</p>
              <p className="font-instrument text-xs text-grey-text">agenter aktive</p>
            </div>
            <div className="bg-grey-subtle rounded-xl p-4 text-center">
              <p className="font-fraunces text-2xl text-ink">17</p>
              <p className="font-instrument text-xs text-grey-text">handlinger</p>
            </div>
            <div className="bg-grey-subtle rounded-xl p-4 text-center">
              <p className="font-fraunces text-2xl text-ink">52</p>
              <p className="font-instrument text-xs text-grey-text">abonnenter</p>
            </div>
            <div className="bg-grey-subtle rounded-xl p-4 text-center">
              <p className="font-fraunces text-2xl text-ink">62%</p>
              <p className="font-instrument text-xs text-grey-text">åbningsrate</p>
            </div>
          </div>

          {/* Agent-oversigt */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { name: "Ole", emoji: "🎯", count: 3 },
              { name: "Mathias", emoji: "🔍", count: 4 },
              { name: "Helene", emoji: "✍️", count: 3 },
              { name: "Diana", emoji: "🎨", count: 1 },
              { name: "Mads", emoji: "📣", count: 4 },
              { name: "David", emoji: "⚙️", count: 2 },
            ].map((a) => (
              <div key={a.name} className="flex items-center gap-2 bg-grey-subtle rounded-lg px-3 py-2">
                <span>{a.emoji}</span>
                <span className="font-instrument text-sm text-ink">{a.name}</span>
                <span className="font-instrument text-xs text-grey-text">{a.count} handlinger</span>
              </div>
            ))}
          </div>

          {/* Ugens log dag for dag */}
          <div className="space-y-8">
            {weekLog.map((day) => (
              <div key={day.day}>
                <h2 className="font-fraunces text-lg text-ink mb-4">{day.day}</h2>
                <div className="space-y-3">
                  {day.entries.map((entry, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="font-instrument text-xs text-grey-text min-w-[40px] pt-1">{entry.time}</span>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-instrument font-semibold min-w-[70px] text-center ${agentColor(entry.agent)}`}>
                        {entry.agent}
                      </span>
                      <p className="font-instrument text-sm text-ink leading-relaxed flex-1">{entry.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Kontekst */}
          <div className="mt-12 bg-blue-soft rounded-2xl p-8">
            <h2 className="font-fraunces text-xl text-ink mb-3">Hvad du ser her</h2>
            <p className="font-instrument text-sm text-grey-text leading-relaxed mb-4">
              Hver linje er logget automatisk af den agent der udførte handlingen.
              Loggen hentes fra Airtable og vises her uden redigering.
            </p>
            <p className="font-instrument text-sm text-grey-text leading-relaxed mb-4">
              Bemærk lørdag kl. 14:00: Helene afviste Mathias' historie 2 og bad ham omskrive.
              Han leverede en ny version 90 minutter senere. Den slags redaktionel interaktion
              sker hver uge. Agenterne er uenige, justerer og forbedrer hinandens arbejde.
            </p>
            <p className="font-instrument text-sm text-grey-text leading-relaxed mb-6">
              Det er den interaktion der gør det til et bureau og ikke bare en AI der skriver tekst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/saadan-virker-det" className="px-5 py-2.5 bg-ink text-white rounded-lg font-instrument font-semibold text-sm hover:bg-ink/80 transition-colors text-center">
                Sådan virker det
              </Link>
              <Link href="/for-virksomheder" className="px-5 py-2.5 bg-white text-ink border border-grey-line rounded-lg font-instrument font-semibold text-sm hover:border-blue transition-colors text-center">
                For virksomheder
              </Link>
            </div>
          </div>

          {/* Demodata note */}
          <div className="mt-6 text-center">
            <p className="font-instrument text-xs text-grey-text">
              Denne log er demodata. Når den ugentlige cyklus kører, hentes loggen automatisk fra Airtable.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
