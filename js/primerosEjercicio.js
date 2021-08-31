/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/
// alert("un mensaje")

/*2.-Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).*/

// document.write('hello World<br>');

/*3.-Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. */

// document.write(3+5);

/*4.-Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario» */

// let nombreDeUsuario = prompt("Cual es tu nombre: ");
// document.write('<br>Hola ' + nombreDeUsuario);

/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números. */

// let numero1 = parseInt(prompt('Ingrese el primer numero: '));
// let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

// document.write('<br>El resultado es: ' + (numero1 + numero2));

/*6.-scribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */

// let numero1 = prompt('Ingrese el primer numero: ')
// let numero2 = prompt('Ingrese el segundo numero: ')

// if (numero1 > numero2) {
//     document.write('el numero mas grande es :',numero1)
// } else {
//     document.write('el numero mas grande es :',numero2)
// }

/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/

// let numero1 = prompt('Ingrese el primer numero: ')
// let numero2 = prompt('Ingrese el segundo numero: ')
// let numero3 = prompt('Ingrese el tercer numero: ')

// if(numero1 > numero2 && numero1 > numero3){
//     document.write('El numero mas grande es: ',numero1)
// } else if (numero2 > numero3) {
//     document.write('El numero mas grande es: ',numero2)
// } else {
//     document.write('El numero mas grande es: ',numero3)
// }

// 8.- Escribe un programa que pida un número y diga si es divisible por 2

// let numero1 = parseInt(prompt('Ingrese un numero: '));

// if(numero1 % 2 == 0){
//     document.write('El numero es divisible en 2')
// } else {
//     document.write('No es divisible en 2')
// }

// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

// let frase = prompt('Escriba una frase: ');
// let contador = frase.length;

// for (let i = 0; i < contador; i++){
//     if (frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i" || frase.substr(i,1) === "o" || frase.substr(i,1) === "u"){
//         document.write(frase.substr(i,1))
//     }
// }
// length: sirve para contar cuantos caracteres hay en una frase
// Substr:

// OTRA FORMA CON BUCLE
// let frase = prompt("Escriba una frase: ");
// frase = frase.toLowerCase();
// let contador = frase.length;
// for (let vocal = 0; vocal < contador; vocal++) {
//   if (
//     frase.charAt(vocal) == "a" ||
//     frase.charAt(vocal) == "e" ||
//     frase.charAt(vocal) == "i" ||
//     frase.charAt(vocal) == "o" ||
//     frase.charAt(vocal) == "u"
//   ) {
//     document.write(frase.charAt(vocal));
//   }
// }

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// let numero1 = parseInt(prompt('Ingrese un numero: '));

// if(numero1 % 2 == 0 || numero1 % 3 == 0 || numero1 % 5 == 0 || numero1 % 7 == 0){
//     document.write('El numero es divisible en 2, 3, 5, 7')
// } else {
//     document.write('No es divisible ni por 2, ni por 3, ni por 5, ni por 7')
// }

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

// let numero1 = parseInt(prompt("Ingrese un numero: "));

// if (
//   numero1 % 2 === 0 ||
//   numero1 % 3 === 0 ||
//   numero1 % 5 === 0 ||
//   numero1 % 7 === 0
// ) {
//   if (numero1 % 2 === 0) {
//     document.write("Es divisible por 2. ");
//   }
//   if (numero1 % 3 === 0) {
//     document.write("Es divisible por 3. ");
//   }
//   if (numero1 % 5 === 0) {
//     document.write("Es divisible por 5. ");
//   }
//   if (numero1 % 7 === 0) {
//     document.write("Es divisible por 7. ");
//   }
// } else {
//   document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
// }
