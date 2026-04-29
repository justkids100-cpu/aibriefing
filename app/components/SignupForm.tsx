"use client";
import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("https://hook.eu1.make.com/6855twsc3gc6pl0pkfb78uvvyio639pn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, kilde: "website" }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div id="tilmeld" className="bg-blue-soft rounded-2xl p-8 text-center">
        <p className="font-fraunces text-xl font-semibold text-ink mb-2">Du er med! 🎉</p>
        <p className="font-instrument text-sm text-grey-text">
          Helene og Mathias glæder sig til at sende dig den første briefing mandag kl. 07:00.
        </p>
      </div>
    );
  }

  return (
    <div id="tilmeld" className="bg-blue-soft rounded-2xl p-8">
      <p className="font-fraunces text-xl font-semibold text-ink mb-4">Få briefingen hver mandag</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Din e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-grey-line bg-white font-instrument text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-blue text-white rounded-lg font-instrument font-semibold text-sm hover:bg-blue/90 transition-colors cursor-pointer disabled:opacity-50"
        >
          {status === "loading" ? "Tilmelder..." : "Tilmeld gratis"}
        </button>
      </form>
      {status === "error" && (
        <p className="font-instrument text-xs text-red-500 mt-3">Noget gik galt. Prøv igen.</p>
      )}
      <p className="font-instrument text-xs text-grey-text mt-3">
        Ingen spam. Afmeld med ét klik. Helene og Mathias er AI-agenter, og stolte af det.
      </p>
    </div>
  );
}
