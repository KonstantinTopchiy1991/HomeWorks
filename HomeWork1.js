// Условные операторы

/*Если а  - четное посчитать а*b, иначе a+b*/
function funcOne(a, b) {
    if (a % 2 ===0) {
        console.log(a * b);
    } else {
        console.log(a + b);
    }
};
//funcOne();


/* Определить какой четверти принадлежит точка с координатами (x, y)*/
function funcTwo(x, y) {
    if (x > 0 && y > 0){
        console.log("firstQuarter");
    } else if (x > 0 && y < 0){
        console.log("secondQuarter");
    } else if (x < 0 && y < 0){
        console.log("thirdQuarter");
    } else {
        console.log("fourthQuarter");
    }
};
//funcTwo();

/*Найти суммы только положительных из трех чисел*/
function funcThree(a, b, c) {

    let sum;
    let posOne = 0;
    let posTwo = 0;
    let posThree = 0;

    if (a > 0){
        posOne = a;
    }
    if (b > 0){
        posTwo = b;
    }
    if (c > 0){
        posThree = c;
    }
    sum = posOne + posTwo + posThree;
    console.log(sum);
};
//funcThree();

/*Посчитать выражение макс(a*b*c, a+b+c) + 3*/
function funcFour(a, b ,c) {
    if ((a * b *c) > (a + b + c)){
        console.log((a * b * c) + 3);
    } else {
        console.log((a + b + c) + 3);
    }
};
//funcFour();

/*Написать программу определения оценки студента по его рейтингу*/
function funcFive(rating) {
    if (rating >= 90 && rating <= 100){
        console.log("A");
    }
    if (rating >= 75 && rating < 90){
        console.log("B");
    } 
    if (rating >= 60 && rating < 75){
        console.log("C");
    } 
    if (rating >= 40 && rating < 60){
        console.log("D");
    }
    if (rating >= 20 && rating < 40){
        console.log("E");
    } 
    if (rating >= 0 && rating < 20){
        console.log("F");
    }
};
//funcFive();


//Циклы

/*Найти сумму четных чисел и их количество в диапазоне от 1 до 99*/
function funcSix() {
    let sum = 0;
    let quantity = 0;
    for (let i = 0; i <= 99; i++) {
        if (i % 2 === 0){
            sum += i;
            quantity++;
        }
    }
    console.log("Сумма = " + sum + ", Количество = " + quantity);

};
//funcSix();

/*Проверить простое ли число?*/
function funcSeven(number) {
    if (number === 1){
        console.log("false");
    }

    for(let i = 2; i < number; i++){
        if (number % i === 0){
            console.log("Составное");
            break;
        } else {
            console.log("Простое");
        }
    }
};
//funcSeven();

/*Найти корень натурального числа с точностью до целого*/
function funcEight(a) {
    let num = 1;
    
    while (num * num <= a){
        num++;
    }

    console.log(num - 1);
};
//funcEight();

/*Вычислить факториал числа n. n! = 1*2*...*n-1*n*/
function funcNine(x){
    let factorial = 1;
    if (x > 1) {
        for (let i = 2; i <= x; i++) {
            factorial *= i;
        }
    }
    console.log(factorial);
};
//funcNine();

/*Посчитать сумму цифр заданного числа*/
function funcTen(number) {
    let sum = 0;

    while (number != 0){
        sum += number % 10;
        number /= 10;
    }
    console.log(sum);
};
//funcTen();

/*Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321*/
function funcEleven(number) {
    let numberAsString = String(number);
    let splitNumber = numberAsString.split('');
    let splitReversedNumber = splitNumber.reverse();
    let reversedNumber = splitReversedNumber.join('');
    console.log(reversedNumber);
};
//funcEleven();


//Одномерные массивы

/*Найти минимальный элемент массива*/
function funcMinElem(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= min){
            min = arr[i];
        }
    }
    console.log(min);
};
//funcMinElem();

/*Найти максимальный элемент массива*/
function funcMaxElem(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
};
//funcMaxElem();

/*Найти индекс минимального элемента массива*/
function funcIndexMinElem(arr) {
    let index = 0;
    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < minValue){
            minValue = arr[i];
            index = i;
        }
    }
    console.log(index);
};
//funcIndexMinElem();

/*Найти индекс максимального элемента массива*/
function funcIndexMaxElem(arr) {
    let index = 0;
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxValue){
            maxValue = arr[i];
            index = i;
        }
    }
    console.log(index);
};
//funcIndexMaxElem();

/*Посчитать сумму элементов массива с нечетными индексами*/
function sumElemOddIndex(arr) {
    let sumIndex = 0;
    for (let i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            sumIndex += arr[i];
        }
    }
    console.log(sumIndex);
};
//sumElemOddIndex();

/*Сделать реверс массива (массив в обратном направлении)*/
function funcRevers(arr) {
    let rev = arr.reverse();
    console.log(rev);
};
//funcRevers();

/*Посчитать количество нечетных элементов массива*/
function funcOddElements(arr) {
    let elem = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            elem++;
        }
    }
    console.log(elem);
};
//funcOddElements();

/*Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2*/
function funcReplaceHalf(arr) {
    let half = arr.length / 2;
    let div = half + arr.length % 2;

    for (let i = 0; i < div; i++){
        let currentElem = arr[i];
        arr[i] = arr[div + i];
        arr[div + i] = currentElem;
    }
    console.log(arr);
}
//funcReplaceHalf();

/*Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))*/
function funcBubble(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j +1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
//funcBubble();

function funcSelect(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        let minElem = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minElem])
                minElem = j;
        }
        let temp = arr[minElem];
        arr[minElem] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}
//funcSelect();

function funcInsert(arr) {

    for(let i = 1; i < arr.length; i++){
        let value = arr[i];
        let j = i - 1;
        while(j >= 0 && value <= arr[j]){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = value;

    }
    console.log(arr);
}
//funcInsert();


//Функции

/*Получить строковое название дня недели по номеру дня*/
function dayOfWeek(day){
    let valueDay;

    switch (day) {
        case 1:
            valueDay = "Понедельник";
            break;
        case 2:
            valueDay = "Вторник";
            break;
        case 3:
            valueDay = "Среда";
            break;
        case 4:
            valueDay = "Четверг";
            break;
        case 5:
            valueDay = "Пятница";
            break;
        case 6:
            valueDay = "Суббота";
            break;
        case 7:
            valueDay = "Воскресенье";
            break;
        default :
            valueDay = "Нет такого дня";
    }
    console.log(valueDay);
}
//dayOfWeek();

/*Вводим число (0-999), получаем строку с прописью числа.*/



