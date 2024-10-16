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
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

});