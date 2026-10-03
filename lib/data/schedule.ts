export interface ScheduleItem {
  id: string;
  day: string;
  tabLabel: string;
  programme: string;
  subtitle: string;
  time: string;
  venue: string;
  venueAddress: string;
  image: string;
  description: string;
  highlights: string[];
  audience: string;
}

export const SCHEDULE: ScheduleItem[] = [
  {
    id: "monday",
    day: "Monday",
    tabLabel: "Monday",
    programme: "Adult Karate",
    subtitle: "Foundations, Kata & Technical Drills",
    time: "7:30 – 9:30 AM",
    venue: "National Stadium",
    venueAddress: "Velodrome Arena, Package A, Abuja",
    image: "/assets/images/karate.jpg",
    description:
      "Morning foundational discipline focusing on Kihon (basics), dynamic stances, traditional Shotokan kata, and breath-centered movement coordination.",
    highlights: [
      "Stance alignment & striking mechanics",
      "Traditional kata sequence mastery",
      "Cardiovascular stamina & mental focus",
    ],
    audience: "Adults & Teens (All Belt Levels)",
  },
  {
    id: "wednesday",
    day: "Wednesday",
    tabLabel: "Wednesday",
    programme: "Karate & Kumite",
    subtitle: "Sparring Dynamics & Combat Application",
    time: "7:30 – 9:30 AM",
    venue: "National Stadium",
    venueAddress: "Velodrome Arena, Package A, Abuja",
    image: "/assets/images/hannah-kumite.jpg",
    description:
      "Mid-week tactical kumite and applied bunkai drills designed to build rapid reflex timing, effective distance control, and sparring confidence.",
    highlights: [
      "Point sparring & continuous exchange drills",
      "Defensive parries & counter-attack timing",
      "Pad conditioning and impact mechanics",
    ],
    audience: "Intermediate & Advanced Practitioners",
  },
  {
    id: "saturday-am",
    day: "Saturday Morning",
    tabLabel: "Saturday AM",
    programme: "All Ages & Youth Budo",
    subtitle: "Youth Development & Family Training",
    time: "8:00 – 10:00 AM",
    venue: "National Stadium",
    venueAddress: "Velodrome Arena, Package A, Abuja",
    image: "/assets/images/marilyn-kids.jpg",
    description:
      "A high-energy weekend session designed for children, young practitioners, and families to cultivate character, anti-bullying habits, and martial discipline.",
    highlights: [
      "Agility, flexibility & tumbling coordination",
      "Respect, discipline & listening focus",
      "Kyu rank syllabus & belt promotion prep",
    ],
    audience: "Children, Teens & Family Groups",
  },
  {
    id: "saturday-pm",
    day: "Saturday Afternoon",
    tabLabel: "Saturday PM",
    programme: "Integrated Self-Defense",
    subtitle: "Aikido, Jiujutsu & Close-Quarters Combat",
    time: "1:00 – 3:00 PM",
    venue: "Old Parade Ground",
    venueAddress: "FCT Sports Complex, Area 10, Garki, Abuja",
    image: "/assets/images/aikido.jpg",
    description:
      "A multi-discipline tactical system blending Aikido redirection, Jiujutsu joint controls, and Judo takedown defense for real-world threat neutralization.",
    highlights: [
      "Wrist locks, joint manipulation & throws",
      "Ground recovery & hold escapes",
      "Non-lethal restraint & situational awareness",
    ],
    audience: "Adult Practitioners & Professionals",
  },
  {
    id: "sunday",
    day: "Sunday",
    tabLabel: "Sunday",
    programme: "Advanced Masterclass",
    subtitle: "Kobudo Weapons & Black Belt Intensive",
    time: "2:30 – 4:00 PM",
    venue: "Old Parade Ground",
    venueAddress: "FCT Sports Complex, Area 10, Garki, Abuja",
    image: "/assets/images/weapons.jpg",
    description:
      "Specialized weekend intensive dedicated to classical Okinawan weapons (Bo, Jo, Sai, Tonfa), senior grading requirements, and instructor pedagogy.",
    highlights: [
      "Traditional Kobudo weapons handling",
      "Advanced partner bunkai applications",
      "Senior Dan grading & instructor coaching",
    ],
    audience: "Graduating Students & Instructors",
  },
];
