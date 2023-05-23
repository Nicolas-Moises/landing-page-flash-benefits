export function Stats() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 bg-pink-50 rounded-2xl -mt-7 border-2 border-pink-500/10">
      <div className="w-full py-14 px-20 flex flex-col gap-10 md:gap-0 md:flex-row justify-around bg-white dark:bg-white/5 rounded-xl">
        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-zinc-600">
            +7K
          </span>
          <p className="text-gray-400">Empresas</p>
        </div>

        <div className="md:w-px md:h-24 w-full h-px bg-zinc-400/20" />

        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-zinc-600">
            +600K
          </span>
          <p className="text-gray-400">Usuários</p>
        </div>

        <div className="md:w-px md:h-24 w-full h-px bg-zinc-400/20" />

        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-zinc-600">
            +4M
          </span>
          <p className="text-gray-400">Estabelecimentos</p>
        </div>
      </div>
    </section>
  )
}
