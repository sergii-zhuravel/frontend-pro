function Hamburger(size) {
  this.size = size;
  this.toppings = [];
}

Hamburger.calcSum = function (arr, propertyName, initialValue) {
  return arr.reduce((sum, item) => sum + item[propertyName], initialValue);
};

Hamburger.SIZE_SMALL = {
  price: 50,
  calories: 20,
};

Hamburger.SIZE_BIG = {
  price: 100,
  calories: 40,
};

Hamburger.TOPPING_SAUCE = {
  price: 15,
  calories: 0,
};

Hamburger.TOPPING_MAYO = {
  price: 20,
  calories: 5,
};

Hamburger.TOPPING_CHEESE = {
  price: 10,
  calories: 20,
};

Hamburger.TOPPING_SALAD = {
  price: 20,
  calories: 5,
};

Hamburger.TOPPING_POTATO = {
  price: 15,
  calories: 10,
};

Hamburger.prototype.getCalories = function () {
  return Hamburger.calcSum(this.toppings, "calories", this.size.calories);
};

Hamburger.prototype.getPrice = function () {
  return this.toppings.reduce((sum, topping) => {
    return sum + topping.price;
  }, this.size.price);
};

Hamburger.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

const burger = new Hamburger(Hamburger.SIZE_BIG);

burger.addTopping(Hamburger.TOPPING_MAYO);
burger.addTopping(Hamburger.TOPPING_MAYO);
burger.getPrice();
burger.getCalories();

bestBurger = new Hamburger(Hamburger.SIZE_BIG);

bestBurger.getPrice();
bestBurger.getCalories();
bestBurger.getCalories();
bestBurger.getCalories();
bestBurger.getCalories();
bestBurger.getCalories();
