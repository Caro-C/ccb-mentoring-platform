$(document).ready(function(){
  $navBar = $('.nav-bar');
  $toggleCollapse = $('.toggle-collapse');
  /** click event on toggle menue **/
  $toggleCollapse.click(function(){
    $navBar.toggleClass('collapse');
  });
  /** owl carousel **/
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            autoplay: false
        },
        630:{
            items:2,
            autoplay: false
        },
        890:{
            items:2,
            loop:true,
            autoplay: false
        }
    }
});

$('.nav-bar a,.home,.move-up').click(function(){
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});


});
