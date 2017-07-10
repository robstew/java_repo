
function functionWithArgs(a,b){
  console.log(a+b);
}

// output will be 3

functionWithArgs(1,2);



// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
// Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. 
//You should always declare your variables with var.

var myGlobal=10; //global variable declared here

function fun1() {

  var oopsGlobal=5; //local variable declared here
  
  }

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}




//It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
//In this example:
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
//The function myFun will return "Head" because the local version of the variable is present.





var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); //processed = 2






//If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions because they may only be true or false.
//When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
//When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".
//another example
function trueOrFalse(wasThatTrue) {

  if(wasThatTrue){
    return "Yes, that was true"
  }
  return "No, that was false"
  }

trueOrFalse(true); // Change this value to test

//There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value.
//The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value at the right of the operator to a variable in the left.
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
//If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal".
//Strict equality (===) is the counterpart to the equality operator (==). Unlike the equality operator, strict equality tests both the data type and value of the compared elements.






// Chaining If Else Statements

function testSize(num) {

  if (num<5) {
    return "Tiny"
  } else if (num<10) {
    return "Small"
  } else if (num<15) {
    return "Medium"
  } else if (num<20) {
    return "Large"
  } else {
    return "Huge"
  }
     
  return "Change Me";

}
// change value to test
testSize(7);




//Golf Code
function golfScore(par, strokes) {

  if (strokes==1) {
    return "Hole-in-one!"
  } else if (strokes <= par -2) {
    return "Eagle"
  } else if (strokes == par -1) {
    return "Birdie"
  } else if (strokes == par) {
    return "Par"
  } else if (strokes == par +1) {
    return "Bogey"
  } else if (strokes == par +2) {
    return "Double Bogey"
  } else {
    return "Go Home!"
  }
  
  return "Change Me";

}

// change these values to test
golfScore(4, 1);

