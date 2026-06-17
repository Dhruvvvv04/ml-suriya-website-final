import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site-config";
import JsonLd from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import PublicationsClient from "./PublicationsClient";

export const metadata: Metadata = {
  title: "Publications | Mishrilal Suriya",
  description: "Explore the Publications of Mishrilal Suriya.",
  alternates: {
    canonical: `${siteConfig.url}/publications`,
  },
};

export default function PublicationsPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Publications", item: "/publications" }])} />
      <PublicationsClient />
    </>
  );
}
