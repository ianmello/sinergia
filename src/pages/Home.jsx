import FaqSection from '../components/FaqSection'
import HeroCarousel from '../components/HeroCarousel'
import QuoteForm from '../components/QuoteForm'
import ReviewsSection from '../components/ReviewsSection'
import TrustPills from '../components/TrustPills'

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <TrustPills />

      <section className="relative overflow-hidden bg-sinergia-light">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sinergia/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-sinergia">Linhas e produtos</h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Além das fórmulas magistrais, trabalhamos com linhas reconhecidas no cuidado
            diário. Consulte disponibilidade e orientação com nossa equipe.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="group rounded-3xl border border-white bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sinergia/10">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-sinergia transition-all duration-300 group-hover:w-20" />
              <h3 className="text-xl font-semibold text-gray-900">Fisioquantic</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Linha voltada ao bem-estar e ao acompanhamento terapêutico. Nossa equipe
                pode orientar sobre as opções disponíveis e o uso adequado conforme indicação
                profissional.
              </p>
            </article>
            <article className="group rounded-3xl border border-white bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sinergia/10">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-sinergia transition-all duration-300 group-hover:w-20" />
              <h3 className="text-xl font-semibold text-gray-900">Essential</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Suplementos e nutracêuticos da linha Essential, úteis no suporte nutricional
                do dia a dia. Pergunte no balcão ou pelo WhatsApp sobre as apresentações em
                estoque.
              </p>
            </article>
          </div>
        </div>
      </section>

      <QuoteForm />

      <ReviewsSection />

      <FaqSection />
    </>
  )
}
