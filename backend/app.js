const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const connectiontoDb = require("./config/db");
const quizRouter = require("./routes/quizRoute");

// app middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/api/quiz", quizRouter);

connectiontoDb();

module.exports = app;
