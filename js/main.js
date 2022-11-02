
// Ipposto il ciclo for per conteggiare da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Verifico i multipli di 3
    if (i % 3 == 0)
        console.log("Fizz")
    // Verifico i multipli di 5
    if (i % 5 == 0)
        console.log("Buzz")
    // Verifico i multipli di 15
    if (i % 15 == 0)
        console.log("FizzBuzz")
    else
        console.log(i);
}