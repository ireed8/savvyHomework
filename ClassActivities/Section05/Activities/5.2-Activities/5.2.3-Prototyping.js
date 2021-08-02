// create a variable "timeOfDay" and assign it a string


// create a variable "greeting" that references a template literal
// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"


// print "greeting"


// create a new variable, but do not assign it a value


// print the variable and its type
// ? what type should we expect?


// assign the variable a value that indicates the variable is purposely blank
// ? what value should we assign?
// create a function constructor that works as a template for an Animal 
// include properties for name, type, weight, etc.
class Animal {
    constructor(name, type, color, weight, age, personality){
        this.name = name
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
        this.personality = personality;
        this.bio = `This ${this.personality} ${this.color} ${this.type} is ${this.age} years old, weighs ${this.weight} pounds, and is called ${this.name}.`
    }
    greeting() {
        return "Hello!";
    }
}

class Cat extends Animal {
    constructor (name, type, color, age, personality, breed) {
        super(name, type, color, age, personality);
        this.breed = breed;  
    }
    greeting() {
        return "meeeoow!"
    }
}

const Garfield = new Cat("Garfield", "calico", "orange", 74, "Mutt");
console.log(Garfield) 
console.log(Garfield.greeting());

console.log(Garfield.bio);

 