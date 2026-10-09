import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import RevealSection from "@/components/animations/RevealSection";
import { Button } from "@/components/ui/button";

export default function PainDoctorBanner() {
  return (
    <RevealSection className="py-16 md:py-24 bg-white">
      <div className="container-page">
        <FadeIn>
          <div className="hover-card theme-pain rounded-3xl bg-[hsl(8_42%_90%)] text-foreground p-8 md:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                Also at the clinic
              </p>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight">
                The Oxford Pain Doctor
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                Chronic pain care with Dr Richard Sawyer, Consultant in Anaesthesia and Pain Medicine – a separate specialist service, in the same Oxford building.
              </p>
              <Link href="/oxford-pain-doctor">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-11 text-sm font-medium">
                  Chronic pain clinic
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </RevealSection>
  );
}
