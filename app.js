const express = require("express");
const foodRouter = require("./routes/food.router");
const advice = require("./middlewares/controllerAdvice");

const app = express();

app.use(express.json());
app.use("/api", foodRouter);
app.use(advice.execute);

module.exports = app;
