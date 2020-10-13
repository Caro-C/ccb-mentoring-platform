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
    autoplaySpeed: 1500,
    autoplayTimeout: 2800,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
            autoplay: true
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

//Animations with Scroll scrollreveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
  origin: 'left',
  duration: 1500,
  distance: '25rem',
  delay: 200
});

sr.reveal('.animate-right',{
  origin: 'right',
  duration: 1500,
  distance: '25rem',
  delay: 200
});

sr.reveal('.animate-center',{
  duration: 1500,
  distance: '25rem',
  delay: 200
});

// Filters for mentors page

$(document).ready(function() {

  let $grid = $('.our-mentors-grid');
  let $items = $grid.children('.mentor-tile');
  let currentCat = 'all';
  let sidebar = [];
  let sortItems = (a,b) => {
    let an = a.getAttribute('data-order');
    let bn = b.getAttribute('data-order');

    if(an > bn) { return 1; }
    if(an < bn) { return -1; }
    return 0;
  }

  let filterItems = function() {
    let cat = this.getAttribute('data-category');
    let newSidebar = [];

    $('.button--is-active').toggleClass('button--is-active');
    $(`.filter-button[data-category*=${cat}]`).toggleClass('button--is-active');

    $grid.fadeOut( "slow", function() {

      sidebar.map((item) => $(item).appendTo($grid));

      if(cat === 'all') {
        $items.sort(sortItems).detach().appendTo($grid);
      } else {
        $(`.mentor-tile:not([data-category*=${cat}])`).each(function() {
          newSidebar.push($(this).detach());
        });
      }
      sidebar = newSidebar;
      currentCat = cat;
    }).fadeIn("slow");
  };

  // Handle the click on a category filter button
  $('.js-button-filter').click(filterItems);

});
