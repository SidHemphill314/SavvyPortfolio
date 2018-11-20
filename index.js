var userName = prompt('What is your name!?');

var greet = function greet(){
    if(!userName){}
    prompt('What is your damn name?');


    if(userName === ''){
        greet();
    }
 else{
        alert('Hello ' + userName);
    }
};

greet();