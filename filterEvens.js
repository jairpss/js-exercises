// Write a function that takes an array of numbers as argument
// It should return only the even numbers

const filterEvens = (arr) => {
    const newArr = arr.filter(item => item % 2 === 0);

    return newArr
}

console.log(filterEvens([1, 5, 4, 6, 9, 10]))