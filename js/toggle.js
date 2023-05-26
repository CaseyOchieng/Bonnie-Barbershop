//const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDown_menu = document.querySelector(".dropdown_menu");

toggleBtnIcon.onclick = () => {
    dropDown_menu.classList.toggle("open");
    const isOpen = dropDown_menu.classList.contains("open");
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
