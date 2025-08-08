import { tools } from "./tools";
import { remoteTools } from "./remoteTools";
import { IframeTool } from "@/components/tools/IframeTool";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function PlaygroundSection() {
  return (
    <section id="playground" className="container mx-auto py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Interactive Playground</h2>
        <p className="text-muted-foreground">
          Try utilities right here. Some tools are embedded from our dedicated dev-kit-forge platform.
        </p>
      </header>

      {/* Local Tools Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Local Tools</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map(({ id, Component }) => (
            <div key={id} className="animate-fade-in">
              <Component />
            </div>
          ))}
        </div>
      </div>

      {/* Remote Tools Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Dev-Kit-Forge Tools</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {remoteTools.map((tool) => (
            <div key={tool.id} className="animate-fade-in">
              <IframeTool
                toolId={tool.id}
                title={tool.title}
                description={tool.description}
                category={tool.category}
                keywords={tool.keywords}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <span>More tools and features available at</span>
          <Button 
            variant="link" 
            className="p-0 h-auto text-sm"
            onClick={() => window.open('https://vnkdj5.github.io/dev-kit-forge', '_blank', 'noopener,noreferrer')}
          >
            dev-kit-forge
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
