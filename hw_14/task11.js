// 5.	6.	Задача. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.

let prices = [230, 5160, 1140, 3170, 1200, 2201, 50]

document.write(prices.reduce((prevValue, value, index, array) => {
    if (value > 999 && value < 2001) {
        return prevValue + value
    } else {
        return prevValue
    }  
}, 0)) 