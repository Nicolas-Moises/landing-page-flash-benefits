import Link from 'next/link'

export function Cta() {
  return (
    <div className="relative mx-auto my-40 flex w-full max-w-3xl flex-col items-center">
      <h1 className="text-center font-title text-7xl font-bold tracking-tight text-zinc-800">
        <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
          A liberdade{' '}
        </span>
        na gestão dos seus colaboradores está a{' '}
        <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
          poucos passos
        </span>{' '}
        de você!
      </h1>
      <p className="mt-6 text-center text-lg leading-relaxed text-zinc-600">
        Faça o cadastro da sua empresa e conheça nossa plataforma
      </p>

      <div className="mt-6 flex items-center gap-6">
        <button
          className="rounded-full border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 px-8 py-4 font-bold text-white
          transition-colors duration-200 hover:border-pink-400 hover:bg-none hover:text-zinc-600"
        >
          Agendar apresentação
        </button>
        <Link
          href="#"
          className="font-semibold text-zinc-600 hover:text-pink-400"
        >
          Simular preço
        </Link>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
    </div>
  )
}
