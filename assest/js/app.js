$(document).ready(function () {
    $('.bars').click(function () {
        $('nav').slideToggle(500)
    })
})

var swiper = new Swiper(".sweep", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var loder = document.getElementById('pre-loder');

window.addEventListener("load", function(){
    loder.style.display = "none";
})