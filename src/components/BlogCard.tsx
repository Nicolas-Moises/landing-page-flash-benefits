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
      <div className="h-[230px] w-full overflow-hidden rounded-xl ">
        <Image
          src={post.coverUrl}
          alt=""
          className="h-[250px] w-full object-cover transition-transform duration-150 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-zinc-400 transition-colors duration-100 group-hover:text-zinc-600">
            {post.posted_at}
          </span>
          <span className="text-sm text-pink-500 transition-colors duration-100 group-hover:text-pink-600">
            {post.tag}
          </span>
        </div>

        <strong className="font-title text-xl font-semibold text-zinc-600 transition-colors duration-100 group-hover:text-zinc-800">
          {post.title}
        </strong>
        <p className="text-sm font-medium text-zinc-500 transition-colors duration-100 group-hover:text-zinc-600">
          por {post.author}
        </p>
      </div>
    </Link>
  )
}
