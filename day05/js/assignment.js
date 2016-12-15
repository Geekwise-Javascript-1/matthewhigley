
function dec(mov){
    var msg = "my fav movie is ";
    // alert(msg + mov);
    return msg + mov;

}

var exp = function(){
    var userMov = prompt("what is your fav movie?");
    // dec(userMov);
    alert( dec(userMov) );
};


/*
var mon = ['one', 'two', 'three', 'four', 'five'];
var str = [100, 200, 300, 400, 500];

for(var i = 0; i < mon.length; i++){
    console.log( mon[i] + ' has a strength of ' + str[i] + ' points.' );
}
*/

// var a = "outside";
//
// function test(){
//     b = "inside"; <-- not scoped
//     var c = "also inside"; <-- IS scoped
//     console.log(b);
// }
//
// test();
//
// console.log(a);
// console.log(c);

var mon = ['one', 'two', 'three', 'four', 'five'];
var str = [100, 200, 300, 400, 500];

var i = 0;
while(i < mon.length){
    console.log( mon[i] + ' has a strength of ' + str[i] + ' points' );
    i++;

    // i++; incrementer
    // i--; decrementer
}
