import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site-config";
import JsonLd from "@/components/ui/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo/schema";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Courses | Mishrilal Suriya",
  description: "Explore the Courses of Mishrilal Suriya.",
  alternates: {
    canonical: `${siteConfig.url}/courses`,
  },
};

const coursesFaqs = [
  { question: "Are these courses suitable for beginners?", answer: "Yes, the Foundation Course is perfectly designed for absolute beginners looking to find a balance between work and spiritual peace." },
  { question: "How is the Kevalya DIY course different from the Crash Course?", answer: "The Crash Course is a 7-day guided consistency program, while the Kevalya DIY is an advanced, self-driven 3-month transformative journey designed for deep mastery." },
  { question: "Do I need any prior meditation experience?", answer: "No prior experience is necessary. The courses guide you step-by-step from fundamental Swadhyaya concepts to advanced Dhyan practices." },
];

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Courses", item: "/courses" }])} />
      <JsonLd data={getFAQSchema(coursesFaqs)} />
      <CoursesClient />
    </>
  );
}
