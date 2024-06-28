class FoodResponseDto {
  constructor(food) {
    this.id = food._id;
    this.name = food.name;
    this.category = food.category;
    this.price = food.price;
    this.quantity = food.image;
    this.expirationDate = food.expirationDate;
  }
}

module.exports = FoodResponseDto;
