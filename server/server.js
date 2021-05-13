const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const images = require("./routes/api/images");

const app = express();

// body parser middleware
app.use(bodyParser.json());

// CORS middleware
app.use(cors());

// db config
const db = require("./config/keys").mongoURI;

// connect to mongo
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// use routes
app.use("/api/images", images);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server started on port ${port}...`)
);
