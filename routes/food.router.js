const express = require("express");
const router = express.Router();

const validateFood = require("../middlewares/validateFood");
const controller = require("../controller/food.controller");

router.post("/foods", validateFood, controller.createFood);
router.get("/foods", controller.listFoods);

module.exports = router;
