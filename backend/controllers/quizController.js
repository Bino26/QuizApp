const questionModel = require("../models/questionSchema");
const resultModel = require("../models/resultSchema");
const { questions, answers } = require("../config/data");

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
    await questionModel.insertMany({ questions, answers });
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

/** get all result */

const getResult = async (req, res) => {
  try {
    const result = await resultModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
/** post all result */

const storeResult = async (req, res) => {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");
    const r = await resultModel.create({
      username,
      result,
      attempts,
      points,
      achived,
    });
    const resultsave = r.save();
    res.status(200).json({
      message: " Result Saved Successfuly",
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

/** delete all result */
const dropResult = async (req, res) => {
  try {
    await resultModel.deleteMany();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getResult,
  storeResult,
  dropResult,
};
