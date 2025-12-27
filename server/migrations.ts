import { pool } from "./db";

export async function ensureTables() {
  const client = await pool.connect();
  try {
    // Create page_views table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS page_views (
        id SERIAL PRIMARY KEY,
        page TEXT NOT NULL DEFAULT 'home',
        viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create link_clicks table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS link_clicks (
        id SERIAL PRIMARY KEY,
        clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create leads table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        whatsapp TEXT NOT NULL,
        operator TEXT NOT NULL,
        plan TEXT NOT NULL,
        price TEXT NOT NULL,
        status TEXT DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("✓ Analytics tables verified/created");
  } catch (error) {
    console.error("Error creating tables:", error instanceof Error ? error.message : error);
    throw error;
  } finally {
    client.release();
  }
}
