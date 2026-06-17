import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site-config";
import AboutClient from "./AboutClient";
import JsonLd from "@/components/ui/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "About Mishrilal Suriya | ZED Master Trainer & Author",
  description: "Learn about Mishrilal Suriya's journey from engineering to spiritual management. A ZED Master Trainer, author of 'Peaceful Profit Monk', and thought leader.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const aboutFaqs = [
  { question: "Who is Mishrilal Suriya?", answer: "Mishrilal Suriya is a ZED Master Trainer, author, and thought leader who integrates engineering excellence with spiritual management. He is the creator of the 4R Framework and the Peaceful Profit Monk philosophy." },
  { question: "What is the 4R Framework?", answer: "The 4R Framework stands for Rupees, Respect, Relation, and Rest. It is a holistic business philosophy developed by Mishrilal Suriya to help entrepreneurs achieve financial success without sacrificing mental peace or personal relationships." },
  { question: "What does a ZED Master Trainer do?", answer: "As a ZED (Zero Defect Zero Effect) Master Trainer certified by the Quality Council of India, Mishrilal Suriya helps MSMEs implement sustainable and high-quality manufacturing practices that minimize environmental impact while maximizing efficiency." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "About", item: "/about" }])} />
      <JsonLd data={getFAQSchema(aboutFaqs)} />
      <AboutClient />
    </>
  );
}
