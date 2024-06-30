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
    let result = await foodService.listFoods();
    if (result.length > 0) {
      result = result.map((food) => new FoodResponseDto(food));
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function listFoodById(req, res, next) {
  try {
    const { id } = req.params;
    const result = await foodService.getOneFood(id);
    const response = new FoodResponseDto(result);
    res.status(200).json({ response });
  } catch (error) {
    next(error);
  }
}

async function updateFoods(req, res, next) {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await foodService.updateFood(id, data);
    const response = new FoodResponseDto(result);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createFood,
  listFoods,
  listFoodById,
  updateFoods,
};
