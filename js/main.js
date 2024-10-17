// BOTON HAMBURGUESA // 

const nav= document.querySelector("#nav");
const abrir= document.querySelector("#abrir");
const cerrar= document.querySelector("#cerrar");

abrir.addEventListener("click", ()=> {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})



// CARRUSEL


var swiper = new Swiper (".slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop:true,
    centerSlide: 'true',
    gragCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        2560: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
});

