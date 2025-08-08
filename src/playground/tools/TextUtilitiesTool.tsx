import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export default function TextUtilitiesTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const toSlug = () => setOutput(input.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
  const reverse = () => setOutput(Array.from(input).reverse().join(""));
  const copy = async () => { await navigator.clipboard.writeText(output); toast({ title: "Copied!" }); };
  const reset = () => { setInput(""); setOutput(""); };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Utilities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full min-h-28 rounded-md border bg-background p-2" placeholder="Enter text here" />
        <div className="flex gap-2 flex-wrap">
          <Button onClick={toSlug}>Slugify</Button>
          <Button variant="secondary" onClick={reverse}>Reverse</Button>
          <Button variant="outline" onClick={copy}>Copy</Button>
          <Button variant="ghost" onClick={reset}>Reset</Button>
        </div>
        <textarea readOnly value={output} className="w-full min-h-28 rounded-md border bg-background p-2" placeholder="Output" />
      </CardContent>
    </Card>
  );
}
