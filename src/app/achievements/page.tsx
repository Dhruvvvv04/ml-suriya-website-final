import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site-config";
import JsonLd from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import AchievementsClient from "./AchievementsClient";

export const metadata: Metadata = {
  title: "Achievements | Mishrilal Suriya",
  description: "Explore the Achievements of Mishrilal Suriya.",
  alternates: {
    canonical: `${siteConfig.url}/achievements`,
  },
};

export default function AchievementsPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Achievements", item: "/achievements" }])} />
      <AchievementsClient />
    </>
  );
}
