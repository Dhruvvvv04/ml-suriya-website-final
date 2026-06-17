import { siteConfig } from "@/lib/data/site-config";
import { Book, MediaHighlight, YouTubeSession } from "@/lib/types/content";

/**
 * Global Schema Generators for Mishrilal Suriya website
 */

export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mishrilal Suriya",
  url: siteConfig.url,
  image: `${siteConfig.url}/image.png`,
  jobTitle: ["Entrepreneur", "Author", "Spiritual Guide", "ZED Master Trainer"],
  worksFor: {
    "@type": "Organization",
    name: "Here Quality Excellence Pvt. Ltd.",
  },
  sameAs: [
    siteConfig.socialLinks.youtube,
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.whatsapp,
  ].filter(Boolean),
  description: siteConfig.description,
  knowsAbout: [
    "Zero Defect Zero Effect",
    "Spiritual Management",
    "Meditation",
    "Swadhyaya",
    "Quality Excellence",
    "4R Framework",
    "Peaceful Profit",
  ],
  alumniOf: [],
  award: ["ZED Master Trainer certified by Quality Council of India"],
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Here Quality Excellence Pvt. Ltd.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/image.png`,
  founder: {
    "@type": "Person",
    name: "Mishrilal Suriya",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    email: siteConfig.email,
  },
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.title,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const getBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((breadcrumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: breadcrumb.name,
    item: `${siteConfig.url}${breadcrumb.item}`,
  })),
});

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const getBookSchema = (book: Book) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.title,
  author: {
    "@type": "Person",
    name: "Mishrilal Suriya",
  },
  description: book.description,
  url: `${siteConfig.url}/publications`,
});

export const getEventSchema = (event: MediaHighlight) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  description: event.description,
  organizer: {
    "@type": "Person",
    name: "Mishrilal Suriya",
  },
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "TBD",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
});

export const getVideoSchema = (video: YouTubeSession) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.title,
  description: `Daily Swadhyaya & Dhyan session: ${video.tag}`,
  thumbnailUrl: [`${siteConfig.url}/og-image.png`],
  uploadDate: new Date().toISOString(), // In reality, this should be the video's actual date
  embedUrl: siteConfig.socialLinks.youtube, // Placeholder
  publisher: {
    "@type": "Organization",
    name: "Peaceful Profit Monk",
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/image.png`,
    },
  },
});

export const getArticleSchema = (post: { title: string; excerpt: string; date: string; slug: string; author?: string; image?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: post.image || `${siteConfig.url}/og-image.png`,
  datePublished: new Date(post.date).toISOString(),
  author: {
    "@type": "Person",
    name: post.author || "Mishrilal Suriya",
  },
  publisher: {
    "@type": "Organization",
    name: "Peaceful Profit Monk",
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/image.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/publications/blog/${post.slug}`,
  },
});
