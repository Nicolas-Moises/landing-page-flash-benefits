import { ArrowRight } from "lucide-react"
import Image, { ImageProps } from "next/image"
import { ReactElement } from "react"

interface CategorieCardProps {
    category: string
    tag?: string
    description: string
    link: string
    icon: ReactElement
    coverUrl: any
}

export function CategorieCard(props: CategorieCardProps) {
    return (
        <div className="pb-6 rounded-xl bg-white max-w-xs w-full h-[400px] flex flex-col border-2 border-pink-500/10 relative overflow-hidden">
            {props.tag && (
                <div className="absolute top-4 right-6 text-xs px-1 py-px font-medium rounded-md bg-white border border-zinc-500/10 text-zinc-500">
                    {props.tag}
                </div>
            )}

            <Image src={props.coverUrl} alt="" width={540} height={400} className="w-full aspect-video object-cover" />
            <div className="mt-4 flex-1 flex flex-col justify-between px-4"> 
                <div>
                    <div className="flex gap-3 items-center mb-3">
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
        </div>
    )
}