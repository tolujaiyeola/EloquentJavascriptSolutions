/**
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
**/


function isEven(number) {
    //Math.abs(number);
    //used to check if odd at current/after recursive call input
    if (number === 1) {
        return "False";
        //check if even
    } else if (number === 0) {
        return "True";
    } else {

        //recursive call
        return isEven(number - 2);
    }
}


console.log(isEven(7)); // testing function
