import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavBarProps {
  logo?: React.ReactNode;
  logoText?: string;
}

export default function NavBar({ logo, logoText = "King's Equity Partners" }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          {logo ? logo : <img src="/logo.png" alt="King's Equity Partners" className="h-9 w-auto" />}
          {!logo && <span className="text-xl font-semibold tracking-tight">{logoText}</span>}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          <Link to="/contact"><Button size="sm">Free Assessment</Button></Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="flex md:hidden flex-col justify-center gap-[5px] w-8 h-8 p-1 cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-full bg-foreground transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-full bg-foreground transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-full bg-foreground transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Collapsible mobile menu */}
      {open && (
        <div className="border-t md:hidden bg-background">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setOpen(false)}>About</Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setOpen(false)}>How It Works</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)}><Button size="sm" className="w-full">Free Assessment</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
}
