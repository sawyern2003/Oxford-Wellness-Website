import { ArrowRight, Sparkles, Syringe, HeartPulse, User } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Skin Rejuvenation",
    description: "Advanced laser therapies and chemical peels to restore youthful radiance.",
  },
  {
    icon: Syringe,
    title: "Injectables",
    description: "Subtle, natural-looking enhancements using premium dermal fillers and anti-wrinkle treatments.",
  },
  {
    icon: HeartPulse,
    title: "Medical Wellness",
    description: "Holistic health assessments, IV nutrition therapy, and lifestyle medicine.",
  },
  {
    icon: User,
    title: "Private GP",
    description: "Comprehensive private consultations for your general health needs.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-medium text-primary mb-4">Curated Treatments</h2>
          <p className="text-muted-foreground font-light">
            Our medical experts combine cutting-edge technology with artistic precision to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} href="/services">
              <Card className="group cursor-pointer border-none shadow-none bg-muted/30 hover:bg-white hover:shadow-lg transition-all duration-300 rounded-none h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon strokeWidth={1.5} size={24} />
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
