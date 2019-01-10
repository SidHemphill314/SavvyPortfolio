import { capitalize } from 'lodash';
import { html } from 'lit-html';

function buildLink(link){
    var href = '';

    if(link !== 'home'){
        href = link;
    }

    return html `
    <li> 
    <a href="/${href}" data-navigo>${capitalize(link)}</a>
    </li>
    `;
}

export default function Navigation(state){
    return html`
<div id="navigation">
        <div class="container">
        ${state[state.active].link.map(buildLink)}
        </div>
    </div>
    `;
}


