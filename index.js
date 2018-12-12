import Footer from './src/Footer';
import Content from './src/Content';
import greet from './src/Greet';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';

var router = new Navigo(window.location.origin);


var State = {
    'active': 'Home',
    'Home': {
        'title': 'Hello Everyone! Welcome To My Savvy Coders Portfolio Site!',
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

function handleNavigation(params){
    console.log(params.page);
    // event.preventDefault();
    State.active = params.page;
    // State.active = event.target.textContent;
    // eslint-disable-next-line no-use-before-define
    render(State);
}


function render(state){
    // var links;

    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
   `;

    greet();

    router.updatePageLinks();

    
    /* links = document.querySelectorAll('#navigation a');
    for(let i = 0; i < links.lenght; i ++){
        links[i].addEventListener(
            'click',handleNavigation
        );
    }*/
}

// render(State);

router.on
    .on('/:page', handleNavigation)
    .on('/',() => handleNavigation({ 'page': 'home' }))
    .resolve();
/* State vs state

State in the proper case is used as a variable to tell us what to render.  state is a parameter to the function*/
