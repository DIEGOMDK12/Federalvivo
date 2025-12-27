import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post("/api/analytics/page-view", async (req, res) => {
    try {
      const { page } = req.body;
      await storage.recordPageView(page);
      res.status(201).json({ success: true });
    } catch (err) {
      console.error("Error recording page view:", err);
      res.status(500).json({ error: "Failed to record page view" });
    }
  });

  app.post("/api/analytics/link-click", async (req, res) => {
    try {
      await storage.recordLinkClick();
      res.status(201).json({ success: true });
    } catch (err) {
      console.error("Error recording link click:", err);
      res.status(500).json({ error: "Failed to record link click" });
    }
  });

  app.get("/api/analytics", async (req, res) => {
    try {
      const password = req.query.password as string;
      if (password !== "506731") {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const analytics = await storage.getAnalytics();
      res.json(analytics);
    } catch (err) {
      console.error("Error fetching analytics:", err);
      res.status(500).json({ error: "Failed to fetch analytics" });
    }
  });

  return httpServer;
}
