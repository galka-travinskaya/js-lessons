/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

let elementWidth = '50.25px';
elementWidth = Number.parseInt(elementWidth);
// elementWidth = ;
console.log('elementWidth:', elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:', elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрешки на примере console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;
salary = Number(salary.toFixed(2));
console.log('toFixed:', salary);

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение  NaN и метод Number.isNaN(value)
 */
let quantity = '30';
let value = 'Эту строку невозможно привести к числу';
console.log('Strict with number in number:', Number(quantity));
console.log('Strict in number:', Number(value));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

const base = 2;
const power = 5;
const result = Math.pow(base, power);
console.log('Math.pow():', result);
console.log('**:', 2 ** 5);
console.log('**:', base ** power);


/*
* Напиши скрипт, который просит пользователя ввести число и степеньб
* возводит число в эту степень и выводит результат в коносоль
*/

// 1. Попроси ввести число и сохрани в переменную
// 2. Попроси ввести степень и сохрани в переменную
// 3. Вовзеди введенные данные в степень и выведи

let secBase = prompt('Давай число');
secBase = Number(secBase);
console.log('Число задачи:', secBase);

let secPower = prompt('Давай степень');
secPower = Number(secPower);
console.log('Степень задачи:', secPower);

const secResult = secBase ** secPower;
console.log('Результат задачи:', secResult);

/*
* Генерим псевдослучайный числа
* - Math.random
* - Math.round()
 */

const max = 50;
const min = 10;
console.log(Math.random() * (max - min) + min);

const thirdResult = Math.round(Math.random() * (max - min) + min);
console.log(thirdResult);

/*
* Генерим цвета
 */

const colors = ['tomato', 'teal', 'orange', 'deeppink'];
const secMax = colors.length - 1;
const secMin = 0;
const index = Math.round(Math.random() * (secMax - secMin) + secMin);
console.log('Индекс цвета:', index);

const color = colors[index];
console.log('Цвет:', color);

document.body.style.backgroundColor = color;

