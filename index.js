import Footer from './src/Footer';
import Content from './src/Content';
import greet from './src/Greet';
import Header from './src/Header';
import Navigation from './src/Navigation';

var links;
var State = {
    'active': 'Home',
    'Home': {
        'title': 'Hey Ball Bags',
        'links': [ 'blog','Contact','projects' ]
    },
    'blog': {
        'title': 'My Blog',
        'links': [ 'Home', 'Contact', 'projects' ]
    },

    'Contact': {
        'title': 'My Contact',
        'links': [ 'Home', 'blog', 'projects' ]
    },

    'projects': {
        'title': 'My Projects Page',
        'links': [ 'Home', 'blog', 'Contact' ]
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    // pull the compont name from the text in the anchor tag
    event.preventDefault();
    console.log(event.target.activeTextContent);


    State.active = event.target.textContent;

render(State); //eslint-disable-line
}


function render(state){
    root.innerHTML =
    `
    ${Navigation()}
    ${Header(state)}
    ${Content()}
    ${Footer()}
   
`;

    greet();

    
    links = document.querySelectorAll('#navigation a');
    for(let i = 0; i < links.lenght; i ++){
        links[i].addEventListener(
            'click',handleNavigation
        );
    }
}
render(State);