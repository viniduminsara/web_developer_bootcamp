const colors = ['Red','Blue','Green'];

console.log(colors);

// add element to last of array

colors.push('black');

console.log(colors);

// remove last element

colors.pop();

console.log(colors);

// add element to begining of the array

colors.unshift('White');

console.log(colors);

// remove the first element

colors.shift();

console.log(colors);

// combine two arrays

const cats = ['Kitty','Browny'];

const dogs = ['Tommy','Whity'];

const all  = cats.concat(dogs);

console.log(all);

// find if element exists

colors.includes('Blue'); //true

// find the index of element

let index = colors.indexOf('Green');

console.log(index);

// reverse a array

