export function About() {
  return (
    <section id="about" className="bg-card py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">About</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Innovative and results-driven IT Professional & Principal Technical Consultant with 7+ years of experience
              in software development, ERP solutions, and technical consulting. Skilled in designing and implementing
              scalable web applications, integrating enterprise systems, and delivering client-focused solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Adept at leading technical projects, mentoring teams, and leveraging cloud and DevOps tools to optimize
              performance. Recognized for strong problem-solving, adaptability, and consistently driving business
              impact.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Education & Certifications</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground">BS in Information Technology</p>
                <p className="text-muted-foreground">Lyceum of Subic Bay (2013 – 2017)</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground mb-3">Certifications</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• NetSuite Certified SuiteFoundation (2025)</li>
                  <li>• Google Analytics Certified (2019)</li>
                  <li>• Modern React JS (Udemy, 2019)</li>
                  <li>• Microsoft Office Access Specialist (2016)</li>
                  <li>• NCII Computer Hardware Servicing (2014)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
