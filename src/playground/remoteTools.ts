export interface RemoteTool {
  id: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
}

export const remoteTools: RemoteTool[] = [
  {
    id: "base64",
    title: "Base64 Encoder/Decoder",
    description: "Encode and decode Base64 strings with ease",
    category: "encoding",
    keywords: ["base64", "encode", "decode", "encoding", "string"]
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format, validate and beautify JSON data",
    category: "formatting",
    keywords: ["json", "format", "beautify", "validate", "minify", "pretty"]
  },
  {
    id: "url-encoder",
    title: "URL Encoder/Decoder",
    description: "Encode and decode URL strings and parameters",
    category: "encoding",
    keywords: ["url", "encode", "decode", "uri", "percent", "encoding"]
  },
  {
    id: "decimal-binary",
    title: "Decimal ↔ Binary Converter",
    description: "Convert decimal numbers to binary with interactive bit manipulation",
    category: "conversion",
    keywords: ["decimal", "binary", "convert", "bits", "toggle", "number", "base"]
  }/* ,
  {
    id: "text-to-json",
    title: "Text to JSON Converter",
    description: "Convert plain text to JSON format with prettification",
    category: "conversion",
    keywords: ["text", "json", "convert", "plain", "string", "format"]
  },
  {
    id: "html-viewer",
    title: "HTML Viewer & Editor",
    description: "Edit HTML code with live preview and real-time updates",
    category: "formatting",
    keywords: ["html", "preview", "editor", "live", "viewer", "render"]
  } */
]; 