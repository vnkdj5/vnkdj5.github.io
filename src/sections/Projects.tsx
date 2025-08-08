import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project { 
  name: string; 
  duration: string; 
  description: string; 
  tech_stack: string[];
  link?: string;
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="container mx-auto py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">Selected work and experiments</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.name} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {p.name}
                <span className="text-xs font-normal text-muted-foreground">{p.duration}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech_stack.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
              <div className="pt-2 flex gap-2">
                <Button variant="outline" onClick={() => { setSelected(p); setOpen(true); }}>View Details</Button>
                {p.link && (
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(p.link, '_blank', 'noopener,noreferrer')}
                    className="flex items-center gap-2"
                  >
                    Visit Project
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selected?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{selected?.description}</p>
            <div className="flex flex-wrap gap-2">
              {selected?.tech_stack.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
            {selected?.link && (
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  onClick={() => window.open(selected.link, '_blank', 'noopener,noreferrer')}
                  className="flex items-center gap-2"
                >
                  Visit Project
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
