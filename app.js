"use strict";
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "Ey5bj0ls019sN401lqbVmU0aZ1kINfSD";

const searchBtn = document.querySelector("#submitSearch");
const inputSearch = document.querySelector("#searchWord");
const gifImg = document.querySelector("#imageContainer > img");
const feedbackPara = document.querySelector("#feedback");

searchBtn.addEventListener("click", (event) => {
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${inputSearch.value}`)
    .then((res) => {
       return res.json()
    })
    .then((body) => {
        console.log(body);
        gifImg.src = body.data.images.original.url;
        inputSearch.value = "";
        feedbackPara.textContent = "";
    })
    .catch((err) => {
        feedbackPara.textContent = err.message;
        console.log(err);
    })
});