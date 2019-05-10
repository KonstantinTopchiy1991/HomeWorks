import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AndroidJavaTest {
    private AndroidJava androidJava;

    @Before
    public void init() { androidJava = new AndroidJava(); }
    @After
    public void tearDown() { androidJava = null; }


    // Условные операторы

    /*Если а  - четное посчитать а*b, иначе a+b*/
    @Test
    public void testEvenNumber() {
        int n = androidJava.evenNumber(8,3);
        assertEquals(24, n);

        int a = androidJava.evenNumber(7,2);
        assertEquals(9, a);
    }

    /* Определить какой четверти принадлежит точка с координатами (x, y)*/
    @Test
    public void quarterNumber() {
        String n = androidJava.quarterNumber(8,3);
        assertEquals("firstQuarter", n);

        String a = androidJava.quarterNumber(5, -1);
        assertEquals("secondQuarter", a);

        String b = androidJava.quarterNumber(-4, -2);
        assertEquals("thirdQuarter", b);

        String c = androidJava.quarterNumber(-6, 3);
        assertEquals("fourthQuarter", c);
    }

    /*Найти суммы только положительных из трех чисел*/
    @Test
    public void sumNumber() {
        int a = androidJava.sumNumber(8, -3, -5);
        assertEquals(8, a);

        int b = androidJava.sumNumber(-4, 2, -6);
        assertEquals(2, b);

        int c = androidJava.sumNumber(-1, -4, 7);
        assertEquals(7, c);
    }

    /*Посчитать выражение макс(a*b*c, a+b+c) + 3*/
    @Test
    public void maxExp() {
        int a = androidJava.maxExp(2, 3, 4);
        assertEquals(27, a);

        int b = androidJava.maxExp(2, 1, 2);
        assertEquals(8, b);

        int c = androidJava.maxExp(-1, 5, 4);
        assertEquals(11, c);
    }

    /*Написать программу определения оценки студента по его рейтингу*/
    @Test
    public void ratingStudent() {
        String a = androidJava.ratingStudent(91);
        assertEquals("A", a);

        String b = androidJava.ratingStudent(83);
        assertEquals("B", b);

        String c = androidJava.ratingStudent(67);
        assertEquals("C", c);

        String d = androidJava.ratingStudent(50);
        assertEquals("D", d);

        String e = androidJava.ratingStudent(29);
        assertEquals("E", e);

        String f = androidJava.ratingStudent(11);
        assertEquals("F", f);
    }

    //Циклы

    /*Найти сумму четных чисел и их количество в диапазоне от 1 до 99*/
    @Test
    public void evenNumbers() {
        String a = androidJava.evenNumbers(5);
        assertEquals("Сумма = " + 6 + ", Количество = " + 2, a);

        String b = androidJava.evenNumbers(9);
        assertEquals("Сумма = " + 20 + ", Количество = " + 4, b);
    }

    /*Проверить простое ли число?*/
    @Test
    public void primeNumber() {
        String a = androidJava.primeNumber(1);
        assertEquals("false", a);

        String b = androidJava.primeNumber(7);
        assertEquals("Простое", b);

        String c = androidJava.primeNumber(10);
        assertEquals("Составное", c);

        String d = androidJava.primeNumber(37);
        assertEquals("Простое", d);
    }

    /*Найти корень натурального числа с точностью до целого*/
    @Test
    public void rootNumber() {
        int a = androidJava.rootNumber(9);
        assertEquals(3, a);

        int b = androidJava.rootNumber(25);
        assertEquals(5, b);

        int c = androidJava.rootNumber(36);
        assertEquals(6, c);
    }

    /*Вычислить факториал числа n. n! = 1*2*...*n-1*n*/
    @Test
    public void factorialNumber() {
        int a = androidJava.factorialNumber(4);
        assertEquals(24, a);

        int b = androidJava.factorialNumber(6);
        assertEquals(720, b);

        int c = androidJava.factorialNumber(5);
        assertEquals(120, c);
    }

    /*Посчитать сумму цифр заданного числа*/
    @Test
    public void sumNumbers() {
        int a = androidJava.sumNumbers(4);
        assertEquals(4, a);

        int b = androidJava.sumNumbers(6);
        assertEquals(6, b);
    }

    /*Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321*/
    @Test
    public void reverseNumber() {
        int a = androidJava.reverseNumber(421);
        assertEquals(124, a);

        int b = androidJava.reverseNumber(635);
        assertEquals(536, b);

        int c = androidJava.reverseNumber(368);
        assertEquals(863, c);
    }

    //Одномерные массивы

    /*Найти минимальный элемент массива*/
    @Test
    public void minOfArray() {
        int a = androidJava.minOfArray(new int[]{25, 14, 38, 8});
        assertEquals(8, a);

        int b = androidJava.minOfArray(new int[]{12, 42, 10, 68, 31, 52});
        assertEquals(10, b);

        int c = androidJava.minOfArray(new int[]{22, 30, 27, 46, 33, 47});
        assertEquals(22, c);

        int d = androidJava.minOfArray(new int[]{18, 6, 43, 27});
        assertEquals(6, d);
    }

    /*Найти максимальный элемент массива*/
    @Test
    public void maxOfArray() {
        int a = androidJava.maxOfArray(new int[]{25, 14, 38, 8});
        assertEquals(38, a);

        int b = androidJava.maxOfArray(new int[]{12, 42, 10, 68, 31, 52});
        assertEquals(68, b);

        int c = androidJava.maxOfArray(new int[]{22, 30, 27, 46, 33, 47});
        assertEquals(47, c);

        int d = androidJava.maxOfArray(new int[]{18, 6, 43, 27});
        assertEquals(43, d);
    }

    /*Найти индекс минимального элемента массива*/
    @Test
    public void minIndexOfArray() {
        int a = androidJava.minIndexOfArray(new int[]{25, 14, 38, 8});
        assertEquals(3, a);

        int b = androidJava.minIndexOfArray(new int[]{12, 42, 10, 68, 31, 52});
        assertEquals(2, b);

        int c = androidJava.minIndexOfArray(new int[]{22, 30, 27, 46, 33, 47});
        assertEquals(0, c);

        int d = androidJava.minIndexOfArray(new int[]{18, 6, 43, 27});
        assertEquals(1, d);
    }

    /*Найти индекс максимального элемента массива*/
    @Test
    public void maxIndexOfArray() {
        int a = androidJava.maxIndexOfArray(new int[]{25, 14, 38, 8});
        assertEquals(2, a);

        int b = androidJava.maxIndexOfArray(new int[]{12, 42, 10, 68, 31, 52});
        assertEquals(3, b);

        int c = androidJava.maxIndexOfArray(new int[]{22, 30, 27, 46, 33, 47});
        assertEquals(5, c);

        int d = androidJava.maxIndexOfArray(new int[]{18, 6, 43, 27});
        assertEquals(2, d);
    }

    /*Посчитать сумму элементов массива с нечетными индексами*/
    @Test
    public void sumElemOddIndex() {
        int a = androidJava.sumElemOddIndex(new int[]{25, 14, 38, 8});
        assertEquals(22, a);

        int b = androidJava.sumElemOddIndex(new int[]{12, 42, 10, 68, 31, 52});
        assertEquals(162, b);

        int c = androidJava.sumElemOddIndex(new int[]{22, 30, 27, 46, 33, 47});
        assertEquals(123, c);

        int d = androidJava.sumElemOddIndex(new int[]{18, 6, 43, 27});
        assertEquals(33, d);
    }

    /*Сделать реверс массива (массив в обратном направлении)*/
    @Test
    public void reversOfArray() {
        int[] a = androidJava.reversOfArray(new int[]{25, 14, 38, 8});
        for (int i = 0; i < a.length; i++) {
            assertEquals(new int[]{8, 38, 14, 25}, a);
        }

        int[] b = androidJava.reversOfArray(new int[]{12, 42, 10, 68, 31, 52});
        for (int i = 0; i < b.length; i++) {
            assertEquals(new int[]{52, 31, 68, 10, 42, 12}, b);
        }

        int[] c = androidJava.reversOfArray(new int[]{22, 30, 27, 46, 33, 47});
        for (int i = 0; i < c.length; i++) {
            assertEquals(new int[]{47, 33, 46, 27, 30, 22}, c);
        }

        int[] d = androidJava.reversOfArray(new int[]{18, 6, 43, 27});
        for (int i = 0; i < d.length; i++) {
            assertEquals(new int[]{27, 43, 6, 18}, d);
        }
    }

    /*Посчитать количество нечетных элементов массива*/
    @Test
    public void funcOddElements() {
        int a = androidJava.funcOddElements(new int[]{25, 14, 38, 8});
        assertEquals(1, a);

        int b = androidJava.funcOddElements(new int[]{12, 42, 10, 68, 31, 52});
        assertEquals(1, b);

        int c = androidJava.funcOddElements(new int[]{22, 30, 27, 46, 33, 47});
        assertEquals(3, c);

        int d = androidJava.funcOddElements(new int[]{18, 6, 43, 27});
        assertEquals(2, d);
    }

    /*Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2*/
    @Test
    public void replaceHalfArray() {
        int[] a = androidJava.replaceHalfArray(new int[]{25, 14, 38, 8});
        for (int i = 0; i < a.length; i++) {
            assertEquals(new int[]{38, 8, 25, 14}, a);
        }

        int[] b = androidJava.replaceHalfArray(new int[]{12, 42, 10, 68, 31, 52});
        for (int i = 0; i < b.length; i++) {
            assertEquals(new int[]{68, 31, 52, 12, 42, 10}, b);
        }

        int[] c = androidJava.replaceHalfArray(new int[]{22, 30, 27, 46, 33, 47});
        for (int i = 0; i < c.length; i++) {
            assertEquals(new int[]{46, 33, 47, 22, 30, 27}, c);
        }

        int[] d = androidJava.replaceHalfArray(new int[]{18, 6, 43, 27});
        for (int i = 0; i < d.length; i++) {
            assertEquals(new int[]{43, 27, 18, 6}, d);
        }
    }

    /*Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))*/
    @Test
    public void bubbleSort() {
        int[] a = androidJava.bubbleSort(new int[]{25, 14, 38, 8});
        for (int i = 0; i < a.length; i++) {
            assertEquals(new int[]{8, 14, 25, 38}, a);
        }

        int[] b = androidJava.bubbleSort(new int[]{12, 42, 10, 68, 31, 52});
        for (int i = 0; i < b.length; i++) {
            assertEquals(new int[]{10, 12, 31, 42, 52, 68}, b);
        }

        int[] c = androidJava.bubbleSort(new int[]{22, 30, 27, 46, 33, 47});
        for (int i = 0; i < c.length; i++) {
            assertEquals(new int[]{22, 27, 30, 33, 46, 47}, c);
        }

        int[] d = androidJava.bubbleSort(new int[]{18, 6, 43, 27});
        for (int i = 0; i < d.length; i++) {
            assertEquals(new int[]{6, 18, 27, 43}, d);
        }
    }

    @Test
    public void selectSort() {
        int[] a = androidJava.selectSort(new int[]{25, 14, 38, 8});
        for (int i = 0; i < a.length; i++) {
            assertEquals(new int[]{8, 14, 25, 38}, a);
        }

        int[] b = androidJava.selectSort(new int[]{12, 42, 10, 68, 31, 52});
        for (int i = 0; i < b.length; i++) {
            assertEquals(new int[]{10, 12, 31, 42, 52, 68}, b);
        }

        int[] c = androidJava.selectSort(new int[]{22, 30, 27, 46, 33, 47});
        for (int i = 0; i < c.length; i++) {
            assertEquals(new int[]{22, 27, 30, 33, 46, 47}, c);
        }

        int[] d = androidJava.selectSort(new int[]{18, 6, 43, 27});
        for (int i = 0; i < d.length; i++) {
            assertEquals(new int[]{6, 18, 27, 43}, d);
        }
    }

    @Test
    public void insertSort() {
        int[] a = androidJava.insertSort(new int[]{25, 14, 38, 8});
        for (int i = 0; i < a.length; i++) {
            assertEquals(new int[]{8, 14, 25, 38}, a);
        }

        int[] b = androidJava.insertSort(new int[]{12, 42, 10, 68, 31, 52});
        for (int i = 0; i < b.length; i++) {
            assertEquals(new int[]{10, 12, 31, 42, 52, 68}, b);
        }

        int[] c = androidJava.insertSort(new int[]{22, 30, 27, 46, 33, 47});
        for (int i = 0; i < c.length; i++) {
            assertEquals(new int[]{22, 27, 30, 33, 46, 47}, c);
        }

        int[] d = androidJava.insertSort(new int[]{18, 6, 43, 27});
        for (int i = 0; i < d.length; i++) {
            assertEquals(new int[]{6, 18, 27, 43}, d);
        }
    }

    //Функции

    /*Получить строковое название дня недели по номеру дня*/
    @Test
    public void dayOfWeek() {
        String a = androidJava.dayOfWeek(2);
        assertEquals("Вторник", a);

        String b = androidJava.dayOfWeek(4);
        assertEquals("Четверг", b);

        String c = androidJava.dayOfWeek(6);
        assertEquals("Суббота", c);
    }

    /*Вводим число (0-999), получаем строку с прописью числа.*/
    @Test
    public void numberToString() {
        String a = androidJava.numberToString(122);
        assertEquals("hundred twenty two", a);

        String b = androidJava.numberToString(87);
        assertEquals("eighty seven", b);

        String c = androidJava.numberToString(431);
        assertEquals("four hundred thirty one", c);

        String d = androidJava.numberToString(333);
        assertEquals("three hundred thirty three", d);
    }
}