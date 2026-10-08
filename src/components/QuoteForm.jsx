import { useRef, useState } from 'react'

const emptyFiles = [null, null, null, null]
const accept = '.pdf,.jpg,.jpeg,.png,.webp,.heic'

function UploadIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 3v5h5M12 18v-7M9 13.5 12 11l3 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function QuoteForm() {
  const fileRefs = useRef([])
  const [files, setFiles] = useState(emptyFiles)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  function setFileAt(index, file) {
    setFiles((current) => current.map((item, i) => (i === index ? file : item)))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setMessage('')

    const form = event.currentTarget
    const data = new FormData(form)
    files.filter(Boolean).forEach((file) => data.append('receitas[]', file))

    try {
      const response = await fetch('/send-orcamento.php', {
        method: 'POST',
        body: data,
      })
      const type = response.headers.get('content-type') || ''
      if (!type.includes('application/json')) {
        throw new Error(
          'O envio com anexo funciona depois de publicar o site no HostGator. Enquanto isso, use o WhatsApp.',
        )
      }
      const result = await response.json()
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Não foi possível enviar o orçamento.')
      }
      form.reset()
      setFiles(emptyFiles)
      setStatus('ok')
      setMessage('Recebemos seu pedido. Em breve a equipe da Sinergia retorna com o orçamento.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Não foi possível enviar o orçamento.')
    }
  }

  return (
    <section id="orcamento" className="scroll-mt-24 bg-sinergia">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Solicite um orçamento
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/80">
          Envie seus dados e a receita. Nossa equipe analisa e retorna com o orçamento.
        </p>

        <form className="mt-10" onSubmit={handleSubmit} noValidate>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="space-y-3">
            <input
              required
              name="nome"
              type="text"
              placeholder="Nome Completo"
              className="w-full rounded-full border-0 bg-white px-5 py-3.5 text-gray-800 outline-none placeholder:text-gray-400"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="E-mail"
              className="w-full rounded-full border-0 bg-white px-5 py-3.5 text-gray-800 outline-none placeholder:text-gray-400"
            />
            <input
              required
              name="telefone"
              type="tel"
              placeholder="Celular/WhatsApp"
              className="w-full rounded-full border-0 bg-white px-5 py-3.5 text-gray-800 outline-none placeholder:text-gray-400"
            />
            <input
              name="observacoes"
              type="text"
              placeholder="Observações do Pedido"
              className="w-full rounded-full border-0 bg-white px-5 py-3.5 text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          <p className="mt-5 text-sm text-white">Anexe sua receita (máximo 4 arquivos)</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {files.map((file, index) => (
              <div key={index}>
                <input
                  ref={(node) => {
                    fileRefs.current[index] = node
                  }}
                  type="file"
                  accept={accept}
                  className="sr-only"
                  onChange={(event) => setFileAt(index, event.target.files?.[0] ?? null)}
                />
                <button
                  type="button"
                  onClick={() => fileRefs.current[index]?.click()}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-gray-700"
                >
                  <UploadIcon />
                  <span className="truncate">{file ? file.name : 'Selecionar arquivo'}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-white px-10 py-3.5 text-base font-semibold text-sinergia shadow-lg transition hover:bg-sinergia-light disabled:opacity-60"
            >
              {status === 'sending' ? 'Enviando...' : 'Solicitar orçamento'}
            </button>
          </div>

          {message ? (
            <p
              className={`mt-5 text-center text-sm ${status === 'ok' ? 'text-green-100' : 'text-red-100'}`}
              role="status"
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
