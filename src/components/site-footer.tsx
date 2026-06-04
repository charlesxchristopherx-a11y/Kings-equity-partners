import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";

const PHONE = "(727) 758-4543";
const EMAIL = "charles@kingsequitypartners.com";
const ADDRESS = "7901 4TH ST N STE 300, ST. PETERSBURG, FL 33702";

export default function SiteFooter() {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="King's Equity Partners" className="h-8 w-auto" />
              <span className="text-lg font-semibold">King's Equity Partners</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Florida tax deed surplus recovery. We help former property owners recover funds owed to them by law — at no upfront cost.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <IconPhone className="h-4 w-4 text-primary shrink-0" />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <IconMail className="h-4 w-4 text-primary shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <IconMapPin className="h-4 w-4 text-primary shrink-0" />
                {ADDRESS}
              </div>
            </div>
          </div>

          {/* Navigation col */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal col */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} King&apos;s Equity Partners, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
