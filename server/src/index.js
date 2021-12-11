import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");

const images = require("./routes/api/images");

const app = express();

// body parser middleware
app.use(bodyParser.json());

// CORS middleware server.js
app.use(cors());

// use routes
app.use("/api/images", images);

const port = process.env.PORT || 5000;

module.exports = app;

app.listen(port, () => console.log(`Server started on port ${port}...`));
