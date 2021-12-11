"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bodyParser = require("body-parser");

var cors = require("cors");

var images = require("./routes/api/images");

var app = (0, _express["default"])(); // body parser middleware

app.use(bodyParser.json()); // CORS middleware server.js

app.use(cors()); // use routes

app.use("/api/images", images);
var port = process.env.PORT || 5000;
module.exports = app;
app.listen(port, function () {
  return console.log("Server started on port ".concat(port, "..."));
});