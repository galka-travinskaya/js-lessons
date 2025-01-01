/*
* - Переменные и типы примитивов 
* - const и let
* - Логирование с методом console.log
* - Уникальность идентификатора
*/

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Welcome';
const isOpen = true;
const shouldConfirm = false;

console.log('Цена строка, а цифра и буль чорные', totalPrice);

/* 
* - Оператор typeof
*/

const type = typeof isOpen;
console.log(type);

/* 
* - Как window.alert() блокирует интернет
*/
console.log('До');
alert('ALERT!')
console.log('После');