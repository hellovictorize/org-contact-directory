// backend/routes/industryRoutes.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

// Create Industry
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const industry = await prisma.industry.create({
      data: { name },
    });
    res.json(industry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Industries
router.get("/", async (req, res) => {
  try {
    const industries = await prisma.industry.findMany();
    res.json(industries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Industry by ID
router.get("/:id", async (req, res) => {
  try {
    const industry = await prisma.industry.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    res.json(industry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Industry
router.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const updated = await prisma.industry.update({
      where: { id: parseInt(req.params.id) },
      data: { name },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Industry
router.delete("/:id", async (req, res) => {
  try {
    await prisma.industry.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Industry deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
