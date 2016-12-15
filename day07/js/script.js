(function(){
    var todo = [];
    var item = prompt('Enter your first todo item.');
    /*
    NOT OKAY:
    Esc === null
    cancel === null
    Enter === ''
    okay === ''
    spaces
    numbers

    OKAY:
    spaces...item...spaces
    */
    if( isValid(item) ){
        addTodo(item);
        checkIfMore();
    }
    function isValid(item){
        if(item !== null){
            if( item.trim() !== '' && !parseInt(item) ){
                console.log(item);
                return true;
            }else{
                alert('Invalid Input');
                return false;
            }
        }else{
            alert('Invalid Input');
            return false;
        }
    }
    function addTodo(item){
        todo.push(item);
    }
    function checkIfMore(){
        for(var moreTodo = true; moreTodo;){
            if( confirm('Want to add more?') ){
                askMore();
            }else{
                moreTodo = false;
                craftMsg();
            }
        }
    }
    function askMore(){
        var item = prompt('Enter another todo item');
        if( isValid(item) ){
            addTodo(item);
        }
    }
    function craftMsg(){
        var msg = '';
        for(var i = 0; i < todo.length; i++){
            msg += '    - ' + todo[i].trim() + '\n';
        }
        alert('My list to purchase: \n' + msg);
    }
}());

















/*
(function(){
    var createTodoList = function(){
        var todo = [];
        todo.push( prompt('What is the first item on your todo list?') );
        for(var moreTodo = true; moreTodo;){
            if( confirm('Any more items?') ){
                addTodoItem(todo);
            }else{
                moreTodo = false;
                printTodoList(todo);
            }
        }
    }();

    function addTodoItem(todoArr){
        todoArr.push( prompt('What is the next todo item?') );
    }

    function printTodoList(todoArr){
        var msg = '';
        for(var i = 0; i < todoArr.length; i++){
            msg += '    - ' + todoArr[i] + '\n';
        }
        alert('My list of items to purchase: \n' + msg);
    }
})();
*/
