import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/seo/schema";
import { getPostBySlug, getAllPosts } from "@/lib/api/blog";
import ReactMarkdown from "react-markdown";
import { siteConfig } from "@/lib/data/site-config";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug, ["title", "excerpt", "date", "author"]);

  if (!post.title) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Mishrilal Suriya`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/publications/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Mishrilal Suriya"],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, ["title", "excerpt", "date", "author", "content", "slug"]);

  if (!post.title) {
    return notFound();
  }

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
      </div>
      <div className="relative z-10">
        <Header />
        
        <JsonLd data={getBreadcrumbSchema([
          { name: "Home", item: "/" }, 
          { name: "Publications", item: "/publications" }, 
          { name: "Blog", item: "/publications/blog" },
          { name: post.title, item: `/publications/blog/${post.slug}` }
        ])} />
        
        <JsonLd data={getArticleSchema({
          title: post.title,
          excerpt: post.excerpt || "",
          date: post.date || new Date().toISOString(),
          slug: post.slug || "",
          author: post.author,
        })} />

        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[760px]">
            <Link href="/publications/blog" className="mb-6 inline-block text-sm font-semibold text-[var(--color-p-600)] no-underline">
              ← Back to Blog
            </Link>
            <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-[var(--color-p-500)]">
              {post.date}
            </span>
            <h1 className="font-display mt-3 text-[clamp(2rem,_4vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
              {post.title}
            </h1>
            
            <article className="prose prose-p:text-[var(--color-muted)] prose-headings:text-[var(--color-ink)] prose-a:text-[var(--color-p-600)] mt-8 max-w-none space-y-4 text-sm leading-relaxed">
              <ReactMarkdown>{post.content || ""}</ReactMarkdown>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}