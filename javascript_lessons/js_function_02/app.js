// scope - functions

// function hello(){
//     let message = 'Hello World'; // <----
// }

// console.log(message); //error - not defiend

// scope - code block

// let one = 5;
// if(one > 0){
//     let msg = 'hi';
// }

// console.log(msg);

//lexical scops

function bankRobbery(){
    const heros = ['spiderman','batman','superman'];

    function cryforhelp(){
        for(let hero of heros){
            console.log(hero);
        }
    }
    cryforhelp();
}

bankRobbery();

// function expression

const add = function (x, y){
    return x + y;
}

console.log(add(3,4)); // not using function name

// higher order function

function callTwice(func){
    func();
    func();
}

function rollDice(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDice);

// return function

function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

makeBetweenFunc(100,200);

