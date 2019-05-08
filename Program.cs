using System;

namespace HomeWorks
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] array = {5, 3, 8, 14, 21, 19};
        
            evenNumber(5, 6);
            Console.WriteLine("\n");
            quarterNumber(3, -2);
            Console.WriteLine("\n");
            sumNumber(5, -4, 8);
            Console.WriteLine("\n");
            maxExp(4, 7, 1);
            Console.WriteLine("\n");
            ratingStudent(73);
            Console.WriteLine("\n");
            evenNumbers();
            Console.WriteLine("\n");
            primeNumber(7);
            Console.WriteLine("\n");
            rootNumber(36);
            Console.WriteLine("\n");
            factorialNumber(5);
            Console.WriteLine("\n");
            sumNembers(15);
            Console.WriteLine("\n");
            reverseNumber(124);
            Console.WriteLine("\n");
            minOfArray(array);
            Console.WriteLine("\n");
            maxOfArray(array);
            Console.WriteLine("\n");
            minIndexOfArray(array);
            Console.WriteLine("\n");
            maxIndexOfArray(array);
            Console.WriteLine("\n");
            sumElemOddIndex(array);
            Console.WriteLine("\n");
            reversOfArray(array);
            Console.WriteLine("\n");
            funcOddElements(array);
            Console.WriteLine("\n");
            replaceHalfArray(array);
            Console.WriteLine("\n");
            bubbleSort(array);
            Console.WriteLine("\n");
            selectSort(array);
            Console.WriteLine("\n");
            insertSort(array);
            Console.WriteLine("\n");
            dayOfWeek(5);
            Console.WriteLine("\n");
            numberToString(55);
            Console.WriteLine("\n");
            distance(3, 5, 6, 2);
        }

        /*Условные операторы */

        /*Если а  - четное посчитать а*b, иначе a+b*/
    public static void evenNumber(int a, int b) {
        if (a % 2 == 0) {
             Console.Write(a*b);
             Console.ReadKey(true);
        } else {
            Console.Write(a+b);
             Console.ReadKey(true);
        }
    }

    /* Определить какой четверти принадлежит точка с координатами (x, y)*/
    public static void quarterNumber(int x, int y) {
        if (x > 0 && y > 0){
            Console.Write ("firstQuarter");
            Console.ReadKey(true);
        } else if (x > 0 && y < 0){
            Console.Write ("secondQuarter");
            Console.ReadKey(true);
        } else if (x < 0 && y < 0){
            Console.Write ("thirdQuarter");
            Console.ReadKey(true);
        } else {
            Console.Write ("fourthQuarter");
            Console.ReadKey(true);
        }
    }

     /*Найти суммы только положительных из трех чисел*/
    public static void sumNumber( int a, int b, int c) {

        int sum;
        int posOne = 0;
        int posTwo = 0;
        int posThree = 0;

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
        Console.Write(sum);
        Console.ReadKey(true);
    }

    /*Посчитать выражение макс(a*b*c, a+b+c) + 3*/
    public static void maxExp(int a, int b, int c) {
        if ((a * b *c) > (a + b + c)){
            Console.Write ((a * b * c) + 3);
            Console.ReadKey(true);
        } else {
            Console.Write ((a + b + c) + 3);
            Console.ReadKey(true);
        }
    }

    /*Написать программу определения оценки студента по его рейтингу*/
    public static String ratingStudent(int rating) {
        if (rating >= 90 && rating <= 100){
            Console.Write ("A");
            Console.ReadKey(true);
        }
        if (rating >= 75 && rating < 90){
            Console.Write("B");
            Console.ReadKey(true);
        }
        if (rating >= 60 && rating < 75){
            Console.Write ("C");
            Console.ReadKey(true);
        }
        if (rating >= 40 && rating < 60){
            Console.Write ("D");
            Console.ReadKey(true);
        }
        if (rating >= 20 && rating < 40){
            Console.Write ("E");
            Console.ReadKey(true);
        }
        if (rating >= 0 && rating < 20){
            Console.Write ("F");
            Console.ReadKey(true);
        }
    }

    //Циклы

    /*Найти сумму четных чисел и их количество в диапазоне от 1 до 99*/
    public static void evenNumbers() {
        int sum = 0;
        int quantity = 0;

        for (int i = 0; i <= 99; i++) {
            if (i % 2 == 0){
                sum += i;
                quantity++;
            }
        }
        Console.Write ("Сумма = " + sum + ", Количество = " + quantity);
        Console.ReadKey(true);
    }

    /*Проверить простое ли число?*/
    public static void primeNumber(int number) {
        if (number == 1){
            Console.Write ("false");
        }

        for(int i = 2; i < number; i++){
            if (number % i == 0){
                Console.Write ("Составное");
            } else {
                Console.Write ("Простое");
            }
        }
    }

    /*Найти корень натурального числа с точностью до целого*/
    public static void rootNumber(int a) {
        int num = 1;

        while (num * num <= a){
            num++;
        }
        Console.Write(num - 1);
        Console.ReadKey(true);
    }

    /*Вычислить факториал числа n. n! = 1*2*...*n-1*n*/
    public static void factorialNumber(int x){
        int factorial = 1;
        if (x > 1) {
            for (int i = 2; i <= x; i++) {
                factorial *= i;
            }
        }
        Console.Write (factorial);
        Console.ReadKey(true);
    }

    /*Посчитать сумму цифр заданного числа*/
    public static void sumNembers(double number) {
        int sum = 0;

        while (number != 0){
            sum += number % 10;
            number /= 10;
        }
        Console.Write (sum);
        Console.ReadKey(true);
    }

    /*Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321*/
    public static int reverseNumber(double number) {
            double sum = 0;
    	for(var i = num; i > 0; i = Math.Round(i/10, 0)){
        sum = sum * 10 + (i%10);
    }
    Console.Write(sum);
    Console.ReadKey(true);
    }

    //Одномерные массивы

    /*Найти минимальный элемент массива*/
    public static void minOfArray(params int[] arr) {
        int min = arr[0];

        for (int i = 0; i < arr.length; i++){
            if (arr[i] <= min){
                min = arr[i];
            }
        }
        Console.Write (min);
        Console.ReadKey(true);
    }

    /*Найти максимальный элемент массива*/
    public static void maxOfArray(params int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++){
            if (arr[i] > max){
                max = arr[i];
            }
        }
        Console.Write (max);
        Console.ReadKey(true);
    }

    /*Найти индекс минимального элемента массива*/
    public static void minIndexOfArray(params int[] arr) {
        int index = 0;
        int minValue = arr[0];
        for (int i = 0; i < arr.length; i++){
            if (arr[i] < minValue){
                minValue = arr[i];
                index = i;
            }
        }
        Console.Write (index);
        Console.ReadKey(true);
    }

    /*Найти индекс максимального элемента массива*/
    public static void maxIndexOfArray(params int[] arr) {
        int index = 0;
        int maxValue = arr[0];
        for (int i = 0; i < arr.length; i++){
            if (arr[i] > maxValue){
                maxValue = arr[i];
                index = i;
            }
        }
        Console.Write (index);
        Console.ReadKey(true);
    }

    /*Посчитать сумму элементов массива с нечетными индексами*/
    public static void sumElemOddIndex(params int[] arr) {
        int sumIndex = 0;
        for (int i = 0; i < arr.length; i++){
            if (i % 2 != 0){
                sumIndex += arr[i];
            }
        }
        Console.Write (sumIndex);
        Console.ReadKey(true);
    }

    /*Сделать реверс массива (массив в обратном направлении)*/
    public static void reversOfArray(params int[] arr)
    {
        int[] revers = new int[arr.Length];
        for (int i = 0; i < arr.Length; i++)
        {
            revers[ara.Length - 1 - i] = ara[i];
        }
        Console.Write("revers array ");
        for (int i = 0; i < arr.Length; i++)
        {
            Console.Write(+revers[i] + ", ");

        }
    }

    /*Посчитать количество нечетных элементов массива*/
    public static void funcOddElements(params int[] arr) {
        int elem = 0;
        for (int i = 0; i < arr.length; i++){
            if (arr[i] % 2 != 0){
                elem++;
            }
        }
        Console.Write (elem);
        Console.ReadKey(true);
    }

    /*Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2*/
    public static void replaceHalfArray(params int[] arr)
    {
        int half = arr.length / 2;
        int div = half + arr.length % 2;
        for (int i = 0; i < div; i++)
        {
            int currentElement = arr[i];
            arr[i] = arr[div + i];
            arr[div + i] = currentElement;
        }
        Console.Write (arr);
        Console.ReadKey(true);
    }

    /*Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))*/
    public static void bubbleSort(params int[] arr) {
        for (int i = 0; i < arr.length; i++){
            for (int j = 0; j < arr.length - 1; j++){
                if (arr[j] > arr[j +1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        Console.Write (arr);
        Console.ReadKey(true);
    }

    public static void selectSort(params int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minElem = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minElem])
                    minElem = j;
            }
            int temp = arr[minElem];
            arr[minElem] = arr[i];
            arr[i] = temp;
        }
        Console.Write (arr);
        Console.ReadKey(true);
    }

    public static void insertSort(params int[] arr) {

        for(int i = 1; i < arr.length; i++){
            int value = arr[i];
            int j = i - 1;
            while(j >= 0 && value <= arr[j]){
                arr[j+1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = value;

        }
        Console.Write (arr);
        Console.ReadKey(true);
    }

    //Функции

    /*Получить строковое название дня недели по номеру дня*/
    public static void dayOfWeek(int day){

        switch (day) {
            case 1:
                Console.Write ("Понедельник");
                break;
            case 2:
                Console.Write("Вторник");
                break;
            case 3:
                Console.Write("Среда");
                break;
            case 4:
                Console.Write("Четверг");
                break;
            case 5:
                Console.Write("Пятница");
                break;
            case 6:
                Console.Write("Суббота");
                break;
            case 7:
                Console.Write("Воскресенье");
                break;
            default :
                Console.Write("Нет такого дня");
        }
        Console.ReadKey(true);
    }

    /*Вводим число (0-999), получаем строку с прописью числа.*/
    public static void numberToString(int number) {
        string str = Integer.toString(number);
        char[] arrNum = str.toCharArray();
        int[] arrInt = new int[arrNum.length];

        for (int i = 0; i < arrInt.length; i++) {

            arrInt[i] = (int) (arrNum[i] - '0');
        }

        string[] arr0 = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        string[] arr1 = {"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};
        string[] arr2 = {"twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"};
        string[] arr3 = {"hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hunfred"};

        if (arrInt.length == 3 && arrInt[1] == 1) {
            Console.Write (arr3[arrInt[0] - 1] + " " + arr1[arrInt[2]]);
        } else if (arrInt.length == 3 && arrInt[1] == 0){
            Console.Write (arr3[arrInt[0] - 1] + " " + arr0[arrInt[2] - 1]);
        } else if (arrInt.length == 3) {
            Console.Write (arr3[arrInt[0] - 1] + " " + arr2[arrInt[1] - 2] + " " + arr0[arrInt[2] - 1]);
        } else if (arrInt.length == 2 && arrInt[0] == 1) {
            Console.Write (arr1[arrInt[1]]);
        } else if (arrInt.length == 2 && arrInt[0] != 1) {
            Console.Write (arr2[arrInt[0] - 2] + ' ' + arr0[arrInt[1] - 1]);
        } else if (arrInt.length == 1) {
            Console.Write (arr0[arrInt[0] - 1]);
        }
    }

    /*Найти расстояние между двумя точками в двумерном декартовом пространстве.*/
    public static void distance(double x1,double y1,double x2,double y2) {

        double n = Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
        Console.Write(n);
        Console.ReadKey(true);
    }
    }
}
