import { capitalize } from 'lodash';

function buildLinks(links){
    var links = '';
    var list = '';
    
    for(let i = 0; i < links.length; i++){
        if(links[i] !== 'home'){
            link = links[i];
        }
        list += `
    <li> 
    <a href="/${links[i]}" data-navigo>${capitalize(links[i])}</a>
    </li>
    `;
    }

    return list;
}

export default function Navigation(state){
    return `
<div id="navigation">
        <div class="container">
        ${buildLinks(state[state.active].links)}
        </div>
    </div>
    `;
}


