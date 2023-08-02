function helloWorld(){
    console.log('hello world');
}

helloWorld();
helloWorld();
helloWorld();
helloWorld();
helloWorld();

//arguments

function greet(firstName){
    console.log(`Hi ${firstName}`);
}

greet('Vinidu');

//Multiple arguments

function greetFullName(firstName, lastName){
    console.log(`Good morning ${firstName} ${lastName}`)
}

greetFullName('Vinidu','Minsara');

function repeat(string, numTimes){
    for(let i = 0; i < numTimes; i++){
        console.log(string);
    }
}

repeat('Hello',3);

//return keyword

function add(firstNum, secondNum){
    return firstNum + secondNum;
}

console.log(add(50, 7));