/*
 * Длина строки, свойство length
 */
const message = 'В этой строке 25 символов';
console.log('В этой строке', message.length, 'символов');

/*
 * Конкатенация строк
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
console.log(firstName);
console.log(lastName);

console.log('Конкатенация строк:', fullName);

/*
 * Напиши скрипт. который выведет строку в формате:
 * "Гость х у поселяется в z номер q",
 * подставив вместо x y z q значения переменных
 */
const room = 716;
const type = 'VIP';
// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMsg);

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */
const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников`;
console.log(orderMsg);

/*
 * Нормализация с методом toLowerCase()
 */
// 'Что ищем?'
// let brand = prompt('Давай бренд');
// brand = brand.toLocaleLowerCase();
// console.log(brand);
let brand = 'sumsUNg';
console.log(brand[4]);
console.log(brand.slice(1).toLowerCase());
brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);

/*
*Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите';
const string3 = 'Рекламная компания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));
