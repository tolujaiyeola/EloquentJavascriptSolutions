/*FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

var number = 1; //declaring number variable to be used for the numbers(1-100) and initiallizing at 1.

while(number<=100){

  //first checks to see if number is divisible by 3 and 5
	if (number % 3 ===0 && number % 5 ===0){
		console.log("FizzBuzz");

	}

  //then checks to see if number is divisble by 3
	else if (number % 3 === 0){
		console.log("Fizz");
	}

  //then checks to see if number is divisible by 5
	else if(number % 5 === 0){
		console.log("Buzz");
	}

  //display the number if none of the above checks/cases apply
	else{
		console.log(number);
	}

	number++; //updates/adds 1 to be number

}// end of while loop
