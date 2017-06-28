
function functionWithArgs(a,b){
  console.log(a+b);
}

// output will be 3

functionWithArgs(1,2);



// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

// Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

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
