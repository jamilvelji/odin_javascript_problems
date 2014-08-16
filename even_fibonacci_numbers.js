var i;
var fib = []; //Initialize array!

fib[0] = 0;
fib[1] = 1;
eventotal = 0;
for (i = 2; i <= 4000000; i++) {
    // Next fibonacci number = previous + one before previous
    fib[i] = fib[i - 2] + fib[i - 1];
    if (fib[i] % 2 === 0) {
        eventotal += fib[i];
    }
}
console.log(eventotal)