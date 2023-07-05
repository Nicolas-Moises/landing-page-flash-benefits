import Link from 'next/link'

export function Cta() {
  return (
    <div className="mx-auto my-40 flex w-full max-w-3xl flex-col items-center">
      <h1 className="text-center font-title text-7xl font-bold tracking-tight text-zinc-800">
        Conheça a liberdade que só a{' '}
        <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
          Flash{' '}
        </span>
        te dá
      </h1>
      <p className="mt-6 text-center text-lg leading-relaxed text-zinc-600">
        Agende agora e tenha simplesmente a melhor experiência de uso
      </p>

      <div className="mt-6 flex items-center gap-6">
        <button
          className="rounded-full border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
          transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
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
