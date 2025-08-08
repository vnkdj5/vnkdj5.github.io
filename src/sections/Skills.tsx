import { Badge } from "@/components/ui/badge";

export function SkillsSection({ skills }: { skills: string[] }) {
  return (
    <section id="skills" className="container mx-auto py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="text-muted-foreground">Technologies and tools I use</p>
      </header>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <Badge key={s} variant="secondary">{s}</Badge>
        ))}
      </div>
    </section>
  );
}
