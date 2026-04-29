import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "For virksomheder — Tullin Advisory",
  description: "Vi har bygget et bureau med AI-agenter. Vi kan bygge noget tilsvarende for jer.",
};

export default function ForVirksomhederPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-instrument text-sm text-blue mb-4 tracking-wide uppercase">Tullin Advisory</p>
          <h1 className="font-fraunces text-3xl md:text-4xl text-ink mb-4">
            Vi har bygget et bureau med AI-agenter.
          </h1>
          <p className="font-instrument text-lg text-grey-text leading-relaxed mb-12 max-w-2xl">
            aibriefing.dk kører hver uge. 6 agenter, under 100 kr i drift, ingen manuel indsats.
            Det er et produkt vi har bygget hos Tullin Advisory for at vise hvad agenter kan i dag.
          </p>

          {/* Tal */}
          <div className="mb-12">
            <h2 className="font-fraunces text-2xl text-ink mb-6">Hvad vi har bygget</h2>
            <div className="space-y-4">
              {[
                { num: "6", label: "AI-agenter", desc: "Hver med rolle, stemme og tidsplan" },
                { num: "1", label: "ugentlig mail", desc: "Produceret og sendt automatisk" },
                { num: "2", label: "LinkedIn-profiler", desc: "Med stemmespecifikt indhold" },
                { num: "<100", label: "kr/måned", desc: "Total driftsomkostning" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-grey-subtle rounded-xl p-6">
                  <span className="font-fraunces text-3xl text-blue font-semibold min-w-[60px] text-right">{item.num}</span>
                  <div>
                    <p className="font-instrument text-base text-ink font-semibold">{item.label}</p>
                    <p className="font-instrument text-sm text-grey-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eksempler */}
          <div className="mb-12">
            <h2 className="font-fraunces text-2xl text-ink mb-6">Hvor agenter giver mening</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              Samme arkitektur kan bruges til mange forretningsprocesser. Her er 6 eksempler vi arbejder med hos danske virksomheder:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Intern kommunikation", desc: "Agenter der skriver ugentlige opdateringer baseret på data fra jeres systemer" },
                { title: "Markedsovervågning", desc: "Scanning af konkurrenter, regulering og branchenyheder. Sammenfattet til en executive-briefing" },
                { title: "Content-produktion", desc: "Blog, LinkedIn, nyhedsbrev og social media med konsistent stemme" },
                { title: "Rapportering", desc: "Ugentlige rapporter der samler data på tværs af systemer og giver handlingsanbefalinger" },
                { title: "Kundekommunikation", desc: "Opfølgning og nurturing baseret på kundeadfærd og segmentering" },
                { title: "Compliance og logging", desc: "Agenter der overvåger processer, logger aktivitet og flager afvigelser" },
              ].map((item) => (
                <div key={item.title} className="border border-grey-line rounded-xl p-6 hover:border-blue/30 transition-colors">
                  <h3 className="font-fraunces text-base text-ink mb-2">{item.title}</h3>
                  <p className="font-instrument text-sm text-grey-text leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-soft rounded-2xl p-8 md:p-10">
            <h2 className="font-fraunces text-2xl text-ink mb-4">30 minutter. Ingen pitch.</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              Vi kigger på jeres processer og fortæller ærligt hvor agenter giver mening, og hvor de ikke gør.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://tullinadvisory.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue text-white rounded-lg font-instrument font-semibold text-sm hover:bg-blue/90 transition-colors text-center"
              >
                Book en samtale
              </a>
              <a
                href="mailto:peter@tullinadvisory.dk"
                className="inline-block px-6 py-3 bg-white text-ink border border-grey-line rounded-lg font-instrument font-semibold text-sm hover:border-blue transition-colors text-center"
              >
                peter@tullinadvisory.dk
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
