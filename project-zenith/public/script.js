async function loadPosts(){

const res = await fetch("/api/posts");

const posts = await res.json();

const container = document.getElementById("blog-container");

container.innerHTML = posts.map(post => `

<div class="post-card">

<h2>${post.title}</h2>

<p>${post.content}</p>

<button onclick="deletePost('${post._id}')">Delete</button>

</div>

`).join("");

}

async function createPost(){

const title = document.getElementById("title").value;
const category = document.getElementById("category").value;
const content = document.getElementById("content").value;

await fetch("/api/posts",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({title,category,content})

});

loadPosts();

}

async function deletePost(id){

await fetch("/api/posts/"+id,{
method:"DELETE"
});

loadPosts();

}

window.onload = loadPosts;


document.getElementById("toggle").onclick = () => {
document.body.classList.toggle("dark");
}