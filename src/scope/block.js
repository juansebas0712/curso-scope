function fruits() {
    if (true) {
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'kiwi'; // Block scope
        const fruit3 = 'banana'; // Block scope
    }

    console.log(fruit1);
    console.log(fruit2); // falla porque se llama fuera del bloque
    console.log(fruit3); // falla porque se llama fuera del bloque
}

fruits();