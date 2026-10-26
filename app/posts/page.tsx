import Link from 'next/link'
import getPosts from './posts'


export type Post = {
    id: number
    title: string
    body: string
}


const Blog = async () => {
    const postsData = await getPosts()

    return (            
        <article className="space-y-12 md:space-y-14">
            {postsData.posts.map((post: Post) => (
                <section className="group" key={post.id}>
                    <Link href={`/posts/${post.id}`} className="block transition-opacity duration-200 hover:opacity-70">
                        <div className="group">
                            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#0a0a0a] leading-snug group-hover:underline decoration-1 underline-offset-4 decoration-[#b0b0b0] transition-all">
                                {post.title}
                            </h2>
                            <p className="mt-2 text-base text-[#4a4a4a] leading-relaxed max-w-prose">
                                {post.body}
                            </p>
                        </div>                            
                    </Link>
                </section>
            ))}
        </article>
    )
}


export default Blog
