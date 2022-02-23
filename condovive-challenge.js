// Write a program that prints the numbers from 1 to 100 with the following conditions.
// For multiples of three [3] print the word “condo” instead of the number.
// For multiples of five [5] print the word “vive” instead of the number.
// For multiples of both three [3] & five [5] print the word “condovive” instead of the number.

const challenge = (num) => {

    if(num % 3 === 0 && num % 5 === 0) {
        return 'condovive'
    }

    if(num % 3 === 0) {
        return 'condo'
    }

    if(num % 5 === 0) {
        return 'vive'
    }

    return num
} 


const print = (num) => {
    for(let i = 1; i < num; i++) {
        console.log(`${challenge(i)}`)
    }
}

print(101)