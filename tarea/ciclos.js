function cantidadDeMesesConGanancia (dato) {
    let datosmes =0;



    for (let mes = 0; mes < dato.length; mes++){
        if (mes) {
            datosmes.push(dato)

        }
    }
    return datosmes;
    
}
let pago = cantidadDeMesesConGanancia([10, -10, 2, 100]);
let pago1 = cantidadDeMesesConGanancia([0, 3, -1, 5]);
let pago2 = cantidadDeMesesConGanancia([]);
console.log(pago);
console.log(pago1);
console.log(pago2);