import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Maskinrummet — Se hvad agenterne laver · aibriefing.dk",
};

const demoLog = [
  { timestamp: "2026-04-28T09:14:00Z", agent: "Mathias", description: "Scannede 14 historier fra 12 kilder. Top-5 sendt til Helene for udvælgelse." },
  { timestamp: "2026-04-28T10:22:00Z", agent: "Helene", description: "Afviste Mathias\u0027 valg af lead-historie. Begrundelse: for teknisk til målgruppen. Valgte alternativ om EU AI Act enforcement." },
  { timestamp: "2026-04-27T16:00:00Z", agent: "Diana", description: "Producerede 8-slide LinkedIn-carousel i V4-design. Uploadet til Canva." },
  { timestamp: "2026-04-27T14:30:00Z", agent: "Ole", description: "Kvalitetssikrede ugens mail. Godkendt uden ændringer. Sendt til David for scheduling." },
  { timestamp: "2026-04-27T11:00:00Z", agent: "Mathias", description: "Skrev HVAD SKETE DER og HVAD BETYDER DET om EU AI Act. 76 + 79 ord. Sendt til Helene." },
  { timestamp: "2026-04-26T20:00:00Z", agent: "David", description: "Mail scheduleret til mandag 07:00 via Resend. 847 modtagere på listen." },
  { timestamp: "2026-04-25T17:00:00Z", agent: "Ole", description: "Genererede ugens pitch-pakke: 3-slide PowerPoint + PDF. Uploadet til Google Drive." },
  { timestamp: "2026-04-25T09:00:00Z", agent: "Mads", description: "Publicerede Helenes LinkedIn-post. 2.400 impressions første time." },
];

function formatTime(iso: string) {
  const d = new Date(iso);
  const day = d.toLocaleDateString("da-DK", { weekday: "long", day: "numeric", month: "long" });
  const time = d.toLocaleTimeString("da-DK", { hour: "2-digit", minute: "2-digit" });
  return day + " kl. " + time;
}

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
            Alt er åbent
          </p>
          <h1 className="font-fraunces text-3xl md:text-4xl text-ink mb-3">
            Maskinrummet
          </h1>
          <p className="font-instrument text-base text-grey-text leading-relaxed mb-10">
            Her kan du se præcis hvad hver agent har lavet de sidste syv dage.
            Ingen skjulte processer — det er hele pointen.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
            {["Helene", "Mathias", "Diana", "Mads", "David", "Ole"].map((agent) => (
              <div key={agent} className="text-center bg-grey-subtle rounded-xl py-3 px-2">
                <p className="font-instrument text-xs text-grey-text">{agent}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {demoLog.map((entry, i) => (
              <div key={i} className="border border-grey-line rounded-xl p-5 hover:border-blue/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className={"inline-block px-2.5 py-0.5 rounded-full text-xs font-instrument font-semibold " + agentColor(entry.agent)}>
                    {entry.agent}
                  </span>
                  <span className="font-instrument text-xs text-grey-text">
                    {formatTime(entry.timestamp)}
                  </span>
                </div>
                <p className="font-instrument text-sm text-ink leading-relaxed">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-blue-soft rounded-xl text-center">
            <p className="font-instrument text-sm text-grey-text">
              Dette er demodata. Når agenterne kører live, hentes loggen automatisk fra Airtable.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
