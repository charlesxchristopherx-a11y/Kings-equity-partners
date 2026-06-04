import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";
import SiteFooter from "@/components/site-footer";

export default function TermsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="KING'S EQUITY PARTNERS L.L.C." className="h-9 w-auto" />
            <span className="text-xl font-semibold tracking-tight">KING'S EQUITY PARTNERS L.L.C.</span>
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
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mb-8 text-sm text-muted-foreground">Effective Date: June 2026</p>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 leading-relaxed">

            <h2 className="text-lg font-semibold text-foreground mt-8">1. Company Information</h2>
            <div className="text-sm space-y-1">
              <p><strong>King's Equity Partners, LLC</strong></p>
              <p>7901 4TH ST N STE 300, ST. PETERSBURG, FL 33702</p>
              <p>Phone: (727) 758-4543</p>
              <p>Email: charles@kingsequitypartners.com</p>
            </div>

            <h2 className="text-lg font-semibold text-foreground mt-8">2. Services</h2>
            <p>King's Equity Partners, LLC provides surplus funds claims management assistance for Florida tax deed sales. We are not a law firm and do not provide legal advice. All clients are advised that they may file surplus claims directly with the Clerk of Court at no cost.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">3. SMS Text Messaging Program</h2>
            <p>By providing your phone number and opting in to receive text messages from King's Equity Partners, you agree to the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Types of messages:</strong> We may send SMS messages related to case updates, claim status notifications, document notifications, and appointment reminders.</li>
              <li><strong>Message frequency may vary.</strong> The number of messages you receive depends on your case activity.</li>
              <li><strong>Message and data rates may apply.</strong> Check with your mobile carrier for details on your plan.</li>
              <li><strong>Opt-out:</strong> Reply STOP to opt out of SMS messages at any time. After texting STOP, you will receive one final confirmation message and no further messages will be sent.</li>
              <li><strong>Help:</strong> Reply HELP for help or contact us at charles@kingsequitypartners.com or (727) 758-4543.</li>
              <li><strong>Consent is not a condition of purchase.</strong> You do not need to consent to SMS messages to use our services.</li>
            </ul>

            <h2 className="text-lg font-semibold text-foreground mt-8">4. No Legal Advice</h2>
            <p>Nothing on this website constitutes legal advice or the formation of an attorney-client relationship. King's Equity Partners, LLC provides claims management assistance only. For legal advice, please consult a licensed Florida attorney.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">5. Fees</h2>
            <p>Our fee is a 25% contingency on recovered surplus funds. If no funds are recovered, no fee is owed. In counties offering split disbursement, the Clerk issues two separate checks: 75% to the client and 25% to King's Equity Partners, LLC directly. All fees are disclosed in writing before any agreement is signed.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">6. No Guarantee of Recovery</h2>
            <p>Surplus fund recovery is subject to statutory deadlines, Clerk processing procedures, lien status, and competing claims. Past results do not guarantee future recovery. We do not guarantee any specific outcome or dollar amount.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">7. Right to File Directly</h2>
            <p>All clients are advised in writing that they may file surplus claims directly with the Clerk of Court at no cost. Use of our services is entirely voluntary.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">8. Florida Statute § 197.582</h2>
            <p>All services are provided in accordance with Florida Statute § 197.582 governing the disbursement of tax deed sale proceeds. The 120-day statutory deadline to file a claim runs from the date of the Clerk's Notice of Surplus.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">9. Accuracy of Information</h2>
            <p>While we make reasonable efforts to ensure the accuracy of information on this website, we make no warranties that the content is current, complete, or free of errors. Surplus amounts are approximate and subject to the Clerk's final determination.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">10. Unauthorized Practice of Law</h2>
            <p>King's Equity Partners, LLC does not engage in the practice of law. For any matter requiring legal representation, including contested claims or competing claimant disputes, we retain licensed Florida attorneys at company expense.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">11. Changes to These Terms</h2>
            <p>We may update these Terms &amp; Conditions from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the revised terms.</p>

          </div>
          <div className="mt-10 pt-8 border-t">
            <h3 className="text-sm font-semibold text-foreground mb-3">King's Equity Partners, LLC</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>7901 4TH ST N STE 300, ST. PETERSBURG, FL 33702</p>
              <p>Phone: (727) 758-4543</p>
              <p>Email: charles@kingsequitypartners.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
