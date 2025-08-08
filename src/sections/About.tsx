export function AboutSection({ name, title, tagline, location }: { name: string; title: string; tagline: string; location: string; }) {
  return (
    <section id="about" className="container mx-auto py-16">
      <header className="mb-4">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
      </header>
      <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
        {tagline}
      </p>
      <p className="mt-4 text-sm text-muted-foreground">Based in {location}</p>
    </section>
  );
}
