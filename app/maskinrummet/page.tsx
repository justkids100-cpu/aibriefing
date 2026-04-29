import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
  Ole: "bg-grey-subtle text-ink border border-grey-line",
  Mathias: "bg-blue text-white",
  Helene: "bg-ink text-white",
  Diana: "bg-blue/70 text-white",
  Mads: "bg-blue/50 text-white",
  David: "bg-grey-subtle text-ink border border-grey-line",
};

export const metadata = {
  title: "Maskinrummet — aibriefing.dk",
  description: "Se hvad 6 AI-agenter lavede denne uge. Hver handling logget.",
};

export default async function Maskinrummet() {
  const data = await getAgentLog();

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-instrument text-sm text-blue mb-2 tracking-wide uppercase">
            Uge {data.uge} &middot; {data.aar}
          </p>
          <h1 className="font-fraunces text-3xl md:text-4xl text-ink mb-4">Maskinrummet</h1>
          <p className="font-instrument text-lg text-grey-text leading-relaxed mb-10 max-w-2xl">
            {data["resumé"]}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "agenter aktive", value: data.metrics.agenter_aktive },
              { label: "handlinger", value: data.metrics.handlinger },
              { label: "abonnenter", value: data.metrics.abonnenter },
              { label: "API-omkostning", value: data.metrics.api_omkostning },
            ].map((m) => (
              <div key={m.label} className="border border-grey-line rounded-xl p-4 text-center">
                <p className="font-fraunces text-2xl text-ink">{m.value}</p>
                <p className="font-instrument text-xs text-grey-text">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Agent badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            {data.agenter.map((a: AgentInfo) => (
              <div key={a.navn} className="flex items-center gap-2 border border-grey-line rounded-full px-3 py-1.5 font-instrument text-sm">
                <span>{a.emoji}</span>
                <span className="font-medium text-ink">{a.navn}</span>
                <span className="text-grey-text">{a.handlinger} handlinger</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          {data.log.map((dag: Dag) => (
            <div key={dag.dag} className="mb-10">
              <h2 className="font-fraunces text-xl text-ink mb-4">{dag.dag}</h2>
              <div className="space-y-4">
                {dag.handlinger.map((h: Handling, i: number) => (
                  <div key={`${dag.dag}-${i}`} className="flex items-start gap-4">
                    <span className="font-instrument text-sm text-grey-text w-12 shrink-0 pt-0.5">{h.tid}</span>
                    <span className={`font-instrument text-xs font-medium px-3 py-1 rounded-full shrink-0 ${agentColors[h.agent] || "bg-grey-subtle text-ink"}`}>
                      {h.agent}
                    </span>
                    <p className="font-instrument text-sm text-ink leading-relaxed">{h.beskrivelse}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Forklaring */}
          <div className="bg-grey-subtle rounded-xl p-8 mt-8">
            <h3 className="font-fraunces text-lg text-ink mb-2">Hvad du ser her</h3>
            <p className="font-instrument text-sm text-grey-text leading-relaxed">
              Hver linje er en handling udført af en agent. Loggen opdateres automatisk hver uge når en ny briefing produceres. Al data hentes fra agent-loggen. Ingen mennesker redigerer denne side.
            </p>
            <p className="font-instrument text-sm text-grey-text leading-relaxed mt-2">
              aibriefing.dk er bygget af <a href="https://tullinadvisory.dk" className="text-blue">Tullin Advisory</a> som et åbent eksempel på hvad AI-agenter kan i praksis.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
