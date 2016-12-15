/*
*
* Function Declaration
*
*/
function helloWorldDec(){
    alert('Hello World!');
}
//helloWorldDec();

/*
*
* Function Expression
*
*/
var helloWorldExp = function(){
    alert('Hello World Again');
};
//helloWorldExp();

/*
*
* Hoisting - Brings variable names and function declarations to the top
*
*/


//write 3 function declarations
    // greeting function - alert a greeting
    // calculate function - alert a mathmatical operation
    // console a color array of 3 colors

// write 3 function declarations
    //for greeting function - pass in first & name
    //for the calculate function - pass in two numbers
    //for the color funtion - pass in 3 colors

/*
function greeting(first, last){
    alert('hey there ' + first + ' ' + last);
}
greeting('pratima', 'sakinala');

function calculate(a, b){
    alert(a + b);
}
calculate(4, 6);

function color(color1, color2, color3){
    // console.log(['red', 'yellow', 'green']);
    console.log(color1 + ' ' + color2 + ' ' + color3);
}
color('blue', 'orange', 'white');
*/

//write 3 function expressions
    // greeting function - alert a greeting
    // calculate function - alert a mathmatical operation
    // console a color array of 3 colors
// write 3 function expressions
    //for greeting function - pass in first & name
    //for the calculate function - pass in two numbers
    //for the color function - pass in 3 colors

/*
var greetingExp = function(a, b){
    alert('Another Greeting' + a + ' ' + b);
}('?', '!');

var calculateExp = function(x, y){
    alert(x * y);
};
calculateExp(4, 5);

var colorExp = function(c1, c2, c3){
    // console.log(['red', 'yellow', 'green']);
    console.log(c1 + ' ' + c2 + ' ' + c3);
}('black', 'brown', 'purple');
*/

/*
*
* Parameters & Arguments
*
*/
// parameter is a variable that is used in the function declaration
// argument is what is passed in when we call the function
function helloDec(a){
    alert('hello ' + a);
}
// helloDec('pratima');

var helloExp = function(first, last){
    alert('hi ' + first + ' ' + last);
};
// helloExp('sakinala', 'pratima');


/*
*
* Function from a Function
*
*/

/*
function hello(firstname){
    var msg = 'Hello, ' + firstname + ' Sakinala';
    popup(msg);
}

function popup(x){
    alert(x);
}

hello('pratima');
*/

//write 3 function declarations
    //1st function will expect a `firstname` and calls the 2nd function
    //2nd function will expect the first name, and concatinate to the last name & calls the 3rd function
    //3rd function will expect the first & last name and alert out: "Hello " and first & last name

function name(f, l){
    var msg = 'Hello ' + f;
    lname(msg, l);
}
name('matt', 'higley');

function lname(m, last){
    var msg = m + ' ' + last;
    pop(msg);
}

function pop(x){
    alert(x);
}

//open dungeonScript project folder and on script.js:
//create 4 function declarations
//call them: `moveNorth`, `moveEast`, `moveSouth`, `moveWest`
//console the direction that we're moving
//create a function expression called `grid`
//`grid` needs to accept 2 parameters
//call `grid` passing in 2 numbers (eg: 4, 4 or 8, 8)
