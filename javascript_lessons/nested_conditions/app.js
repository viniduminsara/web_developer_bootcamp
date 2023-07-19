const password = prompt('Input your password');

if(password.length >= 6){
    
    if(password.indexOf(" ") === -1){
        alert("Valid password");
    }else{
        alert('password has spaces');
    }

}else {
    alert('password is too short');
}