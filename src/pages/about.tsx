import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconCheck,
  IconShieldCheck,
  IconClock,
  IconUsers,
  IconMenu,
  IconX,
  IconPhone,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SiteFooter from "@/components/site-footer";

const PHONE = "954.518.3374";
const EMAIL = "charles@kingsequitypartners.com";
const ADDRESS = "7901 4TH ST N STE 300, ST. PETERSBURG, FL 33702";

const values = [
  {
    icon: IconShieldCheck,
    title: "Transparency",
    desc: "We tell clients exactly what we do and what we don't. We explain the risks, the liens, and the realistic recovery amounts before we file anything.",
  },
  {
    icon: IconClock,
    title: "Urgency",
    desc: "The 120-day deadline is real. Our entire pipeline is built around it. We don't waste time on leads we can't serve in time.",
  },
  {
    icon: IconUsers,
    title: "Client Alignment",
    desc: "We only get paid when you get paid. Our incentive is maximizing your recovery — not filing as many claims as possible.",
  },
];

export default function AboutPage() {
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
            <Link to="/about" className="text-foreground font-medium">About</Link>
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

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Badge variant="outline" className="mb-5">About Us</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl leading-tight">
            We Were Built for One Purpose:{" "}
            <span className="text-primary">Recovering What Law Says Is Yours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            KING'S EQUITY PARTNERS L.L.C. was founded on the observation that surplus funds from Florida tax deed sales go unclaimed at an extraordinary rate — simply because the people owed the money never learn about it in time.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3 items-start">
            {values.map((v) => (
              <Card key={v.title} className="border-muted">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Our Mission</h2>
          <p className="text-lg leading-relaxed text-muted-foreground italic">
            "To ensure that Florida former property owners never lose their legal right to surplus funds simply because they never received notice — and to recover those funds efficiently, transparently, and at no upfront cost to the claimant."
          </p>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">Legal and Compliance</h2>
          <div className="space-y-4">
            {[
              {
                title: "We Are Not a Law Firm",
                desc: "KING'S EQUITY PARTNERS L.L.C., LLC is not a law firm and does not provide legal advice. All clients are advised in writing that they may file claims directly with the Clerk of Court at no cost. For matters requiring legal representation, we retain licensed Florida attorneys at company expense.",
              },
              {
                title: "Compliant with Florida Statute § 197.582",
                desc: "All surplus recovery services are conducted in strict accordance with Florida law governing the disbursement of tax deed sale proceeds.",
              },
              {
                title: "Split Disbursement by Default",
                desc: "In counties where the Clerk offers split disbursement, we request it in every case. This ensures the client's share is sent directly from the Clerk — not remitted through our firm.",
              },
              {
                title: "Federal DNC Compliance",
                desc: "All outreach phone numbers are scrubbed against the National Do Not Call Registry prior to contact. Any client request to cease contact is honored immediately and permanently.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border p-5 flex gap-4">
                <div className="mt-1"><IconCheck className="h-5 w-5 text-primary shrink-0" /></div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Ready to See If You're Owed Funds?</h2>
          <p className="text-muted-foreground mb-8">
            Complete our free assessment form and we'll review the public records for your property within one business day.
          </p>
          <Link to="/contact">
            <Button size="lg">Get Your Free Assessment</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter /></div>
  );
}
