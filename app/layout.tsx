import type { Metadata } from "next"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./globals.css"


export const metadata: Metadata = {
    title: "Create Next App",
    description: "A test app for working in Linux without breaking changes due to Turbopack",
}


export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={"bg-[#fafafa] font-sans antialiased text-[#1e1e1e] min-h-screen flex flex-col"}>
                <header className="w-full border-b border-[#eaeaea]">
                    <Navbar />
                </header>
                {children}
                <Footer />
            </body>
        </html>
    )
}
