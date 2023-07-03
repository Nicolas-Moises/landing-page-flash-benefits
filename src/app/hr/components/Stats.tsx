export function Stats() {
  return (
    <section className="w-full bg-gradient-to-br from-pink-300/80 via-pink-400 to-pink-200 px-6">
      <div className="mx-7xl -skew-y-4 mx-auto  flex w-full max-w-7xl -skew-x-3 flex-col justify-around gap-10 rounded-xl px-20 py-24 md:flex-row md:gap-0 ">
        <div className="flex items-center gap-4">
          <span className="font-title text-5xl font-extrabold text-white">
            +7K
          </span>
          <p className="text-white">Empresas</p>
        </div>

        <div className="h-px w-full md:h-24 md:w-px" />

        <div className="flex items-center gap-4">
          <span className="font-title text-5xl font-extrabold text-white">
            +600K
          </span>
          <p className="text-white">Usuários</p>
        </div>

        <div className="h-px w-full md:h-24 md:w-px" />

        <div className="flex items-center gap-4">
          <span className="font-title text-5xl font-extrabold text-white">
            +4M
          </span>
          <p className="text-white">Estabelecimentos</p>
        </div>
      </div>
    </section>
  )
}
