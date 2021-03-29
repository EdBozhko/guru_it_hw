// 2.	Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).

let prices = [273, 1230, 980, 1010, 777, 654, 2130]

prices.forEach((value, index, arr) => {
    if (value < 1000) {
        arr[index] = arr[index] * 0.8
    } else {
        arr[index] = arr[index] * 0.95
    }
})

document.write(prices)