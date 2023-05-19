import Image from "next/image"

import flashLogo from '../assets/flash-logo.png'
import { Navigation } from "./Navigation"

export function Header() {
    return (
        <header className="w-full bg-white/40 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-6">
                <div className="flex items-center gap-20">
                    <Image src={flashLogo} alt="Logo Flash Benefícios" className="w-28" />
                    <Navigation />
                </div>

                <div className="flex items-center gap-10">
                    <a href="" className="text-sm font-extrabold text-zinc-600 hover:text-pink-400">Entrar</a>
                    <button 
                        className="font-bold text-sm px-3 py-2 rounded-full bg-pink-400 text-white flex items-center justify-center transition-colors duration-200
                        border-2 border-pink-400 hover:bg-transparent hover:text-zinc-600"
                    >
                        Contratar agora
                    </button>
                </div>
            </div>
        </header>
    )
}