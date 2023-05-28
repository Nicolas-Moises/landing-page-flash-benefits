export function Stats() {
  return (
    <section className="w-full px-6 bg-pink-100 -skew-y-2 -skew-x-3 -mt-6 z-30">
      <div className="w-full mx-7xl mx-auto  py-14 px-20 flex flex-col gap-10 md:gap-0 md:flex-row justify-around bg-white dark:bg-white/5 rounded-xl max-w-7xl">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-zinc-600">
            +7K
          </span>
          <p className="text-zinc-500">Empresas</p>
        </div>

        <div className="md:w-px md:h-24 w-full h-px bg-zinc-400/20" />

        <div className="flex items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-zinc-600">
            +600K
          </span>
          <p className="text-zinc-500">Usuários</p>
        </div>

        <div className="md:w-px md:h-24 w-full h-px bg-zinc-400/20" />

        <div className="flex items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-zinc-600">
            +4M
          </span>
          <p className="text-zinc-500">Estabelecimentos</p>
        </div>
      </div>
    </section>
  )
}
