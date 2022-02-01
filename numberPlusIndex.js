// Write a function that takes an array as argument
// It should return the array of the values plus its index

const numPlusIndex = (arr) => {
    const newArr = arr.map((item, i) => item + '[' + i +']')

    return newArr
}

console.log(numPlusIndex([1, 5, 10]))