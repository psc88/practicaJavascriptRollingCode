/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
// let edad = parseInt(prompt("Ingrese su edad: "));

// if (edad >= 18) {
//   document.write("Usted ya puede conducir");
// } else if (edad >= 0 && edad < 18) {
//   document.write("no puede conducir");
// } else {
//   document.write("Ingreso un numero incorrecto");
// }

//----------------------------------------------------------------------------------------

/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:*/
// let nota = parseInt(prompt('Ingresa la nota del alumno: '));

// if(nota >= 0 && nota <=10){
//     if(nota >=0 && nota <=2){
//         alert('Muy deficiente')
//     } else if (nota >=3 && nota <=4) {
//         alert('Insuficiente')
//     } else if (nota >=5 && nota <=6) {
//         alert('Suficiente')
//     } else if (nota == 7) {
//         alert('Bien')
//     } else if (nota >=8 && nota <=9) {
//         alert('Notable')
//     } else {
//         alert('Sobresaliente')
//     }
// } else (
//     alert('Introduce un número valido')
// )

//----------------------------------------------------------------------------------------

/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

// let r = true;
// let palabra = prompt('Ingrese una cadena: ');
// cadena = palabra;
// while(r == true){
//     respuesta = prompt('quiere escribir mas datos?(si/no):')
//     if(respuesta == 'si'){
//         r = true;
//         let palabra = prompt('Ingrese una cadena: ');
//         cadena = cadena +'-'+ palabra;
//     } else {
//         r = false;
//     }
// }

// document.write(cadena);

//----------------------------------------------------------------------------------------

/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

// let resultado = 0;

// do{
//     numero = parseInt(prompt("Ingrese numero: "))
//     if(numero <0 || numero >=0){
//         resultado = resultado + numero;
//         console.log(resultado)
//     } else {
//         alert("No es un numero");
//         numero = parseInt(prompt("Ingrese numero: "));
//         resultado = resultado + numero;
//         console.log(resultado)
//     }
// } while(confirm('Ingresar mas numeros?'))

// document.write('el total es: ',resultado);

//----------------------------------------------------------------------------------------

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// do{
//     dni = parseInt(prompt('Ingrese numero de dni: '));
//     if(dni <0 || dni >=0){
//         if(dni >= 0 && dni <= 99999999 ){

//         }
//     }else{
//         alert('No ingreso un numero, o mezclo numeros con letra');
//         dni = parseInt(prompt('Ingrese numero de dni: '));
//     }
// }while(confirm('Ingresar otro dni ?'))

// sin completar...no te p

//----------------------------------------------------------------------------------------

// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// let numeros = 30;

// for(let i=1; i<=numeros; i++){
//     for(let multiplicador=0; multiplicador<i; multiplicador++){
//         document.write(i)
//     }
//     document.write('<br>')
// }

//----------------------------------------------------------------------------------------

// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// let numero = parseInt(prompt("Ingrese un numero de referencia: "));

// if(numero > 0 && numero <= 50) {
//   for (let i = numero; i >= 1; i--) {
//     for (let multiplicador = i; multiplicador >=1; multiplicador--) {
//         document.write(i);
//     }
//     document.write("<br>");
//   }
// } else {
//     document.write('el numero no esta dentro de los parametros')
// }

//----------------------------------------------------------------------------------------

// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// let numero = parseInt(prompt('Ingrese un numero: '));

// if(numero > 0 && numero <= 50){
//     for(let i=0; i<numero; i++){
//         for(let j=1; j<i+2; j++){
//             console.log(j)
//             document.write(j)
//         }
//         document.write('<br>')
//     }
// }

//----------------------------------------------------------------------------------------

// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// for(let i=1; i<=500; i++){
//     document.write(i);
//     if(i % 4 === 0){
//         document.write('(multiplo de 4)')
//     } else if(i % 9 === 0){
//         document.write('(multiplo de 9)')
//     }
//     if(i % 5 === 0){
//         document.write ('<hr>')
//     }
//     document.write('<br>')
// }

