const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const images = require("./routes/api/images");

const app = express();

// body parser middleware
app.use(bodyParser.json());

// CORS middleware
app.use(cors());

// use routes
app.use("/api/images", images);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server started on port ${port}...`)
);
