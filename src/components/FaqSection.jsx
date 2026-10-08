import { useState } from 'react'
import perguntas from '../../assets/images/perguntas.jpg'

const faqs = [
  {
    question: 'Porque escolher a Sinergia?',
    answer:
      'Porque unimos precisão técnica e atendimento próximo. Cada fórmula é preparada sob medida, com orientação farmacêutica no balcão e no WhatsApp, para que você saia com clareza sobre o uso do medicamento.',
  },
  {
    question: 'Qual a diferença entre medicamento manipulado e industrializado?',
    answer:
      'O industrializado vem em dose e forma padronizadas. O manipulado é feito a partir da prescrição: dá para ajustar concentração, combinados de ativos e a forma farmacêutica mais adequada a cada paciente.',
  },
  {
    question: 'Qual é o prazo de entrega?',
    answer:
      'O prazo varia conforme a complexidade da fórmula e a disponibilidade dos insumos. Em geral, as manipulações mais simples ficam prontas em poucos dias úteis. Confirme o prazo no atendimento no momento do pedido.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos as formas habituais do varejo, como cartão, Pix e dinheiro. Se houver alguma restrição para um pedido específico, a equipe informa antes de confirmar a manipulação.',
  },
  {
    question: 'Como é feito o processo de manipulação?',
    answer:
      'Recebemos a receita, conferimos a prescrição e preparamos a fórmula no laboratório com controle de qualidade. Depois, o medicamento é identificado, embalado e liberado com orientação de uso pela farmacêutica responsável.',
  },
  {
    question: 'Preciso de receita para comprar?',
    answer:
      'Sim, sempre que a legislação exigir. Medicamentos de controle especial e grande parte das fórmulas magistrais só podem ser preparados com receita válida. Produtos de linha, como suplementos, podem ter regras diferentes — pergunte no balcão.',
  },
]

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-sinergia transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:py-24">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Perguntas Frequentes
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl shadow-lg shadow-black/10 ring-1 ring-black/5">
            <img
              src={perguntas}
              alt="Atendimento e orientação na Farmácia Sinergia"
              className="h-72 w-full object-cover object-center md:h-[420px]"
            />
          </div>
        </div>

        <div className="md:pt-14">
          {faqs.map((item, index) => {
            const open = openIndex === index
            const number = String(index + 1).padStart(2, '0')

            return (
              <div key={item.question} className="border-b border-gray-200">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="text-base font-semibold text-sinergia md:text-lg">
                    {number}. {item.question}
                  </span>
                  <Chevron open={open} />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="leading-relaxed text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
