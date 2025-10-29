import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="bg-card py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
              like to collaborate or discuss how I can help with your NetSuite implementation or development needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <Link
                    href="mailto:dguerzon06@gmail.com"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    dguerzon06@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <Link
                    href="tel:+639773638041"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    (+63) 977 363 8041
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Subic, Zambales, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1PQpVqTwJgEJv5FlG0hggooq3qOAGfG7E"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-primary/10 transition-colors group border border-primary/20"
              >
                <Download className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="font-medium text-foreground">Download CV</p>
                  <p className="text-sm text-muted-foreground">PDF Resume</p>
                </div>
              </a>

              <Link
                href="https://github.com/takasu-kun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <Github className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/takasu-kun</p>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/danielleguerzon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/danielleguerzon</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Danielle Guerzon. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
