"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const maxLength = 11;
const textArray = ['это ноль', 'нечетное число', 'четное число'];
for (let i = 0; i < maxLength; i++) {
    if (i === 0) {
        console.log(`${i} - ${textArray[i]}`);
    } else if (i % 2 === 0) {
        console.log(`${i} - ${textArray[2]}`);
    } else {
        console.log(`${i} - ${textArray[1]}`);
    }
}
