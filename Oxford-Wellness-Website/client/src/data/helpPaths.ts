export interface HelpPath {
  title: string;
  body: string;
  action: string;
  href: string;
}

export const helpPaths: HelpPath[] = [
  {
    title: "I know the treatment I'm looking for",
    body: "Explore individual treatments and technologies.",
    action: "Browse treatments",
    href: "/treatments",
  },
  {
    title: "I know what I'd like to improve",
    body: "Explore options for skin, face, body and intimate concerns.",
    action: "Explore concerns",
    href: "/symptoms-and-treatments",
  },
  {
    title: "I'm looking for a more complete approach",
    body: "Discover doctor-designed treatment programmes combining treatments around your goals.",
    action: "Explore programmes",
    href: "/how-we-help",
  },
];

export const programmeFinderPath: HelpPath = {
  title: "I'm not sure where to start",
  body: "Answer a few questions and we'll help you find the right starting point.",
  action: "Programme finder",
  href: "/programme-finder",
};

export const helpPathHrefs = [...helpPaths, programmeFinderPath].map((path) => path.href);
