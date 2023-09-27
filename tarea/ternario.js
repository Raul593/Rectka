let pagoMes = 100;
let consumoKWH = 500;
let calculo = pagoMes * 20/100
let cuota = calculo + pagoMes  ?'Debido a que superas Los 340KWH pagas un %20 mas':'si no pasas los 300KWH no aumento'
console.log( cuota);

function noParesDeContarImparesHasta(numero) {
    let impares = 0
    for ( let i = 0 ; i < numero; i++ ){ 
        if(i % 2 !== 0) {
            impares++
        }
      
     }
     return impares;
}

console.log(noParesDeContarImparesHasta(4))
