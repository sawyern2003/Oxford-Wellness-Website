import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import ClinicLocationPictures from "@/components/layout/ClinicLocationPictures";

export default function ClinicMoveNote() {
  return (
    <section className="bg-muted/60 py-12 md:py-16">
      <div className="container-page">
        <FadeIn>
          <div className="rounded-3xl bg-white px-6 py-8 md:px-10 md:py-10">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12">
              <div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-secondary mb-4">
                  New clinic space
                </p>
                <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-4">
                  Now at Belsyre Court
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl">
                  We have recently moved into a new clinic in the centre of Oxford – Woodstock Road, a short walk from St Giles&apos;.
                </p>
                <p className="mt-6 text-sm text-foreground font-medium">Belsyre Court</p>
                <p className="text-sm text-muted-foreground">57 Woodstock Rd, Oxford OX2 6HJ</p>
                <Link href="/contact#parking" className="inline-block mt-4 text-sm font-medium text-primary hover:text-secondary">
                  Directions and parking →
                </Link>
              </div>
              <ClinicLocationPictures />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
