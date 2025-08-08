import { Badge } from "@/components/ui/badge";

export function ExperienceSection({ experience }: { experience: { role: string; company: string; duration: string; achievements: string[] }[] }) {
  return (
    <section id="experience" className="container mx-auto py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <p className="text-muted-foreground">A timeline of roles and impact</p>
      </header>
      <div className="relative border-l pl-6">
        {experience.map((e, idx) => (
          <div key={`${e.company}-${idx}`} className="mb-10 group">
            <div className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full border bg-background shadow-[var(--shadow-glow)]" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="font-semibold">{e.role} • {e.company}</h3>
              <span className="text-xs text-muted-foreground">{e.duration}</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {e.achievements.map((a) => (
                <li key={a} className="leading-relaxed">• {a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
