function validateFood(req, res, next) {
  const { name, category, quantity, expirationDate, price } = req.body;
  const errors = [];
  for (const key in req.body) {
    if (!req.body[key]) {
      errors.push(`The field '${key}' is mandatory.`);
    }
  }

  if (typeof name !== "string") {
    errors.push("The field 'name' must be a string.");
  }

  if (typeof category !== "string") {
    errors.push("The field 'category' must be a string.");
  }

  if (typeof quantity !== "number") {
    errors.push("The field 'quantity' must be a number.");
  }

  if (typeof expirationDate !== "String") {
    const date = new Date(expirationDate);
    if (!date) errors.push("The field 'expirationDate' must be a Date.");
  }

  if (typeof price !== "number") {
    errors.push("The field 'price' must be a number.");
  }

  if (price < 0) {
    errors.push("The field 'price' must be greater than or equal to R$0.00.");
  }

  if (errors.length) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  next();
}

module.exports = validateFood;
