import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";

interface IframeToolProps {
  toolId: string;
  title: string;
  description: string;
  category?: string;
  keywords?: string[];
}

export function IframeTool({ toolId, title, description, category = "utility", keywords = [] }: IframeToolProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Use embedded mode with optimized parameters
  const toolUrl = `https://vnkdj5.github.io/dev-kit-forge/#/tool/${toolId}?embedded=true&hideSidebar=true&hideHeader=true&hideHistory=true`;
  const fullUrl = `https://vnkdj5.github.io/dev-kit-forge`;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleOpenFull = () => {
    window.open(toolUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <div className="w-5 h-5 flex items-center justify-center text-xs">{"<>"}</div>
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1"
              aria-label={isExpanded ? `Collapse ${title}` : `Expand ${title}`}
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="h-3 w-3" />
                  <span className="hidden sm:inline">Collapse</span>
                </>
              ) : (
                <>
                  <Maximize2 className="h-3 w-3" />
                  <span className="hidden sm:inline">Expand</span>
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleOpenFull}
              className="flex items-center gap-1"
              aria-label={`Open ${title} in full screen`}
            >
              <ExternalLink className="h-3 w-3" />
              <span className="hidden sm:inline">Full Screen</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex gap-1">
            {keywords.slice(0, 2).map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/30 rounded-md z-10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                Loading {title}...
              </div>
            </div>
          )}
          <iframe
            src={toolUrl}
            className={`w-full border rounded-md transition-all duration-300 bg-background ${
              isExpanded ? 'h-[600px]' : 'h-[400px]'
            }`}
            title={`${title} - Interactive Tool`}
            onLoad={handleLoad}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            loading="lazy"
            style={{ minHeight: isExpanded ? '600px' : '400px' }}
            aria-label={`${title} - ${description}`}
          />
        </div>
        
        <div className="text-center">
          <Button 
            variant="link" 
            className="text-xs text-muted-foreground hover:text-primary"
            onClick={() => window.open(fullUrl, '_blank', 'noopener,noreferrer')}
          >
            More tools available at dev-kit-forge
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 