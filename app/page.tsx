import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <FAQ />
      <Contact />
    </main>
  )
}
