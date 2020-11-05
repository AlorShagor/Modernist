$('document').ready(function(){
//  Data Aos 
AOS.init()


// Slider 
$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplaySpeed:1500,
    smartSpeed:1000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

})