export interface Instructor {
  id: string;
  name: string;
  role: string;
  title: string;
  category?: "Senior Instructor" | "Assistant Instructor";
  bio: string[];
  image?: string;
  monogram?: string;
  bgGradient?: string;
}

export interface ChiefInstructor {
  name: string;
  title: string;
  rank: string;
  bio: string[];
  stats: { value: string; label: string }[];
  monogram: string;
  image?: string;
}

export const CHIEF_INSTRUCTOR: ChiefInstructor = {
  name: "Shihandai ‘Femi Johnson, CMAP",
  title: "Global Chief Instructor",
  rank: "5th Dan Black Belt · Global Chief Instructor · 35+ Years of Teaching",
  bio: [
    "Shihandai ‘Femi Johnson has spent more than 35 years studying and teaching classical martial arts in Nigeria and abroad. He holds black belts in Karate, Aikido, Judo, Jujutsu, Kobudo, Tong-Il Moo-Do and Self-Defence, and is also a senior teacher (Lǎoshī) of Qigong and Tai Chi Chu’an. He has trained and taught across Africa, Europe, Asia and North America.",
    "Under his leadership, CMA has become a full martial arts institution offering structured programmes for every age and skill level to students in Abuja and across the diaspora. His guiding principle is that the dojo is a mirror, not a machine: training builds character as surely as it builds technique.",
  ],
  stats: [
    { value: "35+", label: "Years teaching" },
    { value: "7", label: "Black belts" },
    { value: "5th Dan", label: "Black belt rank" },
  ],
  monogram: "FJ",
  image: "/assets/images/O.J-Aikido.jpg",
};

export const INSTRUCTORS: Instructor[] = [
  {
    id: "sensei-isaac",
    name: "Sensei Isaac Umaru",
    role: "4th Dan Karate · 10+ Years of Teaching",
    title: "Senior Instructor",
    category: "Senior Instructor",
    image: "/assets/images/Sensei-Isaac.jpg",
    monogram: "IU",
    bgGradient: "from-[#132a38] via-[#0d1d27] to-[#060f15]",
    bio: [
      "Sensei Isaac is one of CMA’s longest-serving instructors, with more than ten years of teaching. He also trains in Judo, Aikido and Integrated Self-Defence.",
      "As a certified dance and choreography instructor, he brings a strong feel for rhythm, timing and flow to his classes.",
    ],
  },
  {
    id: "sensei-richard",
    name: "Sensei Richard U. Abraham",
    role: "3rd Dan Karate · 8+ Years of Teaching",
    title: "Senior Instructor",
    category: "Senior Instructor",
    image: "/assets/images/sensei-richqrd.jpg",
    bgGradient: "from-[#3b082c] via-[#2b0520] to-[#180212]",
    bio: [
      "Sensei Richard is a national Karate athlete and an African silver medallist in Jujutsu. He has taught at CMA for more than eight years and also practises Aikido and Integrated Self-Defence.",
      "He is a certified Yoga and Level 2 Tai Chi instructor, so his classes pair power with breath, balance and recovery.",
    ],
  },
  {
    id: "sensei-nasir",
    name: "Sensei Nasir Lawal",
    role: "3rd Dan Karate · 10+ Years of Teaching",
    title: "Senior Instructor",
    category: "Senior Instructor",
    image: "/assets/images/Sensei-Nasir.jpeg",
    bgGradient: "from-[#11243b] via-[#0d1c30] to-[#060e18]",
    bio: [
      "Sensei Nasir is an experienced Karate coach with more than a decade of teaching at CMA. He also trains in Aikido, Jujutsu and Integrated Self-Defence.",
      "His classes are known for their focus on solid fundamentals and steady, disciplined progression.",
    ],
  },
  {
    id: "sempai-patience",
    name: "Sempai Patience Tukura",
    role: "2nd Dan Karate · 7+ Years of Teaching",
    title: "Senior Instructor",
    category: "Senior Instructor",
    image: "/assets/images/patience_cropped_img.jpeg",
    monogram: "PT",
    bgGradient: "from-[#3d1a08] via-[#2b1205] to-[#170a03]",
    bio: [
      "Sempai Patience is a national Karate athlete and an African gold medallist in Jujutsu. She has taught at CMA for more than seven years and also practises Aikido and Jujutsu.",
      "She brings competitive sharpness and composure to every session.",
    ],
  },
  {
    id: "sempai-lucy",
    name: "Sempai Lucy Ojobo",
    role: "2nd Dan Karate · 5+ Years of Teaching",
    title: "Senior Instructor",
    category: "Senior Instructor",
    monogram: "LO",
    bgGradient: "from-[#350c3d] via-[#24082a] to-[#130317]",
    bio: [
      "Sempai Lucy is an African gold medallist in Jujutsu and has taught at CMA for more than five years.",
      "She also trains in Judo and Aikido, which gives her teaching a well-rounded grounding in both striking and grappling.",
    ],
  },
  {
    id: "sempai-mfonobong",
    name: "Sempai Mfonobong A. Ezekiel",
    role: "2nd Dan Karate · 8+ Years of Teaching",
    title: "Senior Instructor",
    category: "Senior Instructor",
    image: "/assets/images/senpai_mfonobong_amos.jpg",
    bgGradient: "from-[#092e29] via-[#06201c] to-[#03110f]",
    bio: [
      "Sempai Mfonobong has taught at CMA for more than eight years. He practises Aikido and Jujutsu and is a certified Yoga and Level 2 Tai Chi instructor.",
      "His classes weave mobility and mindful movement into traditional training.",
    ],
  },
  {
    id: "sempai-benjamin",
    name: "Sempai Benjamin Joseph",
    role: "3rd Kyu · Assistant Instructor",
    title: "Assistant Instructor",
    category: "Assistant Instructor",
    image: "/assets/images/benjamin-joseph.jpg",
    bgGradient: "from-[#1b2330] via-[#121822] to-[#090d13]",
    bio: [
      "Sempai Benjamin supports classes across the CMA programme.",
      "He practises Aikido, Jujutsu and Integrated Self-Defence and is a certified Yoga instructor.",
    ],
  },
  {
    id: "sempai-victoria",
    name: "Sempai Victoria Olasunkanmi",
    role: "3rd Kyu · Assistant Instructor",
    title: "Assistant Instructor",
    category: "Assistant Instructor",
    image: "/assets/images/temi-olasukanmi.jpg",
    bgGradient: "from-[#380e22] via-[#260917] to-[#13040b]",
    bio: [
      "Sempai Victoria assists with teaching across the CMA programme.",
      "She practises Aikido, Jujutsu and Integrated Self-Defence and is a certified Yoga instructor.",
    ],
  },
];
