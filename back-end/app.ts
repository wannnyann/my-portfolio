import express from "express";
import "dotenv/config";
import profileRoutes from "./routes/profile.ts";
import achievementsRoutes from "./routes/achievements.ts";
import skillsRoutes from "./routes/skills.ts";

const app = express();
app.use(express.json());

app.use("/profile", profileRoutes);
app.use("/achievements", achievementsRoutes);
app.use("/skills", skillsRoutes);

const PORT = Number(process.env.PORT) || 8000;

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
