// Sueldo

let Persona ={
    Nombre: 'Raúl',
    Apellido: 'Calvimonte',
    sueldo: 1000,
    Aumento: 25,

};
let CalculoAumento = (Persona.sueldo * Persona.Aumento)/100;
let NuevoSueldo = Persona.sueldo + CalculoAumento;
console.log('Hola, estimado ' + Persona.Nombre+ ' ' +Persona.Apellido,); 
console.log("Su sueldo Actual es de " + "$" + Persona.sueldo);
console.log("Recibiste un aumento del " + Persona.Aumento + "%");
console.log("Tu nuevo sueldo es de " + '$' + NuevoSueldo );