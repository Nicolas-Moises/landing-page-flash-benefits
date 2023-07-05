import { Check, X } from 'lucide-react'
import logo from '../../../assets/flash-logo.png'
import Image from 'next/image'

export function Table() {
  return (
    <table className="mt-20 border-collapse border-0">
      <thead className="">
        <tr className="border-zinc-400/2 border-b">
          <th className=""></th>
          <th className="relative w-[280px]">
            <div className="absolute inset-0 flex items-center justify-center rounded-t-xl border-x border-t border-gray-200  bg-gray-100 px-8 py-16">
              <Image src={logo} alt="" className="w-20" />
            </div>
          </th>
          <th className="">
            <div className="w-[280px] px-8 py-16 ">
              <p className="text-sm">Operadoras tradicionais</p>
            </div>
          </th>
          <th className="">
            <div className="w-[280px] px-8 py-16 ">
              <p className="text-sm">Novas operadoras</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="-pt-4 border-b border-zinc-400/20">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Cartão aceito em +2 milhões de estabelecimentos
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Aceito em +2M de estabelecimentos
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Entrega de cartões em até 5 dias úteis
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className="px-6 pb-4 pt-14">
            <p className="w-[380px] text-left text-sm font-bold">
              Colaboradores
            </p>
          </th>
          <td className="border-x border-gray-200 bg-gray-100"></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Disponibilização imediata com saldo em conta
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Cadastro simples e rápido pelo App
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Ativação do cartão via QR Code
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Plataforma completa, simples e intuitiva para o RH
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>

        <tr className="border-b border-zinc-400/20 px-6 pt-14 ">
          <th className="px-6 pb-4 pt-14">
            <p className="w-[380px] text-left text-sm font-bold">RH</p>
          </th>
          <td className="border-x border-gray-200 bg-gray-100"></td>
          <td></td>
          <td></td>
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Benefício para o colaborador desde o 1º dia de trabalho
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              NF única com valores separados por categoria
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Flexibilidade para o RH configurar os benefícios
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Parceiros que fazem sentido para o colaborador
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Reserva de saldo exclusivo para Alimentação e Refeição
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Sem taxas escondidas
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Responsabilidade jurídica e tributária
            </p>
          </th>

          <td className="border-x border-gray-200 bg-gray-100 px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <Check className="text-emerald-600" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>

          <td className="px-6 py-4">
            <div className="flex w-full items-center justify-center">
              <X className="text-red-500" size={20} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
