import { useEffect } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

export type CommandTarget = { id: string; label: string };

export function CommandPalette({ open, onOpenChange, sections, onGo }: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  sections: CommandTarget[];
  onGo: (id: string) => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Jump to section or run action..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Sections">
          {sections.map((s) => (
            <CommandItem key={s.id} value={s.label} onSelect={() => onGo(s.id)}>
              {s.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem value="toggle-theme" onSelect={() => document.dispatchEvent(new CustomEvent("vk-toggle-theme"))}>
            Toggle Theme
          </CommandItem>
          <CommandItem value="copy-link" onSelect={() => navigator.clipboard.writeText(window.location.href)}>
            Copy Page Link
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
