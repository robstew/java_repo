//Arithmetic operators
//Arithmetic operators are used to perform arithmetic calculations on numbers.

+

//Addition

–

//Subtraction

*

//Multiplication

/

//Division

++

//Increment

—

//Decrement


var result;
result = 0;
result = result + 40; // 40
result = result - 25; // 15
result = result * 2;  // 30;
result = result / 3;  // 10;


//Assignment operators
//Assignment operators assign a value to a JavaScript variable. The most commonly used operator is the equal operator (=) which assigns the value of its right operand to its left operand.

//It’s the same as

=

a = b

 a = b

+=

a += b

 a = a + b

-=

a -= b

 a = a – b

*=

a *= b

 a = a * b

/=

a /= b

 a = a / b



var result = 0;
result += 40;  // 40
result -= 25;  // 15
result *= 2;   // 30
result /= 3;   // 10

if (condition) {
 // If condition is true this code block to execute
}
//For example:

var a = 10;
if (a == 10) {
  alert("A is equal to 10");
}
//But what about if the condition is not true?
//We also have what's known as the else if statement.

If (conditionA) {
 // If conditionA is true this code block to executes
}
else if (confitionB) {
 // If conditionB is true this code block to executes
}
//For example:

var a = 10;
if (a == 10) {
  alert("A is equal to 10");
}
else if (a == 20) {
  alert("A is equal to 20");
}

//But what about if none of the previous conditions are true?
//For these scenarios we have the else statement. The code block inside the else statement will execute if none of the conditions are true.

if (conditionA) {
 // If conditionA is true this code block to executes
}
else if (confitionB) {
 // If conditionB is true this code block to executes
}
else {
  //  None of the previous conditions were true, this code block executes
}
//For example:

var a = 30;
if (a == 10) {
  alert("A is equal to 10");
}
else if (a == 20) { 
  alert("A is equal to 20");
}
else {
  alert("A is not either 10 or 20, it's something else");
}


//Comparison operators
//Use comparison operators to determine if a variable or value is equal or different when compared to another.


==

//Equal to

===

//Exactly the same value and type

!=

//Not equal

>

//Greater than

>=

//Greater than or equal to

<

//Less than

<=

//Less than or equal to



//Equal to
var a = 10;
if (a == 10) {
  alert("a is equal to 10); 
}

//Exactly same value and type
var a = "10";
if (a === 10) {
 alert("a is equal to 10");
}
else {
 alert("a is not equal to 10");  // This code block executes. Variable a is a string not  a number 
}
//Not equal
var a = 10;
var b = 20;
if (a != b) {
  alert("The values of a and b are different");
}
//Greater than
var a = 10;
if ( a > 5) {
  alert("a is greater than 5");
}
//Greater than or equal to
var a = 5;
if ( a >= 5) {
  alert("a is greater than or equal to 5");
}
//Less than
var a = 10;
if ( a <  15) {
  alert("a is less than 15");
}
//Less than or equal to
var a = 5;
if ( a <=  5) {
  alert("a is less than or equal to 5");
}

//Logical operators
//Logical operators are used to test for either true or false.

//Operator

//Description

&&

//And.

||

//Or.

!

//Not

//And
//Both condition must be true for the code block to execute.
//For example:

var a = 10;
var b = 20;
 
if (a === 10 && b === 20) {
  alert("a is equal to 10 AND ALSO b is equal to 20");
}

//Or
//Only one of the conditions must be true.

var a = 10;
var b = 30;
 
if (a === 10 || b === 20) {
  alert("Either a is equal to 10 OR b is equal to 20");
}
Not
The not (!) operators inverts the condition.

var a = 10;
if (!a == 20) {
  alert("a is not equal to 20");
}
