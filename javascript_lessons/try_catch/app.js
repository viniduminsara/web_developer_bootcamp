try {
    hello.toUpperCase();
} catch {
    console.log('error');
}

function show(msg){
    try {
        console.log(msg.repeat(3)); 
    } catch (error) {
        console.log('Please enter string next time');
    }
}

show(3434);