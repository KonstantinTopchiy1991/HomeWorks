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

    
    }
}
