const fizzbuzz = (num) => {
    if(num === 0){
        return 0;
    }

    if(num % 3 === 0 && num % 5 === 0){
        return 'fizzbuzz';
    }

    if(num % 3 === 0){
        return 'fizz';
    }

    if(num % 5 === 0){
        return 'buzz';
    }

    return num;
}


const imprimir = (num) => {
    for(let i=0; i<num; i++){
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

imprimir(100);


