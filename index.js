import Footer from './src/Footer';
import Content from './src/Content';
import greet from './src/Greet';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import Store from './src/Store';
import { html, render} from 'lit-html';
import { addListener } from 'cluster';

var router = new Navigo(window.location.origin);


var State = {
    'posts': [],
    'active': 'Home',
    'home': {
        'title': 'Hello Everyone! Welcome To My Savvy Coders Portfolio Site!',
        'links': [ 'blog', 'Contact', 'projects' ]
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


var store = new Store(State);
var root = document.querySelector('#root');

function handleNavigation(params){
    store.dispatch((state) => {
        state.active = params.page;

        return state;
    });

}

function App(state) {
    return html ` 
    ${Navigation(State)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}

    `;
}

function start(state){
    render(App(state), root);
}
/*
function render(state){
    root.innerHTML = `
    ${Navigation(State)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}

   `;

    greet();

    router.updatePageLinks();
}
*/
store.addListener(start);
store.addListener() => router.updatePageLinks());

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

fetch('https://jsonplaceholder.typicode.com/')
    .then((response) => response.json())
    .then((posts) => {
        store.dispatch((state) => {
            state.posts = posts;

            return state;
        }));
    });