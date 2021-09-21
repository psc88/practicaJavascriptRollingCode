// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// let auto = {
//     color: 'Negro',
//     marca: 'Chevrolet',
//     modelo: 'Corsa Classic',
//     estadoDelVehiculo: true,
// }

// let mostrarAtributos = (auto) => {
//     let clave = Object.keys(auto);
//     for(let i=0; i<clave.length; i++){
//         let propiedad = clave[i]
//         document.write(`<br>${propiedad}: ${auto[propiedad]}`)
//     }
// }

// let encenderApagar = confirm('Encender el vehiculo ?')
//     auto.estadoDelVehiculo = encenderApagar;
//     if(auto.estadoDelVehiculo == true){
//         auto.estadoDelVehiculo = 'Encendido';
//     } else {
//         auto.estadoDelVehiculo = 'Apagado';
//     }
//     mostrarAtributos(auto);

// -----------------------------------------------------------------------------

// Cuenta bancaria
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// * Una propiedad titular con el valor "Alex".
// * Una propiedad saldo, teniendo como valor inicial 0.
// * Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// * Un método extraer() que permita retirar la cantidad pasada como parámetro.
// * Un método informar() que retorne la información del estado de la cuenta. 
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// let cuenta = {
//     titular: 'Alex',
//     saldo: 0,
//     ingresar: (importe) => {
//         cuenta.saldo = cuenta.saldo + importe;
//     },
//     extraer: (extraerDinero) => {
//         if(cuenta.saldo > extraerDinero){
//             cuenta.saldo = cuenta.saldo - extraerDinero;
//         } else {
//             alert(`Saldo insuficiente, su saldo actual es: ${cuenta.saldo}`)
//         }
//     },
//     informar: () =>{
//         document.write(`Titular: ${cuenta.titular}, Tiene un saldo de ${cuenta.saldo}`)
//     },
// }



// do{
//     let cuentaBancaria = parseInt(prompt('1: Ingresar dinero 2: Extraer dinero 3: Consulta de saldo actual'));
//     switch(cuentaBancaria){
//         case 1:
//             do{
//                 let importe = parseFloat(prompt('Importe a ingresar en su cuenta bancaria: '));
//                 cuenta.ingresar(importe);
//                 console.log(cuenta.saldo);
//             }while(confirm('¿Ingresar Dinero?'))
//             break;
//         case 2:
//             do{
//                 let extraerDinero = parseFloat(prompt('Importe a retirar de su cuenta bancaria: '));
//                 cuenta.extraer(extraerDinero);
//             }while(confirm('¿Retirar mas dinero?'))
//             break;
//         case 3:
//             cuenta.informar();
//             break;
//         default:
//             console.log('el usuario eligio mal')
//     }
// } while(confirm('Elegir otra opcion'))

// -----------------------------------------------------------------------------
