function calcularTarifa(tipoVehiculo, hora, esFeriado) {
let tarifa;

if (tipoVehiculo === "moto") {
tarifa = 150;
} else if (tipoVehiculo === "auto") {
tarifa = 300;
} else if (tipoVehiculo === "camion") {
tarifa = 600;
}

if (!esFeriado && ((hora >= 8 && hora <= 10) || (hora >= 17 && hora <= 19))) {
tarifa = tarifa * 1.30;
}

return tarifa;
}
console.log(calcularTarifa("moto", 9, false))