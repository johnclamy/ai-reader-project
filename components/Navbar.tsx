import Link from 'next/link'
import LinkSpinner from './LinkSpinner'


const Navbar = () => {
    return (
        <nav className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">

            {/* logo left */}
            <Link href={'/'} className="text-sm font-medium tracking-tight text-[#0a0a0a] transition-opacity hover:opacity-70">
                My Blogs
                <LinkSpinner />
            </Link>

            {/* navlinks right */}
            <ul className="flex items-center gap-6 sm:gap-8">
                <li>
                    <Link href={'/'} className="text-[0.7rem] uppercase tracking-[0.15em] text-[#0a0a0a] transition-opacity hover:opacity-60">
                        Home
                        <LinkSpinner />
                    </Link>
                </li>
                <li>
                    <Link href={'/posts'} className="text-[0.7rem] uppercase tracking-[0.15em] text-[#6b6b6b] transition-opacity hover:opacity-60">
                        Blog
                        <LinkSpinner />
                    </Link>
                </li>
                <li>
                    <Link href={'/signin'} className="text-[0.7rem] uppercase tracking-[0.15em] text-[#6b6b6b] transition-opacity hover:opacity-60">
                        Sign in
                        <LinkSpinner />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar
