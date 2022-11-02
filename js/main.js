const nDiQuadrati = 100;
const boardElementBox = document.querySelector("scacchiera");

// Ipposto il ciclo for per conteggiare da 1 a 100
for (let i = 1; i <= nDiQuadrati; i++) {

    // boardElementBox.innerHTML += `<div class="quadrato">${i}</div>`;

    // Verifico i multipli di 3
    if (i % 3 === 0 && i % 15 !== 0) {
        console.log("Fizz")
    }
    // Verifico i multipli di 5
    else if (i % 5 === 0 && i % 15 !== 0) {
        console.log("Buzz")
    }
    // Verifico i multipli di 15
    else if (i % 15 == 0) {
        console.log("FizzBuzz")
    }

    else {
        console.log(i);
    }
}