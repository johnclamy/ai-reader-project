import getPosts, { getPost } from '../../../lib/data'
import { type Post } from '../page'
import { notFound } from 'next/navigation'


type BlogPostProps = {
    params: Promise<{ slug: string }>
}


export async function generateStaticParams() {
    const { posts }: { posts: Post[] } = await getPosts()

    return posts.map((post) => ({
        slug: post.id.toString(),
    }))
}


const BlogPost = async (props: BlogPostProps) => {
    const { slug } = await props.params
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
