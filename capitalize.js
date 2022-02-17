//This is a Function that capitalize only the first 
//letter of each word in a string

const Capitalize = (str) => {

    const sentence = str.split(" ");

    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1).toLowerCase();
    }

    return sentence.join(" ");
} 

console.log(Capitalize('jaiR paRtida sAntana'));