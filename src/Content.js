import { Blog, Home, Contact, Projects } from './Screens/Home';
// import * Screens from './Screens/Home'
var Screens = {
    'home': Home,
    'blog': Blog,
    'Contact': Contact,
    'Projects': Projects
};

export default function Content(state){
    return `
<div id="content">
<div class="container">
    ${Screens[state.active]()}
    </div>
</div>
` ;
}