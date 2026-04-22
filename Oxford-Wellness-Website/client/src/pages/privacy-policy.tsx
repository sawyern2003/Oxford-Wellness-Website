import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

export default function PrivacyPolicy() {
  useBreadcrumbSchema([{ name: "Privacy Policy", path: "/privacy-policy" }]);
  useSEO({
    title: "Privacy Policy | The Oxford Wellness Doctor",
    description: "Privacy Policy for The Oxford Wellness Doctor - how we collect, use, and protect your personal data in accordance with UK GDPR.",
    canonical: "https://www.theoxfordwellnessdoctor.com/privacy-policy",
  });

  return (
    <div className="pt-24 min-h-screen bg-muted/20">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            How we handle information submitted through the pre-consultation service.
          </p>
        </div>

        <div className="space-y-4">
          <section className="bg-white border border-border/70 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-3">Who we are</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website provides an AI-assisted pre-consultation experience designed to help users explore treatment options and submit enquiries to the clinic.
            </p>
          </section>

          <section className="bg-white border border-border/70 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-3">What information we collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect information such as your name, email address, contact details, and information you provide about your concerns, treatment interests, or goals.
            </p>
          </section>

          <section className="bg-white border border-border/70 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-3">How we use your information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your information to provide the pre-consultation service, assess your enquiry, generate a summary for the clinic, and help the clinic respond to you appropriately.
            </p>
          </section>

          <section className="bg-white border border-border/70 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-3">AI and third-party processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              As part of this service, information you provide may be processed using third-party technology providers that support the AI consultation, data storage, and communication workflow.
            </p>
          </section>

          <section className="bg-white border border-border/70 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-3">Sharing with the clinic</h2>
            <p className="text-muted-foreground leading-relaxed">
              Information submitted through the pre-consultation may be shared with the relevant clinic so they can review your enquiry and contact you about suitable next steps.
            </p>
          </section>

          <section className="bg-white border border-border/70 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-3">Data retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain information only for as long as reasonably necessary to manage the enquiry, operate the service, and meet legal or operational requirements.
            </p>
          </section>

          <section className="bg-white border border-border/70 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-3">Your rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may request access to your information, ask for corrections, or request deletion of your data where applicable.
            </p>
          </section>

          <section className="bg-white border border-border/70 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-3">Contact us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or how your data is used, please contact:
            </p>
            <p className="mt-3">
              <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-primary hover:underline">
                info@theoxfordwellnessdoctor.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
