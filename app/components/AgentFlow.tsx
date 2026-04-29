"use client";
import { useState, useEffect } from "react";

const agents = [
  { id: "ole", name: "Ole", role: "Orkestrering", emoji: "🎯", color: "bg-blue-soft text-blue" },
  { id: "mathias", name: "Mathias", role: "Research & skrivning", emoji: "🔍", color: "bg-blue text-white" },
  { id: "helene", name: "Helene", role: "Redaktør & CEO", emoji: "✍️", color: "bg-ink text-white" },
  { id: "diana", name: "Diana", role: "Design", emoji: "🎨", color: "bg-blue-light text-ink" },
  { id: "david", name: "David", role: "Developer", emoji: "⚙️", color: "bg-grey-subtle text-grey-text" },
  { id: "mads", name: "Mads", role: "Marketing", emoji: "📣", color: "bg-blue-soft text-ink" },
];

const steps = [
  { agent: "ole", text: "Mandag 06:00 — Ole starter ugens cyklus og trigger Mathias", day: "Mandag" },
  { agent: "mathias", text: "Torsdag 08:00 — Mathias scanner 12-15 kilder og scorer historier", day: "Torsdag" },
  { agent: "mathias", text: "Lørdag 09:00 — Mathias skriver HVAD SKETE DER og HVAD BETYDER DET", day: "Lørdag" },
  { agent: "helene", text: "Lørdag 14:00 — Helene reviewer og skriver HVAD BØR DU GØRE", day: "Lørdag" },
  { agent: "diana", text: "Lørdag 16:00 — Diana producerer LinkedIn-carousel og mail-header", day: "Lørdag" },
  { agent: "helene", text: "Søndag 10:00 — Helene giver final godkendelse", day: "Søndag" },
  { agent: "david", text: "Søndag 20:00 — David scheduler mail til mandag 07:00", day: "Søndag" },
  { agent: "mads", text: "Mandag 09:00 — Mads poster på LinkedIn fra begge personaer", day: "Mandag" },
  { agent: "ole", text: "Fredag 17:00 — Ole producerer pitch-pakke med ugens metrics", day: "Fredag" },
];

export default function AgentFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentStep = steps[activeStep];
  const activeAgent = agents.find((a) => a.id === currentStep.agent);

  return (
    <div className="bg-white rounded-2xl border border-grey-line overflow-hidden">
      {/* Agent-cirkler */}
      <div className="p-6 md:p-8 border-b border-grey-line">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-500 ${
                currentStep.agent === agent.id
                  ? agent.color + " scale-110 shadow-lg"
                  : "bg-grey-subtle opacity-50"
              }`}
            >
              <span className="text-2xl">{agent.emoji}</span>
              <span className="font-instrument text-xs font-semibold">{agent.name}</span>
              <span className="font-instrument text-[10px] opacity-70">{agent.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aktiv handling */}
      <div className="p-6 md:p-8 bg-grey-subtle min-h-[120px] flex items-center">
        <div className="w-full text-center">
          <p className="font-instrument text-xs text-blue font-semibold uppercase tracking-wider mb-2">
            {currentStep.day}
          </p>
          <p className="font-instrument text-base md:text-lg text-ink leading-relaxed animate-fade-in-up" key={activeStep}>
            {currentStep.text}
          </p>
        </div>
      </div>

      {/* Progress og kontrol */}
      <div className="p-4 flex items-center justify-between border-t border-grey-line">
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveStep(i); setIsPlaying(false); }}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                i === activeStep ? "bg-blue w-6" : "bg-grey-line hover:bg-blue-light"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="font-instrument text-xs text-grey-text hover:text-ink transition-colors cursor-pointer"
        >
          {isPlaying ? "Pause" : "Afspil"}
        </button>
      </div>
    </div>
  );
}
