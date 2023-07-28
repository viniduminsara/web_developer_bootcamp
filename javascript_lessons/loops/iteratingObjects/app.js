const mydata = {
    name : 'Vinidu',
    age : 18,
    address : 'Kalutara'
}

// use 'in' keyword in for of loop to iterate object

for(let data in mydata){
    console.log(`${data} : ${mydata[data]}`);
}

//get object keys as array

const key = Object.keys(mydata);
console.log(key);

//get object values as array

const values = Object.values(mydata);
console.log(values);

//get object key and values in nested array

const keys_values = Object.entries(mydata);
console.log(keys_values);

//use Object class to iterate object

for(let data of Object.values(mydata)){
    console.log(data);
}