//This is a Function that print a string backwards 

const reversed = (str) => {
    let splitString = str.split("") //convertimos el string en un array, se separan las letras
    let revString = splitString.reverse() //se ponen al reves los valores en el array
    let joinString = revString.join("") //se unen los valores del array formando el string de nuevo

    return joinString //retorna el valor reversed y junto
}

console.log(reversed("Hola mundo"))