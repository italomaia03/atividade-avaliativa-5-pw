const express = require("express");
const router = express.Router();

const validateFood = require("../middlewares/validateFood");
const controller = require("../controller/food.controller");

router.post("/foods", validateFood, controller.createFood);
router.get("/foods", controller.listFoods);
router.get("/foods/:id", controller.listFoodById);
router.put("/foods/:id", validateFood, controller.updateFoods);
router.delete("/foods/:id", controller.deleteFood);

module.exports = router;
