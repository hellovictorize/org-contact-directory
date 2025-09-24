const express = require("express");
const cors = require("cors");
const app = express();

const organizationRoutes = require("./routes/organizationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const industryRoutes = require("./routes/industryRoutes.js");

app.use(cors());
app.use(express.json());

app.use("/api/organizations", organizationRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/industries", industryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
