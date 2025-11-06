import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = { subsets: ["latin"] }
const firaCode = { subsets: ["latin"] }

export const metadata: Metadata = {
  title: "Danielle Guerzon - NetSuite Developer",
  description: "Portfolio of Danielle Guerzon, Principal Technical Consultant specializing in NetSuite development",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
