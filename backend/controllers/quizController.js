const questionModel = require("../models/questionSchema");
const resultModel = require("../models/resultSchema");

// questions controllers
const getQuestions = async (req, res) => {};
const insertQuestions = async (req, res) => {};
const dropQuestions = async (req, res) => {};

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
