import { Link, Outlet, useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail, TerminalSquare } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { CommandPalette, CommandTarget } from "./CommandPalette";
import { useTheme } from "next-themes";

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "achievements",
  "playground",
  "contact",
] as const;

export default function Layout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const targets: CommandTarget[] = useMemo(
    () => SECTION_IDS.map((id) => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) })),
    []
  );

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key.toLowerCase() === "t" && e.altKey ) {
        e.preventDefault();
        setTheme(theme === "light" ? "dark" : "light");
      }
      if (e.altKey) {
        const num = Number(e.key);
        if (!isNaN(num) && num >= 1 && num <= SECTION_IDS.length) {
          e.preventDefault();
          goTo(SECTION_IDS[num - 1]);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    const onToggle = () => setTheme(theme === "light" ? "dark" : "light");
    document.addEventListener("vk-toggle-theme", onToggle as EventListener);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("vk-toggle-theme", onToggle as EventListener);
    };
  }, [setTheme, theme]);

  const NavLink = ({ id }: { id: string }) => (
    <a
      href={`#${id}`}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      onClick={(e) => {
        e.preventDefault();
        goTo(id);
      }}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </a>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container mx-auto h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <TerminalSquare className="h-5 w-5" /> VK
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              {SECTION_IDS.map((id) => (
                <NavLink key={id} id={id} />
              ))}
              <Link to="/tutorials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tutorials
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setOpen(true)} title="Command Palette (Ctrl/Cmd+K)">
              ⌘K
            </Button>
            <ThemeToggle />
            <a href="https://github.com/vnkdj5" target="_blank" rel="noreferrer" aria-label="GitHub" className="opacity-80 hover:opacity-100">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/vaibhav-k" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:01vaibhavkumbhar@gmail.com" aria-label="Email" className="opacity-80 hover:opacity-100">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vaibhav Kumbhar. Built with React & Tailwind.
        </div>
      </footer>

      <CommandPalette open={open} onOpenChange={setOpen} sections={targets} onGo={goTo} />
    </div>
  );
}
