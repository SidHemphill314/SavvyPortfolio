import Footer from './src/Footer';
import Content from './src/Content';
import Header from './src/Header';
import Navigation from './src/Navigation';

document.querySelector('#root').innerHTML += `
    ${Footer}
    ${Content}
    ${Navigation}
    ${Header}
    `;







/* var userName = prompt('What is your name!?') || 'Unknown User';
var title = document.querySelector('h1');
var greet = function greet(){
    if(!userName){
        //userName = prompt('What is your damn name?');


        greet();
    }
    else{
        // alert('Hello ' + userName);

        title.innerHTML +=  `, <em>${userName}</em>`;
    }
};

greet();


 */