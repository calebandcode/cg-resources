export interface MembershipPlan {
  id: string;
  programme: string;
  chip: string;
  fromLabel: string;
  monthlyPrice: string;
  childNote: string;
  childPriceHighlight?: string;
  periods: {
    label: string;
    price: string;
    billingNote: string;
  }[];
}

export interface BeginnerPackage {
  id: string;
  ribbon: string;
  title: string;
  includes: string;
  price: string;
}

export interface WalkInRate {
  id: string;
  title: string;
  price: string;
  subtitle: string;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "karate",
    programme: "Karate",
    chip: "K",
    fromLabel: "Adult from",
    monthlyPrice: "₦20,000",
    childNote: "Child / teenager from",
    childPriceHighlight: "₦15,000/month",
    periods: [
      { label: "Quarterly", price: "₦55,000", billingNote: "every 3 months" },
      { label: "6 months", price: "₦110,000", billingNote: "every 6 months" },
      { label: "Yearly", price: "₦225,000", billingNote: "per year" },
    ],
  },
  {
    id: "aikido",
    programme: "Aikido",
    chip: "A",
    fromLabel: "Adult from",
    monthlyPrice: "₦20,000",
    childNote: "Harmony, locks & throws",
    periods: [
      { label: "Quarterly", price: "₦55,000", billingNote: "every 3 months" },
      { label: "6 months", price: "₦110,000", billingNote: "every 6 months" },
      { label: "Yearly", price: "₦225,000", billingNote: "per year" },
    ],
  },
  {
    id: "jiujutsu",
    programme: "Jiujutsu",
    chip: "J",
    fromLabel: "Adult from",
    monthlyPrice: "₦18,000",
    childNote: "Grappling & submissions",
    periods: [
      { label: "Quarterly", price: "₦50,000", billingNote: "every 3 months" },
      { label: "6 months", price: "₦100,000", billingNote: "every 6 months" },
      { label: "Yearly", price: "₦200,000", billingNote: "per year" },
    ],
  },
  {
    id: "judo",
    programme: "Judo",
    chip: "D",
    fromLabel: "Adult from",
    monthlyPrice: "₦18,000",
    childNote: "Throws & ne-waza",
    periods: [
      { label: "Quarterly", price: "₦50,000", billingNote: "every 3 months" },
      { label: "6 months", price: "₦100,000", billingNote: "every 6 months" },
      { label: "Yearly", price: "₦200,000", billingNote: "per year" },
    ],
  },
  {
    id: "kobudo",
    programme: "Kobudo",
    chip: "W",
    fromLabel: "Adult from",
    monthlyPrice: "₦20,000",
    childNote: "Okinawan weapons",
    periods: [
      { label: "Quarterly", price: "₦55,000", billingNote: "every 3 months" },
      { label: "6 months", price: "₦110,000", billingNote: "every 6 months" },
      { label: "Yearly", price: "₦225,000", billingNote: "per year" },
    ],
  },
  {
    id: "selfdefense",
    programme: "Self-Defense",
    chip: "S",
    fromLabel: "Beginner package",
    monthlyPrice: "₦180,000",
    childNote: "All five core disciplines unified",
    periods: [
      { label: "Ongoing rates", price: "Contact us", billingNote: "on request" },
    ],
  },
];

export const BEGINNER_PACKAGES: BeginnerPackage[] = [
  {
    id: "karate-adult",
    ribbon: "Starter",
    title: "Karate — Adult",
    includes: "Includes Form, One Month Payment & Uniform",
    price: "₦80,000",
  },
  {
    id: "karate-child",
    ribbon: "Starter",
    title: "Karate — Child / Teen",
    includes: "Includes Form, One Month Payment & Uniform",
    price: "₦75,000",
  },
  {
    id: "aikido-adult",
    ribbon: "Starter",
    title: "Aikido — Adult",
    includes: "Includes Form, One Month Payment & Uniform",
    price: "₦80,000",
  },
  {
    id: "jiujutsu-adult",
    ribbon: "Starter",
    title: "Jiujutsu — Adult",
    includes: "Includes Form, One Month Payment & Uniform",
    price: "₦70,000",
  },
  {
    id: "judo-adult",
    ribbon: "Starter",
    title: "Judo — Adult",
    includes: "Includes Form, One Month Payment & Uniform",
    price: "₦70,000",
  },
  {
    id: "kobudo-adult",
    ribbon: "Starter",
    title: "Kobudo — Adult",
    includes: "Includes Form & Beginners Pack",
    price: "₦80,000",
  },
  {
    id: "isd-complete",
    ribbon: "Complete",
    title: "Integrated Self-Defense",
    includes: "All five core disciplines",
    price: "₦180,000",
  },
];

export const WALK_IN_RATES: WalkInRate[] = [
  {
    id: "adult-walkin",
    title: "Adult walk-in / session",
    price: "₦15,000",
    subtitle: "Adult walk-in / session",
  },
  {
    id: "child-walkin",
    title: "Child / teen walk-in",
    price: "₦10,000",
    subtitle: "Child / teen walk-in",
  },
  {
    id: "private-adult",
    title: "Private adult / session",
    price: "₦15,000",
    subtitle: "Private adult / session",
  },
  {
    id: "private-child",
    title: "Private child / teen",
    price: "₦10,000",
    subtitle: "Private child / teen",
  },
];
