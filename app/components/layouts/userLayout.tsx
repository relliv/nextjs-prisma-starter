import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: process.env.NEXT_APP_NAME,
  description: "Generated by create next app"
}

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between w-full max-w-5xl mx-5 mb-5 border-b border-gray-500">
          <h1 className="text-2xl font-bold">Page Title</h1>
        </nav>

        {children}
      </body>
    </html>
  )
}
