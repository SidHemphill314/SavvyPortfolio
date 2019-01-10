import { html } from 'lit-html';
export default function Post(post){
    return html`
    <div class = "posts">
    <h2>${post.id}. ${post.title}</h2>
    <p>${post.body}</p>
    </div> 
    `;
}

