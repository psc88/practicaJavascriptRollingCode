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

let cuenta = {
    titular: 'Alex',
    saldo: 0,    
}
