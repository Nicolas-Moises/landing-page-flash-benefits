export function Stats() {
  return (
    <section className="w-full bg-gradient-to-br from-pink-300/80 via-pink-400 to-pink-200 px-6">
      <div className="mx-7xl mx-auto flex w-full max-w-7xl flex-col justify-around gap-10 rounded-xl px-20 py-16 md:flex-row md:gap-0 ">
        <div className="flex flex-col items-center gap-4">
          <span className="font-title text-7xl font-extrabold text-white">
            +7K
          </span>
          <p className="text-white">Empresas</p>
        </div>

        <div className=" w-px bg-zinc-100/20 md:h-24 md:w-px" />

        <div className="flex flex-col items-center gap-4">
          <span className="font-title text-7xl font-extrabold text-white">
            +1M
          </span>
          <p className="text-white">Usuários</p>
        </div>

        <div className=" w-px bg-zinc-100/20 md:h-24 md:w-px" />

        <div className="flex flex-col items-center gap-4">
          <span className="font-title text-7xl font-extrabold text-white">
            +4M
          </span>
          <p className="text-white">Estabelecimentos</p>
        </div>
      </div>
    </section>
  )
}
