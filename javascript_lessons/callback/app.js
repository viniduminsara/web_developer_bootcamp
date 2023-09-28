// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 4000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'green';
// }, 6000);


//step 2
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//         }, 2000);
//     }, 2000);
// }, 2000);


//step 3
function changeColor(color, delay, next){
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        next();
    }, delay);
}

changeColor('yellow', 1000, () => {
    changeColor('orange', 1000, () => {
        changeColor('red', 1000, () => {
    
        });
    });
});



