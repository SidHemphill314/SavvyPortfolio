var userName = prompt('What is your name?');

export default function greet(){
    var title = document.querySelector('h1');

    if(!userName){
        userName = prompt('What is your damn name!?');

        greet();
    }
    else{
        title.innerHTML += `, <em>${userName}</em>`;
    }
}
