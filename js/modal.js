const modal = document.querySelector(".search-model");

const modalBtn = document.querySelector(".icon_search");

const modalCloseBtn = modal.querySelector(".search-close-switch");

const input = modal.querySelector("#search-input");

modalBtn.addEventListener("click", ()=> {
    modal.style.display = "block";
});

modalCloseBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
});

input.addEventListener("input", ()=>{
    console.log(input.value);
})