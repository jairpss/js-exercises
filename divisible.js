// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero digits.

function isDivisible(n, a, b) {
    const result1 = n / a
    const result2 = n / b

    if(result1 % 1 === 0 && result2 % 1 === 0){
      return true
    } else {
      return false
    }
}

console.log(isDivisible(3,3,4))