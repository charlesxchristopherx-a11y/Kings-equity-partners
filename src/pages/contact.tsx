import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconChevronRight, IconAlertCircle, IconCheck, IconPhone, IconMail, IconMapPin, IconX } from "@tabler/icons-react";
import SiteFooter from "@/components/site-footer";

const PHONE = "(727) 758-4543";
const EMAIL = "charles@kingsequitypartners.com";
const ADDRESS = "7901 4TH ST N STE 300, ST. PETERSBURG, FL 33702";

function LogoMark({ size = 36 }: { size?: number }) {
  return <img src="/logo.png" alt="KING'S EQUITY PARTNERS L.L.C." style={{ height: size, width: 'auto' }} />;
}

export default function ContactPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    propertyAddress: "",
    formerOwnerName: "",
    phone: "",
    email: "",
    additionalInfo: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.propertyAddress || !form.formerOwnerName || !form.phone || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <LogoMark size={36} />
            <span className="text-xl font-semibold tracking-tight">KING'S EQUITY PARTNERS L.L.C.</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link to="/contact"><Button size="sm">Free Assessment</Button></Link>
          </div>
          <button className="flex md:hidden flex-col justify-center gap-[5px] w-8 h-8 p-1 cursor-pointer" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle menu">
            {mobileOpen ? <IconX className="h-5 w-5" /> : <><span className="block h-[2px] w-full bg-foreground" /><span className="block h-[2px] w-full bg-foreground" /><span className="block h-[2px] w-full bg-foreground" /></>}
          </button>
        </div>
      </nav>
      <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Free Surplus Assessment</h1>
          <p className="text-muted-foreground">Complete the form below and we'll review the public records for your property within one business day.</p>
        </div>
      </section>
      <section className="border-b bg-muted/20 py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"><IconPhone className="h-4 w-4 text-primary" /> {PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"><IconMail className="h-4 w-4 text-primary" /> {EMAIL}</a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><IconMapPin className="h-4 w-4 text-primary" /> {ADDRESS}</div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          {submitted ? (
            <Card className="border-primary/20"><CardContent className="p-10 text-center"><div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mx-auto"><IconCheck className="h-8 w-8 text-green-600" /></div><h2 className="mb-3 text-2xl font-bold">Request Received</h2><p className="text-muted-foreground mb-6 leading-relaxed">We've received your information and will begin reviewing the public records immediately. Expect to hear from us within 1 business day.</p><p className="text-sm text-muted-foreground">Prefer to call? Reach us at <strong>{PHONE}</strong>.</p></CardContent></Card>
          ) : (
            <Card className="border-muted"><CardContent className="p-8"><form onSubmit={handleSubmit} className="flex flex-col gap-5"><div className="grid gap-5 md:grid-cols-2"><div className="md:col-span-2"><label className="mb-1.5 block text-sm font-medium">Property Address <span className="text-destructive">*</span></label><input type="text" placeholder="123 Main St, Miami, FL 33101" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={form.propertyAddress} onChange={(e) => setForm({ ...form, propertyAddress: e.target.value })} /></div><div><label className="mb-1.5 block text-sm font-medium">Former Owner Name <span className="text-destructive">*</span></label><input type="text" placeholder="John Doe" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={form.formerOwnerName} onChange={(e) => setForm({ ...form, formerOwnerName: e.target.value })} /></div><div><label className="mb-1.5 block text-sm font-medium">Phone <span className="text-destructive">*</span></label><input type="tel" placeholder="(404) 555-0100" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div><div><label className="mb-1.5 block text-sm font-medium">Email <span className="text-destructive">*</span></label><input type="email" placeholder="john@example.com" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div><div className="md:col-span-2"><label className="mb-1.5 block text-sm font-medium">Additional Information <span className="text-muted-foreground font-normal">(optional)</span></label><textarea rows={4} placeholder="Share any relevant details..." className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" value={form.additionalInfo} onChange={(e) => setForm({ ...form, additionalInfo: e.target.value })} /></div><div className="md:col-span-2"><label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-input accent-primary" checked={form.smsConsent} onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })} /><span className="text-xs text-muted-foreground leading-relaxed">By checking this box, I consent to receive SMS text messages from King&apos;s Equity Partners regarding my surplus claim. Message frequency may vary. Message and data rates may apply. Consent is not a condition of purchase. Reply STOP to opt out, HELP for help. See our <Link to="/privacy" className="underline hover:text-foreground">Privacy Policy</Link> and <Link to="/terms" className="underline hover:text-foreground">Terms &amp; Conditions</Link>.</span></label></div></div>{error && <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive"><IconAlertCircle className="h-4 w-4 shrink-0" />{error}</div>}<Button type="submit" size="lg" className="w-full mt-2">Submit — Start My Free Assessment<IconChevronRight className="ml-1.5 h-4 w-4" /></Button></form></CardContent></Card>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
