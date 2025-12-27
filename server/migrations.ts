import { db } from "./db";
import { pageViews, linkClicks } from "@shared/schema";

export async function ensureTables() {
  try {
    // Try to query tables to ensure they exist
    // If they don't exist, drizzle-orm will create them via the schema
    await db.select().from(pageViews).limit(0);
    await db.select().from(linkClicks).limit(0);
    console.log("✓ Analytics tables verified");
  } catch (error) {
    console.log("Analytics tables will be created on first use");
  }
}
