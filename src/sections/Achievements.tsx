export function AchievementsSection({ achievements, interests }: { achievements: string[]; interests: string[] }) {
  return (
    <section id="achievements" className="container mx-auto py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Achievements & Interests</h2>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Achievements</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((i) => (
              <span key={i} className="border rounded-full px-3 py-1 text-sm">{i}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
