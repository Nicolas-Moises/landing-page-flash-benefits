import { Check, X } from 'lucide-react'
import logo from '../../../assets/logo-flash-expense.svg'
import Image from 'next/image'

export function Table() {
  return (
    <table className="mt-20 border-collapse border-0">
      <thead className="">
        <tr className="border-zinc-400/2 border-b">
          <th className=""></th>
          <th className="relative w-[280px]">
            <div className="absolute inset-0 flex items-center justify-center rounded-t-xl border-x border-t border-gray-200  bg-gray-100 px-8 py-16">
              <Image src={logo} alt="" className="w-1/2 rounded-t-lg" />
            </div>
          </th>
          <th className="">
            <div className="w-[280px] px-8 py-16 ">
              <p className="text-sm">Operadoras tradicionais</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="border-b border-zinc-400/20 ">
          <th className="px-6 pb-4 pt-14">
            <p className="w-[380px] text-left text-sm font-bold">Gestão</p>
          </th>
          <td className="border-x border-gray-200 bg-gray-100"></td>
          <td></td>
        </tr>
        <tr className="-pt-4 border-b border-zinc-400/20">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Painel de gestão completo
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
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Visualização do saldo dos colaborador
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
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Lançamento automático de despesas
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
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Prestação de contas facilitada
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
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Atualização automática do extrato
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
        </tr>

        <tr className="border-b border-zinc-400/20 px-6 pt-14 ">
          <th className="px-6 pb-4 pt-14">
            <p className="w-[380px] text-left text-sm font-bold">Automação</p>
          </th>
          <td className="border-x border-gray-200 bg-gray-100"></td>
          <td></td>
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Recarga dos valores Manual ou Automática
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
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Ativação e desligamento de cartões com agilidade
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
        </tr>

        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Expiração de saldo automática
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
        </tr>
        <tr className="border-b border-zinc-400/20 ">
          <th className=" px-6 py-4">
            <p className="w-[380px] text-left text-sm font-normal">
              Alertas sinalizados nos relatórios após a compra.
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
        </tr>
      </tbody>
    </table>
  )
}
