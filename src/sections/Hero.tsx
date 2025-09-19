import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function HeroSection({ name, title, tagline }: { name: string; title: string; tagline: string }) {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("01vaibhavkumbhar@gmail.com");
    toast({ title: "Copied!", description: "Email address copied to clipboard." });
  };

  const shareSite = async () => {
    await navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied", description: "Share it anywhere." });
  };

  return (
    <section id="hero" className="container mx-auto py-24 text-center animate-enter">
      <p className="text-sm text-muted-foreground mb-2">{title}</p>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-sans bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{name}</h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{tagline}</p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Button variant="hero" onClick={copyEmail}>Contact Me</Button>
        <Button variant="outline" onClick={shareSite}>Share</Button>
      </div>
    </section>
  );
}
