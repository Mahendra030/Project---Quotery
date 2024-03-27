// Nav-bar Toggler for small-width screen

const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");

menu.addEventListener("click", () => {
    navBar.classList.toggle("active");
})

// Quote Generator

var quoteList = ["The question isn't who is going to let me; it's who is going to stop me.","The most difficult thing is the decision to act, the rest is merely tenacity.", "The only person you are destined to become is the person you decide to be.","An unexamined life is not worth living.","Dream big and dare to fail.","You may be disappointed if you fail, but you are doomed if you don't try."];

const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");

var i = 0;
var lengthOfQuotes = quoteList.length;

btn.addEventListener("click", () => {
    if (i >= lengthOfQuotes) {
        i = 0;
    }
    quote.innerText = quoteList[i];
    i++;
})

// Blog Page Warning Generator

const blog = document.querySelector(".blog");

blog.addEventListener("click", () => {
    alert("The Blog page is not yet been deployed!");
})