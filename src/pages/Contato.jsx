import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants'

export default function Contato() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-sinergia-light blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sinergia">
          Fale conosco
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Contato
        </h1>
        <p className="mt-4 text-gray-600">
          Fale com a equipe da Sinergia. Estamos na Vila Clementino, prontos para orientar
          sobre manipulação e produtos.
        </p>

        <div className="mt-10 grid gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-sinergia/20 hover:shadow-md"
          >
            <span className="block text-sm font-medium text-sinergia">E-mail</span>
            <span className="mt-1 block text-gray-800">{EMAIL}</span>
          </a>
          <a
            href={PHONE_HREF}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-sinergia/20 hover:shadow-md"
          >
            <span className="block text-sm font-medium text-sinergia">Telefone</span>
            <span className="mt-1 block text-gray-800">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-whatsapp/40 hover:shadow-md"
          >
            <span className="block text-sm font-medium text-sinergia">WhatsApp</span>
            <span className="mt-1 block text-whatsapp-dark">{WHATSAPP_DISPLAY}</span>
          </a>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
            <span className="block text-sm font-medium text-sinergia">Endereço</span>
            <p className="mt-1 text-gray-800">{ADDRESS}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
