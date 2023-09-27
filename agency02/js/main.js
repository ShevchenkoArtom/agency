const body = document.querySelector(".body")
const burger = {
    btn: document.querySelector(".burger__btn"),
    list: document.querySelector(".header__list"),
    listItems: document.querySelectorAll(".header__list-link"),
}

// BURGER 
burger.btn.addEventListener("click", function(){
    burger.list.classList.toggle("show");
    burger.btn.classList.toggle("show");
    body.classList.toggle("scroll")
});

burger.listItems.forEach(element => {
    element.addEventListener("click", function() {
        burger.list.classList.remove("show");
        burger.btn.classList.remove("show");
        body.classList.remove("scroll");
    });
});