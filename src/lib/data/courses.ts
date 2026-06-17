import type { CourseLevel } from "@/lib/types/content";

export const courses: CourseLevel[] = [
  {
    id: "foundation",
    title: "Foundation Course",
    subtitle: "Rishi · Samyak Drashti · Free · One-day course",
    highlightTitle: "Endless Happiness foundation workshop",
    highlightSubtext: "2 hours happiness workshop",
    duration: "1 Day",
    fees: "Free",
    level: "Rishi",
    focus: "Samyak Drashti (Holistic Vision)",
    whatYouLearn: [
      "Core principles of peaceful profit and dharmic clarity",
      "How to begin daily swadhyaya and meditation practice",
      "Introduction to the 4R framework for balanced growth",
      "Practical tools for calm decision-making in life and work",
    ],
  },
  {
    id: "crash",
    title: "Crash Course",
    subtitle: "Muni-Sadhak · Rs 100 fee · 7 days · Up to 2 hours daily",
    duration: "7 Days (up to 2 hours daily)",
    fees: "Rs 100",
    level: "Muni-Sadhak",
    focus: "Guided consistency and disciplined inner practice",
    dayTopics: [
      { day: "Day 1", topic: "Foundation" },
      { day: "Day 2", topic: "Rupees" },
      { day: "Day 3", topic: "Respect" },
      { day: "Day 4", topic: "Relation" },
      { day: "Day 5", topic: "Rest" },
      { day: "Day 6", topic: "Reading" },
      {
        day: "Day 7",
        topic: "References of scriptures (Gita, Tatva Sutra, Jainism, Buddhism)",
      },
    ],
    whatYouLearn: [
      "Structured daily meditation and reflection process",
      "Stress-free methods for professional and personal life",
      "Applying 4R in real decisions and relationships",
      "Habit-building tools to sustain peace and productivity",
    ],
  },
  {
    id: "kevalya",
    title: "Kevalya — DIY Course",
    subtitle: "Yogeshwar · Arihant · 3-month deep course · Charges: contact mobile",
    duration: "3 Months",
    fees: "Contact Us",
    level: "Yogeshwar · Arihant",
    focus: "Deep self-driven transformation journey",
    whatYouLearn: [
      "Advanced self-guided dhyan and swadhyaya practices",
      "Inner mastery for leadership, purpose, and steady awareness",
      "Integration of spiritual insight with business excellence",
      "Long-form transformation framework for lasting results",
    ],
  },
];

export const courseLevels = [
  { num: 1, name: "Foundation Course", levelType: "Basic", level: "Rishi · Samyak Drashti · Free · One-day course", href: "/courses/foundation" },
  { num: 2, name: "Crash Course", levelType: "Intermediate", level: "Muni-Sadhak · Rs 100 fee · 7 days · Up to 2 hours daily", href: "/courses/crash" },
  { num: 3, name: "Kevalya — DIY Course", levelType: "Advance", level: "Yogeshwar · Arihant · 3-month deep course · Charges: contact mobile", href: "/courses/kevalya" },
];
