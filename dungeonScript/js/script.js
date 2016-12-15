(function(){ // IIFE
    var greet = document.querySelector('header > span');
    var hero = {};

    function checkUser(){
        if ( !localStorage.getItem('hero') ){
            var userName = prompt('What is thy hero\'s name?');
            userName = userName.charAt(0).toUpperCase() + userName.substr(1, userName.length).toLowerCase();
            hero = {
                name: userName,
                hp: 15
            };
            localStorage.setItem('hero', JSON.stringify(hero));
            greet.textContent = 'Hello, Sir ' + JSON.parse(localStorage.getItem('hero')).name;
            alert('Greetings ' + JSON.parse(localStorage.getItem('hero')).name + ' to DungeonScript.');
        } else {
            greet.textContent = 'Welcome back , Sir ' + JSON.parse(localStorage.getItem('hero')).name;
            hero.name = JSON.parse(localStorage.getItem('hero')).name;
            hero.hp = parseInt(JSON.parse(localStorage.getItem('hero')).hp);
        }
    }
    checkUser();

    var monsters = [];
    var monTypes = ['dragon', 'troll', 'ogre', 'wolf', 'homunculus', 'bat', 'hipster'];
    var monster;
    function Monster(name, hp){
        this.name = name,
        this.hp = hp
    }
    function generateMonsters(){
        var totMonsters = Math.round(Math.random() * 10);
        console.log('Total monsters: ' + totMonsters + '\n\r------------------\n\r------------------\n\r');

        for(var i = 0; i < totMonsters; i++){
            monsters[i] = new Monster();
            monsters[i].name = monTypes[ Math.floor(Math.random() * monTypes.length) ];
            monsters[i].hp = Math.ceil(Math.random() * 10);
        }
    }
    generateMonsters();

    var tableHolder = document.getElementById('table');
    var maze, cells, thisCell, exitCell;

    var n = document.getElementById('n');
    n.addEventListener('click', function(){
        moveNorth();
    });

    var e = document.getElementById('e');
    e.addEventListener('click', function(){
        moveEast();
    });

    var s = document.getElementById('s');
    s.addEventListener('click', function(){
        moveSouth();
    });

    var w = document.getElementById('w');
    w.addEventListener('click', function(){
        moveWest();
    });

    function moveNorth(){
        statusCell(thisCell, 'inactive');
        thisCell = [ thisCell[0]-1, thisCell[1] ];
        statusCell(thisCell, 'active');
        checkWalls();
        encounter();
    }
    function moveEast(){
        statusCell(thisCell, 'inactive');
        thisCell = [ thisCell[0], thisCell[1] + 1 ];
        statusCell(thisCell, 'active');
        checkWalls();
        encounter();
    }
    function moveSouth(){
        statusCell(thisCell, 'inactive');
        thisCell = [ thisCell[0] + 1, thisCell[1] ];
        statusCell(thisCell, 'active');
        checkWalls();
        encounter();
    }
    function moveWest(){
        statusCell(thisCell, 'inactive');
        thisCell = [ thisCell[0], thisCell[1] - 1 ];
        statusCell(thisCell, 'active');
        checkWalls();
        encounter();
    }

    addEventListener('keydown', function(evt){
        evt.preventDefault();
        if( (evt.keyCode === 87 || evt.keyCode === 38) && !n.disabled ){
            moveNorth();
        }else if( (evt.keyCode === 68 || evt.keyCode === 39) && !e.disabled ){
            moveEast();
        }else if( (evt.keyCode === 83 || evt.keyCode === 40) && !s.disabled ){
            moveSouth();
        }else if( (evt.keyCode === 65 || evt.keyCode === 37) && !w.disabled ){
            moveWest();
        }
    });

    var grid = function(y, x){
        console.log('// ' + y + ' rows in the grid');
        console.log('// ' + x + ' cells in each row\n\r');

        var totalCells = y * x;
        cells = [];
        var visited = [];

        for(var i = 0; i < y; i++){
            cells[i] = [];
            visited[i] = [];

            for(var j = 0; j < x; j++){
                cells[i][j] = [0, 0, 0, 0];
                visited[i][j] = false;
            }
        }

        var currentCell = [ Math.floor(Math.random() * y), Math.floor(Math.random() * x) ];
        console.log('The starting cell: ' + currentCell + '\n\r------------------\n\r');

        var path = [ currentCell ];
        console.log('path: ' + path);

        visited[ currentCell[0] ][ currentCell[1] ] = true;

        var numOfVisited = 1;

        while( numOfVisited < totalCells ){
            var possible = [
                [ currentCell[0]-1, currentCell[1], 0, 2 ],
                [ currentCell[0], currentCell[1]+1, 1, 3 ],
                [ currentCell[0]+1, currentCell[1], 2, 0 ],
                [ currentCell[0], currentCell[1]-1, 3, 1 ]
            ];

            var neighbors = [];
            console.log('// Check all four directions.');
            console.log(possible);
            console.log('\n\r// Of the four sides, does a cell exist in each direction?');

            for(var k = 0; k < 4; k++){
                if( possible[k][0] > -1 &&
                    possible[k][0] < y &&
                    possible[k][1] > -1 &&
                    possible[k][1] < x &&
                    !visited[ possible[k][0] ][ possible[k][1] ]) {
                        neighbors.push( possible[k] );
                    }
            }
            console.log(neighbors);
            // numOfVisited++;
            if(neighbors.length){
                var next = neighbors[Math.floor(Math.random() * neighbors.length)];
                console.log('\n\r// Of the available direction, randomly select one.\n\r// The selected cell to move to is: '+next+'\n\r');

                cells[ currentCell[0] ][ currentCell[1] ][ next[2] ] = 1;
                console.log('cells[ currentCell[0] ][ currentCell[1] ][ next[2] ]: cells['+currentCell[0]+']['+currentCell[1]+']['+next[2]+'] = 1');

                cells[ next[0] ][ next[1] ][ next[3] ] = 1;
                console.log('cells[ next[0] ][ next[1] ][ next[3] ]: cells['+next[0]+']['+next[1]+']['+next[3]+']');

                visited[ next[0] ][ next[1] ] = true;
                console.log('visited[ next[0] ][ next[1] ]: visited['+next[0]+']['+next[1]+'] = true');

                numOfVisited++;
                currentCell = [ next[0], next[1] ];
                console.log('\n\rcurrentCell: ' + currentCell + '\n\r----------------------');
                path.push(currentCell);
                console.log('');
            }else{
                currentCell = path.pop();
                console.log('\n\r// No neighbors found. CurrentCell: ' + currentCell + '\n\r------------------\n\r');
            }
        } //end while loop
        gridStart(path);
    }(8, 8);

    function gridStart(path){
        gridBuilder();

        thisCell = statusCell( path[0], 'active' );
        exitCell = statusCell( path[path.length - 1], 'finish' );

        checkWalls();
    }

    function statusCell(cell, status){
        if(maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.contains('exit')){
            alert('You Won!');
            location.reload();
        }
        switch(status){
            case 'active':
                maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('active');
                break;
            case 'inactive':
                maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.remove('active');
                maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('visited');
                break;
            case 'finish':
                maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('exit');
                break;
        }
        return cell;
    }

    function gridBuilder(){
        maze = document.createElement('table');
        tableHolder.appendChild(maze);

        for(var i = 0; i < cells.length; i++){
            maze.insertRow(i);

            for(var j = 0; j < cells[i].length; j++){
                maze.firstChild.childNodes[i].insertCell(j);
                thisCell = maze.firstChild.childNodes[i].childNodes[j];

                for(var k = 0; k < 4; k++){
                    switch (k) {
                        case 0:
                            cells[i][j][k] ? thisCell.classList.remove('bt') : thisCell.classList.add('bt');
                            break;
                        case 1:
                            cells[i][j][k] ? thisCell.classList.remove('br') : thisCell.classList.add('br');
                            break;
                        case 2:
                            cells[i][j][k] ? thisCell.classList.remove('bb') : thisCell.classList.add('bb');
                            break;
                        case 3:
                            cells[i][j][k] ? thisCell.classList.remove('bl') : thisCell.classList.add('bl');
                            break;
                    }
                }
            }
        }
    }

    function checkWalls(){
        var walls = cells[ thisCell[0] ][ thisCell[1] ];
        for(var i = 0; i < 4; i++){
            switch( i ){
                case 0:
                    walls[i] ? n.disabled = false : n.disabled = true;
                    break;
                case 1:
                    walls[i] ? e.disabled = false : e.disabled = true;
                    break;
                case 2:
                    walls[i] ? s.disabled = false : s.disabled = true;
                    break;
                case 3:
                    walls[i] ? w.disabled = false : w.disabled = true;
                    break;
            }
        }
    }

    function encounter(){
        // console.log(monsters.length);
        // console.log(cells.length);
        // console.log(cells[0].length);

        var probEnc = Math.round(monsters.length / (cells.length * cells[0].length) * 100);
        console.log( probEnc + '% probability of encounter' );

        var chanceEnc = Math.ceil(Math.random() * 100);
        console.log('chance of encounter: ' + chanceEnc);

        if(chanceEnc <= probEnc){
            // console.log('You ran into a monster!');

            monster = monsters.splice( Math.floor(Math.random() * monsters.length), 1 )[0];

            alert('You have encountered ' + monster.name + '!!');
            battle(monster);
        }
    }

    function battle(player){
        var takingDamage;
        if(player.name === hero.name){
            takingDamage = monster;
        }else{
            takingDamage = hero;
        }

        while(player.hp > 0 && takingDamage.hp > 0){
            console.log(player.name + ' has ' + player.hp);

            var hit = Math.ceil(player.hp / 3);
            takingDamage.hp -= hit;

            console.log(takingDamage.name + ' has taken ' + hit + ' damage!');
            checkIfAlive(takingDamage, hit);
        }
    }

    function checkIfAlive(takingDamage, hit){
        console.log(takingDamage.name + '\'s remaining hp: ' + takingDamage.hp);

        if(takingDamage.hp <= 0){
            if(takingDamage.name === hero.name){
                alert('You are dead!!');
                location.reload();
            }else{
                alert('You have defeated the monster');
            }
        }else{
            if(takingDamage.name === hero.name){
                alert('You\'ve taken ' + hit + ' damage from the combat!');
                battle(hero);
            }else{
                alert('You shot the ' + monster.name + ' for ' + hit + '!!');
                battle(monster);
            }
        }
    }
})();
