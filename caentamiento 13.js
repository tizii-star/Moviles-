function dibujarGraficoConsumo(pasos) {
let grafico = "";

for (let i = 1; i <= pasos; i++) {

for (let j = 1; j <= i; j++) {
grafico = grafico + "■";
}

grafico = grafico + "\n";
}

return grafico;
}
console.log(dibujarGraficoConsumo(5));