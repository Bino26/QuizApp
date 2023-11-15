const express = require("express");
const app = express();
const connectiontoDb = require("./config/db");

connectiontoDb();

module.exports = app;
