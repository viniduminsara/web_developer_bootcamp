
//fake request with callback
function fakeRequestCallBack(url, success, failure){
    let delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000){
            failure('Connection Timeout!');
        }else{
            success(`Here your fake data from ${url}`);
        }
    }, delay);
}


// fakeRequestCallBack('hello.com/home', (response) => {
//     console.log('recievied the response');
//     console.log(response);
//     fakeRequestCallBack('hello.com/page2', (response) => {
//         console.log('recievied the response');
//         console.log(response);
//         fakeRequestCallBack('hello.com/page3', (response) => {
//             console.log('recievied the response');
//             console.log(response);
//         }, (err) => {
//             console.log('recievied the error - page3');
//             console.log(err);
//         });
//     }, (err) => {
//         console.log('recievied the error - page2');
//         console.log(err);
//     });
// }, (err) => {
//     console.log('recievied the error - homepage');
//     console.log(err);
// });


// fake request with promise
function fakeRequestPromise(url){
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject('Connection Timeout!');
            }else{
                resolve(`Here your fake data from ${url}`);
            }
        }, delay);
    })
}

// fakeRequestPromise('hi.com/page1')
//     .then((response) => {
//         console.log(response);
//         fakeRequestPromise('hi.com/page2')
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     })
//     .catch((err) => {
//         console.error(err);
//     });

fakeRequestPromise('hi.com/page1')
    .then((response) => {
        console.log(response);
        return fakeRequestPromise('hi.com/page2');
    })
    .then((response) => {
        console.log(response);
        return fakeRequestPromise('hi.com/page3');
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.error(err);
    })