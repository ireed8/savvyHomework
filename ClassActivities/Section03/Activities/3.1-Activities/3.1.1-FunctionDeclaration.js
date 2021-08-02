// a function with 4 parameters, param4 has a default value
function myFunction(param1 = "large", param2 = "thin", param3 = "toppings", param4 = "One large thick crust pizza with x, y, z, ... coming up!") {
    // logging each param
    console.log(param1, param2, param3);
    console.log(param4);
  }
  
  // passing in only 1 argument to our function
  myFunction();
  // prints:
  // 2 undefined
  // undefined a