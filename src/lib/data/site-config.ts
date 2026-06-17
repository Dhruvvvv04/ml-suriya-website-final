import type { SiteConfig } from "@/lib/types/content";

export const siteConfig: SiteConfig = {
  title: "Mishrilal Suriya | Peaceful Profit Monk",
  shortTitle: "M L Suriya",
  keywords: ["Mishrilal Suriya", "Peaceful Profit Monk", "ZED Master Trainer", "Zero Defect Zero Effect", "Spiritual Management", "Swadhyaya", "Dhyan"],
  name: "Mishrilal Suriya",
  tagline: "Peaceful Profit Monk",
  description:
    "Entrepreneur, Author, Thought Leader, Investor, Mentor, Philanthropist & Industry Expert. ZED Master Trainer certified by QCI (Government of India). Discover the path where profit meets peace through the 4R Framework.",
  url: "https://www.mishrilalsuriya.com",
  phone: "+919427611171",
  email: "info@herequality.com",
  socialLinks: {
    youtube: "https://www.youtube.com/@peacefulprofitmonk",
    linkedin: "https://linkedin.com/in/mishrilal-suriya-79361564",
    whatsapp: "https://wa.me/919427611171",
  },
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Publications", href: "/publications" },
  { label: "Courses", href: "/courses" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  navigation: [
    { label: "About", href: "/about" },
    { label: "Achievements", href: "/achievements" },
    { label: "Philosophy", href: "/philosophy" },
    { label: "Publications", href: "/publications" },
    { label: "Courses", href: "/courses" },
    { label: "Media", href: "/media" },
    { label: "Gallery", href: "/media/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Publications", href: "/publications" },
    { label: "Events", href: "/media" },
    { label: "Downloads", href: "/publications" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};
