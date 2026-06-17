import type { SiteConfig } from "@/lib/types/content";

export const siteConfig: SiteConfig = {
  name: "Mishrilal Suriya",
  tagline: "Peaceful Profit Monk",
  description:
    "Spiritual Guide, ZED Master Trainer, Author, Engineer, Entrepreneur. Discover the path where profit meets peace through the 4R Framework.",
  url: "https://www.mishrilalsuriya.com",
  phone: "+919427611171",
  email: "info@herequality.com",
  socialLinks: {
    youtube: "https://www.youtube.com/@peacefulprofitmonk",
  },
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Publications", href: "/publications" },
  { label: "Courses", href: "/courses" },
  { label: "Gallery", href: "/media/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  navigation: [
    { label: "About", href: "/about" },
    { label: "Philosophy", href: "/philosophy" },
    { label: "Publications", href: "/publications" },
    { label: "Courses", href: "/courses" },
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
