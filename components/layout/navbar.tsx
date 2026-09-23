"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"


const Navbar = () => {
    const pathname = usePathname()
    const navLinks = [
        { href: "/library", label: "Library" },
        { href: "/add-new", label: "Add New" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/60">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">

                {/* LEFT SIDE: Logo & Title */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <img src="/logo.svg" />
                    </div>
                    {/* Title: Hidden on xs/sm, visible on md and up */}
                    <span className="hidden md:inline-block font-heading text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        Cozy Reader
                    </span>
                </Link>    
            </div>            
        </header>
    )
}


export default Navbar
