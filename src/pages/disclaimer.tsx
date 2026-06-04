import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";
import SiteFooter from "@/components/site-footer";

export default function DisclaimerPage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
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
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>How It Works</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors py-1" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}><Button size="sm" className="w-full">Free Assessment</Button></Link>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 text-3xl font-bold tracking-tight">Disclaimer</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 leading-relaxed">
            <p><strong>Not a Law Firm.</strong> King's Equity Partners, LLC is not a law firm and does not provide legal advice. Nothing on this website constitutes legal advice or the formation of an attorney-client relationship.</p>
            <p><strong>Claims Management Only.</strong> King's Equity Partners, LLC provides surplus claims management assistance. We are not attorneys and do not practice law. For legal advice, please consult a licensed Florida attorney.</p>
            <p><strong>No Guarantee of Recovery.</strong> Surplus fund recovery is subject to statutory deadlines, Clerk processing procedures, lien status, and competing claims. Past results do not guarantee future recovery. We do not guarantee any specific outcome or dollar amount.</p>
            <p><strong>Right to File Directly.</strong> All clients are advised in writing that they may file surplus claims directly with the Clerk of Court at no cost. Use of our services is entirely voluntary.</p>
            <p><strong>Fees.</strong> Our fee is a 25% contingency on recovered surplus funds. If no funds are recovered, no fee is owed. In counties offering split disbursement, the Clerk issues two separate checks: 75% to the client and 25% to King's Equity Partners, LLC directly.</p>
            <p><strong>Florida Statute § 197.582.</strong> All services are provided in accordance with Florida Statute § 197.582 governing the disbursement of tax deed sale proceeds.</p>
            <p><strong>Accuracy of Information.</strong> While we make reasonable efforts to ensure the accuracy of information on this website, we make no warranties that the content is current, complete, or free of errors. Surplus amounts are approximate and subject to the Clerk's final determination.</p>
            <p><strong>Unauthorized Practice of Law.</strong> King's Equity Partners, LLC does not engage in the practice of law. For any matter requiring legal representation, including contested claims or competing claimant disputes, we retain licensed Florida attorneys at company expense.</p>
          </div>
          <div className="mt-10 pt-8 border-t">
            <p className="text-sm text-muted-foreground">Last updated: April 2026. King's Equity Partners, LLC — Miami, Florida.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter /></div>
  );
}
