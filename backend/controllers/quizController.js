const questionModel = require("../models/questionSchema");
const resultModel = require("../models/resultSchema");

// questions controllers

/** get all questions */
const getQuestions = async (req, res) => {
  try {
    const questions = await questionModel.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
/** insert all questinos */
const insertQuestions = async (req, res) => {
  try {
    await questionModel.insertMany({ questions: [0], answers: [0] });
    res.status(200).json({
      message: "Data Saved Sucessfuly",
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

/** Delete all Questions */
const dropQuestions = async (req, res) => {
  try {
    await questionModel.deleteMany();
    res.status(200).json({ message: "Questions Successfuly Deleted" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// result controllers

const getResult = async (req, res) => {};
const storeResult = async (req, res) => {};
const dropResult = async (req, res) => {};

module.exports = {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getResult,
  storeResult,
  dropResult,
};
