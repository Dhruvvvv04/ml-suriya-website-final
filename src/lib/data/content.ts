import type {
  Credential,
  FourR,
  Philosophy,
  PhilosophyValue,
  Book,
  Service,
  Testimonial,
  YouTubeSession,
  AchievementCounter,
  MediaHighlight,
  CTAContent,
} from "@/lib/types/content";

export const heroContent = {
  subtitle: "Peaceful Profit Monk · ध्यान धन साधक",
  title: "Mishrilal",
  titleAccent: "Suriya",
  tagline: "ध्यान · धन · साधना",
  description:
    "For over 30 years, guiding 300+ organisations to double their profits — through peace, dharma & the timeless science of meditation. Govt. of India certified ZED Master Trainer.",
  missionStatement:
    "Where Profit Meets Peace — transforming lives and businesses through the ancient wisdom of dharma, meditation, and the 4R Framework.",
  cta: "Explore Services",
  ctaHref: "#services",
  secondaryCta: "Connect With Me",
  secondaryHref: "#contact",
  youtubeLabel: "Watch Daily Dhyan & Swadhyaya Sessions",
  youtubeChannel: "@PeacefulProfitMonk · Free · Open to All",
  youtubeUrl: "https://www.youtube.com/@peacefulprofitmonk",
  stats: [
    { number: "30+", label: "Years of Mastery" },
    { number: "300+", label: "Organisations" },
    { number: "2×", label: "Profit Growth" },
  ],
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
  storyCards: [
    {
      icon: "🌟",
      title: "The Journey",
      body: "श्री मिश्री लाल जी सुरिया — the Peaceful Profit Monk — is Managing Director of Here Quality Excellence Pvt. Ltd., Vadodara. A Mechanical Engineer, he has devoted over three decades to guiding organisations toward excellence through Indian spiritual wisdom.",
    },
    {
      icon: "⚙️",
      title: "Precision Meets Spirituality",
      body: "As a ZED Master Trainer certified by QCI (Govt. of India) and a Master Trainer in Dhyan, he bridges engineering precision, quality management rigour, and Indian spiritual tradition into one unified practice.",
    },
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

export const achievementCounters: AchievementCounter[] = [
  { end: 30, suffix: "+", label: "Years of Mastery", emoji: "🎯", description: "Engineering to spiritual leadership" },
  { end: 300, suffix: "+", label: "Organisations Served", emoji: "🏭", description: "Quality & spiritual guidance" },
  { end: 1800, suffix: "+", label: "Meditation Sessions", emoji: "🧘", description: "Daily sessions since 2020" },
  { end: 2, suffix: "", label: "Books Published", emoji: "📖", description: "Including for Government of India" },
];

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
    glow: "var(--color-gold)",
    delay: 0.15,
  },
  {
    text: "समत्वं योग उच्यते",
    trans: '"Equanimity is Yoga — balance in success and failure."',
    src: "— Bhagavad Gita",
    glow: "var(--color-rose)",
    delay: 0.3,
  },
  {
    text: "अनेकान्त",
    trans: '"Non-absolutism — understanding multiple perspectives."',
    src: "— Jain Philosophy",
    glow: "var(--color-p-500)",
    delay: 0.45,
  },
];

export const philosophyValues: PhilosophyValue[] = [
  {
    name: "Holistic Vision",
    hi: "सम्यक्-दर्शन",
    body: "The Jain principle of right perception — seeing reality as it is, enabling wise, ethical decisions in business and life.",
    border: "var(--color-p-500)",
  },
  {
    name: "Zero Philosophy",
    hi: "शून्य दर्शन",
    body: "Zero Waste · Zero Defect · Zero Effect · Zero Mind — India's quality mission powered by ancient spiritual inner technology.",
    border: "var(--color-gold)",
  },
  {
    name: "Equanimity",
    hi: "समत्व",
    body: "Balance in all situations — the Gita's teaching of performing action with equanimity, detached from outcomes.",
    border: "var(--color-rose)",
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
      "M L Suriya Sir's guidance transformed our business approach. The 4R Framework brought clarity to both our professional decisions and personal lives.",
    name: "Business Leader",
    role: "Organization Partner",
  },
  {
    quote:
      "The daily Dhyan and Swadhyaya sessions have become the foundation of my morning routine. The peace and clarity I experience is beyond words.",
    name: "Regular Participant",
    role: "Daily Session Attendee",
  },
  {
    quote:
      "Understanding the purpose of life and experiencing endless happiness through the 4R framework has been life-changing for our entire team.",
    name: "Corporate Team",
    role: "Wellness Program Participant",
  },
  {
    quote:
      "As a ZED Master Trainer, M L Suriya Sir brings a unique blend of quality management expertise and spiritual wisdom that is truly rare.",
    name: "Industry Peer",
    role: "Quality Management Professional",
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

export const mediaHighlights: MediaHighlight[] = [
  {
    title: "Daily Dhyan & Swadhyaya Sessions",
    description: "Daily virtual meditation and self-study sessions open to all.",
    type: "event",
    status: "Ongoing",
  },
  {
    title: "Peaceful Profit Masterclass",
    description: "Business and spirituality integration masterclass.",
    type: "workshop",
    status: "Monthly",
  },
  {
    title: "4R Framework Workshop",
    description: "Introduction to the 4R path to fulfilment.",
    type: "workshop",
    status: "Quarterly",
  },
  {
    title: "Corporate Wellness Programs",
    description: "Spiritual clarity and stress management for organizations.",
    type: "event",
    status: "By Request",
  },
];

export const ctaContent: CTAContent = {
  pretitle: "Begin Your Journey",
  title: "Ready to Transform Your",
  highlight: "Life & Business?",
  description:
    "Join thousands who have discovered the path where profit meets peace. Whether you seek personal clarity, business excellence, or spiritual growth — the journey begins with a single step.",
  primaryCta: "Contact Me",
  primaryHref: "/contact",
  secondaryCta: "Watch Free Sessions",
  secondaryHref: "https://www.youtube.com/@peacefulprofitmonk",
};
