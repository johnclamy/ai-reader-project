import getPosts from './posts'


export type Post = {
    id: number
    title: string
    body: string
}


const Blog = async () => {
    const postsData = await getPosts()

    return (
        <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24 md:py-28">
            {/* minimalist header: just a tiny eyebrow and clean title */}
            <header className="mb-14 md:mb-20">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#6b6b6b] mb-3">
                    writing · notes
                </p>
                <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#111] leading-tight">
                    Blog Posts
                </h1>
                {/* subtle line, no ornament */}
                <div className="mt-6 h-px w-12 bg-[#d4d4d4]"></div>
            </header>

            {/* POST LIST – minimalist cards with generous spacing */}
            <article className="space-y-12 md:space-y-14">
                {postsData.posts.map((post: Post) => (
                    <section className="group" key={post.id}>
                        <a href="/" className="block transition-opacity duration-200 hover:opacity-70">                            
                            <div className="group">
                                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#0a0a0a] leading-snug group-hover:underline decoration-1 underline-offset-4 decoration-[#b0b0b0] transition-all">
                                    {post.title}
                                </h2>
                                <p className="mt-2 text-base text-[#4a4a4a] leading-relaxed max-w-prose">
                                    {post.body}
                                </p>
                            </div>                            
                        </a>
                    </section>
                ))}
            </article>
        </main>
    )
}

export default Blog
