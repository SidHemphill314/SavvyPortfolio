import { Blog, Home, Contact, Projects } from './Screens/Home';
import { html } from 'lit-html';
// import * Screens from './Screens/Home'
var Screens = {
    'home': Home,
    'blog': Blog,
    'Contact': Contact,
    'Projects': Projects
};

export default function Content(state){
    return html`
<div id="content">
<div class="container">
    ${Screens[state.active](state)}
    </div>
</div>
` ;
}