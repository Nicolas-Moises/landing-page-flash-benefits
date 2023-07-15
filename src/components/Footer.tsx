import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/flash-logo.png'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Button } from './ui/button'

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-400/10 px-6 pb-7 pt-14 lg:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex w-full flex-col items-start border-b border-zinc-400/20 pb-14 ">
          <div className="flex-1">
            <strong className="text-2xl">Quem compara, escolhe a Flash!</strong>
            <ul className="mt-6 flex flex-col gap-6 divide-zinc-400/20 lg:flex-row lg:divide-x-2">
              <li>
                <Link
                  href="hr"
                  className="font-medium text-zinc-500 hover:text-pink-500"
                >
                  Flash Benefícios
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="#"
                  className="font-medium text-zinc-500 hover:text-pink-500"
                >
                  Flash Expense
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="#"
                  className="font-medium text-zinc-500 hover:text-pink-500"
                >
                  Flash Folha Certa
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="#"
                  className="font-medium text-zinc-500 hover:text-pink-500"
                >
                  Flash People
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6 w-full lg:mt-0 lg:w-[542px]">
            <div className="flex w-full flex-col gap-3">
              <label className="text-sm font-medium">
                Inscreva-se em nossa FlashLetter
              </label>
              <div className="flex w-full flex-col items-start gap-3 lg:flex-row lg:items-center">
                <input
                  type="email"
                  className="flex-1 rounded-lg border-2 border-pink-100 bg-white px-3.5 py-2.5 text-sm text-zinc-600 ring-pink-500 placeholder:text-zinc-400 focus:outline-none focus:ring-2"
                  placeholder="Digite seu e-mail"
                />
                <Button type="submit">Inscrever</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap justify-between gap-10 border-b border-zinc-400/20 pb-5">
          <div className="flex flex-col items-start gap-6">
            <strong className="text-lg font-bold">Empresa</strong>
            <Link
              href="#"
              className="font-medium text-zinc-500 hover:text-pink-500"
            >
              Soluções
            </Link>
            <Link
              href="#"
              className="font-medium text-zinc-500 hover:text-pink-500"
            >
              Fale Conosco
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6">
            <strong className="text-lg font-bold">Mais informações</strong>
            <Link
              href="#"
              className="font-medium text-zinc-500 hover:text-pink-500"
            >
              Trabalhe conosco
            </Link>
            <Link
              href="#"
              className="font-medium text-zinc-500 hover:text-pink-500"
            >
              Central de ajuda
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6">
            <strong className="text-lg font-bold">Parcerias</strong>
            <Link
              href="#"
              className="font-medium text-zinc-500 hover:text-pink-500"
            >
              Seja parceiro
            </Link>
            <Link
              href="#"
              className="font-medium text-zinc-500 hover:text-pink-500"
            >
              Acessoria e imprensa
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6">
            <strong className="text-lg font-bold">Legal</strong>
            <Link
              href="#"
              className="font-medium text-zinc-500 hover:text-pink-500"
            >
              Política de privacidade
            </Link>
            <Link
              href="#"
              className="font-medium text-zinc-500 hover:text-pink-500"
            >
              Liberdade e privacidade
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-6 lg:items-center lg:gap-0">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
            <Image
              src={logo}
              alt="Logo Flash"
              className="h-auto w-20 object-cover"
            />

            <ul className="flex items-center gap-4">
              <li>
                <Link href="#">
                  <Instagram
                    size={20}
                    className="text-pink-400 transition-colors hover:text-pink-500"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Youtube
                    size={24}
                    className="text-pink-400 transition-colors hover:text-pink-500"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Linkedin
                    size={20}
                    className="text-pink-400 transition-colors hover:text-pink-500"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Twitter
                    size={20}
                    className="text-pink-400 transition-colors hover:text-pink-500"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <span className="text-xs text-zinc-400">
            Inscrição no PAT 190679531
          </span>
          <span className="text-xs text-zinc-400">CNPJ 32.223.020/0001-18</span>
        </div>
      </div>
    </footer>
  )
}
