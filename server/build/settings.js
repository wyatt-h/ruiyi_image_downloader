"use strict";

var dotenv = require("dotenv");

dotenv.config();
var testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
module.exports = testEnvironmentVariable;