import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { Link } from "wouter";

export default function TermsAndConditions() {
  useBreadcrumbSchema([{ name: "Terms & Conditions", path: "/terms-and-conditions" }]);
  useSEO({
    title: "Terms & Conditions | The Oxford Wellness Doctor",
    description: "Terms and Conditions for The Oxford Wellness Doctor - clinical services, booking, cancellation policy, and patient responsibilities.",
    canonical: "https://www.theoxfordwellnessdoctor.com/terms-and-conditions",
  });

  return (
    <div className="pt-24 min-h-screen bg-muted/20">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">1. Introduction</h2>
            <p>These Terms and Conditions govern your use of the services provided by The Oxford Wellness Doctor, operated by Dr. Inga Taganova (GMC No. 4727817), trading from 3 Woodstock Rd, Oxford OX2 6HA.</p>
            <p className="mt-3">By booking a consultation or treatment, or by using this website, you agree to be bound by these Terms and Conditions. Please read them carefully before booking. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">2. Medical Disclaimer</h2>
            <p>The information on this website is provided for general informational purposes only. It does not constitute medical advice and should not be relied upon as such. Always seek the advice of a qualified healthcare professional regarding any medical condition or treatment.</p>
            <p className="mt-3">Results from aesthetic treatments vary between individuals. Photographs, testimonials, and case descriptions on this website are illustrative and do not guarantee any particular outcome. All treatments carry risks, which will be discussed in full at your consultation prior to any procedure being performed.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">3. Consultations</h2>
            <p>An initial aesthetic consultation is provided at no charge and is fully redeemable against your first treatment. For medical consultations (including the Menopause Clinic), a consultation fee applies - currently £150 for a comprehensive 45-minute appointment.</p>
            <p className="mt-3">Consultations are provided in good faith to assess your suitability for treatment. Dr. Taganova reserves the right to decline to perform any treatment that she considers clinically inappropriate or unsuitable for the individual patient, in accordance with her professional and ethical obligations as a GMC-registered physician.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">4. Booking and Payment</h2>
            <p>Appointments may be booked online via our Glowday booking page, by telephone, or by email. A booking is confirmed upon receipt of any deposit required or upon written confirmation from our clinic.</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Payment is taken at the time of treatment unless otherwise agreed</li>
              <li>We accept all major credit and debit cards</li>
              <li>Prices displayed on our website are inclusive of VAT where applicable</li>
              <li>Prices are subject to change. Any quoted price is valid for 28 days</li>
              <li>We do not currently offer payment plans or credit facilities</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">5. Cancellation and Rescheduling Policy</h2>
            <p>We understand that circumstances can change. Our cancellation policy is as follows:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong>48+ hours notice:</strong> Cancellation or rescheduling is accepted at no charge</li>
              <li><strong>24–48 hours notice:</strong> A cancellation fee of 50% of the treatment cost may be charged</li>
              <li><strong>Less than 24 hours notice or non-attendance:</strong> The full treatment fee may be charged</li>
              <li>Deposits are non-refundable for cancellations made with less than 48 hours notice</li>
            </ul>
            <p className="mt-3">We reserve the right to cancel or reschedule appointments in exceptional circumstances. In such cases, we will provide as much notice as possible and reschedule at no additional charge.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">6. Patient Responsibilities</h2>
            <p>As a patient, you are responsible for:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Providing accurate and complete medical history and information at consultation</li>
              <li>Disclosing all current medications, supplements, and known allergies</li>
              <li>Following all pre- and post-treatment instructions provided by Dr. Taganova</li>
              <li>Notifying us of any changes in your health status before treatment</li>
              <li>Attending follow-up appointments as recommended</li>
              <li>Contacting us promptly if you experience any adverse effects following treatment</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">7. Contraindications and Suitability</h2>
            <p>Certain medical conditions and circumstances may make specific treatments unsuitable. These include but are not limited to: pregnancy, breastfeeding, active skin infections at the treatment site, certain autoimmune conditions, and specific medications (e.g., blood thinners prior to some procedures).</p>
            <p className="mt-3">Suitability for treatment is assessed at consultation. If you are found to be unsuitable for a booked treatment, a full refund of any pre-paid treatment cost will be provided.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">8. Complaints Procedure</h2>
            <p>We are committed to providing excellent care. If you are unhappy with any aspect of your experience, please contact us at <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-primary hover:underline">info@theoxfordwellnessdoctor.com</a> in the first instance. We will acknowledge your complaint within 5 working days and aim to resolve it within 28 days.</p>
            <p className="mt-3">If you remain dissatisfied, you have the right to raise concerns with the General Medical Council (GMC) at <a href="https://www.gmc-uk.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gmc-uk.org</a>.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">9. Intellectual Property</h2>
            <p>All content on this website - including text, images, graphics, and branding - is the property of The Oxford Wellness Doctor and is protected by copyright. You may not reproduce, distribute, or otherwise use any content from this website without our prior written permission.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">10. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, The Oxford Wellness Doctor's liability for any claim arising from our services shall be limited to the cost of the specific treatment in question. Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, or for any other liability that cannot be excluded by law.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">11. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the law of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-4">12. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms and Conditions at any time. The most current version will always be published on this page. Continued use of our services after any changes constitutes acceptance of the updated terms.</p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>Related: <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> · <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link></p>
        </div>
      </div>
    </div>
  );
}
