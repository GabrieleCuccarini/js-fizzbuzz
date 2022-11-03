"use strict"

const boardElementBox = document.querySelector(".scacchiera");
let inside

// Imposto il ciclo for per conteggiare da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Verifico i multipli di 15
    if (i % 15 === 0) {
        const inside = document.createElement("div")
        inside.classList.add("quadrato","fizzbuzz-color")
        inside.innerHTML = "FizzBuzz"
        boardElementBox.append(inside)
        console.log("FizzBuzz")
    }
    // Verifico i multipli di 5
    else if (i % 5 === 0) {
        const inside = document.createElement("div")
        inside.classList.add("quadrato", "buzz-color")
        inside.innerHTML = "Buzz"
        boardElementBox.append(inside)
        console.log("Buzz")
    }
    // Verifico i multipli di 3
    else if (i % 3 === 0) {
        const inside = document.createElement("div")
        inside.classList.add("quadrato", "fizz-color")
        inside.innerHTML = "Fizz"
        boardElementBox.append(inside)
        console.log("Fizz")
    }
    else {
        const inside = document.createElement("div")
        inside.classList.add("quadrato", "base-color")
        inside.innerHTML = i
        boardElementBox.append(inside)
        console.log(i)
    }
}

// const nomevariabile = document.createElement("div");
// nomevariabile.classList.add( "quadrato", "fizzbuzz-color")
// nomevariabile.innerHTML = "<strong>ciao</strong>""
