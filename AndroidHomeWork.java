public class AndroidHomeWork {

    public static void main(String[] args) {
        printAll();
    }

    public static void printAll(){

        int[] array = {5, 3, 8, 14, 21, 19};

        System.out.println("evenNumber = " + evenNumber(5, 6) +
               '\n' + "quarterNumber = " + quarterNumber(3, -2) +
        '\n' + "sumNumber = " + sumNumber(5, -4, 8) +
        '\n' + "maxExp = " + maxExp(4, 7, 1) +
        '\n' + "ratinStudent = " + ratingStudent(73) +
        '\n' + "evenNumbers : " + evenNumbers() +
        '\n' + "primeNumber = " + primeNumber(7) +
        '\n' + "rootNumber = " + rootNumber(36) +
        '\n' + "factorialNumber = " + factorialNumber(5) +
        '\n' + "sumNembers = " + sumNumbers(15) +
        '\n' + "reverseNumber = " + reverseNumber(124) +
        '\n' + "minOfArray = " + minOfArray(array) +
        '\n' + "maxOfArray = " + maxOfArray(array) +
        '\n' + "minIndexOfArray = " + minIndexOfArray(array) +
        '\n' + "maxIndexOfArray = " + maxIndexOfArray(array) +
        '\n' + "sumElemOddIndex = " + sumElemOddIndex(array) +
        '\n' + "reversOfArray = " + reversOfArray(array) +
        '\n' + "funcOddElements = " + funcOddElements(array) +
        '\n' + "funcReplaceHalf = " + replaceHalfArray(array) +
        '\n' + "bubbleSort = " + bubbleSort(array) +
        '\n' + "selectSort = " + selectSort(array) +
        '\n' + "insertSort = " + insertSort(array) +
        '\n' + "dayOfWeek = " + dayOfWeek(5) +
        '\n' + "numberToString = " + numberToString(55) +
        '\n' + "distance = " + distance(3, 5, 6, 2));
    }

    // Условные операторы

    /*Если а  - четное посчитать а*b, иначе a+b*/
    public static int evenNumber(int a, int b) {
        if (a % 2 == 0) {
            return (a * b);
        } else {
            return (a + b);
        }
    }

    /* Определить какой четверти принадлежит точка с координатами (x, y)*/
    public static String quarterNumber(int x, int y) {
        if (x > 0 && y > 0){
            return ("firstQuarter");
        } else if (x > 0 && y < 0){
            return ("secondQuarter");
        } else if (x < 0 && y < 0){
            return ("thirdQuarter");
        } else {
            return ("fourthQuarter");
        }

    }

    /*Найти суммы только положительных из трех чисел*/
    public static int sumNumber( int a, int b, int c) {

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
        return sum;
    }

    /*Посчитать выражение макс(a*b*c, a+b+c) + 3*/
    public static int maxExp(int a, int b, int c) {
        if ((a * b *c) > (a + b + c)){
            return ((a * b * c) + 3);
        } else {
            return ((a + b + c) + 3);
        }
    }

    /*Написать программу определения оценки студента по его рейтингу*/
    public static String ratingStudent(int rating) {
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
        return null;
    }

    //Циклы

    /*Найти сумму четных чисел и их количество в диапазоне от 1 до 99*/
    public static String evenNumbers() {
        int sum = 0;
        int quantity = 0;

        for (int i = 0; i <= 99; i++) {
            if (i % 2 == 0){
                sum += i;
                quantity++;
            }
        }
        return "Сумма = " + sum + ", Количество = " + quantity;
    }

    /*Проверить простое ли число?*/
    public static String primeNumber(int number) {
        if (number == 1){
            return "false";
        }

        for(int i = 2; i < number; i++){
            if (number % i == 0){
                return "Составное";
            } else {
                return "Простое";
            }
        }
        return null;
    }

    /*Найти корень натурального числа с точностью до целого*/
    public static int rootNumber(int a) {
        int num = 1;

        while (num * num <= a){
            num++;
        }

        return (num - 1);
    }

    /*Вычислить факториал числа n. n! = 1*2*...*n-1*n*/
    public static int factorialNumber(int x){
        int factorial = 1;
        if (x > 1) {
            for (int i = 2; i <= x; i++) {
                factorial *= i;
            }
        }
        return factorial;
    }

    /*Посчитать сумму цифр заданного числа*/
    public static int sumNumbers(int number) {
        int sum = 0;

        while (number != 0){
            sum += number % 10;
            number /= 10;
        }
        return sum;
    }

    /*Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321*/
    public static int reverseNumber(int number) {
        String numberAsString = new String(String.valueOf(number));
        String splitReversedNumber = new StringBuffer(numberAsString).reverse().toString();
        int reversedNumber = Integer.parseInt(splitReversedNumber);
        return reversedNumber;
    }

    //Одномерные массивы

    /*Найти минимальный элемент массива*/
    public static int minOfArray(int[] arr) {
        int min = arr[0];

        for (int i = 0; i < arr.length; i++){
            if (arr[i] <= min){
                min = arr[i];
            }
        }
        return min;
    }

    /*Найти максимальный элемент массива*/
    public static int maxOfArray(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++){
            if (arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }

    /*Найти индекс минимального элемента массива*/
    public static int minIndexOfArray(int[] arr) {
        int index = 0;
        int minValue = arr[0];
        for (int i = 0; i < arr.length; i++){
            if (arr[i] < minValue){
                minValue = arr[i];
                index = i;
            }
        }
        return index;
    }

    /*Найти индекс максимального элемента массива*/
    public static int maxIndexOfArray(int[] arr) {
        int index = 0;
        int maxValue = arr[0];
        for (int i = 0; i < arr.length; i++){
            if (arr[i] > maxValue){
                maxValue = arr[i];
                index = i;
            }
        }
        return index;
    }

    /*Посчитать сумму элементов массива с нечетными индексами*/
    public static int sumElemOddIndex(int[] arr) {
        int sumIndex = 0;
        for (int i = 0; i < arr.length; i++){
            if (i % 2 != 0){
                sumIndex += arr[i];
            }
        }
        return sumIndex;
    }

    /*Сделать реверс массива (массив в обратном направлении)*/
    public static int[] reversOfArray(int[] arr)
    {
        int response[] = new int[arr.length];
        int currentIndex = arr.length - 1;
        for (int i = 0; i <= (arr.length - 1); currentIndex--, i++)
        {
            response[currentIndex] = arr[i];
        }
        return response;
    }

    /*Посчитать количество нечетных элементов массива*/
    public static int funcOddElements(int[] arr) {
        int elem = 0;
        for (int i = 0; i < arr.length; i++){
            if (arr[i] % 2 != 0){
                elem++;
            }
        }
        return elem;
    }

    /*Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2*/
    public static int[] replaceHalfArray(int[] arr)
    {
        int half = arr.length / 2;
        int div = half + arr.length % 2;
        for (int i = 0; i < div; i++)
        {
            int currentElement = arr[i];
            arr[i] = arr[div + i];
            arr[div + i] = currentElement;
        }
        return arr;
    }

    /*Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))*/
    public static int[] bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length; i++){
            for (int j = 0; j < arr.length - 1; j++){
                if (arr[j] > arr[j +1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    public static int[] selectSort(int[] arr) {
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
        return arr;
    }

    public static int[] insertSort(int[] arr) {

        for(int i = 1; i < arr.length; i++){
            int value = arr[i];
            int j = i - 1;
            while(j >= 0 && value <= arr[j]){
                arr[j+1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = value;

        }
        return arr;
    }

    //Функции

    /*Получить строковое название дня недели по номеру дня*/
    public static String dayOfWeek(int day){
        String valueDay;

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
        return valueDay;
    }

    /*Вводим число (0-999), получаем строку с прописью числа.*/
    public static String numberToString(int number) {
        String str = Integer.toString(number);
        char[] arrNum = str.toCharArray();
        int[] arrInt = new int[arrNum.length];

        for (int i = 0; i < arrInt.length; i++) {

            arrInt[i] = (int) (arrNum[i] - '0');
        }

        String[] arr0 = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        String[] arr1 = {"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};
        String[] arr2 = {"twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"};
        String[] arr3 = {"hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hunfred"};

        if (arrInt.length == 3 && arrInt[1] == 1) {
            return (arr3[arrInt[0] - 1] + " " + arr1[arrInt[2]]);
        } else if (arrInt.length == 3 && arrInt[1] == 0){
            return (arr3[arrInt[0] - 1] + " " + arr0[arrInt[2] - 1]);
        } else if (arrInt.length == 3) {
            return (arr3[arrInt[0] - 1] + " " + arr2[arrInt[1] - 2] + " " + arr0[arrInt[2] - 1]);
        } else if (arrInt.length == 2 && arrInt[0] == 1) {
            return (arr1[arrInt[1]]);
        } else if (arrInt.length == 2 && arrInt[0] != 1) {
            return (arr2[arrInt[0] - 2] + ' ' + arr0[arrInt[1] - 1]);
        } else if (arrInt.length == 1) {
            return (arr0[arrInt[0] - 1]);
        }
        return null;
    }

    /*Найти расстояние между двумя точками в двумерном декартовом пространстве.*/
    public static double distance(int x1,int y1,int x2,int y2) {

        return Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));

    }
}

