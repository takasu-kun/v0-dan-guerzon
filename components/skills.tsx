import { CircuitPattern } from "./svg-backgrounds"

export function Skills() {
  const skillCategories = [
    {
      category: "Software Development",
      skills: [
        "Java",
        "JavaScript",
        "TypeScript",
        "C#",
        "ReactJS",
        "Angular",
        "VueJS",
        "NodeJS",
        "Express",
        "ASP.NET",
        "Zkoss",
        "RhinoJS",
      ],
    },
    {
      category: "ERP & Consulting",
      skills: ["Oracle NetSuite", "SuiteScript 2.0", "ERP Integrations", "Payment Gateway Systems"],
    },
    {
      category: "Databases",
      skills: ["SQL", "PostgreSQL", "MongoDB", "NoSQL", "Hibernate"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Bash Scripting", "Linux/Unix", "macOS"],
    },
    {
      category: "Technical Expertise",
      skills: ["System Administration", "Network Infrastructure", "Troubleshooting", "Technical Support"],
    },
    {
      category: "Other Skills",
      skills: ["Agile (Scrum)", "Customer Service", "Training & Mentoring", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="relative bg-card py-20 md:py-32 overflow-hidden">
      <CircuitPattern />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <h3 className="text-lg font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-br from-primary/15 to-accent/5 text-primary rounded-lg text-sm font-medium hover:from-primary/25 hover:to-accent/15 transition-all duration-300 border border-primary/10 hover:border-primary/30 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
