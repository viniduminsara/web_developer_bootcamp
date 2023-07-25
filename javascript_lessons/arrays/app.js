const colors = ['Red','Blue','Green','Black'];

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

let reverse = colors.reverse();

console.log(reverse);

//copy of array

let temp = colors.slice();

console.log(temp);

// copy the array from index

console.log(colors.slice(1));

console.log(colors.slice(0,2)); //not include the ending index

