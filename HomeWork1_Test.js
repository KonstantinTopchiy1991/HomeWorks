// Условные операторы

/*Если а  - четное посчитать а*b, иначе a+b*/

describe('test evenNumber', () => {
    const testedData = [
        {
            'a': 8,
            'b': 3,
            'expected': 24
        },
        {
            'a': 7,
            'b': 2,
            'expected': 9
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} value2 ${testSuit['b']} expected ${testSuit['expected']}`, function () {
            const act = evenNumber(testSuit['a'], testSuit['b']);
            assert.deepEqual(act, testSuit['expected']);
        });
    }
});

/* Определить какой четверти принадлежит точка с координатами (x, y)*/

describe('test quarterNumber', () => {
    const testedData = [
        {
            'x': 8,
            'y': 3,
            'expected': 'firstQuarter'
        },
        {
            'x': 7,
            'y': 2,
            'expected': 'firstQuarter'
        },
        {
            'x': 5,
            'y': -1,
            'expected': 'secondQuarter'
        },
        {
            'x': -4,
            'y': -2,
            'expected': 'thirdQuarter'
        },
        {
            'a': -6,
            'b': 3,
            'expected': 'fourthQuarter'
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['x']} value2 ${testSuit['y']} expected ${testSuit['expected']}`, function () {
            const act = quarterNumber(testSuit['x'], testSuit['y']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

/*Найти суммы только положительных из трех чисел*/

describe('test sumNumber', () => {
    const testedData = [
        {
            'a': 8,
            'b': -3,
            'c': -5,
            'expected': 8
        },
        {
            'a': -4,
            'b': 2,
            'c': -6,
            'expected': 2
        },
        {
            'a': -1,
            'b': -4,
            'c': 7,
            'expected': 7
        },
        {
            'a': 4,
            'b': -4,
            'c': 7,
            'expected': 11
        },
        {
            'a': 2,
            'b': 4,
            'c': 3,
            'expected': 9
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} value2 ${testSuit['b']} value3 ${testSuit['c']} expected ${testSuit['expected']}`, function () {
            const act = sumNumber(testSuit['a'], testSuit['b'], testSuit['c']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

/*Посчитать выражение макс(a*b*c, a+b+c) + 3*/
describe('test maxExp', () => {
    const testedData = [
        {
            'a': 2,
            'b': 3,
            'c': 4,
            'expected': 27
        },
        {
            'a': 2,
            'b': 1,
            'c': 2,
            'expected': 8
        },
        {
            'a': -1,
            'b': 5,
            'c': 4,
            'expected': 11
        },
        {
            'a': 3,
            'b': 3,
            'c': 5,
            'expected': 48
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} value2 ${testSuit['b']} value3 ${testSuit['c']} expected ${testSuit['expected']}`, function () {
            const act = maxExp(testSuit['a'], testSuit['b'], testSuit['c']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

/*Написать программу определения оценки студента по его рейтингу*/
describe('test ratingStudent', () => {
    const testedData = [
        {
            'a': 91,
            'expected': 'A'
        },
        {
            'a': 83,
            'expected': 'B'
        },
        {
            'a': 67,
            'expected': 'C'
        },
        {
            'a': 50,
            'expected': 'D'
        },
        {
            'a': 29,
            'expected': 'E'
        },
        {
            'a': 11,
            'expected': 'F'
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = ratingStudent(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

//Циклы

/*Найти сумму четных чисел и их количество в диапазоне от 1 до 99*/
describe('test evenNumbers', () => {
    const testedData = [
        {
            'a': 5,
            'expected': "Сумма = " + 6 + ", Количество = " + 2
        },
        {
            'a': 9,
            'expected': "Сумма = " + 20 + ", Количество = " + 4
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = evenNumbers(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Проверить простое ли число?*/

describe('test primeNumber', () => {
    const testedData = [
        {
            'a': 1,
            'expected': "false"
        },
        {
            'a': 7,
            'expected': "Простое"
        },
        {
            'a': 10,
            'expected': "Составное"
        },
        {
            'a': 37,
            'expected': "Простое"
        },
        {
            'a': 26,
            'expected': "Составное"
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = primeNumber(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Найти корень натурального числа с точностью до целого*/
describe('test rootNumber', () => {
    const testedData = [
        {
            'a': 9,
            'expected': 3
        },
        {
            'a': 16,
            'expected': 4
        },
        {
            'a': 25,
            'expected': 5
        },
        {
            'a': 36,
            'expected': 6
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = rootNumber(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Вычислить факториал числа n. n! = 1*2*...*n-1*n*/
describe('test factorialNumber', () => {
    const testedData = [
        {
            'a': 4,
            'expected': 24
        },
        {
            'a': 6,
            'expected': 720
        },
        {
            'a': 3,
            'expected': 6
        },
        {
            'a': 5,
            'expected': 120
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = factorialNumber(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Посчитать сумму цифр заданного числа*/
describe('test sumNumbers', () => {
    const testedData = [
        {
            'a': 4,
            'expected': 4
        },
        {
            'a': 6,
            'expected': 7
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = sumNumbers(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321*/
describe('test reverseNumber', () => {
    const testedData = [
        {
            'a': 123,
            'expected': 321
        },
        {
            'a': 81,
            'expected': 18
        },
        {
            'a': 413,
            'expected': 314
        },
        {
            'a': 276,
            'expected': 672
        },
        {
            'a': 95,
            'expected': 59
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = reverseNumber(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

//Одномерные массивы

/*Найти минимальный элемент массива*/
describe('test minOfArray', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [8]
        },
        {
            'a': [11, 5, 22, 33, 87, 1, 24],
            'expected': 1
        },
        {
            'a': [9, 5, 4, 10],
            'expected': 4
        },
        {
            'a': [87, 73, 64, 96, 51],
            'expected': 51
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = minOfArray(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Найти максимальный элемент массива*/
describe('test maxOfArray', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [38]
        },
        {
            'a': [11, 5, 22, 33, 87, 1, 24],
            'expected': 87
        },
        {
            'a': [9, 5, 4, 10],
            'expected': 10
        },
        {
            'a': [87, 73, 64, 96, 51],
            'expected': 96
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = maxOfArray(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Найти индекс минимального элемента массива*/
describe('test minIndexOfArray', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [3]
        },
        {
            'a': [11, 5, 22, 33, 87, 1, 24],
            'expected': 5
        },
        {
            'a': [9, 5, 4, 10],
            'expected': 2
        },
        {
            'a': [87, 73, 64, 96, 51],
            'expected': 4
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = minIndexOfArray(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Найти индекс максимального элемента массива*/
describe('test maxIndexOfArray', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [2]
        },
        {
            'a': [11, 5, 22, 33, 87, 1, 24],
            'expected': 4
        },
        {
            'a': [9, 5, 4, 10],
            'expected': 3
        },
        {
            'a': [87, 73, 64, 96, 51],
            'expected': 3
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = maxIndexOfArray(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Посчитать сумму элементов массива с нечетными индексами*/
describe('test sumElemOddIndex', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [22]
        },
        {
            'a': [11, 5, 22, 33, 87, 1, 24],
            'expected': 39
        },
        {
            'a': [9, 5, 4, 10],
            'expected': 15
        },
        {
            'a': [87, 73, 64, 96, 51],
            'expected': 169
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = sumElemOddIndex(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Сделать реверс массива (массив в обратном направлении)*/
describe('test reversOfArray', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [ 8, 38, 14, 25 ]
        },
        {
            'a': [11, 5, 22, 33, 87, 1, 24],
            'expected': [24, 1, 87, 33, 22, 5, 11]
        },
        {
            'a': [9, 5, 4, 10],
            'expected': [10, 4, 5, 9]
        },
        {
            'a': [87, 73, 64, 96, 51],
            'expected': [51, 96, 64, 73, 87]
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = reversOfArray(testSuit['a']);
            assert.deepEqual(testSuit['expected'], act);
        });
    }
});

/*Посчитать количество нечетных элементов массива*/
describe('test funcOddElements', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [1]
        },
        {
            'a': [11, 5, 22, 33, 87, 1, 24],
            'expected': 5
        },
        {
            'a': [9, 5, 4, 10],
            'expected': 2
        },
        {
            'a': [87, 73, 64, 96, 51],
            'expected': 3
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = funcOddElements(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2*/
describe('test replaceHalfArray', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [ 38, 8, 25, 14 ]
        },
        {
            'a': [11, 5, 22, 33, 87, 1],
            'expected': [33, 87, 1, 11, 5, 22]
        },
        {
            'a': [9, 5, 4, 10],
            'expected': [4, 10, 9, 5]
        },
        {
            'a': [87, 73, 64, 96],
            'expected': [64, 96, 87, 73]
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = replaceHalfArray(testSuit['a']);
            for (let i = 0; i < act.length; i++) {
                assert.equal(testSuit['expected'][i], act[i]);
            }
        });
    }
});

/*Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))*/
describe('test bubbleSort', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [ 8, 14, 25, 38 ]
        },
        {
            'a': [11, 5, 22, 33, 87, 1],
            'expected': [1, 5, 11, 22, 33, 87]
        },
        {
            'a': [9, 5, 4, 10],
            'expected': [4, 5, 9, 10]
        },
        {
            'a': [87, 73, 64, 96],
            'expected': [64, 73, 87, 96]
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = bubbleSort(testSuit['a']);
            assert.deepEqual(testSuit['expected'], act);
        });
    }
});

describe('test selectSort', () => {
    const testedData = [
        {
            'a': [25, 14, 38, 8],
            'expected': [ 8, 14, 25, 38 ]
        },
        {
            'a': [11, 5, 22, 33, 87, 1],
            'expected': [1, 5, 11, 22, 33, 87]
        },
        {
            'a': [9, 5, 4, 10],
            'expected': [4, 5, 9, 10]
        },
        {
            'a': [87, 73, 64, 96],
            'expected': [64, 73, 87, 96]
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = selectSort(testSuit['a']);
            for (let i = 0; i < act.length; i++) {
                assert.equal(testSuit['expected'][i], act[i]);
            }
        });
    }
});

describe('test insertSort', () => {
    const testedData = [
        {
            'a': [87, 46, 23, 93],
            'expected': [ 23, 46, 87, 93 ]
        },
        {
            'a': [11, 5, 22, 33, 87, 1],
            'expected': [1, 5, 11, 22, 33, 87]
        },
        {
            'a': [41, 69, 43, 74],
            'expected': [41, 43, 69, 74]
        },
        {
            'a': [87, 73, 64, 96],
            'expected': [64, 73, 87, 96]
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = insertSort(testSuit['a']);
            for (let i = 0; i < act.length; i++) {
                assert.equal(testSuit['expected'][i], act[i]);
            }
        });
    }
});

//Функции

/*Получить строковое название дня недели по номеру дня*/
describe('test dayOfWeek', () => {
    const testedData = [
        {
            'a': 2,
            'expected': "Вторник"
        },
        {
            'a': 4,
            'expected': "Четверг"
        },
        {
            'a': 6,
            'expected': "Суббота"
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = dayOfWeek(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Вводим число (0-999), получаем строку с прописью числа.*/
describe('test numberToString', () => {
    const testedData = [
        {
            'a': 2,
            'expected': "два"
        },
        {
            'a': 134,
            'expected': "сто тридцать четыре"
        },
        {
            'a': 341,
            'expected': "триста сорок один"
        },
        {
            'a': 411,
            'expected': "четыреста одинадцать"
        },
        {
            'a': 502,
            'expected': "пятсот два"
        },
        {
            'a': 627,
            'expected': "шестсот двадцать семь"
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = numberToString(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число*/
describe('test strokaChislo', () => {
    const testedData = [
        {
            'a': "два",
            'expected': 2
        },
        {
            'a': "сто тридцать четыре",
            'expected': 134
        },
        {
            'a': "триста сорок один",
            'expected': 341
        },
        {
            'a': "четыреста одинадцать",
            'expected': 411
        },
        {
            'a': "пятсот два",
            'expected': 502
        },
        {
            'a': "шестсот двадцать семь",
            'expected': 627
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = strokaChislo(testSuit['a']);
            assert.equal(testSuit['expected'], act);
        });
    }
});

/*Найти расстояние между двумя точками в двумерном декартовом пространстве.*/
describe('test distance', () => {
    const testedData = [
        {
            'x1': 3,
            'y1': 5,
            'x2': 4,
            'y2': 6,
            'expected': 1.4142135623730951
        },
        {
            'x1': 1,
            'y1': 4,
            'x2': 2,
            'y2': 6,
            'expected': 2.23606797749979
        },
        {
            'x1': 2,
            'y1': 4,
            'x2': 3,
            'y2': 5,
            'expected': 1.4142135623730951
        }
    ];

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['x1']} value2 ${testSuit['y1']} value3 ${testSuit['x2']} value4 ${testSuit['y2']} expected ${testSuit['expected']}`, function () {
            const act = distance(testSuit['x1'], testSuit['y1'], testSuit['x2'], testSuit['y2']);
            assert.equal(testSuit['expected'], act);
        });
    }
});
