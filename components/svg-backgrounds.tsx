export function CircuitPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="150" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="150" r="3" fill="currentColor" />
          <circle cx="150" cy="150" r="3" fill="currentColor" />
          <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="50" x2="50" y2="150" stroke="currentColor" strokeWidth="1" />
          <line x1="150" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="150" x2="150" y2="150" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#circuit)" />
    </svg>
  )
}

export function TechDots() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#dots)" />
    </svg>
  )
}

export function GradientOrb({ color = "from-primary" }: { color?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none bg-gradient-to-br ${color} to-transparent`}
    />
  )
}

export function TechLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <line x1="0" y1="200" x2="1200" y2="200" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="400" x2="1200" y2="400" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="600" x2="1200" y2="600" stroke="currentColor" strokeWidth="1" />
      <line x1="300" y1="0" x2="300" y2="800" stroke="currentColor" strokeWidth="1" />
      <line x1="600" y1="0" x2="600" y2="800" stroke="currentColor" strokeWidth="1" />
      <line x1="900" y1="0" x2="900" y2="800" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
