export interface Instructor {
  id: string;
  name: string;
  role: string;
  title: string;
  quote?: string;
  bio: string[];
  image?: string;
  monogram?: string;
  bgGradient?: string;
}

export const CHIEF_INSTRUCTOR = {
  name: "Shihandai 'Femi Johnson",
  rank: "5th-Degree Black Belt · Chief Instructor · 35+ Years",
  bio: "Holding multiple black belts across Karate, Aikido, Jiujutsu, Kobudo, Tong-Il Moo-Do and Self-Defense, Shihandai Johnson has dedicated over three decades to the study and teaching of classical martial arts in Nigeria. Under his leadership, CMA has grown into a comprehensive martial arts institution serving Abuja with structured programmes for all ages and skill levels.",
  stats: [
    { value: "35+", label: "Years experience" },
    { value: "6", label: "Black belts" },
    { value: "5th", label: "Degree rank" },
  ],
  monogram: "FJ",
};

export const INSTRUCTORS: Instructor[] = [
  {
    id: "sensei-richqrd",
    name: "Sensei Richqrd",
    role: "3rd Dan Shotokan Karate · Aikido · Tai Chi & Jiujutsu",
    title: "Senior Instructor",
    image: "/assets/images/sensei-richqrd.jpg",
    bgGradient: "from-[#3b082c] via-[#2b0520] to-[#180212]",
    quote:
      "Martial arts is not about brute strength; it is about absolute economy of motion, structural alignment, and mental tranquility under pressure. When you master your own balance across multiple disciplines, you master any conflict before it begins.",
    bio: [
      "Sensei Richqrd is an instructor with extensive experience across multiple martial arts disciplines. He holds a 3rd Dan in Shotokan Karate, 1st Dan in Wushu Kung Fu, and is a Level 2 Tai Chi Practitioner and Certified Instructor, as well as a Brown Belt in Aikido.",
      "He also has training and practical experience in Judo, Combat Jiu-Jitsu, Japanese Jujutsu, and Integrated Self-Defence.",
    ],
  },
  {
    id: "sensei-nasir",
    name: "Sensei Nasir Lawal",
    role: "3rd Dan · Shotokan Karate",
    title: "Senior Associate Instructor",
    image: "/assets/images/sensei-nas.jpg",
    bgGradient: "from-[#11243b] via-[#0d1c30] to-[#060e18]",
    quote:
      "Consistency and clean fundamentals build unbreakable champions. We do not just teach punches and kicks—we build character, unwavering resilience, and high self-belief in every student who steps onto our tatami.",
    bio: [
      "His approach places emphasis on clean technique, consistency and creating a positive training environment in which young practitioners can grow.",
      "He is also the Founder and Head Coach of the Warrior Reborn Karate Academy (WRKA), and coach of many national champions.",
    ],
  },
  {
    id: "senpai-patience",
    name: "Senpai Patience Tukura",
    role: "2nd Dan · Shotokan Karate & Children's Programme",
    title: "Senior Youth Instructor",
    monogram: "PT",
    bgGradient: "from-[#3d1a08] via-[#2b1205] to-[#170a03]",
    quote:
      "Children thrive when given structured boundaries, authentic discipline, and genuine encouragement. In our youth dojo, every technique learned is a fundamental stepping stone toward life-long confidence, focus, and mutual respect.",
    bio: [
      "Senpai Patience leads the children's and teenagers' pathway at CMA, helping young practitioners develop strong fundamentals alongside discipline, confidence and respect.",
    ],
  },
  {
    id: "senpai-lucy",
    name: "Senpai Lucy Ojobo",
    role: "2nd Dan · Shotokan Karate",
    title: "Senior Conditioning Specialist",
    monogram: "LO",
    bgGradient: "from-[#350c3d] via-[#24082a] to-[#130317]",
    quote:
      "True budo endurance is forged when mind, body, and breath unite. Through targeted conditioning, stamina work, and core development, we train every physical function in your body for peak martial power and recovery.",
    bio: [
      "Senpai Lucy Ojobo is the aerobics and conditioning master; anything from strength to cardio to core, she works every physical function in your body.",
    ],
  },
  {
    id: "senpai-mfonobong",
    name: "Senpai Mfonobong Amos",
    role: "1st Dan · Shotokan Karate",
    title: "Senior Assisting Instructor",
    image: "/assets/images/senpai_mfonobong_amos.jpg",
    bgGradient: "from-[#092e29] via-[#06201c] to-[#03110f]",
    quote:
      "Breath is the origin of martial power. By integrating mindful alignment and meditative focus with dynamic karate kata, practitioners learn to move with fluid strength, grace, and unwavering internal calm.",
    bio: [
      "Senpai Mfonobong blends a foundation in yoga practice to help practitioners approach their practice with grace and focus.",
    ],
  },
  {
    id: "senpai-benjamin",
    name: "Senpai Benjamin Joseph",
    role: "5th Kyu · Shotokan Karate & Jiu-Jitsu",
    title: "Assisting Instructor",
    image: "/assets/images/benjamin-joseph.jpg",
    bgGradient: "from-[#1b2330] via-[#121822] to-[#090d13]",
    quote:
      "Adaptive self-defense requires a seamless transition between striking at range and controlling on the ground. We train practitioners to remain calm, analytical, and decisive in any unpredictable real-world scenario.",
    bio: [
      "Benjamin Joseph teaches a curated blend of Shotokan karate and his experience in Japanese Jiu-Jitsu for adaptive self-defence.",
    ],
  },
  {
    id: "senpai-victoria",
    name: "Senpai Victoria Olasukanmi",
    role: "5th Kyu-dan · Shotokan Karate & Jiu-Jitsu",
    title: "Youth Development Instructor",
    image: "/assets/images/temi-olasukanmi.jpg",
    bgGradient: "from-[#380e22] via-[#260917] to-[#13040b]",
    quote:
      "Every martial artist was once a beginner who refused to quit. In our foundational training, we nurture patience, technical precision, and the joyful spirit of martial discovery from the very first lesson.",
    bio: [
      "Experienced with kids at foundational levels. Senpai Olasukanmi is the dedicated instructor for your child.",
    ],
  },
];
