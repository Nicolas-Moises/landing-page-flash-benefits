import { ChevronDown } from 'lucide-react'
import { SubMenuProducts } from './SubMenuProducts'

export function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        <li className="text-sm font-semibold text-zinc-500">
          <SubMenuProducts>
            <span className="group relative flex cursor-pointer items-center gap-3">
              Produtos
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-data-[state=open]:rotate-180 "
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
