interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mishrilal Suriya",
    alternateName: "M L Suriya",
    description:
      "Entrepreneur, Author, Thought Leader, Investor, Mentor, Philanthropist & Industry Expert. ZED Master Trainer certified by QCI (Government of India). Managing Director of Here Quality Excellence Pvt. Ltd.",
    url: "https://www.mishrilalsuriya.com",
    image: "https://www.mishrilalsuriya.com/image.png",
    jobTitle: "Managing Director",
    worksFor: {
      "@type": "Organization",
      name: "Here Quality Excellence Pvt. Ltd.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        addressCountry: "India",
      },
    },
    knowsAbout: [
      "ZED Certification",
      "Quality Management",
      "Meditation",
      "Spiritual Guidance",
      "Business Excellence",
      "Jain Philosophy",
      "4R Framework",
    ],
    sameAs: [
      "https://www.youtube.com/@peacefulprofitmonk",
      "https://linkedin.com/in/mishrilal-suriya-79361564",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "ZED Master Trainer",
        recognizedBy: {
          "@type": "Organization",
          name: "Quality Council of India",
          parentOrganization: {
            "@type": "Organization",
            name: "Government of India",
          },
        },
      },
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Here Quality Excellence Pvt. Ltd.",
    url: "https://www.mishrilalsuriya.com",
    logo: "https://www.mishrilalsuriya.com/favicon.svg",
    founder: {
      "@type": "Person",
      name: "Mishrilal Suriya",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9427611171",
      contactType: "customer service",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mishrilal Suriya",
    url: "https://www.mishrilalsuriya.com",
    description:
      "Official website of Mishrilal Suriya — Entrepreneur, Author, ZED Master Trainer, and Spiritual Guide.",
    publisher: {
      "@type": "Person",
      name: "Mishrilal Suriya",
    },
  };
}
