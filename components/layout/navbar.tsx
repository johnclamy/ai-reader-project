"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"


const LogoMark = () => (
    <svg viewBox="0 0 200 300" className="h-6 w-6 shrink-0" aria-hidden="true">
        <rect x="50" y="40" width="100" height="220" rx="10" fill="#C85A32" />
        <polygon points="50,40 50,10 85,40" fill="#C85A32" />
        <polygon points="150,40 150,10 115,40" fill="#C85A32" />
        <circle cx="80" cy="85" r="18" stroke="#FFFFFF" strokeWidth="4" fill="none" />
        <circle cx="120" cy="85" r="18" stroke="#FFFFFF" strokeWidth="4" fill="none" />
        <line x1="98" y1="85" x2="102" y2="85" stroke="#FFFFFF" strokeWidth="4" />
        <path d="M 58,85 Q 52,82 50,75" stroke="#FFFFFF" strokeWidth="3" fill="none" />
        <path d="M 142,85 Q 148,82 150,75" stroke="#FFFFFF" strokeWidth="3" fill="none" />
        <path d="M 72,85 Q 80,91 88,85" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 112,85 Q 120,91 128,85" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
        <polygon points="93,105 107,105 100,113" fill="#FFFFFF" />
        <path d="M 70,220 Q 100,210 130,220 L 130,240 Q 100,230 70,240 Z" fill="#FFFFFF" opacity="0.3" />
    </svg>
)

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
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary/20 bg-[#f5efe8] shadow-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <LogoMark />
                    </div>
                    {/* Title: Hidden on xs/sm, visible on md and up */}
                    <span className="hidden md:inline-block font-heading text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        Cozy Reader
                    </span>
                </Link>            

                {/* RIGHT SIDE: Navigation Links */}
                <nav className="flex items-center gap-6">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative font-ui text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`}
                            >
                                {link.label}
                
                                {/* Subtle "bookmark" underline for active state */}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-4 rounded-full bg-primary" />
                                )}
                            </Link>
                        )
                    })}
                </nav>
            </div>         
        </header>
    )
}


export default Navbar
