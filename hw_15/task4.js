// 4.	Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.

let arr = []
let arrLength = 10

let arrStartIndexX = 5
let arrShiftD = 3

for (let i = 0; i < arrLength; i++) {
    arr.push(arrStartIndexX)
    arrStartIndexX += arrShiftD
}

document.write(arr)