import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site-config";
import JsonLd from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import PhilosophyClient from "./PhilosophyClient";

export const metadata: Metadata = {
  title: "Philosophy | Mishrilal Suriya",
  description: "Explore the Philosophy of Mishrilal Suriya.",
  alternates: {
    canonical: `${siteConfig.url}/philosophy`,
  },
};

export default function PhilosophyPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Philosophy", item: "/philosophy" }])} />
      <PhilosophyClient />
    </>
  );
}
