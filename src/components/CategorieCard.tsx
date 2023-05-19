import { ArrowRight } from "lucide-react"
import { ReactElement } from "react"

interface CategorieCardProps {
    category: string
    tag?: string
    description: string
    link: string
    icon: ReactElement
}

export function CategorieCard(props: CategorieCardProps) {
    return (
        <div className="pb-10 pt-12 px-6 rounded-xl bg-white max-w-xs w-full h-[320px] flex flex-col justify-between border-2 border-pink-500/10 relative">
            {props.tag && (
                <div className="absolute top-4 right-6 text-xs px-2 py-1 font-bold rounded-full bg-pink-500 text-white">
                    {props.tag}
                </div>
            )}
            <div>
                <div className="flex gap-3 items-center mb-6">
                    {props.icon}
                    <h4 className="font-title text-xl font-bold text-zinc-800">
                        {props.category}
                    </h4>

                </div>
                <p className="leading-relaxed text-zinc-500">
                    {props.description}
                </p>
                
            </div>

            <a href={props.link} 
                className="font-bold text-sm text-pink-400 flex items-center gap-2 group hover:text-pink-500 transition-colors "
            >
                Mais informações
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-all duration-150" />
            </a>
        </div>
    )
}