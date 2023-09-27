let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let desaprobados = estudiantes.filter(estudiantes => estudiantes.promedio >= 7 )
let aprobados = estudiantes.filter(estudiantes => estudiantes.promedio <6 )
console.log("aprobados", aprobados)
console.log("desaprobados", desaprobados)

let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(function(num){
    return num + 1
    
})
console.log(horariosAtrasados);