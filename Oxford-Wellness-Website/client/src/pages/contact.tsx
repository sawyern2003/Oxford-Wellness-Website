import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { isPainRoute } from "@/lib/brand";
import JotformEmbed from "@/components/contact/JotformEmbed";
import ParkingMap from "@/components/contact/ParkingMap";

export default function Contact() {
  const [location] = useLocation();
  const pain = isPainRoute(location);

  useBreadcrumbSchema(
    pain
      ? [
          { name: "The Oxford Pain Doctor", path: "/oxford-pain-doctor" },
          { name: "Contact", path: "/oxford-pain-doctor/contact" },
        ]
      : [{ name: "Contact", path: "/contact" }]
  );
  useSEO(
    pain
      ? {
          title: "Contact The Oxford Pain Doctor | Chronic Pain Consultation Oxford",
          description:
            "Enquire about a chronic pain consultation with Dr Richard Sawyer in Oxford. Call 07739 309380 or send a message.",
          canonical: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor/contact",
        }
      : {
          title: "Contact The Oxford Wellness Doctor | Book Consultation Oxford",
          description:
            "Book your women's health & medical aesthetics consultation in Oxford. Now at Belsyre Court. Call 07739 309380 or email. Open Friday evenings & Saturday mornings.",
          canonical: "https://www.theoxfordwellnessdoctor.com/contact",
        }
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: pain ? "Chronic pain consultation" : "",
    message: "",
    gdprConsent: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    if (subject) {
      setFormData((prev) => ({ ...prev, subject }));
    } else if (pain) {
      setFormData((prev) => ({ ...prev, subject: prev.subject || "Chronic pain consultation" }));
    }
  }, [pain]);

  useEffect(() => {
    if (window.location.hash !== "#parking") return;
    const el = document.getElementById("parking");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);

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
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mb-12">
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-4">Contact</h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            {pain
              ? "Send a message about a chronic pain consultation with Dr Richard Sawyer. Replies are usually within one working day."
              : "Send a message or book directly. We are now at Belsyre Court, in the centre of Oxford. Replies are usually within one working day."}
          </p>
        </div>

        {pain ? (
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-muted/40 rounded-3xl p-8">
            <h3 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">Send a message</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4" data-testid="success-message">
                <CheckCircle className="w-16 h-16 text-green-600" />
                <h4 className="font-sans font-semibold text-xl text-foreground tracking-tight">Message Sent</h4>
                <p className="text-muted-foreground">
                  Thank you for your enquiry. We will get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="rounded-full text-sm mt-4 border-border"
                  data-testid="button-send-another"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === "error" && (
                  <div className="flex items-center space-x-2 bg-red-50 border border-red-200 rounded-2xl p-4" data-testid="error-message">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">First Name</label>
                    <Input
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="rounded-full border-border bg-white px-4 h-11 focus-visible:ring-secondary"
                      placeholder="Jane"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Last Name</label>
                    <Input
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="rounded-full border-border bg-white px-4 h-11 focus-visible:ring-secondary"
                      placeholder="Doe"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-full border-border bg-white px-4 h-11 focus-visible:ring-secondary"
                    placeholder="jane@example.com"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Treatment Interest</label>
                  <Input
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="rounded-full border-border bg-white px-4 h-11 focus-visible:ring-secondary"
                    placeholder={pain ? "e.g. Chronic pain consultation" : "e.g. Menopause Consultation, Dermal Fillers"}
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Message</label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-2xl border-border bg-white px-4 py-3 focus-visible:ring-secondary resize-none min-h-[100px]"
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
                      I consent to {pain ? "The Oxford Pain Doctor" : "The Oxford Wellness Doctor"} processing my personal data to respond to this enquiry, in accordance with the{" "}
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
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full h-12 text-sm font-medium mt-4 disabled:opacity-60"
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

          <div className="space-y-8">
            <Card className="rounded-3xl border-0 shadow-none bg-muted/40">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-2">Now at Belsyre Court</h3>
                    <p className="text-sm text-secondary font-medium mb-2">A new clinic in the centre of Oxford</p>
                    <p className="text-muted-foreground">
                      Belsyre Court, 57 Woodstock Rd<br />
                      Oxford OX2 6HJ<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-2">Call Us</h3>
                    <a href="tel:+4407739309380" className="text-muted-foreground hover:text-primary transition-colors">07739 309380</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-2">Email</h3>
                    <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-muted-foreground hover:text-primary transition-colors">info@theoxfordwellnessdoctor.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-2">Hours</h3>
                    <ul className="text-muted-foreground space-y-1">
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
        ) : (
        <div className="max-w-6xl mx-auto">
          <JotformEmbed />
        </div>
        )}

        <ParkingMap
          companion={
            pain ? undefined : (
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="font-sans font-semibold text-lg text-foreground tracking-tight">The clinic</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Belsyre Court, 57 Woodstock Rd<br />
                    Oxford OX2 6HJ
                  </p>
                </div>
                <div>
                  <h2 className="font-sans font-semibold text-lg text-foreground tracking-tight">Call</h2>
                  <p className="mt-2 text-sm leading-relaxed">
                    <a href="tel:+447739309380" className="text-muted-foreground hover:text-primary">07739 309380</a>
                  </p>
                </div>
                <div>
                  <h2 className="font-sans font-semibold text-lg text-foreground tracking-tight">Email</h2>
                  <p className="mt-2 text-sm leading-relaxed break-words">
                    <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-muted-foreground hover:text-primary">info@theoxfordwellnessdoctor.com</a>
                  </p>
                </div>
                <div>
                  <h2 className="font-sans font-semibold text-lg text-foreground tracking-tight">Hours</h2>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li className="flex justify-between gap-6"><span>Friday</span> <span>4pm – 8pm</span></li>
                    <li className="flex justify-between gap-6"><span>Saturday</span> <span>9am – 1pm</span></li>
                    <li className="flex justify-between gap-6"><span>Sun – Thu</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            )
          }
        />

        <div className="max-w-6xl mx-auto mb-8 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
          <h2 className="font-sans font-semibold text-2xl tracking-tight mb-3">
            {pain ? "Ready to enquire?" : "Ready to book?"}
          </h2>
          <p className="text-primary-foreground/75 text-[15px] mb-6 max-w-lg">
            {pain
              ? "Send a message using the form above, or call the clinic directly."
              : "Book a consultation online when it suits you."}
          </p>
          {pain ? (
            <Button
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-11 text-sm font-medium"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Send a message
            </Button>
          ) : (
            <Button
              className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-8 h-11 text-sm font-medium"
              onClick={() => window.location.assign("/book")}
            >
              Book a consultation
            </Button>
          )}
        </div>

      </div>
    </div>
  );
}
