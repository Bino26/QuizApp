const express = require("express");
const quizRouter = express.Router();
const {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getResult,
  storeResult,
  dropResult,
} = require("../controllers/quizController");

// Questions routes
quizRouter
  .route("/questions")
  .get(getQuestions)
  .post(insertQuestions)
  .delete(dropQuestions);

// Result routes

quizRouter.route("/result").get(getResult).post(storeResult).delete(dropResult);

module.exports = quizRouter;
