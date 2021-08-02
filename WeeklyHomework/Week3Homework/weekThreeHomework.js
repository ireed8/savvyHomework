// step one
const pizzaToppings = ["Ham", "Cheese", "Onions", "Olive"];
 for (let name of pizzaToppings) {
  console.log(name);
 }
// let eat = [];
// step two
let greetCustomer = function() {
let eat = `Welcome to Pizza House, our toppings are `;
  for (let name of pizzaToppings) {
    eat += `${name}, `
  }
console.log(eat);
}
// order is the list the getPizzaOrder is outputting/returning
let order = [];
// step three
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} coming up!`);
  order.push(size, crust, [...toppings]);
  // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", order);
  return order;
}
let object = {};
//step four
function preparePizza(pizza) {
  console.log("...Cooking Pizza...");
  object = {
    size: pizza[0],
    crust: pizza[1],
    toppings: pizza[2]
  };
  // console.log("this is the object that should be filled", object);
  return object;
};
//step five
function servePizza(pizzaObject) {
  console.log(
    `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} pizza with ${pizzaObject.toppings} ... Enjoy!`
    );
    return pizzaObject;
}
//step six
greetCustomer();
getPizzaOrder("thick", "large", "ham", "cheese");
preparePizza(order);
servePizza(object);
