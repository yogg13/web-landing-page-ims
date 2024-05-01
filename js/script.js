const nav_list = document.querySelector(".nav-list");
const nav_icon = document.querySelector(".nav-icon");

nav_icon.addEventListener("click", function() {
    nav_list.classList.toggle("menu-nav-active");
})

