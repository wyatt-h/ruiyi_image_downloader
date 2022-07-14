import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { pool } from "./models/pool";

import images from "./routes/images";
import indexRouter from "./routes";

const app = express();

// body parser middleware
app.use(bodyParser.json());

// CORS middleware server.js
app.use(cors());

// use routes
app.use("/api/images", images);

app.use("/sampleImage", indexRouter);

const port = process.env.PORT || 3000;

pool.query("SELECT NOW()", (err, res) => {
  if (res) {
    console.log("Postgresql successfully connected...");
  } else {
    console.error("Database connection failed: ", err);
  }
});

app.listen(port, () => console.log(`Server started on port ${port}...`));

module.exports = app;
