import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconMenu, IconX, IconArrowLeft } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { getBlogPost, getBlogPosts } from "@/data/blog-posts";
import SiteFooter from "@/components/site-footer";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const post = slug ? getBlogPost(slug) : undefined;
  const allPosts = getBlogPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="King's Equity Partners" className="h-9 w-auto" />
            <span className="text-xl font-semibold tracking-tight">King's Equity Partners</span>
          </div>
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
              <IconX className="h-5 w-5" />
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
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>How It Works</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}><Button size="sm" className="w-full">Free Assessment</Button></Link>
            </div>
          </div>
        )}
      </nav>

      {!post ? (
        <div className="py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog"><Button>Back to Blog</Button></Link>
        </div>
      ) : (
        <>
          {/* Post Header */}
          <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16">
            <div className="mx-auto max-w-3xl px-6">
              <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <IconArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
              <Badge variant="outline" className="mb-4">{post.category}</Badge>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl leading-tight">{post.title}</h1>
              <p className="text-muted-foreground mb-4">{post.date} · {post.readTime} read · {post.author}</p>
              <p className="text-lg text-foreground font-medium leading-relaxed">{post.excerpt}</p>
            </div>
          </section>

          {/* Post Content */}
          <section className="py-16">
            <div className="mx-auto max-w-3xl px-6">
              <div className="prose prose-gray max-w-none">
                {post.content.split("\n\n").map((para, i) => {
                  if (para.startsWith("## ")) return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{para.replace("## ", "")}</h2>;
                  if (para.startsWith("# ")) return <h1 key={i} className="text-2xl font-bold mt-8 mb-3">{para.replace("# ", "")}</h1>;
                  if (para.startsWith("**") && para.endsWith("**")) return <p key={i} className="font-semibold mb-4">{para.replace(/\*\*/g, "")}</p>;
                  if (para.startsWith("- ")) {
                    const items = para.split("\n").filter(Boolean);
                    return (
                      <ul key={i} className="list-disc pl-6 mb-4 space-y-1">
                        {items.map((item, j) => <li key={j} className="text-sm text-muted-foreground">{item.replace("- ", "")}</li>)}
                      </ul>
                    );
                  }
                  if (para.startsWith("*") && para.endsWith("*")) return <p key={i} className="italic text-muted-foreground mb-4">{para.replace(/\*/g, "")}</p>;
                  return <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">{para}</p>;
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10 text-center">
                <p className="mb-4 text-sm text-muted-foreground">Think you may be owed surplus funds from a former property?</p>
                <Link to="/contact"><Button>Get a Free Assessment</Button></Link>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          <section className="border-t py-16 bg-muted/20">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="text-2xl font-bold mb-8">More from Our Blog</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((p) => (
                  <Card key={p.slug} className="border-muted">
                    <CardContent className="p-5">
                      <div className="text-xs text-muted-foreground mb-2">{p.date}</div>
                      <h3 className="font-semibold mb-2 text-sm leading-snug">{p.title}</h3>
                      <Link to={`/blog/${p.slug}`} className="text-xs text-primary hover:underline">Read more →</Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
