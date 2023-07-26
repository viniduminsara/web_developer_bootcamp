let maximum = parseInt(prompt('Enter the maximum number'));

while(!maximum){
    maximum = parseInt(prompt('Enter valid number for the maximum number'));
}

const hiddenNum = Math.floor(Math.random() * maximum + 1);

console.log(hiddenNum);

let guess = parseInt(prompt('Enter the guess number'));
let attemp = 0;

while(parseInt(guess) !== hiddenNum){
    if(guess === 'q'){
        break;
    }

    attemp++;
    
    if(guess > hiddenNum){
        alert('Too high guess!');
    }else if(guess < hiddenNum){
        alert('Too low guess!');
    }
    guess = prompt('Enter your new guess');
}

if(guess === 'q'){
    alert('You quit the game :(');
}else{
    alert(`You have win! You took ${attemp} guesses to find this`);
}
