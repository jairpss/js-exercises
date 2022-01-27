// Algorithm: Consolidating Partitions

// There is a computer with a hard drive that is partitioned into several partitions. You'd like to move the data around so 
//that the fewest number if partitions are being used. Given how much space is currently being used on each partition, 
//as well as the total capacity if each, what is the minimum number of partition needed to hold all the data if you move it around optimally.

// For example, let's say there are n= 5 partitions, where currently used is usedSpace = [3,2,1,3,1] , and total capacity is totalSpace = [3,5,3,5,5], 
//you can move that data around like so:
// a) move data from 1st partition to 2nd partition and 1st partition will be empty 
//b) move data of 3rd and 5th partition to 4th partition and 3rd and 5th will be free.

//CODE

function minPartitions(used, totalCapacity) { //used y totalCapacity son arrays
    let total = used.reduce((acc, e) => acc + e); //se suman los elementos del array used con reduce y se almacena en total = [13]
    let x = totalCapacity.sort((x, y) => y - x); //los num de el segundo array se acomodan en orden de mayor a menor, se almacena en X = [7,3,3,3]
    let res = 0; //inicializamos res a 0

    for(let i = 0; i < x.length; i++){ //x.length = 4
        if(total > x[i]) {  //total=13 , x[i]=7  | 2do ciclo: total=6 , x[i]=3  | 3er ciclo: total=3 , x[i]=3  | 4to ciclo: total=0 , x[i]=3 por lo que es false y salta a else
            total = total - x[i]; //total=13 -7 = 6  |   total=6 - 3 -> total=3      | total=3 - 3 -> total=0   
            res++; // res=1   |   res=2   | res=3 
        } else if (total > 0) { //  total=0, no es mayor a 0   por lo que es false y salta a else y se detiene el ciclo
            res++; // 
            break;
        } else {
            break;
        }
    }
    return res; //res=3
    
}

console.log(minPartitions([3,4,4,2], [3,3,7,3]));
