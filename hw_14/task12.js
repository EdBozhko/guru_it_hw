// 7.	Задача. Дано масив номерів автомобілів. Сформувати масив тих, які починаються на літеру «А» і закінчуються на літеру «Р».

let numbers = ['AP0000CP', 'BO1111CP', 'AX2222PA', 'AB3333PP', 'PC4444CP']

let numbersStartAFinishP = numbers.filter((value, index, array) => value[0] === 'A' && value[value.length-1] === 'P')

document.write(numbersStartAFinishP)