let open = document.getElementById("open");
let close = document.getElementById("close");
let modal_container = document.getElementById("modal_container");


open.addEventListener("click", () => {
    modal_container.classList.add("show");
})

close.addEventListener("click", () => {
    modal_container.classList.remove("show");
})