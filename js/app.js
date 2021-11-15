"use strict";

// Ejercicio 1
/**Empleando Vanilla JavaScript busca y 
 * muestra en la página el número menor y 
 * mayor del siguiente array:*/


// Nodos
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const a1 = document.querySelectorAll(".a1");
const p2 = document.querySelector(".parrafo2");




// Variables
const numbers = [243,45,71,121,73,8,92];
const precios = [42,64,81,14,75];




// Funciones
const ejercicio1 = (e) => {
    e.preventDefault();
    
    // Metodo find
    // const numeroMayor = numbers.find(element => element > 150);
    // const numeroMenor = numbers.find(elemento => elemento < 10)
    
    // metodo math
    // const numeroMayor = Math.max(numbers);
    // const numeroMenor = Math.min(numbers);

    // console.log(numeroMayor);
    // console.log(numeroMenor);

    // let p1 = a1[0].firstElementChild.nextElementSibling;
    // let p2 = p1.nextElementSibling;
    // p1.innerHTML += `<div>${numeroMayor}</div>`;
    // p2.innerHTML += `${numeroMenor}`;

    // metodo for numero mayor y menor
    let numero = numbers[1];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 150) {
            numero = numbers[i]
            console.log(numero);
        }
        if (numbers[i] < 10) {
            numero = numbers[i];
            console.log(numero);
        }
    }
    // console.log(numero);

    // Resultado Xurxo
//     let min, max;
//     min = max = numbers[0];
//     for(let numero of numbers) {
//         if (min > numero) {
//             min = numero;
//         }
//         if (max < numero) {
//             max = numero;
//         }
//     }
// console.log(`[${numbers}]: Mayor(${max}) - Menor(${min})`);

}


const ejercicio2 = (f) => {
    f.preventDefault();

    // Metodo map
    // let aumento = precios.map( function(x) {
    //     return x * 1.25;
    // })

    // p2.innerHTML = aumento;


    // console.log(precios)
    // Metodo for o while
    let newArray = [];
    // 
    for (let i = 0; i < precios.length; i++) {
        if (precios[i] !== 0) {
            newArray.push(precios[i] * 1.25);
            // console.log(newArray);
        }
        
    }
    console.log(newArray.join(" "));

    // Solución Xurxo
    // for(let i = 0; i<precios.length; i++) {
    //     precios[i] = precios[i]*1.25;
    // }
    // console.log(precios)
    // let precios25 = precios.map(
    // (precio) => {
    //      return * 1.25;
    // }
    // );

}



// Eventos
btn1.addEventListener(
    "click",
    ejercicio1
);

btn2.addEventListener(
    "click",
    ejercicio2
);