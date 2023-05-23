import Link from 'next/link'

export function Cta() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center my-40">
      <h1 className="font-title font-bold text-zinc-800 text-7xl tracking-tight text-center">
        Colaboradores e RHs rosa de{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
          satisfação
        </span>
      </h1>
      <p className="text-zinc-600 text-lg mt-6 leading-relaxed text-center">
        Os números confirmam: 98% dos profissionais de RHs se sentem satisfeitos
        com a Flash e 62% percebem melhora na retenção de talentos. E tem mais:
        nossa nota de recomendação de NPS é +86.
      </p>

      <div className="flex items-center gap-6 mt-6">
        <button
          className="font-semibold px-5 py-2 rounded-full bg-pink-400 text-white flex items-center justify-center transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
        >
          Contratar agora
        </button>
        <Link
          href="#"
          className="font-semibold text-zinc-600 hover:text-pink-400"
        >
          Fale conosco
        </Link>
      </div>
    </div>
  )
}
