const express = require("express");
const path = require("path");
const fetchData = require("./api");
const evaluateChecklist = require("./checklist");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/checklist", async (req, res) => {
  try {
    const data = await fetchData();
    const results = evaluateChecklist(data);
    res.json(results);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
