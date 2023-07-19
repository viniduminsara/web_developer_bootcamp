let random = Math.floor(Math.random() * 10);

if(random <= 2){
    console.log(random + " is low");
}else if(random <= 5){
    console.log(random + " is average");
}else{
    console.log(random + " is high");
}

const age = prompt("Input Your age");

if(age <= 5){
    alert("You have free accesss :)");
}else if(age <= 10){
    alert("You have to pay $10 to access");
}else if(age <= 18){
    alert("You have to pay $20 to access")
}else{
    alert("You have to pay $50 to access")
}