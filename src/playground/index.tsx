import { tools } from "./tools";

export function PlaygroundSection() {
  return (
    <section id="playground" className="container mx-auto py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Interactive Playground</h2>
        <p className="text-muted-foreground">Try utilities right here</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map(({ id, Component }) => (
          <div key={id} className="animate-fade-in">
            <Component />
          </div>
        ))}
      </div>
    </section>
  );
}
