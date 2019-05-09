// Условные операторы

/*Если а  - четное посчитать а*b, иначе a+b*/
function evenNumber(a, b) {
    if (a % 2 === 0) {
        return (a * b);
    } else {
        return (a + b);
    }
};
//console.log(evenNumber());


/* Определить какой четверти принадлежит точка с координатами (x, y)*/
function quarterNumber(x, y) {
    if (x > 0 && y > 0){
        return "firstQuarter";
    } else if (x > 0 && y < 0){
        return "secondQuarter";
    } else if (x < 0 && y < 0){
        return "thirdQuarter";
    } else {
        return "fourthQuarter";
    }
};
//console.log(quarterNumber());

/*Найти суммы только положительных из трех чисел*/
function sumNumber(a, b, c) {

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
    return sum;
};
//console.log(sumNumber());

/*Посчитать выражение макс(a*b*c, a+b+c) + 3*/
function maxExp(a, b ,c) {
    if ((a * b *c) > (a + b + c)){
        return ((a * b * c) + 3);
    } else {
        return ((a + b + c) + 3);
    }
};
//console.log(maxExp());

/*Написать программу определения оценки студента по его рейтингу*/
function ratingStudent(rating) {
    if (rating >= 90 && rating <= 100){
        return "A";
    }
    if (rating >= 75 && rating < 90){
        return "B";
    } 
    if (rating >= 60 && rating < 75){
        return "C";
    } 
    if (rating >= 40 && rating < 60){
        return "D";
    }
    if (rating >= 20 && rating < 40){
        return "E";
    } 
    if (rating >= 0 && rating < 20){
        return "F";
    }
};
//console.log(ratingStudent());


//Циклы

/*Найти сумму четных чисел и их количество в диапазоне от 1 до 99*/
function evenNumbers(a = 99) {
    let sum = 0;
    let quantity = 0;
    for (let i = 1; i <= a; i++) {
        if (i % 2 === 0){
            sum += i;
            quantity++;
        }
    }
    return ("Сумма = " + sum + ", Количество = " + quantity);

};
//console.log(evenNumbers());

/*Проверить простое ли число?*/
function primeNumber(number) {
    if (number === 1){
        return ("false");
    }

    for(let i = 2; i < number + 1; i++){
        if (number % i === 0){
            return ("Составное");
            break;
        } else {
            return ("Простое");
        }
    }
};
//console.log(primeNumber());

/*Найти корень натурального числа с точностью до целого*/
function rootNumber(a) {
    let num = 1;
    
    while (num * num <= a){
        num++;
    }

    return (num - 1);
};
//console.log(rootNumber(16));

/*Вычислить факториал числа n. n! = 1*2*...*n-1*n*/
function factorialNumber(x){
    let factorial = 1;
    if (x > 1) {
        for (let i = 2; i <= x; i++) {
            factorial *= i;
        }
    }
    return (factorial);
};
//console.log(factorialNumber(4));

/*Посчитать сумму цифр заданного числа*/
function sumNumbers(number) {
    let sum = 0;
    for(let i = number; i > 0; i = i / 10){
        i.toFixed(0);
        sum = sum + (i%10);
    }
    return (sum.toFixed(0));
};
//console.log(sumNumbers(10));

/*Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321*/
function reverseNumber(number) {
    let sum = 0;
    for(let i = number; i > 0; i = Math.floor(i / 10)){
        sum = sum * 10 + (i%10);
    }
    return sum;
};
//console.log(reverseNumber(124));


//Одномерные массивы

/*Найти минимальный элемент массива*/
function minOfArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= min){
            min = arr[i];
        }
    }
    return (min);
};
//console.log(minOfArray());

/*Найти максимальный элемент массива*/
function maxOfArray(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return (max);
};
//console.log(maxOfArray());

/*Найти индекс минимального элемента массива*/
function minIndexOfArray(arr) {
    let index = 0;
    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < minValue){
            minValue = arr[i];
            index = i;
        }
    }
    return (index);
};
//console.log(minIndexOfArray());

/*Найти индекс максимального элемента массива*/
function maxIndexOfArray(arr) {
    let index = 0;
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxValue){
            maxValue = arr[i];
            index = i;
        }
    }
    return (index);
};
//console.log(maxIndexOfArray());

/*Посчитать сумму элементов массива с нечетными индексами*/
function sumElemOddIndex(arr) {
    let sumIndex = 0;
    for (let i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            sumIndex += arr[i];
        }
    }
    return (sumIndex);
};
//console.log(sumElemOddIndex());

/*Сделать реверс массива (массив в обратном направлении)*/
function reversOfArray(arr) {
    let rev = arr.reverse();
    return (rev);
};
//console.log(reversOfArray());

