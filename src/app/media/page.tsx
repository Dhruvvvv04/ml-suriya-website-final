import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site-config";
import JsonLd from "@/components/ui/JsonLd";
import { getBreadcrumbSchema, getVideoSchema, getEventSchema } from "@/lib/seo/schema";
import MediaClient from "./MediaClient";
import { youTubeSessions, mediaHighlights } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Media & Events | Mishrilal Suriya",
  description: "Watch the latest swadhyaya sessions, interviews, and explore speaking events featuring Mishrilal Suriya.",
  alternates: {
    canonical: `${siteConfig.url}/media`,
  },
};

export default function MediaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Media", item: "/media" }])} />
      {youTubeSessions.map((video, idx) => (
        <JsonLd key={`video-${idx}`} data={getVideoSchema(video)} />
      ))}
      {mediaHighlights.map((event, idx) => (
        <JsonLd key={`event-${idx}`} data={getEventSchema(event)} />
      ))}
      <MediaClient />
    </>
  );
}
