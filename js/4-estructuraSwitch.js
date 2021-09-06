let estacion = parseInt(prompt('Ingrese su estacion del año preferido: 1-verano, 2-primavera, 3-otoño, 4-Invierno'))

switch(estacion) {
    case 1:
        document.write('El usuario selecciono la estacion Verano');
        break;
    case 2:
        document.write('El usuario selecciono la estacion Primavera');
        break;
    case 3:
        document.write('El usuario selecciono la estacion Otoño');
        break;
    case 4:
        document.write('El usuario selecciono la estacion Verano');
        break;
    default:
        document.write('El usuario selecciono una opcion erronea');
}