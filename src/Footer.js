import { html } from 'lit-html';
export default function Footer(){
    return html`
<div id="footer">
        <div class="container"></div>
        <i class="fas fa-phone"></i>
        <p>Here is a list of my contact informantion</p>

        <ul class="brand">

           
            <li style="font-weight: bold"><i class="fab fa-github"></i><a href="https://github.com/SidHemphill314">MyGitHub</a></li>
            <li><i class="fas fa-envelope-square"></i><a href="https://github.com/SidHemphill314">My Email</a></li>
            <li><i class="fab fa-facebook"></i><a href="https://www.facebook.com/sidney.hemphill.50">My Facebook</a></li>
        </ul>
    </div>

`;
}