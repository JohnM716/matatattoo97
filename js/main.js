/*MENU SHOW Y HIDDEN*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*MENU SHOW*/

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN*/

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*Galeria SWIPER*/
let swiper = new Swiper(".galeria__container", {
    cssMode: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
}); 

/*Galeria Full img*/
 const fullImgBox = document.getElementById("fullImgBox"),
 fullImg = document.getElementById("fullImg");

 function openFullImg(reference){
     fullImgBox.style.display = "flex";
     fullImg.src = reference;
 }
 function closeImg(){
    fullImgBox.style.display = "none";
 }


/*SHOW SCROLL ARRIBA*/ 
function scroll__arriba(){
    const scroll__arriba = document.getElementById('scroll-arriba');
    if(this.scrollY >= 560) scroll__arriba.classList.add('show-scroll'); else scroll__arriba.classList.remove('show-scroll')
}
window.addEventListener('scroll', scroll__arriba)

