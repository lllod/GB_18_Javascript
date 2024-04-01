"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const minNum = 0;
const maxNum = 9;
let randomArray = Array.from({length: 5}, () =>
    Math.round((Math.random() * (maxNum - minNum) + minNum)));
console.log(`Массив: ${randomArray}`);

// 1

let arrSum = 0;
for (const element of randomArray) {
    arrSum += element;
}
console.log(`Сумма элементов массива: ${arrSum}`);

// 2

let arrMin = Math.min(...randomArray);
console.log(`Минимальный элемент массива: ${arrMin}`);

// 3

let indexArray = [];
for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] === 3) {
        indexArray.push(i);
    }
}
if (indexArray.length) {
    console.log(`Новый массив: [${indexArray}]`);
} else {
    console.log('Новый массив: []');
}
