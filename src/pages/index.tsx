import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconCheck,
  IconShieldCheck,
  IconClock,
  IconPhone,
  IconMapPin,
  IconChevronRight,
  IconAlertCircle,
  IconMenu,
  IconX,
} from "@tabler/icons-react";
import NavBar from "@/components/nav-bar";
import SiteFooter from "@/components/site-footer";

const faqs = [
  {
    q: "How much does this cost?",
    a: "A reasonable contingency fee — payable only after we recover money for you. If we don't recover your funds, you owe us nothing.",
  },
  {
    q: "How long does the process take?",
    a: "Once we file your claim, the Clerk typically processes it within 30–90 days. We'll keep you updated throughout.",
  },
  {
    q: "Is this legal?",
    a: "Yes. State law in most jurisdictions expressly permits third-party claims via Assignment of Beneficial Interest. We are not a law firm and do not provide legal advice.",
  },
  {
    q: "What if there are liens on the property?",
    a: "We obtain a professional title search before filing. If junior liens complicate your claim, we'll explain the situation honestly before we proceed.",
  },
  {
    q: "Do I have to file myself?",
    a: "No. You can file directly with the Clerk at no cost. We'll always tell you this — and we'll still handle everything if you'd prefer.",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    propertyAddress: "",
    formerOwnerName: "",
    phone: "",
    email: "",
    smsConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.propertyAddress || !form.formerOwnerName || !form.phone || !form.email) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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

      {/* Hero + Lead Form */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div>
              <Badge variant="outline" className="mb-5 border-primary/40 text-primary">
                <IconMapPin className="mr-1 size-3" />
                National Surplus Recovery
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-tight">
                Your Surplus Funds Are Being Held.{" "}
                <span className="text-primary">You May Not Know.</span>
              </h1>
              <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                When a property sells at a tax deed auction for more than the taxes owed — or when a lender forecloses on a property and the sale generates surplus funds — the excess, sometimes tens of thousands of dollars, is held by the Clerk of Court. The former owner has a legal right to claim it.
              </p>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                You have <strong className="text-foreground">120 days</strong> from the Clerk's notice to file. Most people never receive that notice. We find those funds and help you recover them — at no upfront cost.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "No upfront fees. Our fee is payable only after we recover money for you.",
                  "Your funds are sent directly to you once we initiate recovery.",
                  "Compliant with all applicable",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <IconCheck className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Lead Form */}
            <div>
              <Card className="border-primary/20 shadow-xl shadow-primary/5">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent border-b">
                  <CardTitle className="text-2xl">Free Surplus Assessment</CardTitle>
                  <CardDescription>
                    Complete this form and we'll review your potential claim within one business day.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                        <IconCheck className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">Request Received</h3>
                      <p className="text-muted-foreground">
                        We've received your information and will review the public records for your property. Expect to hear from us within 1 business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium">Property Address</label>
                        <input
                          type="text"
                          placeholder="123 Main St, Miami, FL 33101"
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          value={form.propertyAddress}
                          onChange={(e) => setForm({ ...form, propertyAddress: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium">Former Owner Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          value={form.formerOwnerName}
                          onChange={(e) => setForm({ ...form, formerOwnerName: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="mb-1.5 block text-sm font-medium">Phone</label>
                          <input
                            type="tel"
                            placeholder="(305) 555-0100"
                            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-medium">Email</label>
                          <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                      </div>
                      {error && (
                        <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
                          <IconAlertCircle className="h-4 w-4 shrink-0" />
                          {error}
                        </div>
                      )}
                      <div className="mt-1">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
                            checked={form.smsConsent}
                            onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                          />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            By checking this box, I consent to receive SMS text messages from King&apos;s Equity Partners regarding my surplus claim. Message frequency may vary. Message and data rates may apply. Consent is not a condition of purchase. Reply STOP to opt out, HELP for help. See our <Link to="/privacy" className="underline hover:text-foreground">Privacy Policy</Link> and <Link to="/terms" className="underline hover:text-foreground">Terms &amp; Conditions</Link>.
                          </span>
                        </label>
                      </div>
                      <Button type="submit" size="lg" className="w-full mt-1">
                        Check My Property
                        <IconChevronRight className="ml-1.5 h-4 w-4" />
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        Your information is used only to assess your potential claim. We never share your data.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">How Surplus Recovery Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most former property owners never know they're owed money. Here's why that happens and what you can do about it.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "We Find the Funds",
                desc: "We monitor county Clerk of Court records daily to identify properties that generated surplus at tax deed and foreclosure auctions.",
                icon: IconMapPin,
              },
              {
                step: "02",
                title: "We Qualify the Claim",
                desc: "A professional title review identifies the rightful owner and any junior lienholders before we make contact.",
                icon: IconShieldCheck,
              },
              {
                step: "03",
                title: "We File and Disburse",
                desc: "We handle all paperwork, notarization, and Clerk follow-up. Your share arrives via split disbursement directly from the county.",
                icon: IconClock,
              },
            ].map((item) => (
              <Card key={item.step} className="border-muted">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-1">Step {item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Full Process Breakdown
                <IconChevronRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">What Former Property Owners Say</h2>
            <p className="text-lg text-muted-foreground">Real stories from people who recovered funds they didn't know were owed to them.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "I thought the whole thing was too good to be true at first. But they knew exactly which property, which county, and how much was being held. The check from the Clerk came directly to me — King's Equity Partners never touched my money.",
                name: "Robert M.",
                role: "Former Property Owner, Hillsborough County",
                initials: "RM",
              },
              {
                quote: "My mother passed away three years ago. I didn't know she was owed surplus funds until this firm contacted me. They handled everything with the Clerk, and I received a check for $31,400. I had no idea.",
                name: "Denise T.",
                role: "Heir, Palm Beach County",
                initials: "DT",
              },
              {
                quote: "The process was completely hands-off. They set up the notary, handled all the paperwork, and followed up with the Clerk for months. I just signed where they told me to sign and waited. 60 days later, I had a check.",
                name: "James L.",
                role: "Former Property Owner, Duval County",
                initials: "JL",
              },
            ].map((t) => (
              <Card key={t.name} className="border-muted">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">{t.initials}</div>
                  <p className="mb-4 text-sm leading-relaxed italic text-muted-foreground">"{t.quote}"</p>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border p-5">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center rounded-lg border border-dashed p-8">
            <p className="mb-4 text-muted-foreground">Have a question we haven't answered?</p>
            <Link to="/contact">
              <Button variant="outline">Ask Us Directly</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer Strip */}
      <section className="border-t bg-muted/20 py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Disclaimer:</strong> King's Equity Partners, LLC is not a law firm and does not provide legal advice. Surplus recovery services are provided as claims management assistance only. All clients are advised in writing that they may file claims directly with the Clerk of Court at no cost. Past results do not guarantee future recovery. Fund availability is subject to statutory deadlines and the Clerk's processing procedures.
          </p>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
