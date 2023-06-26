export function Stats() {
  return (
    <section className="w-full px-6 bg-gradient-to-bl from-pink-300 via-pink-400 to-pink-200 -skew-y-2 -skew-x-3 -mt-6 z-30">
      <div className="w-full mx-7xl mx-auto  py-28 px-20 flex flex-col gap-10 md:gap-0 md:flex-row justify-around rounded-xl max-w-7xl">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-white">
            +7K
          </span>
          <p className="text-white">Empresas</p>
        </div>

        <div className="md:w-px md:h-24 w-full h-px" />

        <div className="flex items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-white">
            +600K
          </span>
          <p className="text-white">Usuários</p>
        </div>

        <div className="md:w-px md:h-24 w-full h-px" />

        <div className="flex items-center gap-4">
          <span className="text-5xl font-title font-extrabold text-white">
            +4M
          </span>
          <p className="text-white">Estabelecimentos</p>
        </div>
      </div>
    </section>
  )
}
