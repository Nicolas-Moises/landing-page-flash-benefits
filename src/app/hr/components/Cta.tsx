import Link from 'next/link'

export function Cta() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center my-40">
      <h1 className="font-title font-bold text-zinc-800 text-7xl tracking-tight text-center">
        Conheça a liberdade que só a{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
          Flash{' '}
        </span>
        te dá
      </h1>
      <p className="text-zinc-600 text-lg mt-6 leading-relaxed text-center">
        Agende agora e tenha simplesmente a melhor experiência de uso
      </p>

      <div className="flex items-center gap-6 mt-6">
        <button
          className="font-semibold px-5 py-2 rounded-full bg-pink-400 text-white flex items-center justify-center transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
        >
          Agendar agora
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
