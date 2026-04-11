import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { Link } from "wouter";

export default function CookiePolicy() {
  useBreadcrumbSchema([{ name: "Cookie Policy", path: "/cookie-policy" }]);
  useSEO({
    title: "Cookie Policy | The Oxford Wellness Doctor",
    description: "Cookie Policy for The Oxford Wellness Doctor - information about the cookies we use and how to manage your preferences.",
    canonical: "https://www.theoxfordwellnessdoctor.com/cookie-policy",
  });

  return (
    <div className="pt-24 min-h-screen bg-muted/20">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, to improve user experience, and to provide information to website owners about how the site is being used.</p>
            <p className="mt-3">Cookies can be "session" cookies (which are deleted when you close your browser) or "persistent" cookies (which remain on your device for a set period or until you delete them).</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">2. Cookies We Use</h2>
            <p>Our website uses the following categories of cookies:</p>

            <div className="mt-4 space-y-4">
              <div className="bg-white border border-border p-5">
                <h3 className="font-semibold text-primary mb-2">Strictly Necessary Cookies</h3>
                <p className="text-sm">These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take, such as filling in forms or setting your privacy preferences. These cookies do not require your consent.</p>
                <p className="text-sm mt-2"><strong>Examples:</strong> Session management, security tokens, form submission handling.</p>
              </div>

              <div className="bg-white border border-border p-5">
                <h3 className="font-semibold text-primary mb-2">Analytics Cookies <span className="text-xs font-normal text-muted-foreground ml-1">(Requires Consent)</span></h3>
                <p className="text-sm">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve the site experience.</p>
                <p className="text-sm mt-2"><strong>Provider:</strong> Google Analytics / similar analytics service.</p>
                <p className="text-sm mt-2"><strong>Data collected:</strong> Pages visited, time on site, geographic region (country/city level), device type, referral source. No personally identifiable information is collected.</p>
              </div>

              <div className="bg-white border border-border p-5">
                <h3 className="font-semibold text-primary mb-2">Third-Party Cookies <span className="text-xs font-normal text-muted-foreground ml-1">(Requires Consent)</span></h3>
                <p className="text-sm">Our website embeds content from third-party services that may set their own cookies:</p>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  <li><strong>Glowday</strong> - embedded booking widget on the Contact page. Subject to Glowday's own cookie and privacy policies.</li>
                  <li><strong>Google Maps</strong> - embedded map on the Contact page. Subject to Google's privacy policy.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">3. Managing Cookies</h2>
            <p>You can control and manage cookies in the following ways:</p>

            <h3 className="font-semibold text-primary mt-4 mb-2">Browser Settings</h3>
            <p>Most web browsers allow you to manage cookies through your browser settings. You can typically:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li>View cookies stored on your device</li>
              <li>Delete individual cookies or all cookies</li>
              <li>Block all cookies or cookies from specific websites</li>
              <li>Set preferences for how cookies should be handled</li>
            </ul>
            <p className="mt-3 text-sm">Please note that restricting certain cookies may affect the functionality of our website. Links to cookie management instructions for major browsers:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">4. Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in the cookies we use or to comply with new regulations. Any updates will be published on this page with a revised date.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">5. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us:</p>
            <p className="mt-3">Email: <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-primary hover:underline">info@theoxfordwellnessdoctor.com</a><br />Phone: <a href="tel:+4407739309380" className="text-primary hover:underline">07739 309380</a></p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>Related: <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> · <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link></p>
        </div>
      </div>
    </div>
  );
}
