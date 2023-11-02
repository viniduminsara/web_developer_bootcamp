function colorChange(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

// colorChange('red',2000)
//     .then((response) => {
//         console.log(response);
//         colorChange('orange', 2000)
//         .then((response) => {
//             console.log(response);
//             colorChange('yellow', 2000)
//             .then((response) => {
//                 console.log(response);
//             })
//         })
//     })

colorChange('red', 2000)
    .then(() => colorChange('orange', 2000))
    .then(() => colorChange('yellow', 2000))
    .then(() => colorChange('green', 2000))


    
    