"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userFirstNum = Number.parseFloat(prompt('Введите первое число: '));
const userSecondNum = Number.parseFloat(prompt('Введите второе число: '));
const userThirdNum = Number.parseFloat(prompt('Введите третье число: '));

// function maxNumber(firstNum, secondNum, thirdNum) {
//     const maxNum = Math.max(firstNum, secondNum, thirdNum);
//     console.log(`Максимальное значение среди чисел ${firstNum}, ${secondNum}, ${thirdNum} равно ${maxNum}.`);
// }
// maxNumber(userFirstNum, userSecondNum, userThirdNum);

// const maxNumberAnother = (firstNum, secondNum, thirdNum) =>
//     console.log(`Максимальное значение среди чисел ${firstNum}, ${secondNum}, ${thirdNum} равно ${Math.max(firstNum, secondNum, thirdNum)}`);
//
// maxNumberAnother(userFirstNum, userSecondNum, userThirdNum);
//
function maxNumberAlt(firstNum, secondNum, thirdNum) {
    const numList = [firstNum, secondNum, thirdNum];
    let maxNum = 0;
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] > maxNum) {
            maxNum = numList[i];
        }
    }
    console.log(`Максимальное значение среди чисел ${firstNum}, ${secondNum}, ${thirdNum} равно ${maxNum}`);
}

maxNumberAlt(userFirstNum, userSecondNum, userThirdNum);