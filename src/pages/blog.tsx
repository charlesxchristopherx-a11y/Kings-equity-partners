import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog-posts";
import { IconArrowRight } from "@tabler/icons-react";
import SiteFooter from "@/components/site-footer";

function LogoMark({ size = 36 }: { size?: number }) {
  return <img src="/logo.png" alt="King's Equity Partners" style={{ height: size, width: 'auto' }} />;
}

export default function BlogPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <LogoMark size={36} />
            <span className="text-xl font-semibold tracking-tight">King's Equity Partners</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link to="/blog" className="text-foreground font-medium">Blog</Link>
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

      {/* Header - slim */}
      <section className="border-b bg-gradient-to-r from-primary to-secondary py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-4 mb-3">
            <img src="/logo.png" alt="Kings Equity Partners" className="h-10 w-auto opacity-90" />
            <div className="h-px flex-1 bg-accent/30" />
          </div>
          <h1 className="text-2xl font-bold text-primary-foreground tracking-tight">Surplus Recovery Insights</h1>
          <p className="text-sm text-primary-foreground/60 mt-2">Plain-language guidance on Florida tax deed surplus recovery and your legal rights.</p>
        </div>
      </section>

      {/* Posts - single column, full width */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-6">
            {blogPosts.map((post, i) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                <Card className="border-border overflow-hidden hover:border-accent/40 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row">
                    {/* Logo Banner */}
                    <div className="sm:w-56 w-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-8 sm:p-0 shrink-0">
                      <img src="/logo.png" alt="Kings Equity Partners" className="w-36 h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Content */}
                    <CardContent className="flex-1 p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs border-accent/30 text-accent bg-accent/5">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.date} &middot; {post.readTime} min read</span>
                      </div>
                      <h2 className="text-lg font-semibold mb-2 leading-snug group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 flex-wrap">
                          {post.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-muted/50 text-muted-foreground px-2 py-0.5 rounded">{tag}</span>
                          ))}
                        </div>
                        <span className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                          Read More <IconArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter /></div>
  );
}