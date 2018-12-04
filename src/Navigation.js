export default function Navigation(state){
    var links = state[state.active].links;
    var list = '';

for(let i = 0; i < links.length, i++) {
    list += `
    <li> 
    <a href="#">${links[i]}</a>
    </li>
    `;
    console.log(list);

}
    return `

<div id="navigation">
        <div class="container">
         ${list}
        </div>
    </div>
    `;
}