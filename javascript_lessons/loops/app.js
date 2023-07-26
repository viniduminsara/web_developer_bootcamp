//for loop

for(let i = 0; i<=10 ; i++){
    console.log(i);
}

//iterating array by for loop

const animal = ['Dog','Cat','Lion','Tiger'];

for(let i = 0; i<=animal.length ; i++){
    console.log(animal[i]);
}

// nested loops
for(let i = 0 ; i<= 5; i++){
    console.log(`i is: ${i}`);
    for(let j = 1 ; j<=3 ; j++){
        console.log(`       j is: ${j}`);
    }
}

//nested loop for 2d arrau

const student = [
    ['Vinidu','Minsara','Rupasingha'],
    ['Ramika','Thulwath','Gurusingha'],
    ['Maneesha','Vimukthi','Rajapaksha']
]

for(let i = 0; i<student.length; i++){
    console.log("row "+i);
    for(let j = 0; j<student[i].length ; j++){
        console.log(student[i][j]);
    }
}

//while loop

let count = 0;
while(count < 10){
    console.log(count);
    count++;
}