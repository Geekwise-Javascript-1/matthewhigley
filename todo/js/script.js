/*
*
* Minimum requirements
*
( function(){
    var createTodoList = function(){
        var todo = [];
        todo.push(prompt('What is the first item on your todo list?'));
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
        todoArr.push( prompt('What is the next item todo?') );
    }

    function printTodoList(todoArr){
        var msg = '';
        for(var i = 0; i < todoArr.length; i++){
            msg += '    - ' + todoArr[i] + '\n';
        }
        alert('My list of items to purchase: \n' + msg);
    }
}());
*/

/*
( function(){
    var todo = [];
    console.log(todo);
    var todoItem = prompt('What is the first item?');

    // console.log( typeof todoItem !== 'object' );
    if(todoItem !== null){
        if( !parseInt(todoItem) && todoItem.trim() !== '' ){
            console.log( todoItem.trim() );

        }
    }

}() );
*/

( function (){
  var todo =[];
  var item = prompt('Enter your first todo item');
  if( isValid(item, true) ){
    addToDo(item);
    checkIfMore();
  }
  function isValid(item, mainCall){
    if(item !== null){
      if( !parseInt(item) && item.trim() !== '' ){
        return true;
      }else{
        alert('Invalid input');
        if(mainCall){
          return false;
        }
        else{
          craftMsg();
        }
      }
    }else{
      alert('Invalid input');
      if(mainCall){
        return false;
      }
      else{
        craftMsg();
      }
    }
  }
  function addToDo(item){
      todo.push(item);
  }
  function checkIfMore(){
    for(var moreTodo = true; moreTodo;){
      if( confirm('Want to add more?') ){
        askMore();
      }else{
        moreTodo = false;
        craftMsg();
        return false;
      }
    }
  }
  function askMore(){
    var item = prompt('Enter another todo item');
    if( isValid(item, false) ){
      addToDo(item);
      // return;
    }
  }
  function craftMsg(){
    var msg = '';
    for(var i = 0; i < todo.length; i++){
        msg += '    - ' + todo[i].trim() + '\n';
    }
    alert('My list of items to purchase: \n' + msg);
  }
}() );
