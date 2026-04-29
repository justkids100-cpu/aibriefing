import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Afmeld — aibriefing.dk",
};

export default function AfmeldPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-fraunces text-3xl text-ink mb-4">Afmeld briefingen</h1>
          <p className="font-instrument text-base text-grey-text leading-relaxed mb-8">
            Skriv din e-mail herunder, og vi fjerner dig fra listen.
            Helene og Mathias forstår det. Ingen hårde følelser.
          </p>
          <AfmeldForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}

function AfmeldForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="Din e-mail"
        className="flex-1 px-4 py-3 rounded-lg border border-grey-line bg-white font-instrument text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-ink text-white rounded-lg font-instrument font-semibold text-sm hover:bg-ink/80 transition-colors cursor-pointer"
      >
        Afmeld
      </button>
    </form>
  );
}
