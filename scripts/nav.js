/* 
Script document for navigation menu
*/

// hambergur menu and animation
let navBtn = document.querySelector('#nav-btn');
let navbar = document.querySelector('.header .navbar');

navBtn.onclick = () => {
    navBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// languages
function languages() {
    var x = document.getElementById("langChoices");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}