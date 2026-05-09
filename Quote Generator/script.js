const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerText =  data.quote;
    author.innerText = data.author;
}

getQuote(api_url);
function x(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + " - " + author.innerText, "X window", "width=600, height=400");
}