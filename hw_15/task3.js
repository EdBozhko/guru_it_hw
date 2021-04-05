// 3.	Заполнить массив последовательными нечетными числами, начиная с единицы.

let arr = []

let arrLength = 5

for (let i = 0; i < arrLength * 2; i++) {
    arr.push(i+=1)
}

document.write(arr)