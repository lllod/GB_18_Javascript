"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = Number.parseInt(prompt('Введите целое число от 1 до 31 включительно:'))

// if (dayNumber >= 1 && dayNumber <= 31) {
//     if (dayNumber / 10 <= 1) {
//         console.log(`Число ${dayNumber} попадает в 1 декаду месяца.`)
//     } else if (dayNumber / 10 <= 2) {
//         console.log(`Число ${dayNumber} попадает в 2 декаду месяца.`)
//     } else {
//         console.log(`Число ${dayNumber} попадает в 3 декаду месяца.`)
//     }
// } else {
//     console.log('Неверное значение.')
// }

// if (dayNumber >= 1 && dayNumber <= 31) {
//     const decade = dayNumber / 10
//     if (decade <= 1) {
//         console.log(`Число ${dayNumber} попадает в ${Math.ceil(decade)} декаду месяца.`)
//     } else if (decade <= 2) {
//         console.log(`Число ${dayNumber} попадает в ${Math.ceil(decade)} декаду месяца.`)
//     } else if (decade <= 3) {
//         console.log(`Число ${dayNumber} попадает в ${Math.ceil(decade)} декаду месяца.`)
//     } else {
//         console.log(`Число ${dayNumber} попадает в ${Math.ceil(decade) - 1} декаду месяца.`)
//     }
// } else {
//     console.log('Неверное значение.')
// }

if (dayNumber >= 1 && dayNumber <= 31) {
    const decadeList = ['1', '2', '3']
    if (dayNumber / 10 <= 1) {
        console.log(`Число ${dayNumber} попадает в ${decadeList[0]} декаду месяца.`)
    } else if (dayNumber / 10 <= 2) {
        console.log(`Число ${dayNumber} попадает в ${decadeList[1]} декаду месяца.`)
    } else {
        console.log(`Число ${dayNumber} попадает в ${decadeList[2]} декаду месяца.`)
    }
} else {
    console.log('Неверное значение.')
}