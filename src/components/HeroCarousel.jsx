import { useEffect, useState } from 'react'
import carroussel1 from '../../assets/images/carroussel_1.png'
import farmacia from '../../assets/images/farmacia.jpg'
import lab from '../../assets/images/lab.jpg'

const slides = [
  {
    image: carroussel1,
    alt: 'Farmácia Sinergia',
    eyebrow: 'Farmácia de manipulação',
    title: 'Desde 2005 trabalhando com excelência',
    text: 'Há quase 20 anos na Vila Clementino, preparamos fórmulas personalizadas com cuidado, qualidade e atendimento próximo.',
    cta: { href: '#orcamento', label: 'Envie sua receita aqui!' },
  },
  {
    image: farmacia,
    alt: 'Atendimento na Farmácia Sinergia',
    eyebrow: 'Atendimento humano',
    title: 'Cuidado sob medida, do balcão ao WhatsApp',
    text: 'Nossa equipe ouve a sua necessidade, orienta com clareza e acompanha cada prescrito até a entrega.',
    cta: { href: '#orcamento', label: 'Envie sua receita aqui!' },
  },
  {
    image: lab,
    alt: 'Laboratório da Farmácia Sinergia',
    eyebrow: 'Laboratório próprio',
    title: 'Precisão em cada fórmula',
    text: 'Manipulação com rigor técnico, rastreabilidade e o padrão que a prescrição exige.',
    cta: { href: '#orcamento', label: 'Envie sua receita aqui!' },
  },
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={slide.alt}
          src={slide.image}
          alt={slide.alt}
          className={[
            'absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-sinergia/20 mix-blend-multiply" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20">
        <p className="text-base font-semibold uppercase tracking-[0.22em] text-green-200">
          {slides[index].eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {slides[index].title}
        </h1>
        <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/85">{slides[index].text}</p>
        <div className="mt-9">
          <a
            href={slides[index].cta.href}
            className="animate-whatsapp-pulse inline-flex items-center justify-center rounded-full bg-whatsapp px-12 py-5 text-xl font-semibold text-white shadow-2xl ring-4 ring-white/35 transition hover:scale-105 hover:bg-whatsapp-dark"
          >
            {slides[index].cta.label}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.alt}
            type="button"
            aria-label={`Ir para o slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={[
              'h-2.5 rounded-full transition-all',
              i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  )
}
