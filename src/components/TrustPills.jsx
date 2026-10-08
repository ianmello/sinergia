function MortarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-white" fill="none" aria-hidden="true">
      <path
        d="M14 20h20l-2 14H16L14 20Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M12 20h24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M18 36h12v3H18v-3Z" fill="currentColor" />
      <path d="M28 10l6 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function TraceIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-white" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M24 10v5M24 33v5M10 24h5M33 24h5M13.5 13.5l3.5 3.5M31 31l3.5 3.5M13.5 34.5l3.5-3.5M31 17l3.5-3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CapsuleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-white" fill="none" aria-hidden="true">
      <rect x="14" y="10" width="20" height="28" rx="10" stroke="currentColor" strokeWidth="2.2" />
      <path d="M14 24h20" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  )
}

const cards = [
  {
    title: 'Serviço farmacêutico',
    text: 'A Sinergia conta com farmacêuticos que avaliam cada prescrição e preparam a fórmula na apresentação que o paciente precisa, com orientação clara no balcão e no WhatsApp.',
    icon: MortarIcon,
  },
  {
    title: 'Preparações 100% rastreáveis',
    text: 'Cada etapa, do recebimento da matéria-prima à entrega do medicamento, é registrada e conferida. Você recebe uma fórmula com controle e responsabilidade técnica.',
    icon: TraceIcon,
  },
  {
    title: 'Medicamentos personalizados',
    text: 'O medicamento manipulado é feito sob medida: a partir da prescrição, ajustamos dose, forma e combinação de ativos para o seu cuidado — mais do que um remédio, um tratamento pensado para você.',
    icon: CapsuleIcon,
  },
]

export default function TrustPills() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Você pode confiar na Farmácia Sinergia
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-gray-600">
          Cuidado farmacêutico, tecnologia e controle em cada etapa, para entregar
          medicamentos manipulados sob medida para você.
        </p>

        <div className="mt-14 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <article
                key={card.title}
                className="flex h-[520px] w-full max-w-[260px] flex-col overflow-hidden rounded-[999px] shadow-xl shadow-sinergia/15 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="flex h-1/2 flex-col items-center justify-center bg-white px-7 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sinergia">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-sinergia">{card.title}</h3>
                </div>
                <div className="flex h-1/2 items-center justify-center bg-sinergia-dark px-7 text-center">
                  <p className="text-[13px] leading-relaxed text-white/90">{card.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
