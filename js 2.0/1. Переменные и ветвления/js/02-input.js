/*
* - Ввод пользователя
* - Методы wondow.confirm() и window.prompt() 
*/

const shouldRenew = confirm('Хотите продлить подписку?');
console.log(shouldRenew);

let quantity = prompt('Введите количество товаров');
console.log(quantity);

quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);