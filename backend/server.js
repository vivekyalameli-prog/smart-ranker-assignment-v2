import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simple test route
app.get("/api/health", (req, res) => {
  console.log(res)
  res.json({ status: "ok", message: "Backend running fine 🚀" });
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
