// Write a function:
// function solution(arr);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given arr = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given arr = [1, 2, 3], the function should return 4.
// Given arr = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array arr is an integer within the range [−1,000,000..1,000,000].

function solution(arr) {
    if(!arr) return 1
    arr.sort()

    if(arr[arr.length - 1] < 1) return 1

    const setArr = new Set(arr)
    let lengthArr = setArr.size

    for(let i = 1; i <= lengthArr; i++) {
        if (!setArr.has(i)) {
            return i
        }
    }

    return lengthArr + 1
}

console.log(solution([1,2,3]))