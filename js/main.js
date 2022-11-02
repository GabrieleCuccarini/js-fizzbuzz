const boardElementBox = document.querySelector(".scacchiera");

// Imposto il ciclo for per conteggiare da 1 a 100
for (let i = 1; i <= 100; i++) {


    // Verifico i multipli di 15
    if (i % 15 === 0) {
        boardElementBox.innerHTML += `<div class="quadrato fizzbuzz-color">${"FizzBuzz"}</div>`;
        console.log("FizzBuzz")
    }
    // Verifico i multipli di 5
    else if (i % 5 === 0) {
        boardElementBox.innerHTML += `<div class="quadrato buzz-color">${"Buzz"}</div>`;
        console.log("Buzz")
    }
    // Verifico i multipli di 3
    else if (i % 3 === 0) {
        boardElementBox.innerHTML += `<div class="quadrato fizz-color">${"Fizz"}</div>`;
        console.log("Fizz")
    }
    else {
        boardElementBox.innerHTML += `<div class="quadrato base-color">${i}</div>`;
        console.log(i)
    }
}