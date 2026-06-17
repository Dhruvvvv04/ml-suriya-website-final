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

export interface SiteConfig {
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
  };
}
