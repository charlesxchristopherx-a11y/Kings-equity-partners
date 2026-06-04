import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="King's Equity Partners" className="h-10 w-auto" />
          <span className="text-xl font-semibold tracking-tight">King's Equity Partners</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          <Link to="/contact"><Button size="sm">Free Assessment</Button></Link>
        </div>
        <button
          className="flex md:hidden flex-col justify-center gap-[5px] w-8 h-8 p-1 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <>
              <span className="block h-[2px] w-full bg-foreground" />
              <span className="block h-[2px] w-full bg-foreground" />
              <span className="block h-[2px] w-full bg-foreground" />
            </>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t md:hidden bg-background">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>How It Works</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}><Button size="sm" className="w-full">Free Assessment</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
}
