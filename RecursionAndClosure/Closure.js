function Closure() {
    let b = 10;
    let c = 100;
    function inner() {

        let a = 20;

       // console.log("a: " + a + " b = " + b);

        let copyB = b;
        let copyA = a;

        a++;
        b++;

        return "a = " + copyA + ", b = " + copyB


    }
    return inner;
}
let A = Closure();
let B = Closure();

A();
A();
A();
B();
B();