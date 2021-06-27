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

//Make FAQ Section interactive
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});

// Modal Box for booking Sessions
// Get the modal
var modal = document.querySelectorAll(".myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

// When the user clicks the button, open the modal
btn.forEach(function(btns, index){
btns.onclick = function() {
  modal[index].style.display = "block";
}
});

// When the user clicks on <span> (x), close the modal
span.forEach(function(spans, index){
spans.onclick = function() {
 modal[index].style.display = "none";
}
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
 modal.forEach(function(modals, index){
 if (event.target == modals) {
    modal[index].style.display = "none";
  }
 })
};


$(".style-calendly").on("click", function(){
       $(".modal").fadeOut();
});




// Register events in HTML with Plausible

// Handle link events - those that have data-analytics
let elements = document.querySelectorAll("a[data-analytics]");
registerAnalyticsEvents(elements, handleLinkEvent);

// Handle button form events - those that have data-analytics
elements = document.querySelectorAll("button[data-analytics]");
registerAnalyticsEvents(elements, handleFormEvent);

/**
* Iterate Elements and add event listener
*
* @param {NodeList} Array of elements
* @param {string} callback function name
*/
function registerAnalyticsEvents(elements, callback) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', callback);
        elements[i].addEventListener('auxclick', callback);
    }
}

/**
* Handle Link Events with plausible
* https://github.com/plausible/analytics/blob/e1bb4368460ebb3a0bb86151b143176797b686cc/tracker/src/plausible.js#L74
*
* @param {Event} click
*/
function handleLinkEvent(event) {
    var link = event.target;
    var middle = event.type == "auxclick" && event.which == 2;
    var click = event.type == "click";
    while (link && (typeof link.tagName == 'undefined' || link.tagName.toLowerCase() != 'a' || !link.href)) {
        link = link.parentNode;
    }

    if (middle || click)
        registerEvent(link.getAttribute('data-analytics'));

    // Delay navigation so that Plausible is notified of the click
    if (!link.target) {
        if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
            setTimeout(function () {
                location.href = link.href;
            }, 70);
            event.preventDefault();
        }
    }
}

/**
* Handle form button submit events with plausible
*
* @param {Event} click
*/
function handleFormEvent(event) {
    event.preventDefault();

    registerEvent(event.target.getAttribute('data-analytics'));

    setTimeout(function () {
        event.target.form.submit();
    }, 150);
}

/**
* Parse data and call plausible
* Using data attribute in html eg. data-analytics='"Register", {"props":{"plan":"Starter"}}'
*
* @param {sting} data - plausible event "Register", {"props":{"plan":"Starter"}}
*/
function registerEvent(data) {
    // break into array
    let attributes = data.split(/,(.+)/);

    // Parse it to object
    let events = [JSON.parse(attributes[0]), JSON.parse(attributes[1] || '{}')];

    plausible(...events);
}
