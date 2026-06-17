import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site-config";
import JsonLd from "@/components/ui/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo/schema";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Mishrilal Suriya",
  description: "Explore the Contact of Mishrilal Suriya.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const contactFaqs = [
  { question: "How can I book Mishrilal Suriya for a speaking event?", answer: "You can book Mishrilal Suriya by filling out the contact form on this page or directly messaging via WhatsApp." },
  { question: "Are consulting services available for MSMEs?", answer: "Yes, consulting services are available, particularly regarding the Zero Defect Zero Effect (ZED) framework." },
  { question: "How long does it typically take to get a response?", answer: "We aim to respond to all inquiries within 24-48 business hours." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Contact", item: "/contact" }])} />
      <JsonLd data={getFAQSchema(contactFaqs)} />
      <ContactClient />
    </>
  );
}
