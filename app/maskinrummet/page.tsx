import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

interface Handling {
  tid: string;
  agent: string;
  beskrivelse: string;
}

interface Dag {
  dag: string;
  handlinger: Handling[];
}

interface AgentInfo {
  navn: string;
  emoji: string;
  handlinger: number;
}

interface AgentLog {
  uge: number;
  aar: number;
  "resumé": string;
  metrics: {
    agenter_aktive: number;
    handlinger: number;
    abonnenter: number;
    api_omkostning: string;
  };
  agenter: AgentInfo[];
  log: Dag[];
}

async function getAgentLog(): Promise<AgentLog> {
  const filePath = path.join(process.cwd(), "public", "data", "agent-log.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

const agentColors: Record<string, string> = {
  Ole: "bg-gray-100 text-gray-800",
  Mathias: "bg-blue-600 text-white",
  Helene: "bg-gray-900 text-white",
  Diana: "bg-blue-400 text-white",
  Mads: "bg-blue-300 text-white",
  David: "bg-gray-100 text-gray-800",
};

export default async function Maskinrummet() {
  const data = await getAgentLog();

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/" className="text-lg font-semibold" style={{ fontFamily: "Georgia, serif" }}>
          aibriefing<span className="text-blue-600">.</span>dk
        </Link>
        <div className="flex items-center gap-6 text-sm" style={{ fontFamily: "Calibri, Arial, sans-serif" }}>
          <Link href="/saadan-virker-det" className="text-gray-600 hover:text-black">Sådan virker det</Link>
          <Link href="/maskinrummet" className="text-gray-900 font-bold">Maskinrummet</Link>
          <Link href="/for-virksomheder" className="text-gray-600 hover:text-black">For virksomheder</Link>
          <Link href="/#signup" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700">Tilmeld</Link>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <p className="text-blue-600 text-sm font-medium tracking-widest mb-2" style={{ fontFamily: "Calibri, Arial, sans-serif" }}>
          UGE {data.uge} · {data.aar}
        </p>
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Maskinrummet</h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10" style={{ fontFamily: "Georgia, serif" }}>
          {data["resumé"]}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { label: "agenter aktive", value: data.metrics.agenter_aktive },
            { label: "handlinger", value: data.metrics.handlinger },
            { label: "abonnenter", value: data.metrics.abonnenter },
            { label: "API-omkostning", value: data.metrics.api_omkostning },
          ].map((m) => (
            <div key={m.label} className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold" style={{ fontFamily: "Georgia, serif" }}>{m.value}</p>
              <p className="text-xs text-gray-500" style={{ fontFamily: "Calibri, Arial, sans-serif" }}>{m.label}</p>
            </div>
          ))}
        </div>

        {/* Agent badges */}
        <div className="flex flex-wrap gap-3 mb-12">
          {data.agenter.map((a) => (
            <div key={a.navn} className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 text-sm" style={{ fontFamily: "Calibri, Arial, sans-serif" }}>
              <span>{a.emoji}</span>
              <span className="font-medium">{a.navn}</span>
              <span className="text-gray-400">{a.handlinger} handlinger</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        {data.log.map((dag) => (
          <div key={dag.dag} className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>{dag.dag}</h2>
            <div className="space-y-4">
              {dag.handlinger.map((h, i) => (
                <div key={`${dag.dag}-${i}`} className="flex items-start gap-4">
                  <span className="text-sm text-gray-400 w-12 shrink-0 pt-0.5" style={{ fontFamily: "Calibri, Arial, sans-serif" }}>{h.tid}</span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 ${agentColors[h.agent] || "bg-gray-100 text-gray-800"}`} style={{ fontFamily: "Calibri, Arial, sans-serif" }}>
                    {h.agent}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{h.beskrivelse}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Forklaring */}
        <div className="bg-gray-50 rounded-xl p-8 mt-8">
          <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>Hvad du ser her</h3>
          <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            Hver linje er en handling udført af en agent. Loggen opdateres automatisk hver uge når en ny briefing produceres. Al data hentes fra agent-loggen. Ingen mennesker redigerer denne side.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-2" style={{ fontFamily: "Georgia, serif" }}>
            aibriefing.dk er bygget af <a href="https://tullinadvisory.dk" className="text-blue-600">Tullin Advisory</a> som et åbent eksempel på hvad AI-agenter kan i praksis.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-400" style={{ fontFamily: "Calibri, Arial, sans-serif" }}>
        <p>aibriefing.dk · Bygget af <a href="https://tullinadvisory.dk" className="text-gray-500">Tullin Advisory</a></p>
      </footer>
    </div>
  );
}
