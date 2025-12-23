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

// サーバー起動
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
