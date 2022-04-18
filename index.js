let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

async function fetchData(){
     const res = await fetch("https://api.quotable.io/random");
     const item = await res.json();
     quote.innerHTML = `"${item.content}"`;
     author.innerHTML = item.author;
}

window.addEventListener('load',fetchData);
document.querySelector(".btn").addEventListener("click", fetchData)