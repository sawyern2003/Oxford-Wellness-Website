export interface PainLibrarySection {
  heading: string;
  paragraphs: string[];
}

export interface PainLibraryArticle {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  intro: string;
  sections: PainLibrarySection[];
  /** Renders the interactive brain diagram from the pain homepage. */
  showBrainMap?: boolean;
}

export const painLibraryArticles: PainLibraryArticle[] = [
  {
    slug: "where-pain-is-shaped-in-the-brain",
    title: "Where pain is shaped in the brain",
    excerpt:
      "Persistent pain is shaped across several areas of the brain, not in one spot. Select a region to see how it can change what pain feels like, even when a scan of the painful part looks normal.",
    metaDescription:
      "An interactive diagram of where persistent pain is shaped in the brain, and why a normal scan of the painful part does not mean the pain is imagined.",
    intro:
      "Pain is not produced in a single place. Sensation, attention, threat and the body’s stress response meet in a network. The diagram below is a teaching view of that network. Selecting an area does not locate the cause of your pain.",
    showBrainMap: true,
    sections: [
      {
        heading: "How to read the diagram",
        paragraphs: [
          "The glow moving across the diagram is activity passing through the pain network. Select a highlighted area to see which others it talks to, and how that can change what you feel. The lines show areas that work together. They are not a scan of your brain.",
          "A simplified teaching diagram, drawn in the style of a mid-line section.",
        ],
      },
      {
        heading: "When a scan of the painful part looks normal",
        paragraphs: [
          "Each highlighted area can change what persistent pain feels like, even when a scan of the painful part looks normal. That does not mean the pain is imagined. It means more than the local tissue is involved in the experience.",
          "The diagram is for understanding. It is not a diagnosis, and it does not say which area is responsible for a particular person’s pain.",
        ],
      },
    ],
  },
  {
    slug: "biopsychosocial-approach",
    title: "What is a biopsychosocial approach to pain?",
    excerpt:
      "Persistent pain is rarely explained by a scan alone. A biopsychosocial approach looks at the body, the nervous system and daily life together – without suggesting the pain is imagined.",
    metaDescription:
      "What a biopsychosocial approach to chronic pain means: how medical, physical and life factors are considered together in specialist pain care in Oxford.",
    intro:
      "Many people arrive at a pain clinic having been told that their scan is “normal”, or that nothing more can be done because the original injury has healed. A biopsychosocial approach is how specialist pain medicine answers that situation. It does not mean the pain is “in your head”. It means pain is a real experience shaped by more than one system at once.",
    sections: [
      {
        heading: "Pain is more than tissue damage",
        paragraphs: [
          "Tissue injury can start pain. In persistent pain, the nervous system often continues to signal after tissues have had time to settle. Sleep, previous treatment, fear of movement, work demands and mood all influence how strongly that signal is felt. Two people with similar imaging can have very different lives because of this.",
          "Modern pain medicine treats that as physiology, not as a character judgement. The aim is to find which factors are keeping the pain going, and which of those can usefully be changed.",
        ],
      },
      {
        heading: "What this looks like in clinic",
        paragraphs: [
          "Assessment still starts with the medical picture: history, examination, previous investigations and treatments. The difference is the next question. Instead of asking only “where should we inject?”, the consultation asks what combination of medical, physical and life factors is most relevant now.",
          "That might lead to a medication review, a movement plan, sleep advice, or a procedure – or a clear explanation that a procedure is unlikely to help. The point is selection, not a longer list of options.",
        ],
      },
      {
        heading: "What it is not",
        paragraphs: [
          "A biopsychosocial approach is not a way of declining treatment. It is not an instruction to “think positively”. And it is not used here as a substitute for diagnosing a treatable cause when one is present.",
          "If you leave with a written Pain Care Plan, it should say plainly what appears to be driving the pain and what is worth trying next. That is the practical purpose of the framework.",
        ],
      },
    ],
  },
  {
    slug: "exercise-and-chronic-pain",
    title: "Can exercise help chronic pain?",
    excerpt:
      "Movement is often part of recovery from persistent pain, but it has to be individualised. “Just exercise more” is not a treatment plan.",
    metaDescription:
      "How exercise can help chronic pain when it is graded and individualised – and why generic advice to move more often fails.",
    intro:
      "People with persistent pain are often told to exercise. Some have been told they are not doing enough. Others have tried, flared, and concluded that movement makes everything worse. Both experiences are common. Exercise can help chronic pain – when the type, dose and support match the person.",
    sections: [
      {
        heading: "Why movement can help",
        paragraphs: [
          "Carefully graded activity can improve function, confidence and sleep. It can reduce the sense that every movement is dangerous. For many musculoskeletal and neuropathic pain presentations, remaining still for long periods tends to increase stiffness, deconditioning and fear of flare-ups.",
          "Helpful movement is not the same as pushing through severe pain or copying a generic gym programme. A useful plan starts from what you can currently do, and builds from there.",
        ],
      },
      {
        heading: "Why “just exercise” often fails",
        paragraphs: [
          "Advice that ignores fear of flare-ups, previous injury, current capacity or competing demands at home and work is likely to fail. People then blame themselves, or decide that exercise “doesn’t work for me”.",
          "The better questions are: which type of movement, at what intensity, how often, and with what support if symptoms rise. Walking, strengthening, hydrotherapy or guided physiotherapy may all be reasonable – for the right person at the right time.",
        ],
      },
      {
        heading: "Where it sits in a Pain Care Plan",
        paragraphs: [
          "Exercise may sit alongside medication review, sleep advice or a procedure. It is one tool, not a moral instruction and not a replacement for medical assessment.",
          "If movement is recommended after a consultation with Dr Sawyer, it should be specific enough to follow – and honest about the fact that flare-ups can still happen while capacity is being rebuilt.",
        ],
      },
    ],
  },
  {
    slug: "sleep-stress-mood-and-pain",
    title: "Why do sleep, stress and mood affect pain?",
    excerpt:
      "Poor sleep and high stress do not invent pain. They can amplify how strongly it is felt and how hard it is to recover.",
    metaDescription:
      "How sleep, stress and mood affect chronic pain – the physiology behind flare-ups, and why these factors belong in a specialist pain plan.",
    intro:
      "Patients often notice that pain is worse after a bad night, a difficult week at work, or a period of low mood. That observation is well founded. The systems that process pain also process sleep, threat and emotion. Understanding the link does not mean the pain is psychological. It means the plan should take the whole picture seriously.",
    sections: [
      {
        heading: "Shared physiology, not imagined pain",
        paragraphs: [
          "When sleep is fragmented, the nervous system tends to become more sensitive. High stress keeps the body in a state of threat, which can increase muscle tension, attention to symptoms and the intensity of flare-ups. Low mood can reduce the energy available for pacing, movement and recovery.",
          "None of this means you caused the pain. It means pain, sleep and mood influence one another. Treating only one of them sometimes leaves the others untouched.",
        ],
      },
      {
        heading: "What belongs in the care plan",
        paragraphs: [
          "Addressing sleep or mood is not a substitute for diagnosing a treatable cause. It is part of understanding why pain may persist after tissues have had time to heal, or why two people with similar scans feel so differently.",
          "Where these factors are relevant, they belong in the plan in the same way as medication or rehabilitation – named plainly, without implying that the pain is imaginary.",
        ],
      },
      {
        heading: "What you can reasonably expect",
        paragraphs: [
          "Improving sleep will not erase a trapped nerve. Reducing stress will not reverse established joint disease. What it can do, for some people, is lower the volume of the pain signal and make other treatments more usable.",
          "If sleep, stress or mood are part of your picture, a consultation can identify whether they are a main driver, a contributing factor, or something to note rather than treat first.",
        ],
      },
    ],
  },
  {
    slug: "integrative-pain-care-plan",
    title: "What is an integrative Pain Care Plan?",
    excerpt:
      "A written plan after specialist assessment: what appears to be driving the pain, what is worth trying, and what is unlikely to help.",
    metaDescription:
      "What an integrative Pain Care Plan includes after assessment with a pain consultant – priorities, next steps, and when procedures are considered.",
    intro:
      "Most people who come to a chronic pain clinic have already tried several things. An integrative Pain Care Plan is not a bundle of extra treatments. It is a consultant-led summary of what appears to be driving your pain, what you want to be able to do again, and which approaches have the best case for being useful next.",
    sections: [
      {
        heading: "What the plan contains",
        paragraphs: [
          "After assessment, you should leave with a clear written view. That typically covers the likely working diagnosis, the factors that seem to be maintaining the pain, and a short list of next steps in order of usefulness.",
          "Those steps may include medical management, movement, education, psychological or behavioural support, sleep and lifestyle advice, and – where the rationale is clear – a procedure. Not every element is used for every person.",
        ],
      },
      {
        heading: "Selection, not accumulation",
        paragraphs: [
          "The value of the plan is what it leaves out as much as what it includes. Repeating an injection that has not changed function, or adding another medication without reviewing the ones already in use, is not integrative care.",
          "If a treatment is unlikely to change what you can do, that should be said. A plan that tries everything at once is usually a plan that has not yet decided what matters.",
        ],
      },
      {
        heading: "After the appointment",
        paragraphs: [
          "The plan is a starting point, not a lifetime contract. It can be revised if symptoms change, if a treatment helps, or if it does not. The point of writing it down is so that you, your GP and anyone else involved can see the same reasoning.",
          "Consultations with Dr Sawyer are used to produce that plan in person, at Belsyre Court in Oxford.",
        ],
      },
    ],
  },
  {
    slug: "mindfulness-yoga-evidence",
    title: "Mindfulness, yoga and chronic pain: what the evidence supports",
    excerpt:
      "Mind-body approaches can help some people with persistent pain. They are adjuncts to medical care, not alternatives to it.",
    metaDescription:
      "What the evidence says about mindfulness, meditation and yoga for chronic pain – when they may help, and when they should not replace medical treatment.",
    intro:
      "Mindfulness, meditation and yoga are widely discussed for persistent pain. Some people find them genuinely useful. Others have been offered them instead of a proper assessment. The evidence sits between those two extremes: modest benefit for some presentations, and no substitute for diagnosis or indicated medical treatment.",
    sections: [
      {
        heading: "Where they can help",
        paragraphs: [
          "These approaches have an evidence base in some persistent pain presentations, particularly where tension, fear of movement, sleep disturbance or a high sense of threat are part of the picture. Effects are usually modest and vary between individuals.",
          "They work, when they work, by changing how the nervous system responds to symptoms – not by pretending the pain is not there. Breath, attention and gentle movement can reduce secondary muscle guarding and make pacing easier.",
        ],
      },
      {
        heading: "Where they should not be used",
        paragraphs: [
          "They are not a replacement for diagnosing a treatable cause. They should not delay medication review, imaging where it is needed, or interventional treatment when that is indicated.",
          "They are also not a test of whether you are “doing enough” for yourself. If a class or app has not helped, that does not mean you have failed. It may simply not be the right tool for this pain.",
        ],
      },
      {
        heading: "How they appear in this clinic",
        paragraphs: [
          "If mindfulness, yoga or related practices appear in a Pain Care Plan, it is because they are relevant to that person – not because they are fashionable, and not as a way of avoiding a medical decision.",
          "The first step remains specialist assessment. Adjuncts are added after that, not instead of it.",
        ],
      },
    ],
  },
  {
    slug: "when-injections-are-useful",
    title: "When are pain injections actually useful?",
    excerpt:
      "Injections can help selected patients. They should have a purpose inside a wider plan, not be the first offer because they are available.",
    metaDescription:
      "When pain injections and procedures help chronic pain, when they do not, and how they are considered after specialist assessment in Oxford.",
    intro:
      "Injections have a place in pain medicine. They also have a reputation problem, because they are sometimes repeated without a diagnosis or offered as the default next step. Used well, a procedure reduces pain enough for someone to move, sleep or work again. Used poorly, it becomes a cycle that does not change function.",
    sections: [
      {
        heading: "When a procedure has a purpose",
        paragraphs: [
          "Targeted injections and related procedures can help when the diagnosis is reasonably clear and the intervention matches it. Examples include selected nerve-related pain, certain spinal presentations, and cases where a diagnostic block genuinely informs the next decision.",
          "The useful test is practical: is there a reason to believe this will change what you can do, not only what you feel for a few weeks?",
        ],
      },
      {
        heading: "When they are less useful",
        paragraphs: [
          "Injections are less helpful – and sometimes unhelpful – when they are repeated without a diagnosis, used as a substitute for rehabilitation, or offered because “this is what we do next”. Temporary relief that does not alter the care plan is not a success.",
          "They are also the wrong first move when the main drivers are sleep, deconditioning, medication problems or a picture that has never been properly assessed.",
        ],
      },
      {
        heading: "How decisions are made here",
        paragraphs: [
          "At The Oxford Pain Doctor, a procedure is considered after assessment, against the rest of the care plan. If it is unlikely to change function, that is said plainly.",
          "Where a procedure is recommended, it is one part of a written plan – not the whole of it.",
        ],
      },
    ],
  },
  {
    slug: "understanding-nerve-pain",
    title: "Understanding nerve pain",
    excerpt:
      "Neuropathic pain feels different from ordinary tissue pain. Assessment and treatment need to reflect that difference.",
    metaDescription:
      "What nerve pain (neuropathic pain) feels like, why it persists after injury has healed, and how specialist assessment guides treatment.",
    intro:
      "Nerve pain – neuropathic pain – is often described as burning, shooting, electric or strangely located. It can follow surgery, injury or disease of the nervous system. It does not always settle when the original wound has healed, because the problem is in pain signalling, not only in a joint or disc.",
    sections: [
      {
        heading: "How nerve pain differs",
        paragraphs: [
          "Ordinary tissue pain tends to stay near the injured area and ease as healing proceeds. Nerve pain may spread, change quality, or continue long after scans look settled. People describe pins and needles, numbness, or pain from light touch that would not normally hurt.",
          "Because the mechanism is different, treatments that help joint or muscle pain may do little. That is why getting the type of pain right matters as much as finding a site on a scan.",
        ],
      },
      {
        heading: "What assessment is looking for",
        paragraphs: [
          "A specialist assessment is used to distinguish neuropathic pain from other persistent pain. History and examination still come first. Investigations are used when they will change the plan, not as a routine extra.",
          "The aim is to avoid building a plan on the wrong assumption – for example treating a disc finding that is not the source of the symptoms, or missing nerve involvement altogether.",
        ],
      },
      {
        heading: "Treatment options",
        paragraphs: [
          "Useful treatments may include certain medicines, pacing, rehabilitation matched to sensitivity, and in selected cases interventional procedures or neuromodulation. Not every option is appropriate for every person.",
          "A written Pain Care Plan should say which of these has a rationale in your case, and which does not.",
        ],
      },
    ],
  },
  {
    slug: "digital-technology-and-pain",
    title: "Can digital tools help people living with chronic pain?",
    excerpt:
      "Apps and online education can support understanding and tracking between appointments. They cannot diagnose you, and they do not replace a clinician.",
    metaDescription:
      "How digital tools can support people with chronic pain, where they fall short, and why they should stay educational rather than diagnostic.",
    intro:
      "Apps, education platforms and symptom trackers are now part of many people’s experience of persistent pain. Some find them useful between appointments. Others have been sent a link instead of a proper consultation. Digital tools can support care. They cannot replace it.",
    sections: [
      {
        heading: "What they can do well",
        paragraphs: [
          "Good educational material can help people understand why pain persists, practise pacing, and keep a simple record of sleep, activity and flare-ups. For some, that structure makes the next clinic visit more useful, because the pattern is clearer.",
          "Reminders, guided movement and information that a clinician has actually reviewed can sit comfortably alongside specialist care.",
        ],
      },
      {
        heading: "What they cannot do",
        paragraphs: [
          "An app cannot examine you, take a history with clinical judgement, interpret your scans in isolation, or take responsibility for treatment decisions. It cannot tell you whether an injection is indicated, or whether a medicine should be changed.",
          "Tools that claim to diagnose, or that replace assessment with a questionnaire score, overstep what digital support can honestly offer.",
        ],
      },
      {
        heading: "How this clinic uses information",
        paragraphs: [
          "The Oxford Pain Library is written as clinician-led education. It is here so you can read about ideas that come up in pain medicine, in clear language, without being sent away to another website.",
          "If a Digital Pain Guide is developed in future, it will stay inside that limit: educational, clinician-approved, and not a substitute for a consultation with Dr Sawyer.",
        ],
      },
    ],
  },
];

export function getPainLibraryArticle(slug: string): PainLibraryArticle | undefined {
  return painLibraryArticles.find((article) => article.slug === slug);
}
