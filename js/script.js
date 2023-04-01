var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('active')
};

const sr = ScrollReveral ({
    distance: '40px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text',{delay:300, origin:'left'})
sr.reveal('.about,.services,.portfolio,.blog,.contact,.copyright',{delay:100, origin:'bottom'})