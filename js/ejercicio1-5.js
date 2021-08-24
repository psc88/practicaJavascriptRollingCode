/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/
alert("un mensaje")

/*Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).*/

document.write('hello World<br>');

/*Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. */

document.write(3+5);

/**Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario» */

let nombreDeUsuario = prompt("Cual es tu nombre: ");
document.write('<br>Hola ' + nombreDeUsuario);

/* Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números. */

let numero1 = parseInt(prompt('Ingrese el primer numero: '));
let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

document.write('<br>El resultado es: ' + (numero1 + numero2));