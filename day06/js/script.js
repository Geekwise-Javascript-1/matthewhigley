// var fruits = ['banana', 'apple', 'pineapple', 'orange'];
// console.log( fruits.length );
// console.log(fruits);

// fruits.push( 'kiwi' );
// console.log(fruits);
//
// var str = fruits.join( ' + ' );
// console.log(str);
//
// fruits.pop();
// console.log(fruits);
//
// fruits.unshift( 'mango' );
// console.log(fruits);
//
// fruits.shift();
// console.log(fruits);

// console.log( fruits.reverse() );
//
// console.log( fruits.sort() );

// var num = [1, 21, 2, 12, 110];
// console.log( num.sort() );
//
// var a = ['a', 2, 1, 'A', 'And', 'ANd'];
// console.log( a.sort() );

// fruits.splice(x, y, str); // x=> begin index, y=> how many, str=> what to add

// fruits.splice(2, 0, 'pomegranate', 'grapes');
// console.log(fruits);

// slice(x, y)<-- x=> begin index, y=> end index (not including)
// var myFruits = fruits.slice(1, 3);
// console.log(myFruits);
// console.log(fruits);

// var b = fruits.splice(2, 2);
// console.log(b);
// console.log(fruits);



/*
*
* if statements
*
*/

// 4 != 5

/*
var userResp = prompt('do you like cats');

if( userResp == 'yes' ){
    // run this code
    alert('cat lover');
}else if( userResp == 'sometimes' ){
    alert('birds then?');
}else{
    alert('dog lover');
}
*/

// var randNum = Math.floor( Math.random() * 11 );
// var userGuess = parseInt( prompt('pick a number between 0 & 10') );
// > greater than
// < less than
// == equal to

// if the user got it right
// sorry... too high
// sorry... too low

// && == and
// || == or

if(userGuess <= 10 && userGuess >= 0){
    if( userGuess == randNum ){
        alert('correct!');
    }else if( userGuess > randNum ){
        alert('sorry... too high');
    }else if( userGuess < randNum ){
        alert('too low');
    }
}else{
    alert('pick a number BETWEEN 0 & 10');
}
// console.log(randNum);


// get gender & get true or false to ice cream
// is user male
// is user female
// if user likes ice cream


// capture user input
// create an array
// do you want to add more?
// no? alert all items
// yes? add to array

// edge casing?
// escape
// cancel
// okay
// enter
// numbers
// blank
// spaces

// use functions to repeat actions!!
