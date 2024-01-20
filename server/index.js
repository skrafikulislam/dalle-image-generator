// WEBSITE IS NOT WORKING BECAUSE MY DALLE API KEY IS FREE. NEED TO PAY TO WORK FOR THIS .
import express, { json } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes /postRoutes.js";
import dalleRoutes from "./routes /dalleRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("<h1>Hello From OpenAi</h1>");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server Has Started On Port http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
