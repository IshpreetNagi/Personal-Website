// Below is the actual Javascript code that allows for the navigation bar to function 
// and be interactable with the way it comes out the side and the way you could press 
// a button to allow to scroll back to the side out the way. 

// Below is also the code for the way the entire website scrolls down to the 
// bookmarked section you selected to go to through the navigation sidebar
// NOT MY CREATIONS, PROVIDED IN WEBSITE TEMPLATE

(function($jq) {
  $jq(document).ready(function() {

    // Closes the sidebar navigation menu
    $jq(".menu-toggle").click(function(e) {
      e.preventDefault();
      $jq("#sidebar-wrapper").toggleClass("active");
      $jq(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
      $jq(this).toggleClass("active");
    });

    // Smoothscroll script for how when something is selected through the navigation sidebar 
    // and it scrolls down to that bookmarked spot
    $jq(".smooth-scroll").click(function(e) {
      e.preventDefault();
      var dis = $jq(this),
        target = dis.attr("href"),
        offset = parseInt($jq(target).offset().top),
        header = $jq(".sidebar-nav");
      dis.addClass("active").parent().siblings().find(".smooth-scroll").removeClass("active");
      $jq('html,body').stop().animate({ scrollTop: offset }, 200);
      $jq(".menu-toggle").trigger("click");
    });

    // Closes the responsive sidebar menu when a scroll trigger link is clicked
    $jq('#sidebar-wrapper .js-scroll-trigger').click(function() {
      $jq("#sidebar-wrapper").removeClass("active");
      $jq(".menu-toggle").removeClass("active");
      $jq(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });
  });
})(jQuery)