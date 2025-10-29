export function Projects() {
  const projects = [
    {
      name: "NetSuite",
      description:
        "Specialized expertise in Oracle NetSuite platform with focus on SuiteScript 2.0 development, API integrations, and enterprise customizations.",
      tech: ["NetSuite", "SuiteScript 2.0", "JavaScript", "XML", "SQL"],
    },
    {
      name: "TwistHRM",
      description:
        "HR management platform built with ReactJS & NodeJS for internal operations and employee management.",
      tech: ["ReactJS", "NodeJS", "MongoDB", "Docker"],
    },
    {
      name: "FitMyCar.com",
      description: "E-commerce platform optimization and maintenance, boosting performance and SEO rankings.",
      tech: ["ReactJS", "NodeJS", "AWS", "SQL"],
    },
    {
      name: "Foresight Payment Gateway",
      description: "SBMA payment portal integration for streamlined payment processing and reporting.",
      tech: ["Java", "NodeJS", "PostgreSQL", "Azure"],
    },
    {
      name: "BPI Vybe 2.0",
      description: "ERP and mobile app enhancement for improved user experience and system integration.",
      tech: ["Java", "Zkoss", "PostgreSQL", "AWS"],
    },
    {
      name: "Teleconsultation Platform",
      description: "Web application connecting patients and doctors with integrated lab requests and payment modules.",
      tech: ["ReactJS", "NodeJS", "MongoDB", "AWS"],
    },
    {
      name: "Amgrow Home Garden",
      description: "E-commerce platform maintenance and performance optimization.",
      tech: ["VueJS", "NodeJS", "MongoDB", "Azure"],
    },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">{project.name}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
