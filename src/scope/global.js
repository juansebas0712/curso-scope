// variables

var a; // declaracion
var b = 'b'; // declaracion y asignacion

b = 'bb'; // re asignando

var a = 'aa'; // re declaracion


// Global Scope

var fruit = 'apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia'; // Si no se declara con var, let o cons, es global.
    console.log(country);
}

countries();
console.log(country);