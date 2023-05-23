import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/flash-logo.png'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="pt-14 pb-7 w-full border-t border-zinc-400/10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-start pb-14 border-b border-zinc-400/20">
          <div className="flex-1">
            <strong className="text-2xl">Quem compara, escolhe a Flash!</strong>
            <ul className="flex gap-6 divide-x-2 divide-zinc-400/20 mt-6">
              <li>
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-pink-500 font-medium"
                >
                  Flash Benefícios
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-pink-500 font-medium"
                >
                  Flash Expense
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-pink-500 font-medium"
                >
                  Flash Folha Certa
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-pink-500 font-medium"
                >
                  Flash People
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[542px]">
            <div className="flex flex-col gap-3 w-full">
              <label className="text-sm font-medium">
                Inscreva-se em nossa FlashLetter
              </label>
              <div className="w-full flex items-center gap-3">
                <input
                  type="email"
                  className="flex-1 p-5 text-sm h-14 bg-white border-2 border-pink-100 rounded-lg focus:outline-none focus:ring-2 ring-pink-500 placeholder:text-zinc-400 text-zinc-600"
                  placeholder="Digite seu e-mail"
                />
                <button
                  type="submit"
                  className="rounded-lg h-14 px-5 flex items-center justify-center bg-pink-400 text-white font-semibold hover:bg-transparent transition-colors hover:text-zinc-500 border-2 border-pink-400"
                >
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-10 mt-5 pb-5 border-b border-zinc-400/20">
          <div className="flex flex-col items-start gap-6">
            <strong className="text-lg font-bold">Empresa</strong>
            <Link
              href="#"
              className="text-zinc-500 hover:text-pink-500 font-medium"
            >
              Soluções
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-pink-500 font-medium"
            >
              Fale Conosco
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6">
            <strong className="text-lg font-bold">Mais informações</strong>
            <Link
              href="#"
              className="text-zinc-500 hover:text-pink-500 font-medium"
            >
              Trabalhe conosco
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-pink-500 font-medium"
            >
              Central de ajuda
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6">
            <strong className="text-lg font-bold">Parcerias</strong>
            <Link
              href="#"
              className="text-zinc-500 hover:text-pink-500 font-medium"
            >
              Seja parceiro
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-pink-500 font-medium"
            >
              Acessoria e imprensa
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6">
            <strong className="text-lg font-bold">Legal</strong>
            <Link
              href="#"
              className="text-zinc-500 hover:text-pink-500 font-medium"
            >
              Política de privacidade
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-pink-500 font-medium"
            >
              Liberdade e privacidade
            </Link>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Image
              src={logo}
              alt="Logo Flash"
              className="w-20 object-cover h-auto"
            />

            <ul className="flex items-center gap-4">
              <li>
                <Link href="#">
                  <Instagram
                    size={20}
                    className="text-pink-400 hover:text-pink-500 transition-colors"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Youtube
                    size={24}
                    className="text-pink-400 hover:text-pink-500 transition-colors"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Linkedin
                    size={20}
                    className="text-pink-400 hover:text-pink-500 transition-colors"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Twitter
                    size={20}
                    className="text-pink-400 hover:text-pink-500 transition-colors"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <span className="text-zinc-400 text-xs">
            Inscrição no PAT 190679531
          </span>
          <span className="text-zinc-400 text-xs">CNPJ 32.223.020/0001-18</span>
        </div>
      </div>
    </footer>
  )
}
