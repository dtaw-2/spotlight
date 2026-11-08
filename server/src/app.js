//Imports our configured Express app
import express from "express";

//Port used by the backend API
import stylistsRoutes from "./routes/stylistsRoutes.js";

//Starts the express router
const app = express();

//Allows Express to read JSON request
app.use(express.json());

//All stylists routes will begin with /api/stylists
app.use("/api/stylists", stylistsRoutes);

//Exports the app so server.js and our tests can use it
export default app;