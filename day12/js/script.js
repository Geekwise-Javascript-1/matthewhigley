if( !localStorage.getItem('firstname') && !localStorage.getItem('lastname') ){
    localStorage.setItem('firstname', prompt('what is your first name?') );
    localStorage.setItem('lastname', prompt('what is your last name?') );
    sessionStorage.setItem('password', prompt('what is your password?'));
}else{
    var firstname = localStorage.getItem('firstname');
    var lastname = localStorage.getItem('lastname');
    alert( firstname + ' ' + lastname + ' is back!');
}

// modify the script checking if BOTH first && last name are stored
// if not, prompt user for values
// alert first and last name message
