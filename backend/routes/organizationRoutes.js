const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();

// Create Organization
router.post("/", async (req, res) => {
  try {
    const org = await prisma.organization.create({ data: req.body });
    res.json(org);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Organizations
router.get("/", async (req, res) => {
  const orgs = await prisma.organization.findMany({
    include: { industry: true, contacts: true },
  });
  res.json(orgs);
});

// Get Organization by ID
router.get("/:id", async (req, res) => {
  const org = await prisma.organization.findUnique({
    where: { id: Number(req.params.id) },
    include: { industry: true, contacts: true },
  });
  res.json(org);
});

// Update Organization
router.put("/:id", async (req, res) => {
  const org = await prisma.organization.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(org);
});

// Delete Organization
router.delete("/:id", async (req, res) => {
  await prisma.organization.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "Organization deleted" });
});

module.exports = router;
