import { BlogPost, Book, YouTubeSession } from "@/lib/types/content";

/**
 * Mock API Client for Peaceful Profit Monk platform.
 * 
 * In the future, this client will fetch data directly from the
 * peacefulprofitmonk.com backend or CMS (e.g. Sanity, Strapi, or custom API).
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_PPM_API_URL || "https://api.peacefulprofitmonk.com/v1";

export const ppmClient = {
  /**
   * Fetch latest YouTube sessions / live broadcasts.
   */
  async getLatestSessions(limit: number = 4): Promise<YouTubeSession[]> {
    try {
      // const res = await fetch(`${API_BASE_URL}/sessions?limit=${limit}`);
      // return await res.json();
      
      // Mock return
      return [];
    } catch (error) {
      console.error("Failed to fetch PPM sessions:", error);
      return [];
    }
  },

  /**
   * Fetch published books and publications.
   */
  async getBooks(): Promise<Book[]> {
    try {
      // const res = await fetch(`${API_BASE_URL}/books`);
      // return await res.json();
      return [];
    } catch (error) {
      console.error("Failed to fetch PPM books:", error);
      return [];
    }
  },

  /**
   * Fetch latest blog articles.
   */
  async getLatestArticles(limit: number = 3): Promise<BlogPost[]> {
    try {
      // const res = await fetch(`${API_BASE_URL}/articles?limit=${limit}`);
      // return await res.json();
      return [];
    } catch (error) {
      console.error("Failed to fetch PPM articles:", error);
      return [];
    }
  }
};
