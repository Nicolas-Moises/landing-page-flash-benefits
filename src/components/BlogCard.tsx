import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  coverUrl: any
  posted_at: string
  tag: string
  author: string
  title: string
}

export function BlogCard(post: BlogCardProps) {
  return (
    <Link href="#" className="group">
      <div className="w-full h-[360px]">
        <Image
          src={post.coverUrl}
          alt=""
          className="w-full h-[360px] object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center mt-6">
          <span className="text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors duration-100">{post.posted_at}</span>
          <span className="text-sm text-pink-500 group-hover:text-pink-600 transition-colors duration-100">{post.tag}</span>
        </div>

        <strong className="text-xl text-zinc-600 font-semibold font-title group-hover:text-zinc-800 transition-colors duration-100">
          {post.title}
        </strong>
        <p className="text-sm font-medium text-zinc-500 group-hover:text-zinc-600 transition-colors duration-100">por {post.author}</p>
      </div>
    </Link>
  )
}
