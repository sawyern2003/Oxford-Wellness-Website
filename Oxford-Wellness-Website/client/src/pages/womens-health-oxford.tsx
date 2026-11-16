import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

const areas = [
  {
    title: "Menopause & Perimenopause",
    body: "Hot flushes, night sweats, sleep, mood, brain fog, fatigue and cycle changes can have more than one cause. A consultation looks at your history before any treatment is suggested.",
    href: "/menopause-clinic-oxford",
    label: "Menopause clinic",
  },
  {
    title: "Intimate Health",
    body: "Vaginal dryness, discomfort, painful intercourse and urinary concerns are assessed clinically. Intimate treatments are only considered when they are appropriate for you.",
    href: "/sexual-wellness-oxford",
    label: "Intimate health",
  },
  {
    title: "Weight & Metabolic Health",
    body: "Weight change around midlife is discussed as a medical concern. Any plan starts with assessment, not a named medicine or a set course of treatment.",
    href: "/treatments/medical-weight-loss-oxford",
    label: "Weight management",
  },
  {
    title: "Skin, Hair & Ageing",
    body: "Dryness, a change in elasticity and hair thinning are common in midlife. Skin treatment, if it is suitable, is planned separately from medical care.",
    href: "/treatments#skin",
    label: "Skin and aesthetics",
  },
];

