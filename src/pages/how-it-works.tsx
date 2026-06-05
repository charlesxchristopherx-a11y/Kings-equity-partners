import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconSearch,
  IconFileText,
  IconPhone,
  IconCheck,
  IconArrowRight,
  IconClock,
  IconShieldCheck,
  IconMapPin,
  IconAlertCircle,
  IconMenu,
  IconX,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SiteFooter from "@/components/site-footer";

const steps = [
  {
    number: "01",
    title: "We Identify Your Property",
    desc: "Our automated pipeline monitors county Clerk of Court records daily. When a property sells at tax deed auction for more than the outstanding taxes, we flag it as a potential surplus case. We then identify who owned the property at the time of the sale.",
    detail: "We search across all counties across multiple states, focusing on high-volume markets where surplus amounts tend to be largest.",
  },
  {
    number: "02",
    title: "We Review the Title",
    desc: "Before we make contact, we obtain and review the county's posted title documents. This tells us the ownership history, any recorded mortgages, tax liens, judgments, or other encumbrances. We evaluate whether a surplus is likely recoverable.",
    detail: "This step is why we don't waste your time. We only reach out when our preliminary review suggests a viable claim.",
  },
  {
    number: "03",
    title: "We Make Outreach",
    desc: "We contact the former owner (or their heirs) by phone. We identify ourselves, explain that public records show they may be owed surplus funds, and offer a free review of the specific case. We never pressure and we always tell them they can file directly with the Clerk at no cost.",
    detail: "All phone numbers are scrubged against the Federal Do Not Call Registry prior to any contact.",
  },
  {
    number: "04",
    title: "You Authorize the Claim",
    desc: "If you agree to proceed, we schedule a time for a licensed mobile notary to visit your location. The notary brings the Assignment of Beneficial Interest and related documents. You review, sign with a valid photo ID, and the notary handles the rest.",
    detail: "The notary comes to you. There is no office visit required.",
  },
  {
    number: "05",
    title: "We Obtain a Professional Title Search",
    desc: "This is critical: before we file, we obtain a full 50-year residential title search from First American Title. This professional work product carries professional liability coverage and stands up to any competing claimant challenge.",
    detail: "Our preliminary county title documents are used for qualification only. We never file a claim on scraped data alone.",
  },
  {
    number: "06",
    title: "We File and Follow Up",
    desc: "We prepare and file the complete claim packet with the Clerk of Court, including the Assignment of Beneficial Interest and Split Disbursement Directive. We follow up with the Clerk throughout the processing period — typically 30 to 90 days.",
    detail: "In most counties, the Clerk will issue two separate checks: 75% directly to you, 25% directly to King's Equity Partners.",
  },
];

const disclaimers = [
  "We are not a law firm and do not provide legal advice.",
  "We do not guarantee a specific recovery amount.",
  "Recovery depends on Clerk processing, lien status, and competing claims.",
  "If no funds are recovered, you owe us nothing.",
];

export default function HowItWorksPage() {
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
            <Link to="/how-it-works" className="text-foreground font-medium">How It Works</Link>
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

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Badge variant="outline" className="mb-5">The Process</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl leading-tight">
            From Unknown Funds to{" "}
            <span className="text-primary">Check in Your Hands</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Six steps. No upfront cost to you. Your share comes directly from the Clerk of Court via split disbursement.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-[23px] top-[52px] h-full w-px bg-border" />
                )}
                <Card className="border-muted relative z-10 ml-0 md:ml-14">
                  <CardContent className="flex flex-col md:flex-row gap-5 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                      <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      <div className="flex items-start gap-2 rounded-md bg-muted/50 p-3">
                        <IconArrowRight className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                        <p className="text-xs text-muted-foreground leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">What You Should Know</h2>
            <p className="text-muted-foreground">Key facts about how we work and what we can and cannot do.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: IconClock,
                title: "120-Day Deadline",
                desc: "State law gives you 120 days from the Clerk's Notice of Surplus to file. If that window closes, the right to the funds is typically lost forever. Our entire pipeline is urgency-driven.",
              },
              {
                icon: IconShieldCheck,
                title: "Split Disbursement",
                desc: "In most jurisdictions, the Clerk can send your 75% directly to you and our 25% directly to us. You never have to trust us with your money. Ask us about this before you work with anyone.",
              },
              {
                icon: IconSearch,
                title: "Professional Title Search",
                desc: "We always obtain a full 50-year title search before filing. County title documents are useful for qualification — but they are not the final work product for an actual claim.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-muted">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-16 border-t">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-6">
            <IconAlertCircle className="mt-0.5 h-5 w-5 text-destructive shrink-0" />
            <div>
              <h3 className="mb-3 font-semibold">Important Limitations</h3>
              <ul className="space-y-2">
                {disclaimers.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-destructive mr-2">•</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Think You Might Be Owed Funds?</h2>
          <p className="text-muted-foreground mb-8">
            Complete our free assessment form. We'll review your property in the public records within one business day — no obligation.
          </p>
          <Link to="/contact">
            <Button size="lg">Start Your Free Assessment</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
