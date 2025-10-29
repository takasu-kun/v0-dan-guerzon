import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CircuitPattern } from "./svg-backgrounds"

export function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
      <CircuitPattern />
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tr from-accent to-transparent rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Danielle Guerzon</h1>
          <p className="text-xl text-primary font-semibold mb-6">Principal Technical Consultant</p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-balance">
            7+ years of experience designing and implementing scalable enterprise solutions. Specialized in Oracle
            NetSuite, ERP integrations, and full-stack development.
          </p>

          <div className="flex gap-4 mb-8">
            <Link
              href="https://github.com/takasu-kun"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/danielleguerzon/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:dguerzon06@gmail.com"
              className="p-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-1 aspect-square flex items-center justify-center border border-primary/20 overflow-hidden">
            <Image
              src="https://i.imgur.com/gd5rjGT.jpeg"
              alt="Danielle Guerzon"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
