console.log([2] === [2]);  //false

console.log([] === []);   //false



let first = [1,2,3];

let second = [1,2,3];

console.log(first === second); // false

// * js not looking elemnts of the array. only compare reference

let third = [4,5,6,7];

let forth = third;

console.log(forth === third);  //true