'use strict';
let isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function game() {
    let tries = 10;
    let a = ' ';
    let number = Math.floor(Math.random() * 100) + 1;
    console.log('number: ', number);
    game_iter(a, tries);
    function game_iter(a, n) {
        if (n == 0) {
            let responce_lose = confirm('К сожалению, Вы проиграли. Не хотите сыграть ещё?');
        if (responce_lose == true) {
            game();
        }
        else {
            return;
        }
        }
        let playerNumber = +(prompt('Угадай число от 1 до 100' + a + ', осталось попыток: ' + n).trim());
        while(!isNum(playerNumber)){
            playerNumber = +prompt('Введите число');
        }
        if (playerNumber == 0) {
            return;
        }
        if (number === playerNumber) {
            let responce_vict = confirm('Поздравляем! Вы угадали число! Хотите продолжить?');
            if (responce_vict == false) {
                return;
            }
            else {
                game();
            }
        }
        else {
            if (number > playerNumber) {
                game_iter('   Ваше число было меньше загаданного', n - 1);
                while(!isNum(playerNumber)){
                    playerNumber = +prompt('Введите число');
                }
            }
            else{
                game_iter('   Ваше число было больше загаданного', n - 1);
                while(!isNum(playerNumber)){
                    playerNumber = +prompt('Введите число');
                }
            }
        }
    }
}
game()