/*
* Оператор ветвления if
 */
if(5 > 30) {
    // body
    console.log('qweqwe');
}
console.log('poiopi');

/*
* Операатор ветвления if...else
 */

if(5 > 30) {
    console.log('x > y');
} else {
    console.log('x < y');
}

/*
* Оператор ветвления else...if
 */

const salary = 1000;
if (salary < 500) {
    console.log('Level 1');
} else if (salary > 500 && salary < 1500) {
    console.log('Level 2');
} else if (salary > 1500 && salary <3000) {
    console.log('Level 3');
} else {
    console.log('Level 4');
}

/*
* Тернарный оператор
 */
const balanse = 1000;
// let message;

// if(balanse > 0) {
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс';
// }
const message = balanse >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message);

/*
* Блочная область видимости переменных
 */