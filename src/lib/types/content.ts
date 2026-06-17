export interface NavLink {
  label: string;
  href: string;
}

export interface Credential {
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
}

export interface FourR {
  key: string;
  title: string;
  devanagari: string;
  icon: string;
  description: string;
}

export interface Philosophy {
  text: string;
  trans: string;
  src: string;
  glow: string;
  delay: number;
}

export interface PhilosophyValue {
  name: string;
  hi: string;
  body: string;
  border: string;
}

export interface Book {
  title: string;
  subtitle: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  author?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface CourseLevel {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  fees: string;
  level: string;
  focus: string;
  whatYouLearn: string[];
  highlightTitle?: string;
  highlightSubtext?: string;
  dayTopics?: { day: string; topic: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  avatar?: string;
}

export interface YouTubeSession {
  icon: string;
  title: string;
  tag: string;
}

export interface Achievement {
  number: string;
  label: string;
  suffix?: string;
}

export interface AchievementCounter {
  end: number;
  suffix: string;
  label: string;
  emoji: string;
  description: string;
}

export interface MediaHighlight {
  title: string;
  description: string;
  type: "event" | "interview" | "workshop" | "appearance";
  status?: string;
  platform?: string;
}

export interface CTAContent {
  pretitle: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
}

export interface SiteConfig {
  title: string;
  shortTitle: string;
  keywords: string[];
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  socialLinks: {
    youtube?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    whatsapp?: string;
  };
}
