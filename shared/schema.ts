import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  whatsapp: text("whatsapp").notNull(),
  operator: text("operator").notNull(), // vivo, tim, claro
  plan: text("plan").notNull(), // plan description
  price: text("price").notNull(), // price in BRL
  status: text("status").default("new"), // new, contacted
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({ 
  id: true, 
  createdAt: true,
  status: true 
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;

// Plans data structure
export const PLANS = {
  vivo: [
    { id: "vivo-1", name: "40GB + Ligações", price: "49,90" },
    { id: "vivo-2", name: "80GB + Ligações", price: "69,90" },
    { id: "vivo-3", name: "150GB + Ligações", price: "99,90" },
  ],
  tim: [
    { id: "tim-1", name: "100GB + Ligações", price: "69,90" },
    { id: "tim-2", name: "200GB + Ligações", price: "159,90" },
  ],
  claro: [
    { id: "claro-1", name: "80GB + Ligações", price: "69,90" },
    { id: "claro-2", name: "150GB + Ligações", price: "99,90" },
  ],
};
