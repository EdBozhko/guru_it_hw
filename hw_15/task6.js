// 20.	Найти количество четных чисел в массиве.

let arr = [6,651,65,132,8,516,-6,48,9,-56,17,36,-19,-32,19,11,-5,13]

let evenQuantity = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
        evenQuantity ++
    }
}

document.write(evenQuantity)