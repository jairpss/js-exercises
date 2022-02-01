/**
*   Return the second largest number in the array.
*   param {Number[]} nums - An array of numbers.
*   return {Number} The second largest number in the array.
**/

function getSecondLargest(arr) {
    // Complete the function
    arr = [...new Set(arr)]  // Remove duplicate numbers
    const secondLarge = arr.sort((a,b) => {
        return b - a
    })[1]
    
    console.log(`The second largest number is: ${secondLarge}`) 
}

getSecondLargest([8,40,90,90,5])


// Set es una colección de tipo especial: “conjunto de valores” (sin claves), donde cada valor puede aparecer solo una vez.

// Sus principales métodos son:

// new Set(iterable) – crea el set. El argumento opcional es un objeto iterable (generalmente un array) con valores para inicializarlo.