// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
  return arr.every(value => value === arr[0])
 }

 console.log(myFunction([2,2,2]))

 