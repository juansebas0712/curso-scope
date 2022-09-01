function greeting() {
    let userName = 'Ana';
    console.log('Ana');

    if (userName === 'Ana') {
        console.log(`Hello ${userName}`)
    }
}

greeting()
console.log(userName); // Da error porque se definio la variable dentro de la funcion.