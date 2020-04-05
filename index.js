'use strict';
let isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let input = function() {
    let a = +prompt('Введите число');
    console.log('a: ', a);
    if (!isNum(a)) {
        input();
    }
    else return a;
}

let generate = function() {
    return Math.floor(Math.random() * 100) + 1; //генерация случайного числа
}


let start = function() {
    let a;

function game() {
    let tries = 10; // количество попыток

    a = ' ';
    
    // let number = Math.floor(Math.random() * 100) + 1; //генерация случайного числа
    console.dir(game);
    function game_iter(a, n) {
        
        if (n == 0) {
            let responce_lose = confirm('К сожалению, Вы проиграли. Не хотите сыграть ещё?');
        if (responce_lose == true) {
            start();
        }
        else {
            return;
        }
        }
        let playerNumber = +(prompt('Угадай число от 1 до 100' + a + ', осталось попыток: ' + n).trim());
        if (!isNum(playerNumber)) {
            playerNumber = input();
        }

        if (playerNumber === 0) {
            return;
        }
        if (number === playerNumber) {
            let responce_vict = confirm('Поздравляем! Вы угадали число! Хотите продолжить?');
            // console.dir(game_iter());
            if (responce_vict == false) {
                return;
            }
            else {
                start();
            }
        }
        else {
            if (number > playerNumber) {
                game_iter('   Ваше число было меньше загаданного', n - 1);
                if (!isNum(playerNumber)) {
                    playerNumber = input();
                }
            }
            else{
                game_iter('   Ваше число было больше загаданного', n - 1);
                if (!isNum(playerNumber)) {
                    playerNumber = input();
                }
            }
        }
    }

    game_iter(a, tries);
    return;
}

let number = generate();
game();
return;
}

start();