/****

Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

****/

var output = ""; //declare variable to store the displayed output
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {

        //checks to make sure the sum of the roll(i)and column(j) is odd and assign " "
        if ((i + j) % 2 === 0) {
            output += " ";
        }

        //if even
        else {
            output += "#";
        }
    }
    output += "\n"; //add newline to go to next row
}

console.log(output); //displays output
