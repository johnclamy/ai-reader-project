import getPost from './post'
import { type Post } from '../page'
import { notFound } from 'next/navigation'


const BlogPost = async ({ params, }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const id = Number(slug)

    if (!Number.isInteger(id) || id < 1) {
        notFound()
    }

    const post: Post = await getPost(id)
    const { title, body } = post

    return (
        <div className="space-y-12 md:space-y-14">
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0a0a0a] leading-snug">
                {title}
            </h1>
            <p className="mt-2 text-base text-[#4a4a4a] leading-relaxed max-w-prose">
                {body}
            </p>
        </div>
    )
}


export default BlogPost
