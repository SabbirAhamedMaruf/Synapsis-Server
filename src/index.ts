import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import modelsRoutes from "./routes/models/models.routes";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

const bootStrap = () => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Synapsis Server Running");
  });
  // Models Routes
  app.use("/api", modelsRoutes);
  app.listen(port, () => {
    console.log("Log => Synapsis server listening on port =", port);
  });
};
bootStrap();
