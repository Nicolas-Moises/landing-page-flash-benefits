import { Table } from './Table'

export function Pricing() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center py-16">
      <div className="flex flex-col items-center ">
        <span className="mb-2 text-sm text-pink-500">Dentro disso tudo...</span>
        <h4 className="max-w-2xl text-center font-title text-5xl font-bold tracking-tight text-zinc-700">
          Confira nossos{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
            diferenciais
          </span>
        </h4>
        <p className="mt-6 max-w-2xl text-center leading-relaxed">
          Aproveite tudo por zero de taxa de contratação e utilização de nossos
          serviços primários.
        </p>
      </div>

      <Table />
    </section>
  )
}
