const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();

// Create Contact
router.post("/", async (req, res) => {
  try {
    const contact = await prisma.contact.create({ data: req.body });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Contacts
router.get("/", async (req, res) => {
  const contacts = await prisma.contact.findMany({
    include: { organization: true },
  });
  res.json(contacts);
});

// Get Contact by ID
router.get("/:id", async (req, res) => {
  const contact = await prisma.contact.findUnique({
    where: { id: Number(req.params.id) },
    include: { organization: true },
  });
  res.json(contact);
});

// Update Contact
router.put("/:id", async (req, res) => {
  const contact = await prisma.contact.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(contact);
});

// Delete Contact
router.delete("/:id", async (req, res) => {
  await prisma.contact.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "Contact deleted" });
});

module.exports = router;
