const model = require("../models/food.models");

async function createFood(data) {
  const newFood = new model(data);
  return await newFood.save();
}

async function getAllFood() {
  return await model.find();
}

async function getOneFood(id) {
  return await model.findById(id);
}

async function updateFood(id, data) {
  return await model.findByIdAndUpdate(id, data);
}

async function deleteFood(id) {
  return await model.findByIdAndDelete(id);
}

module.exports = {
  createFood,
  getOneFood,
  updateFood,
  deleteFood,
};
