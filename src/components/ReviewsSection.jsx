const reviews = [
  {
    name: 'Glaucia Tardin',
    when: 'Há 6 anos',
    text: 'Ótimo atendimento. Respeito pelo cliente. Produtos e medicamentos de qualidade.',
  },
  {
    name: 'Célia Cazotti Nunciaroni',
    when: 'Há 1 ano',
    text: 'Fui muito bem atendida, recebo em minha cidade tudo muito bem embalado e protegido. E o atendimento foi muito rápido. Agradeço pela atenção de todos.',
  },
  {
    name: 'Genelza Tambori de Souza',
    when: 'Há 1 ano',
    text: 'Sou cliente por indicação e estou satisfeita com o atendimento e a educação de todos que me atenderam. Muito obrigada a todos!',
  },
  {
    name: 'Andréia Lopes',
    when: 'Há 1 ano',
    text: 'Super indico, são maravilhosos desde o atendimento por WhatsApp até a entrega.',
  },
  {
    name: 'Ivo Amadeu Júnior',
    when: 'Há 1 ano',

    text: 'Excelente escolha para manipulados. Atendimento diferenciado, preços justos, entrega perfeita e rápida. Recomendo.',
  },
  {
    name: 'Silvia Bellini',
    when: 'Há 1 ano',
    text: 'Atendimento perfeito, atencioso e rápido. Qualidade no manipulado e preços bons. Super indico.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5 12.6 7l6 .5-4.6 3.9 1.4 5.8L10 14.3 4.6 17.2 6 11.4 1.4 7.5 7.4 7 10 1.5Z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="bg-sinergia-light">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-center text-base font-semibold uppercase tracking-[0.18em] text-sinergia">
          Google
        </p>
        <h2 className="mt-2 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Avaliações
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          O que quem já passou pela Sinergia conta sobre o atendimento e as fórmulas.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sinergia text-base font-semibold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.when}</p>
                </div>
              </div>
              <div className="mt-4">
                <Stars />
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-gray-600">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
