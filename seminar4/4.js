"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/
const symbol = 'x';
for (let i = 1; i < 21; i++) {
  let text = '';

  for (let j = 0; j < i; j++) {
    text += symbol;
  }

  console.log(text);
}