console.log(3 === '3'); // Number vs string - false
console.log(3 === 3); // Number vs Number - true


// - undefind => false
//  - null     => false
//  - 0        => false
//  - Nan      => false
//  - ''       => false
//  - false    => false

console.log(Boolean('false'));
// подвійна інверсія - використовюють завжди замість Boolean
console.log(!!'false');


// Примітивні типи даних

// Виведи на екран загальну кількість яблук. Різниця яблук та винограду
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log('Загальна кількість яблук та винограду:', total);
const diff = grapes - apples;
console.log('Різниця яблук та винограду:', diff);

// Заміни зараз перевизначення комбінованим оператором +=
let students = 100;
students += 50; // students = students + 50;
console.log(students);

// Розбери пріоритет операторів в інструкції привласнення значення result
const result = 108 + 223 - 2 * 5;
console.log(result); // * + -


// Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil(), Math.round(). Перевір, що буде в консолі при значеннях 27.3 та 27.9 
const value = 27.5;
console.log(Math.ceil(value)); //28
console.log(Math.floor(value)); //27
console.log(Math.round(value)); //28


// Шаблонні рядки
// Склади речення за допомогою шаблонних рядків A bas B bots in stock, де А, В - змінні вставлені в рядок
const companyName = 'Cyberdyn Systems';
const repairBots = 180;
const defenceBots = 50;
const message = `${companyName} bas ${repairBots + defenceBots} bots in stock`;
console.log(message);

const name = 'Artem';
const age = 28;
const result1 = name + ' age ' + age;
console.log(result1);

const c = 10 + 22 + '44' + 1; //String - домінуючий тип даних
console.log(c); //32441
console.log(typeof c);

const a = 2 * '3'; //Number - домінуючий тип даних
console.log(a); //6
console.log(typeof a);

const b = 3 - '1';
console.log(b); //6
console.log(typeof b);

const value_1 = 10;
const value_2 = '10';
const result_1 = value_1 - Number(value_2);
console.log(result_1);


// Методи рядків та чейнінг
//  Напиши скрипт, який розраховує індекс маси тіла людини. для цього необхідно розділити вагу в кг на квадрат висоти людини у м.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а у вигляді рядків (спеціально для завдання). 
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздвльник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми.
let weight = '88,3';
let height = '1.75';
// weight = weight.replace(',', '.'); //робить заміну
// console.log('Замінили , на .:', weight);
// weight = Number(weight);
// console.log('Замінили рядок на номер:', weight);
weight = Number(weight.replace(',', '.'));
console.log('Оптимізували 2 рядки в 1:', weight);
height = Number(height); //або
console.log('Перевели висоту в число:', height);
height = +height; // також призводить до числа, але відходить від стандартів
console.log('Перевели висоту в число:', height);
// const bmi = weight / Math.pow(height, 2); //або аналог
// console.log(bmi);
const bmi = Number((weight / height ** 2).toFixed(1)); //округлили 
console.log(bmi);


// Оператори порівняння та приведення типів
// Яким буде результат виразів?
console.log(5 > 3); //true
console.log(10 >= '7'); //true
console.log('2' > '12'); //true порівнює код символу 32>31
console.log('4' == 4); //true
console.log('6' === 6); //false
console.log('false' === false); //false
console.log(1 == true); // true => true - 1 false - 0
console.log(1 === true); //false => різні типи даних
console.log('0' == false); //true
console.log('0' === false); // false
console.log('Papaya' < 'papaya'); //true порівнює код символу 50 < 70
console.log('Papaya' === 'papaya'); //false порівнює код символу 50 === 70
console.log('papaya' < 'papaua'); // false порівнює код символу y79 < u75
console.log(undefined == null); //true приведення типів
console.log(undefined === null); //false


//Логічні оператори
// && хоче і з ліва і з права true, повертає осаннє true або перше false значення
console.log(true && 3); //3
console.log(false && 3); //false
console.log(true && 4 && 'kiwi'); //kiwi
console.log(true && 0 && 'kiwi') //0
// || повертає перше true, або оствнній false
console.log(true || 3); //true
console.log(3 || true || 4); // 3
console.log(true || false || 4); // true
console.log(null || 2 || undefined); //2
console.log(1 || null || 2); //1
console.log((1 && null && 2) > 0); //false => false > 0 => 0 > 0
console.log(null || (2 && 3) || 4); //3


// Значення за замовчуванням та оператор нульового злиття ??
// || працює на 6 значень які повертають false
// ?? працює на 2 значення які повертають null, undefined
const incomingValue = 5;
// const result_4 = incomingValue + Number('jhnjh'); // користувач ввів не вірні дані
let test = 0;
console.log(test);

const value_3 = test ?? 'some value';
console.log(value_3);

// console.log('Kористувач ввів не вірні дані:', result_4);
// const defaultValue = 10; //для цього робим дефолт значення
// const value_3 = result_4 || defaultValue;
// console.log(value_3);

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing


