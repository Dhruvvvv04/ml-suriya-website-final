import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site-config";
import GalleryClient from "./GalleryClient";
import JsonLd from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Gallery | Mishrilal Suriya",
  description: "Explore the Gallery of Mishrilal Suriya.",
  alternates: {
    canonical: `${siteConfig.url}/media/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Media", item: "/media" }, { name: "Gallery", item: "/media/gallery" }])} />
      <GalleryClient />
    </>
  );
}
