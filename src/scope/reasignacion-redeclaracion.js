var firstName; // valor undefined
firstName = 'Oscar'; // asignar

var lastName = 'Aparicio'; // Declarar y asignar
lastName = 'Ana'; // re asignar

var secondName = 'David'; // Declara y asignar
var secondName = 'Ana'; // re asignar
console.log(secondName);

// Let
let fruit = 'apple'; // declarar y asignar
fruit = 'Kiwi'; // re asignar

let fruit = 'Banana'; // No deja re declarar 

// Const
const animal = 'dog'; // declara y asigna
animal = 'gato'; // falla porque las constantes no se pueden re asignar
const animal = 'snake'; // falla porque las constantes no se pueden re declarar

const vehicles = []; // Cons no asegura la no inmutabilidad de la constante.
vehicles.push('carrito');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);


