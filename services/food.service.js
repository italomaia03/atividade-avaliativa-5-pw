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
  food.$set(data);
  return food.save();
}

async function deleteFood(id) {
  const food = model.findById(id);
  if (!food) {
    throw new NotFoundError("Food not found");
  }
  await model.deleteOne();
}

module.exports = {
  createFood,
  getOneFood,
  listFoods,
  updateFood,
  deleteFood,
};
