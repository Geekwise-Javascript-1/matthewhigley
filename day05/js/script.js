// create 3 variables: firstName, middleName & lastName


// function myName(){
//     var firstName = 'matt';
//     var middleName = 'david';
//     var lastName = 'higley';
//
//     // return firstName;
// }
// myName();


// IIFE - Immediately invoked function executable
( function(){
    var firstName = 'matt';
    var middleName = 'david';
    var lastName = 'higley';

    // console.log(firstName);
}() );

function doMath(num2, num1){
    console.log('within do math '+num1);
    console.log('within do math '+num2);
    return num1 + num2;
}
function getNums(){
    var a = parseInt( prompt('pick a number') );
    var b = parseInt( prompt('pick another number') );
    console.log( 'the answer is: '+doMath(a, b) );
}

// 1. write 2 functions:
    // first a declaration accepting 1 parameter
    // second an expression invoking immediately
// 2. create a var asking the user for their favorite movie
// 3. the expression calls the declaration passing an argument
// 4. pass in this variable through declaration call
// 5. declaration will have: "my favorite movie is: " saved to a variable
// 6. finally, the declaration alerts a concatination of the string & parameter

function dec(mov){
    var msg = "My favorite movie is: ";
    return msg + mov;
}

var exp = function(){
    var favMov = prompt('what is your fave movie?');
    alert( dec(favMov) );
};

// Loop:
// for
// while
// do/while

// For loop
var fruits = ['banana', 'mango', 'kiwi', 'orange', 'apple', 'pineapple', 'grape', 'peach'];
// console.log(fruits);

for(var i = 0; i < fruits.length; i++){
    // console.log( fruits[i] );
}

// create 2 arrays
// call the 1st array 'monsters' and assign 5 monsters
// call te 2nd array 'strength' and assign 5 numbers
// create a for loop to pick corresponding monster and strength to form a msg
// e.g. 'dragon has a strength of 100 points'
// console the result

var monsters = ['goblin', 'dragon', 'bandit', 'zombie', 'witch'];
var strength = [50, 20, 5, 25, 100];

for(var j = 0; j < 5; j++){
    console.log( monsters[j] + ' has a strength of ' + strength[j] + ' point');
}

// while
var text = '';
var i = 0;
while( i < fruits.length ){
    console.log( fruits[i] );
    i++;
}

// create 2 arrays
// call the 1st array 'monsters' and assign 5 monsters
// call te 2nd array 'strength' and assign 5 numbers
// create a for loop to pick corresponding monster and strength to form a msg
// e.g. 'dragon has a strength of 100 points'
// console the result
