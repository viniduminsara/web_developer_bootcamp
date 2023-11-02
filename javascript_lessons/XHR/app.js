

const req = new XMLHttpRequest();

req.onload = function(){
    console.log('loaded');
    let data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function(){
    console.log('error');
    console.log(this.responseText);
}

req.open('GET','https://echo.hoppscotch.io');
req.send();