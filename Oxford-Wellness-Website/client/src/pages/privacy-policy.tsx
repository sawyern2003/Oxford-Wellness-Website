import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  useBreadcrumbSchema([{ name: "Privacy Policy", path: "/privacy-policy" }]);
  useSEO({
    title: "Privacy Policy | The Oxford Wellness Doctor",
    description: "Privacy Policy for The Oxford Wellness Doctor - how we collect, use, and protect your personal data in accordance with UK GDPR.",
    canonical: "https://www.theoxfordwellnessdoctor.com/privacy-policy",
  });

  return (
    <div className="pt-24 min-h-screen bg-muted/20">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">1. Who We Are</h2>
            <p>The Oxford Wellness Doctor is a medical aesthetics and women's wellness clinic operated by Dr. Inga Taganova (GMC No. 4727817), located at 3 Woodstock Rd, Oxford OX2 6HA.</p>
            <p className="mt-3">For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, Dr. Inga Taganova is the Data Controller.</p>
            <p className="mt-3">Contact: <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-primary hover:underline">info@theoxfordwellnessdoctor.com</a> | <a href="tel:+4407739309380" className="text-primary hover:underline">07739 309380</a></p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">2. What Personal Data We Collect</h2>
            <p>We may collect and process the following categories of personal data:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong>Identity data:</strong> First name, last name, title, date of birth</li>
              <li><strong>Contact data:</strong> Email address, telephone number, postal address</li>
              <li><strong>Health data:</strong> Medical history, current medications, treatment records, clinical notes (special category data)</li>
              <li><strong>Financial data:</strong> Payment information (processed securely through third-party payment processors - we do not store card details)</li>
              <li><strong>Communication data:</strong> Messages sent via our contact form, email correspondence</li>
              <li><strong>Technical data:</strong> IP address, browser type, pages visited, time spent on site (via analytics)</li>
              <li><strong>Marketing preferences:</strong> Whether you have opted in to receive marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">3. How We Use Your Personal Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Providing medical consultations and aesthetic treatments</li>
              <li>Maintaining clinical records as required by medical regulatory obligations</li>
              <li>Responding to enquiries submitted via our contact form</li>
              <li>Processing bookings made through Glowday (our booking platform)</li>
              <li>Sending appointment reminders and post-treatment follow-up communications</li>
              <li>Sending marketing communications (only where you have given explicit consent)</li>
              <li>Complying with legal and regulatory obligations (including GMC requirements)</li>
              <li>Improving our website and services through analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal grounds:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong>Legitimate interests:</strong> Responding to general enquiries, improving our services</li>
              <li><strong>Performance of a contract:</strong> Providing the treatments or services you have requested</li>
              <li><strong>Consent:</strong> Marketing communications, use of non-essential cookies</li>
              <li><strong>Legal obligation:</strong> Retaining clinical records as required by medical law and GMC guidance</li>
              <li><strong>Vital interests / special category data:</strong> Health data processed for the provision of healthcare under Schedule 1 of the Data Protection Act 2018</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">5. How Long We Keep Your Data</h2>
            <p>We retain your personal data for the following periods:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong>Clinical records:</strong> A minimum of 8 years from the date of last treatment (or until age 25 if the patient was a child at the time of treatment), in accordance with NHS and GMC guidelines</li>
              <li><strong>Contact form enquiries:</strong> 12 months from the date of enquiry if no treatment relationship results</li>
              <li><strong>Marketing preferences:</strong> Until you withdraw consent</li>
              <li><strong>Financial records:</strong> 7 years (for tax and accounting purposes)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">6. Sharing Your Personal Data</h2>
            <p>We will not sell, rent, or share your personal data with third parties for their own marketing purposes. We may share data with:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong>Glowday:</strong> Our online booking platform (subject to their own privacy policy)</li>
              <li><strong>SendGrid / Twilio:</strong> Email delivery service used to process contact form submissions</li>
              <li><strong>Payment processors:</strong> To process treatment payments securely</li>
              <li><strong>Referral clinicians:</strong> Where you are referred to another healthcare professional for further treatment (with your consent)</li>
              <li><strong>Regulatory bodies:</strong> Where required by law (e.g., GMC, ICO)</li>
            </ul>
            <p className="mt-3">All third-party processors are contractually required to handle your data securely and in accordance with UK GDPR.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">7. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights in relation to your personal data:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you (subject access request)</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your data (subject to legal retention obligations)</li>
              <li><strong>Right to restrict processing:</strong> Ask us to limit how we use your data</li>
              <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
              <li><strong>Rights relating to automated decision-making:</strong> We do not use automated decision-making or profiling</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-primary hover:underline">info@theoxfordwellnessdoctor.com</a>. We will respond within one calendar month.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">8. Cookies</h2>
            <p>Our website uses cookies to improve your browsing experience and to analyse site traffic. For details of the cookies we use and how to manage them, please see our <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">9. Security</h2>
            <p>We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our website uses HTTPS encryption. Clinical records are stored securely in accordance with medical regulatory requirements.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">10. Complaints</h2>
            <p>If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):</p>
            <p className="mt-3"><strong>Information Commissioner's Office</strong><br />Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF<br />Tel: 0303 123 1113<br /><a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ico.org.uk</a></p>
            <p className="mt-3">We would, however, appreciate the opportunity to address your concerns before you approach the ICO - please contact us directly in the first instance.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>Related: <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> · <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link></p>
        </div>
      </div>
    </div>
  );
}
