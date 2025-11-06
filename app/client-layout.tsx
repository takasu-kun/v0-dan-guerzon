"use client"

import type React from "react"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // <CHANGE> Add Tawk.to chatbot script
  useEffect(() => {
    var Tawk_API = (window as any).Tawk_API || {}
    var Tawk_LoadStart = new Date()
    ;(() => {
      var s1 = document.createElement("script")
      var s0 = document.getElementsByTagName("script")[0]
      s1.async = true
      s1.src = "https://embed.tawk.to/690cd6a728c3c5195535c81d/1j9d2d02j"
      s1.charset = "UTF-8"
      s1.setAttribute("crossorigin", "*")
      s0.parentNode?.insertBefore(s1, s0)
    })()
  }, [])

  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
