const NotFoundError = require("../errors/notFound.error");
const model = require("../models/food.models");

async function createFood(data) {
  const newFood = new model(data);
  return await newFood.save();
}

async function listFoods() {
  return await model.find();
}

async function getOneFood(id) {
  const result = await model.findById(id);
  if (!result) {
    throw new NotFoundError("Food not found");
  }
  return result;
}

async function updateFood(id, data) {
  const food = await model.findById(id);
  if (!food) {
    throw new NotFoundError("Food not found");
  }
  return food;
}

async function deleteFood(id) {
  return await model.findByIdAndDelete(id);
}

module.exports = {
  createFood,
  getOneFood,
  listFoods,
  updateFood,
  deleteFood,
};
