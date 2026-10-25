import type { Metadata } from "next"
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
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    )
}
