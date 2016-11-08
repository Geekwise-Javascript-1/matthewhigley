/*
var theDate = new Date();

console.log( theDate.getDay() );
console.log( theDate.getMonth() );
console.log( theDate.getDate() );
console.log( theDate.getFullYear() );

console.log( theDate.toLocaleString('us-en', {month: 'long'}) );
// https://goo.gl/obzAhL

// create a var for firstname & prompt user
// create a var for lastname & prompt user
// create a var for bday & prompt user (formatting: mm/dd/yyyy)
// alert "Matthew Higley's birthday is Saturday October 2nd 1999"

var firstname = prompt('what is your first name?');
var lastname = prompt('what is your last name?');
var theDate = new Date( prompt('what is your bday? (format: mm/dd/yyyy)') );
alert(
    firstname +
    ' ' +
    lastname +
    '\'s birthday is ' +
    theDate.toLocaleString('us-en', {weekday: 'long'}) +
    ', ' +
    theDate.toLocaleString('us-en', {month: 'long'}) +
    ' ' +
    theDate.getDate() +
    ', ' +
    theDate.getFullYear()
);
*/


/*
*
* String Object manipulation
*
*/
var firstname = prompt('Enter your name');
//
// console.log( firstname );
// console.log( firstname.length );
// console.log( firstname.indexOf('d') );
// console.log( firstname.charAt(firstname.length -1) );

var lastname = prompt('Enter your last name');

// console.log( firstname.concat(' ').concat(lastname) );
// var name = firstname.concat(' ').concat(lastname);

// console.log( name.substring( 0, firstname.length ) );

// console.log( firstname.toLowerCase() );
// console.log( firstname.toUpperCase() );
//
// console.log( firstname.trim() );

// prompt user for first name
// prompt user for last name
// capitalize only the first letter in first name & last name
// alert concatenated name

firstname = firstname.toLowerCase();
lastname = lastname.toLowerCase();

firstname = firstname.charAt(0).toUpperCase() +
            firstname.substring( 1, firstname.length);

// console.log(lastname.substring(1, firstname.length-1));
// console.log(lastname.substr(1, firstname.length-1));

lastname = lastname.charAt(0).toUpperCase() +
            lastname.substr( 1, lastname.length - 1);

alert(firstname.concat(' ').concat(lastname));
