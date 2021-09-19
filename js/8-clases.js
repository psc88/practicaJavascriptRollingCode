//molde que nos permite crear muchos objetos (+2)
class Serie {
    //con este metodo se crean los objetos
    constructor(nombre, parametroTemporadas, parametroCapitulos, parametroGenero){
        // crear las propiedades del objeto
        this.nombre = nombre;
        this.temporadas = parametroTemporadas;
        this.capitulos = parametroCapitulos;
        this.genero = parametroGenero;
        this.publicado = false; //propiedad por defecto
    }

    // Aqui van nuestros metodos
    mostrarDatos(){
        document.write('Serie: '+ this.nombre +' Temporadas: '+ this.temporadas+'<br>');
    }

    mostrarDatosExtendidos(){
        // mostrar todas las propiedades del objeto '' 0 ``
        document.write(`<br>Serie: ${this.nombre}`)
        document.write(`<br>Temporada: ${this.temporadas}`)
        document.write(`<br>Capitulos: ${this.capitulos}`)
        document.write(`<br>Genero: ${this.genero}`)
    }
}

//utilizar la clase o crear o instanciar objetos
let theOffice = new Serie('The office', 9, 27, 'sticom');
let vikingos = new Serie('Vikings', 5, 20, 'Accion')

console.log(theOffice);

theOffice.mostrarDatos();
vikingos.mostrarDatos();
document.write(`<br>-------------------------`)
theOffice.mostrarDatosExtendidos();
document.write(`<br>-------------------------`)
vikingos.mostrarDatosExtendidos();

// let serie = {
//     nombre: 'the office',
//     temporadas: 9,
//     genero: 'sticom',
//     capitulos: 27
// }
