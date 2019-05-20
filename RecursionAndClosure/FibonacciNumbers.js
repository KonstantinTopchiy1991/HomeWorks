function fibonacci(value) {
    if (value === 1){
        return [0, 1];
    }else {
        let fib = fibonacci(value - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
};

//console.log(fibonacci(12));