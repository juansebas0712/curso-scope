'use strict'

pi = 3.1416 // falla porque no se ha declarado la variable.
console.log(pi);

function myFunction() {
    'use strict';

    return pi = 3.15
}

console.log(myFunction()); // falla porque la variable dentro la function no fue declarada
