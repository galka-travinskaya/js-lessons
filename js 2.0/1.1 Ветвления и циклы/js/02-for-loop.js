/*
 * Цикл for
 */

for (let i = 0; i < 2; i += 1) {
  console.log(i);
}

console.log('qweqwe');

/*
 * Pre-increment и Post-increment не использовать
 */

// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// создать переменную
const minSalary = 500;
const maxSalary = 5000;
const employees = 3;
let totalSalary = 0;
// перебрать работников в цикле
for(let i = 1; i <= employees; i += 1) {
// сгенерить случайную зп
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
    console.log(`Зп работника №${i} = ${salary}`);
// прибавить к тоталу
    totalSalary += salary;    
}
// вывести
console.log('totalSalary:', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// Создать переменные
const min = 3;
const max = 15;
let total = 0;

// от мин до макс шагом в 1
for(let i = min; i <= max; i += 1) {
    console.log(i);
// проверяем остаток от деления
    if(i % 2 !== 0) {
        console.log('Пропускаем нечетное число', i);
        continue;    
    }
    console.log('Четное число:', i); 
// пишем в сумму 
    total += i;
}
console.log('total:', total);




