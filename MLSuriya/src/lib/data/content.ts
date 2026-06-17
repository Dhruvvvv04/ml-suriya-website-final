import type {
  Credential,
  FourR,
  Philosophy,
  PhilosophyValue,
  Book,
  Service,
  Testimonial,
  YouTubeSession,
} from "@/lib/types/content";

export const heroContent = {
  subtitle: "Peaceful Profit Monk",
  title: "धन भी ध्यान भी",
  description:
    "Where Profit Meets Peace & Lasting Inner Peace",
  cta: "Explore Services",
  ctaHref: "/services",
  youtubeLabel: "Watch Daily Dhyan & Swadhyaya Sessions",
  youtubeChannel: "@PeacefulProfitMonk · Free · Open to All",
  youtubeUrl: "https://www.youtube.com/@peacefulprofitmonk",
};

export const marqueeItems = [
  "ZED Master Trainer",
  "Dhyan Master",
  "Peaceful Profit Monk",
  "ध्यान धन साधक",
  "300+ Organisations",
  "Govt. of India Certified",
  "Zero Waste · Zero Defect · Zero Mind",
];

export const credentials: Credential[] = [
  { emoji: "🏛️", title: "ZED Master Trainer", subtitle: "QCI · Govt. of India Certified", color: "v" },
  { emoji: "🧘", title: "Meditation Master Trainer", subtitle: "Daily Dhyan & Swadhyaya Sessions", color: "c" },
  { emoji: "🏭", title: "Managing Director", subtitle: "Here Quality Excellence · Vadodara", color: "g" },
  { emoji: "📖", title: "Author & Engineer", subtitle: "Published by Government of India", color: "r" },
  { emoji: "🕉️", title: "Spiritual Mission since 2020", subtitle: "Vadodara, Gujarat, India", color: "m" },
  { emoji: "🌟", title: "30+ Years of Mastery", subtitle: "Peace, Dharma & Profit Growth", color: "v" },
];

export const aboutContent = {
  heading: "About M L Suriya",
  body: "M L Suriya is a rare combination of engineer, entrepreneur, spiritual guide, and Government-certified ZED Master Trainer. He brings together ancient wisdom, modern management, and inner technology to help people grow their business and deepen their peace.",
  philosophyIcons: [
    {
      icon: "🪷",
      title: "The 4R Framework & Open Sessions",
      body: "His daily virtual Swadhyaya and Dhyan sessions are open to all. Through listening and practice, anyone can access the 4R Framework — Rupees (सम्पत्ति), Respect (सम्मान), Relations (सम्बन्ध), and Rest (समाधि).",
    },
    {
      icon: "☸️",
      title: "Holistic Vision",
      body: "He places special emphasis on Holistic Vision (Samyak-Darshan) from Jainvani and the Gita's Samatvam Yoga Uchyate as the inner technology that makes all four R's naturally available.",
    },
  ],
};

export const fourR: FourR[] = [
  {
    key: "1",
    title: "Rupees",
    devanagari: "सम्पत्ति",
    icon: "💰",
    description:
      "Lasting prosperity aligned with dharma and purposeful, ethical enterprise.",
  },
  {
    key: "2",
    title: "Relation & Respect",
    devanagari: "सम्बन्ध और सम्मान",
    icon: "🤝",
    description:
      "Real harmony is seen at home: when a mother-in-law and her son's wife relate with empathy, dignity, and mutual respect.",
  },
  {
    key: "3",
    title: "Rest",
    devanagari: "आराम",
    icon: "🧘",
    description:
      "True rest is inner calm: a steady mind, balanced breath, and deep recovery amidst work, family, and responsibility.",
  },
  {
    key: "4",
    title: "Reading",
    devanagari: "पठन",
    icon: "📖",
    description:
      "Reading sharpens judgment: when you practice the previous R's consistently, this R helps you generate more Rupees with clarity.",
  },
];

