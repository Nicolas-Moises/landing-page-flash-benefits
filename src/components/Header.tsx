import Image from "next/image";

import flashLogo from '../assets/flash-logo.png'

export function Header() {
    return (
        <header className="w-full">
            <div className="w-full max-w-7xl mx-auto">
            <Image src={flashLogo} alt="Logo Flash Benefícios" className="w-28" />

            </div>
        </header>
    )
}