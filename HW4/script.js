// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
console.log('0 - это ноль');
for ( let i = 1; i <= 10; i++){
    if (i % 2 == 0) console.log(`${i} - четное число`);
    else console.log(`${i} - нечетное число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let arr = [];
for (let i = 0; i <= 4; i++) {
    arr[i] = getRandom(1,9);
}
console.log(arr);
const sum = arr.reduce(function(a,b) {return a + b;});
console.log(`Сумма элементов массива = ${sum}`);
const min = arr.reduce(function(a,b) {return Math.min(a, b);});
console.log(`Минимальное число в массиве = ${min}`);
const findNumber = arr.includes(3);
console.log(`Есть ли в этом массиве число 3 - ${findNumber}`);

function getRandom(min, max) {
    return Math.round(Math.random()*(max - min) + min);
}