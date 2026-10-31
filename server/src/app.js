import express from "express";
import stylistsRoutes from "./routes/stylistsRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/stylists", stylistsRoutes);

export default app;