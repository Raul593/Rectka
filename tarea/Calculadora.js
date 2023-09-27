let calculadora = 'multiplicar';

switch (calculadora) {
    case 'sumar':
        console.log(2 + 2);
        break;
    case 'restar' :
        console.log(10 - 5);
        break;
    case 'dividir':
        console.log(100 / 20);
        break;
    case 'multiplicar':
        console.log(5 * 15);
        break;
    default:
        console.log('no es un numero')
         break;
}