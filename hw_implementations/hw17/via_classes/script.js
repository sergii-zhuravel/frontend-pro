class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };

  static SIZE_MEDIUM = {
    price: 75,
    calories: 30,
  };

  static SIZE_BIG = {
    price: 100,
    calories: 40,
  };

  static TOPPING_SAUCE = {
    price: 15,
    calories: 0,
  };

  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };

  static TOPPING_CHEESE = {
    price: 10,
    calories: 20,
  };

  static TOPPING_SALAD = {
    price: 20,
    calories: 5,
  };

  static TOPPING_POTATO = {
    price: 15,
    calories: 10,
  };

  static calcSum(arr, propertyName, initialValue) {
    return arr.reduce((sum, item) => sum + item[propertyName], initialValue);
  }

  constructor(size) {
    this.size = size;
    this.toppings = [];
  }

  getCalories() {
    return Hamburger.calcSum(this.toppings, "calories", this.size.calories);
  }

  getPrice() {
    return this.toppings.reduce((sum, topping) => {
      return sum + topping.price;
    }, this.size.price);
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}

const burger = new Hamburger(Hamburger.SIZE_BIG);

burger.addTopping(Hamburger.TOPPING_MAYO);
burger.addTopping(Hamburger.TOPPING_MAYO);

const  bigBurgerPrice = burger.getPrice();
// console.log(bigBurgerPrice);
const bigBurgerCalories = burger.getCalories();
// console.log(bigBurgerCalories);

bestBurger = new Hamburger(Hamburger.SIZE_BIG);

bestBurger.getPrice();
bestBurger.getCalories();
bestBurger.getCalories();
bestBurger.getCalories();
bestBurger.getCalories();
bestBurger.getCalories();