//----------------------------------------------------------------------------------------

// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// let filas = parseInt(prompt('Ingrese un numero de filas: '));
// let columna = parseInt(prompt('Ingrese un numero de columnas: '));
// let total = filas * columna;
// // total valor para cargar las celdas de la tabla

// document.write('<table border>');

// // document.write('<tr>');
// // document.write('<td>prueba');
// // document.write('</td>');
// // document.write('</tr>');
// for(let indiceFila = 0; indiceFila < filas; indiceFila++){
//     //dibujo la fila
//     document.write('<tr>');
//     //dibujo la columna
//     for(let indiceColumna = 0; indiceColumna < columna; indiceColumna++){
//         document.write('<td>'+ total);
//         document.write('</td>');
//         total--; //total = total-1;
//     }
//     document.write('</tr>');
// }

// document.write('</table>');

//----------------------------------------------------------------------------------------

// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// let nombre1 = prompt('Ingrese primer nombre: ');
// let edad1 = parseInt(prompt('Ingrese edad: '));
// let nombre2 = prompt('Ingrese segundo nombre: ');
// let edad2 = parseInt(prompt('Ingrese edad: '));
// let nombre3 = prompt('Ingrese tercer nombre: ');
// let edad3 = parseInt(prompt('Ingrese edad: '));

// let mayor = Math.max(edad1, edad2, edad3);

// if(mayor === edad1){
//     document.write('El mayor es: ',nombre1)
// } else if(mayor === edad2){
//     document.write('El mayor es: ',nombre2)
// } else if(mayor === edad3){
//     document.write('El mayor es: ',nombre3)
// } else {
//     document.write('error de datos')
// }

//----------------------------------------------------------------------------------------

// 12- Realiza un script que genere un número aleatorio entre 1 y 99

// let numeroAleatorio = Math.floor((Math.random()*99)+1);
// document.write(numeroAleatorio);

//----------------------------------------------------------------------------------------

// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

// let text = prompt('Ingrese un trexto: ');
// text = text.toUpperCase();
// document.write(text);

//----------------------------------------------------------------------------------------

// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let text = prompt('Ingrese un texto: ');
// let longitudDelTexto = text.length
// let caracter;

// for(let i=0; i<longitudDelTexto; i++){
//     caracter = text.charAt(i);
//     if(i===longitudDelTexto-1){
//         document.write(caracter);
//     }else {
//         document.write(caracter+'-');
//     }
// }

//----------------------------------------------------------------------------------------

// 15- Realiza un script que cuente el número de vocales que tiene un texto.

// let text = prompt('Ingrese un texto');
// let longitudDelTexto = text.length;
// let textoMayuscula = text.toUpperCase();
// let caracter;
// let contador = 0;

// for(let i=0; i<longitudDelTexto;i++){
//     caracter = textoMayuscula.charAt(i);
//     if(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U'){
//         contador++;
//     }
// }
// document.write('El numero de vocales es de: ',contador);

//----------------------------------------------------------------------------------------

// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// let text = prompt('Ingrese un texto');
// let longitudDelTexto = text.length;
// let caracter;
// let salida = '';

// for(i=0; i<longitudDelTexto;i++){
//     caracter = text.charAt(i);
//     salida = caracter + salida;
// }

// document.write(salida);

//----------------------------------------------------------------------------------------

// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// let vocales = ['a','e','i','o','u'];
// let texto = prompt('Ingrese un texto: ');
// let textoMinuscula = texto.toLowerCase();
// let posicion = 0;
// let parar = false;
// for(let i=0; i<textoMinuscula.length;i++){
//     for(let j=0;j<vocales.length;j++){
//         if(vocales[j] == textoMinuscula.charAt(i)){
//             posicion = i+1;
//             parar = true;
//             break;
//         }
//     }
//     if(parar){
//         break;
//     }    
// }
// document.write('La primera vocal esta en la posición ',posicion);