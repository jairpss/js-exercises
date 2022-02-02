/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 *  An array of numbers.
 */
 const modifyArray = (arr) => {

     const newArr = arr.map(item => item = (item % 2 === 0) ? item * 2 : item * 3);
    
     return console.log(newArr)
 }

 modifyArray([1,2,3,4,5])




 //This func do the same as above arr.map
// function arr2(item) {
//     if (item % 2 === 0) {
//         item = item * 2
//     } else {
//         item = item * 3
//     }

//     return console.log(item)
// }

// arr2(2)