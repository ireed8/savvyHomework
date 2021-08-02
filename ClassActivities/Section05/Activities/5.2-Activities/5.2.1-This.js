// create an object literal 
// include a method that uses "this"
const animal = {
    name: "Rudy",
    age: 3.14,
    typeOfAnimal: "Marsupial",
    hobbies: ["bake pie", "Cathing a ball", "Sleeping"],
    bio: `${this.name} is ${this.age} years old and loves ${this.hobbies}`,
    bakesale(){
      console.log(`Welcome to ${this.name}'s bakesale.`)
    }
  };

function logThis() {
    console.log("this is: ", this);
}
console.log(logThis());

class Animal 
constructor(name, type, color, weight, age, personality) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.weight = weight = weight;
        this.age = age;
        this.personality = personality
        this.bio =`This ${this.personality} ${this.color} ${this.type} is ${this.age} years onload, wights ${this.weight} pounds, and is called ${this.name}.`
const winnyThePoo = new Animal ("winny The Poo", "bear", "purple", 130, 45, "bubbly");
console.log(winnyThePoo);
}

Animal.prototype.greet = function() {
    return `Hi, I'm a ${this.type}!`
}

console.log(winnyThePoo.greet)
