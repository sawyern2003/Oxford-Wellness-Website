import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2, Car, Bus, Bike } from "lucide-react";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

export default function Contact() {
  useBreadcrumbSchema([{ name: "Contact", path: "/contact" }]);
  useSEO({
    title: "Contact The Oxford Wellness Doctor | Book Consultation Oxford",
    description: "Book your women's health & medical aesthetics consultation in Oxford. Call 07739 309380 or email. Open Friday evenings & Saturday mornings. Free parking.",
    canonical: "https://www.theoxfordwellnessdoctor.com/contact",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    gdprConsent: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "", gdprConsent: false });
      window.location.href = "/thank-you";
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-muted/20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-primary mb-6">Contact Us</h1>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
            We invite you to schedule a consultation to discuss your needs. Our team is here to answer any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="font-serif text-2xl text-primary mb-6">Send a Message</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4" data-testid="success-message">
                <CheckCircle className="w-16 h-16 text-green-600" />
                <h4 className="font-serif text-xl text-primary">Message Sent</h4>
                <p className="text-muted-foreground font-light">
                  Thank you for your enquiry. We will get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="rounded-none uppercase tracking-widest mt-4"
                  data-testid="button-send-another"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === "error" && (
                  <div className="flex items-center space-x-2 bg-red-50 border border-red-200 p-4" data-testid="error-message">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">First Name</label>
                    <Input
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="rounded-none border-t-0 border-x-0 border-b border-input focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent"
                      placeholder="Jane"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Last Name</label>
                    <Input
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="rounded-none border-t-0 border-x-0 border-b border-input focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent"
                      placeholder="Doe"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-none border-t-0 border-x-0 border-b border-input focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent"
                    placeholder="jane@example.com"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Treatment Interest</label>
                  <Input
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="rounded-none border-t-0 border-x-0 border-b border-input focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent"
                    placeholder="e.g. Menopause Consultation, Dermal Fillers"
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Message</label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-none border-t-0 border-x-0 border-b border-input focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent resize-none min-h-[100px]"
                    placeholder="How can we help you?"
                    data-testid="input-message"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group" data-testid="label-gdpr">
                    <input
                      type="checkbox"
                      required
                      checked={formData.gdprConsent}
                      onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                      className="mt-1 w-4 h-4 flex-shrink-0 border-border accent-primary"
                      data-testid="input-gdpr-consent"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      I consent to The Oxford Wellness Doctor processing my personal data to respond to this enquiry, in accordance with the{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>
                      . I understand I can withdraw consent at any time by contacting the clinic. <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={status === "sending" || !formData.gdprConsent}
                  className="w-full bg-primary text-white rounded-none py-6 uppercase tracking-widest hover:bg-primary/90 mt-4 disabled:opacity-60"
                  data-testid="button-submit"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Enquiry"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="rounded-none border-none shadow-lg">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">Visit Us</h3>
                    <p className="text-muted-foreground font-light">
                      3 Woodstock Rd<br />
                      Oxford OX2 6HA<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">Call Us</h3>
                    <a href="tel:+4407739309380" className="text-muted-foreground font-light hover:text-primary transition-colors">07739 309380</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">Email</h3>
                    <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-muted-foreground font-light hover:text-primary transition-colors">info@theoxfordwellnessdoctor.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">Hours</h3>
                    <ul className="text-muted-foreground font-light space-y-1">
                      <li className="flex justify-between w-48"><span>Friday</span> <span>4pm - 8pm</span></li>
                      <li className="flex justify-between w-48"><span>Saturday</span> <span>9am - 1pm</span></li>
                      <li className="flex justify-between w-48"><span>Sun - Thu</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Map */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Find Us</p>
            <h2 className="font-serif text-2xl text-primary">Oxford</h2>
          </div>
          <div className="w-full border border-border overflow-hidden" style={{ height: "400px" }}>
            <iframe
              title="The Oxford Wellness Doctor - 3 Woodstock Rd, Oxford"
              src="https://maps.google.com/maps?q=3+Woodstock+Road,+Oxford+OX2+6HA,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Directions + Areas */}
        <div className="max-w-6xl mx-auto mt-16 mb-8">
          <div className="grid md:grid-cols-2 gap-12">

            {/* How to Find Us */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Directions</p>
              <h2 className="font-serif text-2xl text-primary mb-6">How to Find Us</h2>
              <p className="text-sm text-muted-foreground font-light mb-6 leading-relaxed">
                3 Woodstock Rd, Oxford OX2 6HA. Street parking available nearby.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Car size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">By Car - From Oxford City Centre (5 min)</p>
                    <p className="text-xs text-muted-foreground font-light">Head north on St Giles' → continue onto Woodstock Road → 3 Woodstock Rd on your left.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">By Car - From Headington (10 min)</p>
                    <p className="text-xs text-muted-foreground font-light">Head west on London Road → continue onto St Giles' → turn left onto Woodstock Road.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">By Car - From M40 / A40</p>
                    <p className="text-xs text-muted-foreground font-light">Follow A40 toward Oxford → take A44 Woodstock Road exit → continue south on Woodstock Road.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bus size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">By Bus</p>
                    <p className="text-xs text-muted-foreground font-light">Multiple bus routes serve Woodstock Road. Check Oxford Bus Company and Stagecoach routes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bike size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">By Bike</p>
                    <p className="text-xs text-muted-foreground font-light">Cycle-friendly route from city center via St Giles' and Woodstock Road. Bike parking available nearby.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas We Serve */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Catchment</p>
              <h2 className="font-serif text-2xl text-primary mb-6">Areas We Serve</h2>
              <p className="text-sm text-muted-foreground font-light mb-6 leading-relaxed">
                We welcome patients from throughout Oxfordshire. Our Oxford location is easily accessible from all Oxford areas via the A4142.
              </p>
              <div className="space-y-2.5">
                {[
                  { area: "Oxford City Centre", time: "5 min" },
                  { area: "Jericho", time: "2 min" },
                  { area: "Summertown", time: "5 min" },
                  { area: "Headington", time: "15 min" },
                  { area: "Cowley", time: "15 min" },
                  { area: "Rose Hill", time: "20 min" },
                  { area: "Iffley", time: "15 min" },
                  { area: "Blackbird Leys", time: "20 min" },
                  { area: "Kennington", time: "15 min" },
                  { area: "Abingdon", time: "20 min" },
                  { area: "Kidlington", time: "10 min" },
                  { area: "Witney", time: "25 min" },
                  { area: "Bicester", time: "30 min" },
                ].map(({ area, time }) => (
                  <div key={area} className="flex justify-between items-center text-sm border-b border-border/40 pb-2.5">
                    <span className="text-muted-foreground">{area}</span>
                    <span className="text-xs text-secondary font-medium tracking-wider">{time}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground font-light pt-2">And all surrounding Oxfordshire.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Book Treatment CTA */}
        <div className="max-w-6xl mx-auto mt-16 mb-8">
          <div className="bg-primary/5 border border-primary/20 p-12 text-center">
            <h2 className="font-serif text-3xl text-primary mb-4">Ready to Book Your Treatment?</h2>
            <p className="text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
              Book your consultation or treatment online through our secure booking platform.
            </p>
            <Button
              className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-8 py-6 uppercase tracking-widest text-sm"
              onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
            >
              Book Online Now
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
