function sumatoriaBajoImporte (importe){
    let suma = 0
    for (let i = 0; i < importe.length; i++){
        if (importe[i] > 0 && importe[i] <= 10000) {
            suma += importe[i]
        }
    }
    return suma;
}
let numerosSuma = [500, 500];

function asientosDisponibles(numeroDeAsiento) {


    let asientos = [3, 15, 18, 25];
    if(asientos.includes(numeroDeAsiento)){
        console.log(`Felicitaciones, el asiento número ${numeroDeAsiento} está disponible`);
    } else{
        console.log(`Lo sentimos, el asiento número ${numeroDeAsiento} está ocupado, pero aún quedan 5 asientos disponibles`);
    }
}
asientosDisponibles(18)
asientosDisponibles(78)
asientosDisponibles(25)