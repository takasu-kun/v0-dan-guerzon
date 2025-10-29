import { TechDots } from "./svg-backgrounds"

export function Experience() {
  const experiences = [
    {
      title: "Senior NetSuite Developer",
      company: "TAC Solutions Group",
      location: "Florida, US | Remote",
      period: "Oct 2024 – Present",
      description:
        "As a NetSuite Subject Matter Expert, provide NetSuite expertise related to application architecture, data quality, integrations, security, technology, mobile, and analytics. Writing API integrations between NetSuite and third-party systems. Develop and maintain workflows and processes to optimize the platform.",
      tech: ["NetSuite", "SuiteScript 2.0", "JavaScript", "SQL", "XML", "React"],
    },
    {
      title: "Principal Technical Consultant",
      company: "Oracle NetSuite",
      location: "Makati, Philippines",
      period: "Apr 2024 – Sept 2025",
      description:
        "Lead the design, development, and deployment of NetSuite customizations and integrations to meet client business requirements. Delivered high-quality technical solutions across multiple customer engagements, ensuring best practices and Oracle methodologies were applied.",
      tech: ["NetSuite", "SuiteScript 2.0", "JavaScript", "SQL", "XML"],
    },
    {
      title: "Backend Developer",
      company: "Collabera Technologies Inc.",
      location: "Makati, Philippines",
      period: "Oct 2022 – Apr 2024",
      description:
        "Enhanced application performance by analyzing processes, optimizing backend code, and debugging critical issues. Collaborated with cross-functional teams to deliver functional, scalable, and user-centric features.",
      tech: ["RhinoJS", "Angular", "APIGEE", "JavaScript", "AWS", "Azure"],
    },
    {
      title: "Technical Analyst 3",
      company: "Tellysystems Inc.",
      location: "Makati, Philippines",
      period: "Feb 2022 – Oct 2022",
      description:
        "Partnered with Indivara and Cartera to enhance BPI Vybe 2.0 and developed Foresight Payment Gateway. Integrated ERP systems with third-party apps, streamlining payment and reporting processes.",
      tech: ["Java", "Zkoss", "NodeJS", "Docker", "PostgreSQL", "AWS", "Azure"],
    },
    {
      title: "Agile Software Engineer",
      company: "Twist Resources Inc.",
      location: "Clark Freeport Zone, Philippines",
      period: "Apr 2019 – Jan 2022",
      description:
        "Co-developed TwistHRM, an internal HR management platform. Maintained eCommerce platforms, boosting performance and SEO rankings. Applied Agile Scrum methodology across projects.",
      tech: ["Java", "ReactJS", "NodeJS", "VueJS", "TypeScript", "Docker", "MongoDB", "AWS"],
    },
  ]

  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
      <TechDots />
      <div className="absolute top-40 left-0 w-72 h-72 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-2 border-primary pl-6 pb-8 group hover:pl-8 transition-all duration-300"
            >
              <div className="absolute -left-1 top-0 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-r-lg -ml-6" />

              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/10 text-primary text-sm rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {tech}
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
