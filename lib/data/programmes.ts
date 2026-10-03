export interface ProgramVideo {
  id: string;
  title: string;
}

export interface Programme {
  id: string;
  key: string;
  letter: string;
  title: string;
  tag: string;
  description: string;
  image?: string;
  fallbackMonogram?: string;
  videos: ProgramVideo[];
  badgeText?: string;
}

export const PROGRAMMES: Programme[] = [
  {
    id: "karate",
    key: "karate",
    letter: "K",
    title: "Karate",
    tag: "Striking · Kata · Kihon",
    description: "Striking, kata, and kihon for discipline, explosive power, and traditional combat mastery.",
    image: "/assets/images/karate.jpg",
    videos: [
      { id: "jImF2PsDjNM", title: "Karate - Kihon & Kata" },
      { id: "NIDQ1uRh1eA", title: "Karate - Advanced Kata" },
    ],
    badgeText: "2 videos • Watch",
  },
  {
    id: "aikido",
    key: "aikido",
    letter: "A",
    title: "Aikido",
    tag: "Harmony · Locks · Throws",
    description: "The art of blending and non-resistance. Dynamic joint locks, redirection throws, and control pins.",
    image: "/assets/images/aikido.jpg",
    videos: [{ id: "NIDQ1uRh1eA", title: "Aikido - Harmony & Throws" }],
    badgeText: "1 video • Watch",
  },
  {
    id: "jiujutsu",
    key: "jiujutsu",
    letter: "J",
    title: "Jiujutsu",
    tag: "Grappling · Submissions",
    description: "Close-quarters combat, joint manipulation, takedowns, and fight-ending submissions.",
    image: "/assets/images/jiu-jitsu.jpg",
    videos: [
      { id: "xsrUlqMVWA4", title: "Jiujutsu - Grappling" },
      { id: "3SMcTrGEMN4", title: "Jiujutsu - Short Technique" },
    ],
    badgeText: "2 videos • Watch",
  },
  {
    id: "judo",
    key: "judo",
    letter: "J",
    title: "Judo",
    tag: "Throws · Ne-waza",
    description: "High-amplitude throws, sweep timing, and decisive ne-waza ground control.",
    image: "/assets/images/hannah-kumite.jpg",
    videos: [{ id: "irMkGRPAZVo", title: "Judo - Throws & Ne-waza" }],
    badgeText: "1 video • Watch",
  },
  {
    id: "kobudo",
    key: "kobudo",
    letter: "W",
    title: "Kobudo",
    tag: "Bo · Sai · Tonfa · Nunchaku",
    description: "Traditional Okinawan weapons mastery: bo staff, sai daggers, tonfa, and nunchaku.",
    image: "/assets/images/weapons.jpg",
    videos: [{ id: "3SMcTrGEMN4", title: "Kobudo - Weapons Demo" }],
    badgeText: "1 video • Watch",
  },
  {
    id: "selfdefense",
    key: "selfdefense",
    letter: "S",
    title: "Integrated Self-Defense",
    tag: "Unified protection system",
    description: "Practical survival and situational awareness fusing all 5 core arts into adaptive personal safety.",
    image: "/assets/images/marilyn-kids.jpg",
    videos: [
      { id: "3SMcTrGEMN4", title: "Self-Defense - Short 1" },
      { id: "4DxUkvtzJpE", title: "Self-Defense - Short 2" },
    ],
    badgeText: "2 videos • Watch",
  },
  {
    id: "instructor",
    key: "instructor",
    letter: "I",
    title: "Instructor Training",
    tag: "Teach · Lead · Certify",
    description: "Comprehensive pedagogical and martial arts leadership curriculum to become a certified CMA sensei.",
    image: "/assets/images/instructor.jpg",
    videos: [{ id: "4DxUkvtzJpE", title: "Instructor Training" }],
    badgeText: "1 video • Watch",
  },
  {
    id: "culture",
    key: "culture",
    letter: "C",
    title: "CMA Culture",
    tag: "Dojo Life · Budo Etiquette",
    description: "Character building, respect, community, and the timeless philosophy of classical Japanese budo.",
    image: "/assets/images/lovefeastgroup.jpg",
    videos: [{ id: "4DxUkvtzJpE", title: "CMA Dojo Life" }],
    badgeText: "1 video • Watch",
  },
];

export interface GuidanceGoal {
  name: string;
  desc: string;
  label: string;
  image: string;
}

export const GUIDANCE_GOALS: GuidanceGoal[] = [
  {
    label: "Self-Protection",
    name: "Integrated Self-Defense",
    desc: "Practical survival and situational combat fusing Karate, Aikido, Jiujutsu, Judo, and Kobudo into adaptive personal safety for real-world defense.",
    image: "/assets/images/marilyn-kids.jpg",
  },
  {
    label: "Traditional Budo",
    name: "Karate & Aikido",
    desc: "Standing striking, kata, kihon, and classical budo etiquette developed to cultivate lifelong discipline, mental sharpness, and explosive power.",
    image: "/assets/images/karate.jpg",
  },
  {
    label: "Combat Grappling",
    name: "Jiujutsu & Judo",
    desc: "High-amplitude throws, takedowns, decisive ground control, and joint submissions to neutralize any attacker regardless of size.",
    image: "/assets/images/jiu-jitsu.jpg",
  },
  {
    label: "Weapons Mastery",
    name: "Kobudo",
    desc: "Classical Okinawan weapons mastery: Bo staff, Sai daggers, Tonfa, and Nunchaku to develop speed, spatial awareness, and lethal range.",
    image: "/assets/images/weapons.jpg",
  },
  {
    label: "Instructor Pathway",
    name: "Instructor Training",
    desc: "Comprehensive pedagogical and leadership certification curriculum designed to prepare senior practitioners to become certified CMA Sensei.",
    image: "/assets/images/instructor.jpg",
  },
  {
    label: "Youth & Character",
    name: "Junior Budo & Culture",
    desc: "Fostering unshakeable confidence, physical coordination, respect, and laser focus for children, teens, and young practitioners.",
    image: "/assets/images/kid-seating.jpg",
  },
];
