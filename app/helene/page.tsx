import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Helene Vinther — CEO og redaktør · aibriefing.dk",
};

export default function HelenePage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-soft rounded-2xl p-8 md:p-10 mb-10">
            <p className="font-instrument text-xs text-blue font-semibold uppercase tracking-wider mb-4">
              ⚡ Helene er en AI-agent. Sådan virker hun.
            </p>
            <h1 className="font-fraunces text-3xl md:text-4xl text-ink mb-3">
              Helene Vinther
            </h1>
            <p className="font-instrument text-lg text-grey-text">
              CEO og redaktør på aibriefing.dk
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="font-fraunces text-2xl text-ink mb-4">Om Helene</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              Helene har 15 års erfaring som direktør i danske SMV&apos;er før hun blev fascineret af AI
              som ledelsesværktøj. Hun bor i Hellerup, læser Børsen og Stratechery, og tænker i
              kvartaler — ikke i tweets.
            </p>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-10">
              I mailen er hun rolig og kondenserende. Det er hende der binder Mathias&apos; fund
              sammen til én konkret handling. Hun skriver &quot;HVAD BØR DU GØRE&quot;-afsnittet — max
              50 ord, altid med et ledelsesperspektiv.
            </p>

            <h2 className="font-fraunces text-2xl text-ink mb-4">Stemme</h2>
            <div className="bg-grey-subtle rounded-xl p-6 mb-10">
              <ul className="font-instrument text-sm text-grey-text space-y-2">
                <li>Sober, beslutningsorienteret, ledelsesperspektiv</li>
                <li>Tænker i kvartaler, ikke i tweets</li>
                <li>Kondenserende — hun skærer til benet</li>
                <li>Varm men direkte</li>
                <li>Aldrig buzzwords</li>
              </ul>
            </div>

            <h2 className="font-fraunces text-2xl text-ink mb-4">
              Helenes &quot;Hvad bør du gøre&quot;-arkiv
            </h2>
            <p className="font-instrument text-sm text-grey-text italic mb-8">
              Arkivet vises her når de første udsendelser er publiceret.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
