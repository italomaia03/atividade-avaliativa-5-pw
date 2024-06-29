const FoodResponseDto = require("../dtos/foodResponse.dto");
const foodService = require("../services/food.service");

async function createFood(req, res, next) {
  try {
    const data = req.body;
    const result = await foodService.createFood(data);
    const response = new FoodResponseDto(result);
    res.status(201).json({ ...response });
  } catch (error) {
    next(error);
  }
}

async function listFoods(_req, res, next) {
  try {
    const result = await foodService.listFoods();
    res.status(200).json({ food: result });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createFood,
  listFoods,
};
