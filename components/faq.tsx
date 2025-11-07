"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  id: number
  category: string
  question: string
  answer: string
}

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [faqData, setFaqData] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => {
        setFaqData(data.faqs)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading FAQ data:", error)
        setLoading(false)
      })
  }, [])

  // Group FAQs by category
  const groupedFAQs = faqData.reduce(
    (acc, faq) => {
      const category = faq.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(faq)
      return acc
    },
    {} as Record<string, FAQ[]>,
  )

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  if (loading) {
    return (
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center text-muted-foreground">Loading FAQ...</div>
      </section>
    )
  }

  return (
    <section id="faq" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Frequently Asked Questions</h2>

      <div className="space-y-8">
        {Object.entries(groupedFAQs).map(([category, faqs]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors"
                  >
                    <span className="font-medium text-foreground text-left">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                        expandedId === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedId === faq.id && (
                    <div className="px-6 py-4 bg-background border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
