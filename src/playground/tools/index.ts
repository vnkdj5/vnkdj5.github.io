import Base64Tool from "./Base64Tool";
import TextUtilitiesTool from "./TextUtilitiesTool";

export const tools = [
  { id: "base64", label: "Base64", Component: Base64Tool },
  { id: "text-utils", label: "Text Utilities", Component: TextUtilitiesTool },
] as const;
