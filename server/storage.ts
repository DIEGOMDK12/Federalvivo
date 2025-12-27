import { db } from "./db";
import { leads, pageViews, linkClicks, type InsertLead, type Lead } from "@shared/schema";
import { count } from "drizzle-orm";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  recordPageView(page?: string): Promise<void>;
  recordLinkClick(): Promise<void>;
  getAnalytics(): Promise<{ totalViews: number; totalClicks: number }>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }

  async recordPageView(page: string = "home"): Promise<void> {
    await db.insert(pageViews).values({ page });
  }

  async recordLinkClick(): Promise<void> {
    await db.insert(linkClicks).values({});
  }

  async getAnalytics(): Promise<{ totalViews: number; totalClicks: number }> {
    const [viewsResult] = await db
      .select({ count: count() })
      .from(pageViews);
    
    const [clicksResult] = await db
      .select({ count: count() })
      .from(linkClicks);

    return {
      totalViews: viewsResult.count,
      totalClicks: clicksResult.count,
    };
  }
}

export const storage = new DatabaseStorage();
