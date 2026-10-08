import farmacia from '../../assets/images/farmacia.jpg'

export default function Sobre() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="overflow-hidden rounded-3xl shadow-xl shadow-black/10">
          <img
            src={farmacia}
            alt="Espaço de atendimento da Farmácia Sinergia"
            className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sinergia">
            Nossa história
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Sobre nós
          </h1>
          <div className="mt-6 space-y-4 leading-relaxed text-gray-600">
            <p>
              A Sinergia nasceu do encontro entre técnica farmacêutica e atendimento humano.
              Somos uma farmácia de manipulação na Vila Clementino, em São Paulo, dedicada a
              preparar fórmulas com precisão e cuidado.
            </p>
            <p>
              Ao longo dos anos, construímos uma relação de confiança com pacientes e
              prescritores da região: ouvir a necessidade, orientar com clareza e entregar o
              medicamento no padrão que a prescrição exige.
            </p>
            <p>
              Continuamos no mesmo endereço, na Rua Coronel Lisboa, 826, prontos para receber
              você no balcão ou pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
