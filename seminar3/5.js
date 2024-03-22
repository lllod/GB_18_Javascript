// Реализовать функцию round5, которой передается целое число, функция должна
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся
// на 5.

function round5(val) {
    let outNum = 0;
    if (val > 2) {
        for (let i = val - 2; i < val + 3; i++) {
            if (i % 5 === 0) {
                outNum = i;
            }
        }
    } else if (val < -2) {
        for (let i = val + 2; i > val - 3; i--) {
            if (i % 5 === 0) {
                outNum = i;
            }
        }
    } else {
        return 0;
    }
    return outNum;
}

console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5


