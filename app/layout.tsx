import type { Metadata } from "next"
import { Cormorant_Garamond, Crimson_Pro, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"


// 1. Editorial & Elegant Serif for Headings
const heading = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-heading",
})


// 2. Comfortable & Clean Serif for Body Text
const body = Crimson_Pro({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-body",
})


// 3. Friendly Sans-Serif for UI & Metadata
const ui = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-ui",
})


export const metadata: Metadata = {
    title: "Cozy Reader",
    description: "A warm, inviting AI powered book reader website.",
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${heading.variable} ${body.variable} ${ui.variable}`}>
            <body className="min-h-screen bg-background text-foreground antialiased">
                <Navbar />
                <main className="mx-auto max-w-5xl px-4 py-8 md:px-6">
                    {children}
                </main>
            </body>
        </html>
    )
}
