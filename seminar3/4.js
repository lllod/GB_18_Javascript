"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const sumNums = (a, b) => a + b;

function subNums(a, b) {
    if (a > b) {
        return a - b;
    } else if (a < b) {
        return b - a;
    }
    return 0;
}

const multNums = (a, b) => a * b;
const divNums = (a, b) => a / b;

const userFirstNum = Number.parseFloat(prompt('Введите первое число: '));
const userSecondNum = Number.parseFloat(prompt('Введите второе число: '));

console.log(sumNums(userFirstNum, userSecondNum));
console.log(subNums(userFirstNum, userSecondNum));
console.log(multNums(userFirstNum, userSecondNum));
console.log(divNums(userFirstNum, userSecondNum));