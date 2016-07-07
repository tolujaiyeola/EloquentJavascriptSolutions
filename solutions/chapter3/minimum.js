/**

Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

condition ? expr1 : expr2

**/

//function declared and saved into variable min
var min = function(input1, input2) {

    if (input1 < input2) {

        return input1;
    } else if (input2 < input1) {
        return input2;
    } else

        return "Same value."
};

min(500, 00); // test input
