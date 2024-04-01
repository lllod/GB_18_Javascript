"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/


const userNum = Number.parseFloat(prompt('Введите число: '));

// if (!Number.isInteger(userNum)) {
//     console.log('Значение задано неверно');
// } else {
//     userSalary(userNum);
// }
//
// function userSalary(num) {
//     console.log(`Размер заработной платы за вычетом налогов равен ${userNum - userNum * 0.13}`);
// }

// function userSalary(num) {
//     if (Number.isInteger(num)) {
//         console.log(`Размер заработной платы за вычетом налогов равен ${userNum - userNum * 0.13}`);
//     } else {
//         console.log('Значение задано неверно');
//     }
// }

const userSalary = (userNum) => Number.isInteger(userNum) ?
    console.log(`Размер заработной платы за вычетом налогов равен ${userNum - userNum * 0.13}`) :
    console.log('Значение задано неверно');
userSalary(userNum);