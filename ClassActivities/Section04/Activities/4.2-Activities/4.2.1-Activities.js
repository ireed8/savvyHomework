const nums = [6, 5, 2, 3, 4, 1, 0];
let popreturn = nums.pop();
let popreturn2 = nums.pop();
console.log(popreturn,popreturn2,nums)

let shiftreturn = nums.shift();
let shiftreturn2 = nums.shift();
console.log(shiftreturn);
console.log(shiftreturn2);
console.log(nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shiftreturn2, shiftreturn);
nums.unshift(popreturn, popreturn2);
console.log(nums);