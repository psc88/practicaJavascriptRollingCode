/* 1 */
// let edad = parseInt(prompt("Ingrese su edad: "));

// if (edad >= 18) {
//   document.write("Usted ya puede conducir");
// } else if (edad >= 0 && edad < 18) {
//   document.write("no puede conducir");
// } else {
//   document.write("Ingreso un numero incorrecto");
// }

/* 2 */
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

/* 3 */

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

/* 4 */

let numero = parseInt(prompt('Ingrese numero: '));
let r = true;

while(r = true){
    if(!isNaN(numero)){
        let pregunta = document.write('Ingresar mas numeros?: ')
    } else {
        alert('No es un numero')
        let numero = parseInt(prompt('Ingrese numero: '));
    }
}