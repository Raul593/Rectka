let tipodevehiculo = "compacto";

function alquiler(tipodevehiculo, sillaParaBebe ) {
    switch (tipodevehiculo) {
        case "compacto":
            console.log("el alquiler de tu vehiculo es de $14000")
            break;
        case "mediano":
            console.log("el alquiler de tu vehiculo es de $17000")
            break;
        case "camioneta":
            console.log("el alquiler de tu vehiculo es de $17000");   
    
        default:
            console.log("no");
            break;
    } if(sillaParaBebe == true){
        console.log("la silla para bebe te costara $1200")


    }else { 
        console.log("no")
    }
    
}
console.log(alquiler("camioneta", true))