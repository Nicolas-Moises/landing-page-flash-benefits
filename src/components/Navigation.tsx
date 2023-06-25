import { ChevronDown } from 'lucide-react'
import { SubMenuProducts } from './SubMenuProducts'

export function Navigation() {
  return (
    <nav>
      <ul className="gap-10 flex items-center">
        <li className="text-sm font-semibold text-zinc-500">
          <SubMenuProducts>
            <span className="flex gap-3 items-center relative cursor-pointer group">
              Produtos
              <ChevronDown
                size={16}
                className="group-data-[state=open]:rotate-180 transition-transform duration-200 "
              />
            </span>
          </SubMenuProducts>
        </li>
        <li className="text-sm font-semibold text-zinc-500 hover:text-pink-500">
          <a href="#">Colaboradores</a>
        </li>
        <li className="text-sm font-semibold text-zinc-500 hover:text-pink-500">
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  )
}
