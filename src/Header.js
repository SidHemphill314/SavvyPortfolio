import { html } from 'lit-html';

export default function Header(state){
    return html`
<div id="header">
<div class="container">
        <h1>${state[state.active].title}</h1>
        <h2>Hello, I'm Sidney Hemphill</h2>
    <img src=https://avatars1.githubusercontent.com/u/44593254?s=460&v=4 alt="We Family">
        </div>
    </div>
    `;
}