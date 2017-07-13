
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






//Selecting from many options with Switch Statements
//Statements are executed from the first matched case value until a break is encountered


function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer="alpha";
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;
    case 4:
      answer="delta";
    break;
    default:
      answer="No dice"
  }
  
  return answer;  
}

// change this value to test
caseInSwitch(1);





//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  var answer = "";

  switch(val){
    case 1:
    case 2:
    case 3:
      answer="Low";
      break;
    case 4:
    case 5:
    case 6:
      answer="Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer="High";
      break;
  }
  
  return answer;  
}

// change this value to test
sequentialSizes(1);







//Accessing Objects Properties with Bracket Notation
//If the property of the object you are trying to access has a space in it, you will need to use bracket notation.
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];  //entreeValue = 'hamburger'
var drinkValue = testObj["the drink"];  //drinkValue = 'water'


//Accessing Objects Properties with Variables
//Another use of bracket notation on objects is to use a variable to access a property. This can be very useful for iterating through lists of the object properties or for doing the lookup.
//Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;      
var player = testObj[playerNumber]; //player = "Montana"



//Updating Object Properties
//After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
// Example

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

myDog.name="Happy Coder"; //changes myDog.name to 'Happy Coder'




//Delete Properties from a JavaScript Object
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

delete myDog.tails; //removes tails property from var myDog




//Using Objects for Lookups
//Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. 
//This is most useful when you know that your input data is limited to a certain range.
function phoneticLookup(val) {
  var result = "";

  var lookUp = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
  result=lookUp[val];

  return result;
}

// Change this value to test
phoneticLookup("alpha"); //output is "Adams"






//Testing Objects for Properties
//Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object
//has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {

  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
  else{
    return "Not Found"}
  
  return "Change Me!";
}

checkObj("gift"); //returns 'pony'
checkObj("house"); //returns 'Not Found'







//Manipulating Complex Objects
//Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. 
//They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
//You will need to place a comma after every object in the array, unless it is the last object in the array.