// funciones sin parametros
function aumentarPrecio(){
    console.log('prueba');
    let disney = 385;
    let inflacion = 150;
    document.write('Valor total del servicio de disney plus $'+(disney + inflacion)+'<br>');
};

// funcion con parametros
function actualizarPrecio(monto, producto, precio){
    let calculo = precio + monto;
    document.write('<br>El producto: '+producto+' precio total $'+calculo)
}

// funciones que devuelven un valor
    function convertirDolaresPesos(precioDolar){
        let total = precioDolar * 184;
        return total;
        //jamas escribimos en esta zona, la linea de return es la ultima que se ejecuta
    }


// funciones en forma de flecha =>
let convertirDolaresPesos = (precioDolar) => {
    let total = precioDolar * 184;
    return total;
}

//invocar o llamar funcion
aumentarPrecio();

let coeficienteInflacion = parseInt(prompt('Ingrese el monton total de la inflaccion del mes: '));

actualizarPrecio(coeficienteInflacion, 'Teclado Hyperx', 9000);
actualizarPrecio(coeficienteInflacion, 'Teclado Logitec', 14000);
actualizarPrecio('mouse logitec',9000, 100);
let monto = 3000;
console.log(monto)

if(10<coeficienteInflacion){
    let prueba = 10;
} else {
    prueba 
}

