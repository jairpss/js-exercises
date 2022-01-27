//Hackerrank problem

var arr = [1,2,3,4,5];

function rotateLeft(arr, pos){
    for(var i = 0; i < pos; i++){
      var first = arr.shift();
      arr.push(first);
    }
    return arr;
}

console.log(rotateLeft(arr, 3));

// A left rotation operation on an array shifts each of the arrays elements  unit to the left. 
//For example, if  left rotations are performed on array , then the array would become . 
//Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. 
//Return the updated array to be printed as a single line of space-separated integers.