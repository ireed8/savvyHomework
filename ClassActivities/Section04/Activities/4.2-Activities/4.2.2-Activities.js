const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"

// find the last index of "a", "b", and "c"

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDups(array, letter) {
let firstindex = array.indexOf(letter);
let lastindex = array.lastIndexOf(letter);
while (firstindex !== lastindex) {
    array.splice(lastindex, 1);
    lastindex = array.lastIndexOf(letter);
    
    }
    return array
};

console.log(removeDups(arr, "x"));
