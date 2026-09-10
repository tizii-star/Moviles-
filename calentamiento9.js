function Calcularestadisticasdescarga (cantArchivos, tamañoPromedioMB){
    let cantidad = Number (cantArchivos);
    let tamaño = Number (tamañoPromedioMB);

    let pesoTotalMB = cantidad * tamaño;
    let pesoTotalKB = pesoTotalMB * 1024;

    return `se descargaran ${cantidad} archivos con un peso total de ${pesoTotalKB} KB.`;

}
console.log(Calcularestadisticasdescarga("10", "1.5"))