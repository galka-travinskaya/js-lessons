if (4>3) {
    console.log('true');  
} else {
    console.log('false');   
}


const value = 7;
if (value > 5) {
    console.log('4 > 5');   
} else if (value > 6){
    console.log('4 > 6');   
} else if (value > 3){
    console.log('4 > 3');   
} else {
    console.log('else');  
}


const value_1 = 0;
if (value_1) { // value_1 === '' не пишеться
    console.log('if');
} else {
    console.log('else');   
}


const result = 5>6 ? 'більше' : 'меньше';
console.log(result);


const value_2 = 5;
switch (value_2) {
    case 1:
        console.log('one');       
        break;
    case 2:
        console.log('two');       
        break;
    case 3:
        console.log('three');       
        break;
    default:
        console.log('default');
        
        break;
}

// Області видимості


//Цикли
for (let i = 0; i < 5; i+=1) {
console.log(i);   
}

const str = 'Hello world';
for(let i = 0; i < str.length; i += 1) {
    console.log(str[i]);
    
}

// Введення користувача і розгалуження 

// Використовуючи конструкцію if...else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// Відображення часу (if...else)
//  Напиши скрипт для відображення годин та хвилин у консолі браузерв у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.". без хвилин
const hours = 14;
const minutes = 26;
let timeString;

if(minutes > 0) {
    timeString = `${hours} г. ${minutes} хв.`;
} else {
    timeString = `${hours} г.`;
}
console.log(timeString);
