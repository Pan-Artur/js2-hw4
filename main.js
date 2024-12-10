const btnEl = document.querySelector("#btn");
const itemArr = document.querySelectorAll(".item");

const buttonClick = () => {
    btnEl.classList.toggle("clicked-button");
    itemArr.forEach((itemEl) => {
        itemEl.classList.toggle("is-hidden");
    }); 
};

btnEl.addEventListener("click", buttonClick);