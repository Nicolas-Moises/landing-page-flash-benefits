import { ChevronDown } from 'lucide-react'

export function Navigation() {
    return (
        <nav>
            <ul className='gap-10 flex items-center'>
                <li className='text-sm font-extrabold text-zinc-500 hover:text-pink-400'>
                    <a href="#" className='flex gap-3 items-center'>
                        Produtos
                        <ChevronDown size={16} />
                    </a>
                    
                </li>
                <li className='text-sm font-extrabold text-zinc-500 hover:text-pink-400'>
                    <a href="#">Rh</a>
                </li>    
                <li className='text-sm font-extrabold text-zinc-500 hover:text-pink-400'>
                    <a href="#">Colaboradores</a>
                </li>    
                <li className='text-sm font-extrabold text-zinc-500 hover:text-pink-400'>
                    <a href="#">Blog</a>
                </li>       
            </ul>
        </nav>
    )
}