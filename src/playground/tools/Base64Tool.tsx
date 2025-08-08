import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => setOutput(btoa(unescape(encodeURIComponent(input))));
  const decode = () => {
    try { setOutput(decodeURIComponent(escape(atob(input)))); }
    catch { toast({ title: "Invalid input", description: "Enter valid base64.", variant: "destructive" }); }
  };

  const copy = async () => { await navigator.clipboard.writeText(output); toast({ title: "Copied!" }); };
  const reset = () => { setInput(""); setOutput(""); };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Base64 Encoder/Decoder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full min-h-28 rounded-md border bg-background p-2" placeholder="Enter text or base64 here" />
        <div className="flex gap-2">
          <Button onClick={encode}>Encode</Button>
          <Button variant="secondary" onClick={decode}>Decode</Button>
          <Button variant="outline" onClick={copy}>Copy</Button>
          <Button variant="ghost" onClick={reset}>Reset</Button>
        </div>
        <textarea readOnly value={output} className="w-full min-h-28 rounded-md border bg-background p-2" placeholder="Output" />
      </CardContent>
    </Card>
  );
}