export const philosophyQuotes: Philosophy[] = [
  {
    text: "सम्यक्-दर्शन",
    trans: '"Right Perception — seeing reality without distortion."',
    src: "— Jainvani · Holistic Vision",
    glow: "var(--gold)",
    delay: 0.15,
  },
  {
    text: "समत्वं योग उच्यते",
    trans: '"Equanimity is Yoga — balance in success and failure."',
    src: "— Bhagavad Gita",
    glow: "var(--rose)",
    delay: 0.3,
  },
  {
    text: "अनेकान्त",
    trans: '"Non-absolutism — understanding multiple perspectives."',
    src: "— Jain Philosophy",
    glow: "var(--p500)",
    delay: 0.45,
  },
];

export const philosophyValues: PhilosophyValue[] = [
  {
    name: "Holistic Vision",
    hi: "सम्यक्-दर्शन",
    body: "The Jain principle of right perception — seeing reality as it is, enabling wise, ethical decisions in business and life.",
    border: "var(--p500)",
  },
  {
    name: "Zero Philosophy",
    hi: "शून्य दर्शन",
    body: "Zero Waste · Zero Defect · Zero Effect · Zero Mind — India's quality mission powered by ancient spiritual inner technology.",
    border: "var(--gold)",
  },
  {
    name: "Equanimity",
    hi: "समत्व",
    body: "Balance in all situations — the Gita's teaching of performing action with equanimity, detached from outcomes.",
    border: "var(--rose)",
  },
];

export const books: Book[] = [
  {
    title: "Zero Mind · Zero Waste · Zero Defect · Zero Effect",
    subtitle: "Written for Government of India",
    description:
      "A framework linking ancient Indian spiritual wisdom with quality excellence, introducing Zero Mind as the inner base for external transformation.",
  },
  {
    title: "Samyak Samadhan",
    subtitle: "Author's Work",
    description:
      "Explores right understanding, inner resolution, and practical life clarity. The book guides readers toward balanced decisions and peaceful progress.",
  },
];

export const services: Service[] = [
  {
    icon: "01",
    title: "Technique of Stressfree",
    description: "Practical methods to reduce stress and build a calm, balanced mind in daily life.",
  },
  {
    icon: "02",
    title: "Career Counselling",
    description: "Guidance to choose the right career path based on strengths, goals, and long-term growth.",
  },
  {
    icon: "03",
    title: "Career and Computze Counselling",
    description: "Personalized guidance for career direction and growth through practical counselling.",
  },
  {
    icon: "04",
    title: "How to Face Interview Confidently",
    description: "Step-by-step mentoring to improve interview confidence, communication, and performance.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Participants consistently report clarity, direction, and inner stability after completing the course journey.",
    name: "Course Participants",
  },
  {
    quote:
      "Understanding the purpose of life and experiencing endless happiness through the 4R framework.",
    name: "Student Feedback",
  },
];

export const readingPoints = [
  "4th R in the 4R pathway: Reading.",
  "Reading builds clarity before action and strengthens decision quality.",
  "Worth Rupees (4R): Read what improves your value, wisdom, and financial awareness.",
  "Daily reading with reflection turns knowledge into practical results.",
];

export const feedbackTopics = [
  "Purpose of life",
  "What is life",
  "What all you want in life",
  "Learning life-transforming case studies",
  "Experiencing endless happiness",
];

export const youTubeSessions: YouTubeSession[] = [
  { icon: "🧘", title: "Morning Dhyan Session", tag: "Meditation · Daily Practice" },
  { icon: "📖", title: "Swadhyaya — Self Study", tag: "Jain · Gita · Wisdom" },
  { icon: "💼", title: "Peaceful Profit Masterclass", tag: "Business · Spirituality · ZED" },
  { icon: "⭕", title: "Zero Mind — Zero Defect", tag: "Quality · Excellence · India" },
];

export const youTubeTopics = [
  "🧘 Dhyan",
  "📖 Swadhyaya",
  "💰 Profit & Peace",
  "🕉️ Jain Philosophy",
  "📿 Gita Wisdom",
  "⭕ Zero Mind",
];
