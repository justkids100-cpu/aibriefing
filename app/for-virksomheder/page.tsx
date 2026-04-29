import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "For virksomheder — Tullin Advisory × aibriefing.dk",
  description: "Vi byggede et bureau med AI-agenter. Vi kan bygge noget lignende for jer.",
};

export default function ForVirksomhederPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-instrument text-sm text-blue mb-4 tracking-wide uppercase">Tullin Advisory</p>
          <h1 className="font-fraunces text-3xl md:text-4xl text-ink mb-4">
            Vi byggede et bureau med AI-agenter.<br />
            <span className="italic text-blue">Vi kan bygge noget lignende for jer.</span>
          </h1>
          <p className="font-instrument text-lg text-grey-text leading-relaxed mb-12 max-w-2xl">
            aibriefing.dk er ikke et tankeeksperiment. Det er et levende produkt der kører hver uge —
            bygget af Tullin Advisory som bevis på hvad AI-agenter kan i dag.
          </p>

          {/* Hvad vi gjorde */}
          <div className="mb-12">
            <h2 className="font-fraunces text-2xl text-ink mb-6">Hvad vi byggede</h2>
            <div className="space-y-4">
              {[
                { num: "6", label: "AI-agenter", desc: "Hver med sin rolle, stemme og tidsplan" },
                { num: "1", label: "ugentlig mail", desc: "Produceret, redigeret og sendt helt automatisk" },
                { num: "2", label: "LinkedIn-profiler", desc: "Med stemmespecifikt indhold fra to personaer" },
                { num: "<100", label: "kr/måned", desc: "Total driftsomkostning for hele bureauet" },
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

          {/* Anvendelsesområder */}
          <div className="mb-12">
            <h2 className="font-fraunces text-2xl text-ink mb-6">Hvor det giver mening</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              Samme arkitektur kan bruges til en lang række forretningsprocesser. Her er nogle eksempler
              vi allerede arbejder med hos danske virksomheder:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Intern kommunikation", desc: "Agenter der skriver ugentlige opdateringer til medarbejdere baseret på data fra jeres systemer" },
                { title: "Markedsovervågning", desc: "Automatisk scanning af konkurrenter, regulering og branchenyheder med executive-sammenfatning" },
                { title: "Content-produktion", desc: "Blog, LinkedIn, nyhedsbrev og social media drevet af agenter med konsistent brand-stemme" },
                { title: "Rapportering", desc: "Ugentlige eller daglige rapporter der samler data på tværs af systemer og leverer handlingsanbefalinger" },
                { title: "Kundekommunikation", desc: "Personaliseret opfølgning og nurturing baseret på kundeadfærd og segmentering" },
                { title: "Compliance og logging", desc: "Agenter der overvåger processer, logger aktivitet og flager afvigelser automatisk" },
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
            <h2 className="font-fraunces text-2xl text-ink mb-4">Lad os tale om jeres muligheder</h2>
            <p className="font-instrument text-base text-grey-text leading-relaxed mb-6">
              En 30-minutters samtale hvor vi ser på jeres processer og identificerer hvor AI-agenter
              kan skabe værdi. Ingen pitch — bare en ærlig vurdering af hvad der giver mening for jer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://tullinadvisory.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue text-white rounded-lg font-instrument font-semibold text-sm hover:bg-blue/90 transition-colors text-center"
              >
                Book en 30-min samtale
              </a>
              <a
                href="mailto:peter@tullinadvisory.dk"
                className="inline-block px-6 py-3 bg-white text-ink border border-grey-line rounded-lg font-instrument font-semibold text-sm hover:border-blue transition-colors text-center"
              >
                Skriv til peter@tullinadvisory.dk
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
