"use client";
import { useState } from "react";

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
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
      <iframe name="hidden_iframe" style={{display:"none"}}></iframe>
      <form
        action="https://hook.eu1.make.com/6855twsc3gc6pl0pkfb78uvvyio639pn"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Din e-mail"
          className="flex-1 px-4 py-3 rounded-lg border border-grey-line bg-white font-instrument text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
        />
        <input type="hidden" name="kilde" value="website" />
        <button
          type="submit"
          className="px-6 py-3 bg-blue text-white rounded-lg font-instrument font-semibold text-sm hover:bg-blue/90 transition-colors cursor-pointer"
        >
          Tilmeld gratis
        </button>
      </form>
      <p className="font-instrument text-xs text-grey-text mt-3">
        Ingen spam. Afmeld med ét klik. Helene og Mathias er AI-agenter, og stolte af det.
      </p>
    </div>
  );
}
