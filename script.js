const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generate = document.getElementById("generate")


const api_url="https://api.quotable.io/random";
async function getCode(url)
{
    const response= await fetch(url);
    var data= await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

 getCode(api_url);

 function tweet()
{
    window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}
