export default function BlogLayout({ children, }: {children: React.ReactNode }) {
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
            {children}
        </main>
    )
}