/*Посчитать количество нечетных элементов массива*/
function funcOddElements(arr) {
    let elem = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            elem++;
        }
    }
    return (elem);
};
//console.log(funcOddElements());

/*Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2*/
function replaceHalfArray(arr) {
    let half = arr.length / 2;
    let div = half + arr.length % 2;

    for (let i = 0; i < div; i++){
        let currentElem = arr[i];
        arr[i] = arr[div + i];
        arr[div + i] = currentElem;
    }
    return (arr);
}
//console.log(replaceHalfArray());

/*Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))*/
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j +1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return (arr);
}
//console.log(bubbleSort());

function selectSort(arr) {
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
    return (arr);
}
//console.log(selectSort());

function insertSort(arr) {

    for(let i = 1; i < arr.length; i++){
        let value = arr[i];
        let j = i - 1;
        while(j >= 0 && value <= arr[j]){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = value;

    }
    return (arr);
}
//console.log(insertSort());


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
    return (valueDay);
}
//console.log(dayOfWeek());

/*Вводим число (0-999), получаем строку с прописью числа.*/

function numberToString(number) {
    let str = String(number);
    let arrNum = str.split('');
    let arr0 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let arr1 = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let arr2 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестдесят', 'семдесят', 'восемдесят', 'девяносто'];
    let arr3 = ['сто', 'двесте', 'триста', 'четыреста', 'пятсот', 'шестсот', 'семсот', 'восемсот', 'девятсот'];

    if (arrNum.length == 3 && arrNum[1] == 1) {
        return (arr3[arrNum[0] - 1] + " " + arr1[arrNum[2]]);
    } else if (arrNum.length == 3 && arrNum[1] == 0){
        return (arr3[arrNum[0] - 1] + " " + arr0[arrNum[2] - 1]);
    } else if (arrNum.length == 3) {
        return (arr3[arrNum[0] - 1] + " " + arr2[arrNum[1] - 2] + " " + arr0[arrNum[2] - 1]);
    } else if (arrNum.length == 2 && arrNum[0] == 1) {
        return (arr1[arrNum[1]]);
    } else if (arrNum.length == 2 && arrNum[0] != 1) {
        return (arr2[arrNum[0] - 2] + ' ' + arr0[arrNum[1] - 1]);
    } else if (arrNum.length == 1) {
        return (arr0[arrNum[0] - 1])
    }
}
//console.log(numberToString());

/*Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число*/
function strokaChislo(number){

    let num = number.split(' ');
    let newNum = 0;

    switch(num[0]){
        case 'сто': newNum += 100; break;
        case 'двесте': newNum += 200; break;
        case 'триста': newNum += 300; break;
        case 'четыреста': newNum += 400; break;
        case 'пятсот': newNum += 500; break;
        case 'шестсот': newNum += 600; break;
        case 'семсот': newNum += 700; break;
        case 'восемсот': newNum += 800; break;
        case 'девятсот': newNum += 900; break;
    } //сотые

    switch(num[1] || num[0]){
        case 'двадцать': newNum += 20; break;
        case 'тридцать': newNum += 30; break;
        case 'сорок': newNum += 40; break;
        case 'пятьдесят': newNum += 50; break;
        case 'шестдесят': newNum += 60; break;
        case 'семдесят': newNum += 70; break;
        case 'восемдесят': newNum += 80; break;
        case 'девяносто': newNum += 90; break;
    }  //десятые

    switch(num[1] || num[0]){
        case  'десять': newNum += 10; break;
        case  'одинадцать': newNum += 11; break;
        case  'двенадцать': newNum += 12; break;
        case  'тринадцать': newNum += 13; break;
        case  'четырнадцеть': newNum += 14; break;
        case  'пятнадцать': newNum += 15; break;
        case  'шестнадцать': newNum += 16; break;
        case  'семнадцать': newNum += 17; break;
        case  'восемнадцать': newNum += 18; break;
        case  'девятнадцать': newNum += 19; break;
    }  // десять. одинадцать...

    switch(num[2] || num[1] || num[0]){
        case 'один': newNum += 1; break;
        case 'два': newNum += 2; break;
        case 'три': newNum += 3; break;
        case 'четыре': newNum += 4; break;
        case 'пять': newNum += 5; break;
        case 'шесть': newNum += 6; break;
        case 'семь': newNum += 7; break;
        case 'восемь': newNum += 8; break;
        case 'девять': newNum += 9; break;
        case 'ноль': newNum += 0; break;
    }  // простые

    return (newNum);

};
//console.log(strokaChislo());

/*Найти расстояние между двумя точками в двумерном декартовом пространстве.*/
distance = (x1, y1, x2, y2) => {

    return (Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))));

};
//console.log (distance());