export default function WomensHealthOxford() {
  useBreadcrumbSchema([
    { name: "Treatments", path: "/treatments" },
    { name: "Women's Health & Menopause", path: "/womens-health-oxford" },
  ]);
  useSEO({
    title: "Women's Health & Menopause Clinic Oxford | Dr Inga Taganova",
    description:
      "Expert women's health and menopause care in Oxford. Menopause, perimenopause, intimate health and hormone support with GP Dr Inga Taganova at Belsyre Court, Woodstock Road.",
    canonical: "https://www.theoxfordwellnessdoctor.com/womens-health-oxford",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container-page py-14 md:py-20 max-w-3xl">
        <h1 className="font-sans font-semibold text-4xl md:text-5xl tracking-tight text-foreground mb-5">
          Women's Health &amp; Menopause in Oxford
        </h1>
        <p className="text-[17px] leading-relaxed text-foreground/80 max-w-[62ch] mb-6">
          Dr Inga Taganova is a GP with formal training in obstetrics and gynaecology who provides expert women's health consultations at her clinic in central Oxford. With over 20 years of experience in women's healthcare, she offers comprehensive support for menopause, perimenopause, intimate health and hormonal concerns.
        </p>
        <p className="text-[15px] leading-relaxed text-foreground/75 max-w-[62ch] mb-8">
          Our clinic on Woodstock Road provides a calm, private space for women seeking specialist advice about menopause symptoms, hormone changes, and intimate health concerns. Dr Inga's approach combines clinical expertise with genuine empathy, recognising that these transitions affect not just your physical health but your confidence, relationships and daily life.
        </p>
        <Link href="/book?consultation=menopause">
          <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium">
            Book a Menopause Consultation
          </Button>
        </Link>
      </div>

      <div className="container-page max-w-3xl pb-8">
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-4">Who this clinic is for</h2>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">
          Our women's health clinic serves women across Oxford, North Oxford, Summertown, Jericho and the surrounding areas who are experiencing menopause, perimenopause or related concerns. You might be noticing changes in your cycle, mood, sleep or energy that suggest hormonal shifts. You might be experiencing intimate symptoms you find difficult to discuss with your usual GP. Or you might simply want more time and expertise than a standard NHS appointment allows.
        </p>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">
          Women come to this clinic for many reasons: hot flushes that disrupt sleep and work, unexpected weight gain despite healthy habits, vaginal dryness affecting intimacy, mood changes that feel out of character, brain fog and fatigue, or simply uncertainty about whether their symptoms are menopause-related at all.
        </p>
      </div>

      <div className="container-page max-w-3xl pb-8">
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-4">What happens at your consultation</h2>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">
          Your initial women's health consultation with Dr Inga is a comprehensive 45-minute appointment. This is not a rushed assessment. Dr Inga will take a full medical and gynaecological history, discuss your current symptoms in detail, review any medications or supplements you're taking, and explore how your symptoms are affecting your life.
        </p>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">
          She will assess whether your symptoms suggest perimenopause, menopause, or another hormonal or medical cause. Where blood tests are clinically indicated – for example to assess thyroid function, hormone levels, or to rule out other conditions – she will arrange these. You will leave with a clear understanding of what is happening and a personalised plan for managing your symptoms.
        </p>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-6">
          The clinic does not currently prescribe HRT on-site, but Dr Inga can assess your suitability for hormone therapy and provide specialist referrals where appropriate. Her expertise as a formally trained gynaecologist means she understands the nuances of hormone replacement and can guide you towards the right support.
        </p>
      </div>

      <div id="how-we-can-help" className="container-page max-w-3xl pb-8">
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-4">How we can help</h2>
        <p className="text-sm text-foreground/70 mb-6 max-w-[62ch]">
          These are broad areas of care. They are not a diagnosis, and they do not lead to a particular paid treatment. Each consultation is tailored to your individual symptoms and medical history.
        </p>
        {areas.map((area) => (
          <section key={area.title} className="border-t border-border py-8">
            <h3 className="font-sans font-semibold text-xl text-foreground mb-3">{area.title}</h3>
            <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">{area.body}</p>
            <Link href={area.href} className="text-sm font-medium text-primary underline underline-offset-4 decoration-[#83A5CB]">
              {area.label}
            </Link>
          </section>
        ))}
      </div>

      <div className="container-page max-w-3xl pb-8">
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-4">Why Dr Inga's background matters</h2>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">
          Dr Inga Taganova is a GMC-registered GP with formal training in obstetrics and gynaecology. This combination is rare. Most GPs have limited gynaecological training; most aesthetic practitioners have no medical training in women's health at all. Dr Inga's background means she understands the hormonal, anatomical and psychological dimensions of menopause and perimenopause at a specialist level.
        </p>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">
          She has worked as a specialist menopause lead, holds advanced qualifications in women's health, and has supported hundreds of women through the menopause transition. She brings the clinical rigour of hospital gynaecology, the holistic perspective of general practice, and the aesthetic expertise to address the physical manifestations of hormone decline – skin changes, volume loss, and intimate concerns.
        </p>
      </div>

      <div className="container-page max-w-3xl pb-8">
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-4">The clinic in central Oxford</h2>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-4">
          The Oxford Wellness Doctor is located at Belsyre Court on Woodstock Road, in the heart of Oxford just north of the city centre. The clinic is easily accessible from North Oxford, Summertown, Jericho and the surrounding areas, with on-street parking nearby and excellent bus links.
        </p>
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[62ch] mb-6">
          The clinic environment is calm, discreet and professional. Consultations are private and unhurried. You will have Dr Inga's full attention, with time to discuss concerns that might feel too personal or complex for a standard GP appointment.
        </p>
      </div>

      <div className="container-page max-w-3xl pb-8">
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-4">Frequently asked questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-2">Do you prescribe HRT at the clinic?</h3>
            <p className="text-sm text-foreground/75 leading-relaxed">
              We do not currently prescribe HRT on-site. However, Dr Inga can assess your suitability for hormone therapy and provide specialist referrals to appropriate HRT prescribers if clinically indicated. Her gynaecological expertise means she can thoroughly evaluate whether HRT is right for you and guide you towards the most suitable support.
            </p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-2">What are the symptoms of perimenopause?</h3>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Perimenopause symptoms can include irregular periods, hot flushes, night sweats, sleep disruption, mood changes, anxiety, brain fog, weight gain, vaginal dryness, low libido, joint aches, and skin and hair changes. Symptoms vary widely between women. If you're experiencing any of these in your 40s or early 50s, a consultation can clarify whether perimenopause is the cause.
            </p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-2">How much does a consultation cost?</h3>
            <p className="text-sm text-foreground/75 leading-relaxed">
              A Menopause & Women's Health Consultation is £195 for the initial appointment and £95 for follow-up. Consultation fees are not redeemable against treatment.
            </p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-2">Where is the clinic located?</h3>
            <p className="text-sm text-foreground/75 leading-relaxed">
              The clinic is at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ. We're located in central Oxford, easily accessible from North Oxford, Summertown, Jericho and the surrounding areas. On-street parking is available nearby, and the clinic is well-served by bus routes.
            </p>
          </div>
        </div>
      </div>

      <div className="container-page max-w-3xl pb-20">
        <div className="bg-muted/40 rounded-3xl p-8 md:p-10">
          <h2 className="font-sans font-semibold text-2xl tracking-tight mb-3">Ready to book?</h2>
          <p className="text-[15px] text-foreground/75 mb-6 max-w-[55ch]">
            Book your women's health consultation online or call the clinic directly on 07739 309380.
          </p>
          <Link href="/book?consultation=menopause">
            <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-8 h-11 text-sm font-medium">
              Book a consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
