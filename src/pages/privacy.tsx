import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";
import SiteFooter from "@/components/site-footer";

export default function PrivacyPage() {
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
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mb-8 text-sm text-muted-foreground">Last Updated: June 2026</p>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 leading-relaxed">

            <h2 className="text-lg font-semibold text-foreground mt-8">1. Information We Collect</h2>
            <p>We collect information you voluntarily provide through our contact and assessment forms, including your name, property address, phone number, email address, and case details. We may also collect your SMS consent preference when you opt in to receive text messages. We do not collect sensitive financial or government identification information through this website.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
            <p>Your information is used for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Case communications regarding your surplus claim</li>
              <li>Claim status updates and document notifications</li>
              <li>Appointment reminders</li>
              <li>Responding to your inquiries</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing or promotional purposes.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">3. SMS Text Messaging</h2>
            <p>If you opt in to receive SMS text messages from us, the following applies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP to unsubscribe at any time.</li>
              <li>Reply HELP for help.</li>
            </ul>
            <p className="font-semibold">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">4. Lead Submission</h2>
            <p>When you submit a lead through our form, your information is transmitted securely and processed to initiate a potential claims relationship. Submission of a form does not create an attorney-client relationship. King's Equity Partners, LLC is not a law firm and does not provide legal advice.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">5. Phone Contact</h2>
            <p>Phone numbers provided through our form may be contacted by our firm to discuss your potential claim. All phone numbers are scrubbed against the Federal Do Not Call Registry prior to any outreach. Any request to cease contact is honored immediately and permanently. Consent to receive SMS messages is not a condition of using our services.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">6. Data Retention</h2>
            <p>We retain your information only as long as necessary to service your claim or respond to your inquiry. You may request deletion of your information at any time by contacting us.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">7. Cookies</h2>
            <p>This website may use essential session cookies for basic functionality. We do not use advertising or tracking cookies.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">8. Third-Party Services</h2>
            <p>We may use third-party services for form processing, email delivery, and CRM management. These services are required to process your request and are subject to their own privacy policies.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">9. Security</h2>
            <p>We take reasonable steps to protect the information you provide. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">10. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of any personal information we hold about you. Contact us at charles@kingsequitypartners.com to exercise these rights.</p>

            <h2 className="text-lg font-semibold text-foreground mt-8">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

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
