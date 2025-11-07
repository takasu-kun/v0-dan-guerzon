"use client"

import type React from "react"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    const initTawk = async () => {
      try {
        const response = await fetch("/faq.json")
        if (!response.ok) {
          throw new Error(`Failed to fetch FAQ: ${response.status}`)
        }
        const faqData = await response.json()
        console.log("[v0] FAQ data loaded successfully:", faqData)

        // Initialize Tawk API
        var Tawk_API = (window as any).Tawk_API || {}
        var Tawk_LoadStart = new Date()

        // Load Tawk script
        ;(() => {
          var s1 = document.createElement("script")
          var s0 = document.getElementsByTagName("script")[0]
          s1.async = true
          s1.src = "https://embed.tawk.to/690cd6a728c3c5195535c81d/1j9d2d02j"
          s1.charset = "UTF-8"
          s1.setAttribute("crossorigin", "*")
          s0.parentNode?.insertBefore(s1, s0)
        })()

        // Wait for Tawk to load, then configure it with FAQ data
        const waitForTawk = setInterval(() => {
          if ((window as any).Tawk_API && (window as any).Tawk_API.onLoad) {
            clearInterval(waitForTawk)

            // Configure Tawk.to with custom attributes including FAQ data
            ;(window as any).Tawk_API.onLoad = () => {
              // Set visitor attributes with FAQ data
              ;(window as any).Tawk_API.setAttributes(
                {
                  faqData: JSON.stringify(faqData.faqs),
                  portfolio: "danielle-guerzon",
                  category: "consulting",
                },
                (error: any) => {
                  console.log("[v0] Tawk FAQ data configured successfully")
                },
              )
            }
          }
        }, 100)

        // Cleanup timeout after 5 seconds
        setTimeout(() => clearInterval(waitForTawk), 5000)
      } catch (error) {
        console.log("[v0] Error loading FAQ data:", error)
      }
    }

    initTawk()
  }, [])

  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
