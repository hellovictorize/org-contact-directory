const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World from backend" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
