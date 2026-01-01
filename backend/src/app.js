import express from "express";
import helmet from "helmet";
import cors from "./config/cors.js";
import rateLimit from "./middlewares/rateLimit.middleware.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors);
app.use(rateLimit);

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend odontológico funcionando" });
});

export default app;
