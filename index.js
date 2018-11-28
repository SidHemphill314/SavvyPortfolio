import Footer from './src/Footer';
import Content from './src/Content';
import greet from './src/Greet';
import Header from './src/Header';
import Navigation from './src/Navigation';

var state = {
    'title': "Welcome to My SavvyCoder Site"
};

document.querySelector('#root').innerHTML += `
    ${Footer()}
    ${Content()}
    ${Navigation()}
    ${Header(state)}

`;
greet();